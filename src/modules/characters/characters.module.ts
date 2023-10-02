import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterComponent } from 'src/components/character/character.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { ComicComponent } from 'src/components/comic/comic.component';
import { LoadingComponent } from 'src/components/loading/loading.component';

@NgModule({
  declarations: [CharactersComponent, CharacterDetailsComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    CharacterComponent,
    ComicComponent,
    LoadingComponent
  ],
})
export class CharactersModule {}
