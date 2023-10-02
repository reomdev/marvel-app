import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/core/services/marvel/marvel.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  constructor(private marvelService: MarvelService) {}
  characters?: Array<any>;
  loading = true;

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.marvelService.getCharacters().subscribe({
      next: (value: any) => {
        // console.log(value);
        if(value.code == 200){
          this.characters = value.data.results;
          this.loading = false;
        }
      },
      error: (error: any) => {
        // console.log(error);
        this.loading = false;
      },
    });
  }
}
