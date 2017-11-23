import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { Keyboard } from '@ionic-native/keyboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {

  movieList: Array<any> = [];

  imageApiUrl: string = 'https://image.tmdb.org/t/p/w500';
  imageDefaultUrl: string = 'assets/imgs/spinner.svg';
  imageErrorUrl: string = 'assets/imgs/image-not-found.png';

  flags: {
    isLoadingData: boolean,
    noResultsFound: boolean
  } = {
    isLoadingData: false,
    noResultsFound: false
  };

  constructor(public navCtrl: NavController, private movieProvider: MovieProvider, private keyboard: Keyboard) {

  }

  searchMovie(ev: any) {
    this.keyboard.close();
    let val = ev.target.value;
    if (!val || val.trim() == '')
      return false;

    this.flags.noResultsFound = false;
    this.flags.isLoadingData = true;
    this.movieList = [];

    this.movieProvider
      .SearchMovie(val)
      .then((data: any) => {
        this.flags.isLoadingData = false;
        if (!data.results || data.results.length == 0) {
          this.flags.noResultsFound = true;
          return false;
        }

        this.movieList = data.results.map((mov) => {
          mov.backdropUrl = this.imageApiUrl + mov.backdrop_path;
          mov.posterUrl = this.imageApiUrl + mov.poster_path;
          return mov;
        });
      },
      () => {
        this.flags.isLoadingData = false;
        this.flags.noResultsFound = true;
      });
  }


  MovieInfo($id: number) {
    this.navCtrl.push('movie-info-page', { movie_id: $id });
  }

}
