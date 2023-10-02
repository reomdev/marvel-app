import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

const routes: Routes = [
  { path: '', component: CharactersComponent },
  { path: 'details/:id', component: CharacterDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
