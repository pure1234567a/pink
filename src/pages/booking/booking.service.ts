import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { BookingModel } from "./booking.model";

/*
  Generated class for the BookingServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BookingServiceProvider {

  constructor(public http: Http) {
    console.log('Hello BookingServiceProvider Provider');
  }
  getBooking(): Promise<BookingModel> {
    return this.http.get('./assets/json/booking.json')
      .toPromise()
      .then(response => response.json() as BookingModel)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
