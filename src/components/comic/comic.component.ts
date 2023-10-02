import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-comic',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './comic.component.html',
  styles: [
    '.card--comics {border: none;cursor: pointer;background:transparent;color:white;&:hover{filter: drop-shadow(5px 5px 15px var(--primary-color)) invert(10%)}}',
    '.comics-col-6 {height: 58vh}',
    '.card-comics--title {font-weight: bold}',
  ],
})
export class ComicComponent implements OnInit {
  @Input() comic: any;
  constructor(private router: Router) {}
  ngOnInit() {
    this.comic = {
      ...this.comic,
      thumbnail: `${this.comic.thumbnail.path}.${this.comic.thumbnail.extension}`,
    };
  }
  goToDetails() {
    this.router.navigateByUrl(`comics/details/${this.comic.id}`);
  }
}
