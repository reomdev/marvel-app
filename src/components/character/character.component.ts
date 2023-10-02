import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './character.component.html',
  styles: [
    '.character--card{background: transparent !important;color: #FFF;border:none;margin-top:1.2rem;&:hover{filter: drop-shadow(5px 5px 20px white) invert(1%)}};.card--title{margin-top:1.3rem;margin-bottom:1.1rem;};img{cursor:pointer;max-height:55vh;min-height:55vh}',
  ],
})
export class CharacterComponent implements OnInit {
  @Input() character: any;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.character = {
      ...this.character,
      thumbnail: `${this.character.thumbnail.path}.${this.character.thumbnail.extension}`,
    };
  }
  goToDetails() {
    this.router.navigateByUrl(`characters/details/${this.character.id}`);
  }
}
