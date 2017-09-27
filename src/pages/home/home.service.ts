import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HomeModel } from "./home.model";

/*
  Generated class for the HomeServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HomeServiceProvider {

  constructor(public http: Http) {
    console.log('Hello HomeServiceProvider Provider');
  }
  getHome(): Promise<HomeModel> {
    return this.http.get('./assets/json/home.json') 
      .toPromise()
      .then(response => response.json() as HomeModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
