import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private apiUrl: string = 'https://api.themoviedb.org/3';
  private apiKey: string = '1c256e6b722d005e6ec151d5e1c4b3a5';
  private language: string = 'es-ES';

  constructor(public http: HttpClient) {

  }

  SearchMovie($query: string) {
    return new Promise(resolve => {
      let Params = new HttpParams();

      Params = Params.append('api_key', this.apiKey);
      Params = Params.append('language', this.language);
      Params = Params.append('query', $query);

      this.http.get(this.apiUrl + '/search/movie', { params: Params }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  GetMovie($id: number) {
    return new Promise(resolve => {
      let Params = new HttpParams();

      Params = Params.append('api_key', this.apiKey);
      Params = Params.append('language', this.language);

      this.http.get(this.apiUrl + '/movie/' + $id, { params: Params }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


}
