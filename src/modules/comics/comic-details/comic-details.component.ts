import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelService } from 'src/core/services/marvel/marvel.service';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.scss'],
})
export class ComicDetailsComponent implements OnInit {
  comic: any;
  loading : boolean = true;
  arrow_left = '../../../assets/icons/arrow_left.svg';
  constructor(
    private route: ActivatedRoute,
    private marvelService: MarvelService,
    private router: Router,
    private location : Location,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: any) => {
      this.getComicDetails(data.id);
    });
  }

  getComicDetails(id: number): void {
    this.marvelService.getComicsById(id).subscribe({
      next: data => {
        // console.log(data);
        this.loading = false;
        if (data.code === 200) {
          this.comic = data.data.results[0];
          this.comic = {
            ...this.comic,
            thumbnail: `${this.comic.thumbnail.path}.${this.comic.thumbnail.extension}`,
          };
        }
      },
      error: error => {
        // console.log(error);
        this.loading = false;
      },
    });
  }

  goCharacterDetails(url: string) {
    const id = url.split('/v1')[1].split('/')[3];
    console.log(id);
    this.router.navigateByUrl(`characters/details/${id}`);
  }
  
  goBack(){
    this.location.back();
  }
}
