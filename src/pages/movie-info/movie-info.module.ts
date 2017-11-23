import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieInfoPage } from './movie-info';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MovieProvider } from '../../providers/movie/movie';

@NgModule({
  declarations: [
    MovieInfoPage,
  ],
  imports: [
    LazyLoadImageModule,
    IonicPageModule.forChild(MovieInfoPage),
  ],
  providers: [
    MovieProvider
  ],
  exports: [
    MovieInfoPage
  ]
})
export class MovieInfoPageModule { }
