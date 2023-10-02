import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './comics.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';

const routes: Routes = [
  { path: '', component: ComicsComponent },
  { path: 'details/:id', component: ComicDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicsRoutingModule {}
