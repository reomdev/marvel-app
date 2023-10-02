import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CharacterComponent } from '../character/character.component';
import { ComicComponent } from '../comic/comic.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, RouterModule, CharacterComponent, ComicComponent],
})
export class HomeComponent {
  constructor(private router: Router) {}
  comic_potrait = {
    id: 82970,
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada',
      extension: 'jpg',
    },
  };
  comics: Array<any> = [
    {
      id: 1689,
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/30/4bc64df4105b9',
        extension: 'jpg',
      },
    },
    {
      id: 1158,
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/f0/4bc6670c80007',
        extension: 'jpg',
      },
    },
    {
      id: 1590,
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/b0/4c7d666c0e58a',
        extension: 'jpg',
      },
    },
    {
      id: 1332,
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239',
        extension: 'jpg',
      },
    },
  ];
  characters: Array<any> = [
    {
      id: 1009368,
      name: 'Iron Man',
      description: `Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.`,
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55',
        extension: 'jpg',
      },
    },
    {
      id: 1009220,
      name: 'Captain America',
      description: `Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.`,
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087',
        extension: 'jpg',
      },
    },
    {
      id: 1009189,
      name: 'Black Widow',
      description: 'Natasha Romanoff, the dangerous super-spy.',
      thumbnail: {
        path: 'https://i.annihil.us/u/prod/marvel/i/mg/f/30/50fecad1f395b',
        extension: 'jpg',
      },
    },
    {
      id: 1009351,
      name: 'Hulk',
      description: `Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.`,
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0',
        extension: 'jpg',
      },
    },
    {
      id: 1009664,
      name: 'Thor',
      description: `As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.`,
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350',
        extension: 'jpg',
      },
    },
    {
      id: 1009187,
      name: 'Black Panther',
      description: 'T’Challa, King of Wakanda and fierce warrior.',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/60/5261a80a67e7d',
        extension: 'jpg',
      },
    },
  ];
  statement = '‘With great power comes great responsibility.’ – Spider-Man';
  goTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
