import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
/**
 * Generated class for the MovieInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'movie-info-page'
})
@Component({
  selector: 'page-movie-info',
  templateUrl: 'movie-info.html',
})
export class MovieInfoPage {

  movie: any = {};
  movie_id: any;

  imageApiUrl: string = 'https://image.tmdb.org/t/p/w500';
  imageDefaultUrl: string = 'assets/imgs/spinner.svg';
  imageErrorUrl: string = 'assets/imgs/image-not-found.png';

  constructor(public navCtrl: NavController, public navParams: NavParams, private movieProvider: MovieProvider) {
    this.movie_id = this.navParams.get('movie_id');
    this.FindMovie();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieInfoPage');
  }

  FindMovie() {
    this.movieProvider.GetMovie(this.movie_id).then((data: any) => {
      this.movie = data;
      this.movie.backdropUrl = this.imageApiUrl + data.backdrop_path;
      this.movie.posterUrl = this.imageApiUrl + data.poster_path;
    }).catch(() => {

    });
  }

}
