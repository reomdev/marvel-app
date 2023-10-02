import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsComponent } from './comics.component';
import { ComicsRoutingModule } from './comics-routing.module';
import { ComicComponent } from 'src/components/comic/comic.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';
import { LoadingComponent } from 'src/components/loading/loading.component';

@NgModule({
  declarations: [ComicsComponent, ComicDetailsComponent],
  imports: [CommonModule, ComicsRoutingModule, ComicComponent, LoadingComponent],
})
export class ComicsModule {}
