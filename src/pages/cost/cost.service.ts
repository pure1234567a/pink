import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { CostModel } from './cost.model';

/*
  Generated class for the CostServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CostServiceProvider {

  constructor(public http: Http) {
    console.log('Hello CostServiceProvider Provider');
  }
  getCost(): Promise<CostModel> {
    return this.http.get('./assets/json/cost.json')
      .toPromise()
      .then(response => response.json() as CostModel)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
