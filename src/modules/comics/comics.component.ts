import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/core/services/marvel/marvel.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
})
export class ComicsComponent implements OnInit {
  constructor(private marvelService: MarvelService) {}
  comics?: Array<any>;
  loading = true;

  ngOnInit(): void {
    this.getComics();
  }

  getComics() {
    this.marvelService.getComics().subscribe({
      next: (value: any) => {
        this.loading = false;
        if(value.code === 200){
          this.comics = value.data.results;
        }
        this.loading = false;
      },
      error: (error: any) => {
        this.loading = false;
        // console.log(error);
      },
    });
  }
}
