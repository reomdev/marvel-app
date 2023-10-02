import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MarvelService } from 'src/core/services/marvel/marvel.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  character: any;
  arrow_left = '../../../assets/icons/arrow_left.svg';
  loading : boolean = true;

  constructor(
    private route: ActivatedRoute,
    private marvelService: MarvelService,
    private router: Router,
    private location : Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: any) => {
      this.getCharacterDetails(data.id);
    });
  }

  getCharacterDetails(id: number): void {
    this.marvelService.getCharctersById(id).subscribe({
      next: data => {
        console.log(data);
        this.loading = false;
        if (data.code === 200) {
          this.character = data.data.results[0];
          this.character = {
            ...this.character,
            thumbnail: `${this.character.thumbnail.path}.${this.character.thumbnail.extension}`,
          };
        }
      },
      error: error => {
        this.loading = false;
        console.log(error);
      },
    });
  }

  goComicsDetails(url : string) {
    const id = url.split('/v1')[1].split('/')[3];
    console.log(id);
    this.router.navigateByUrl(`comics/details/${id}`);
  }
  
  goBack(){
    this.location.back();
  }
}
