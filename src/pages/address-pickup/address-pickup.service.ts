import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AddressPickupModel } from "./address-pickup.model";

/*
  Generated class for the AddressPickupServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AddressPickupServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AddressPickupServiceProvider Provider');
  }
  getAddressPickup(): Promise<AddressPickupModel> {
    return this.http.get('./assets/json/addresspickup.json')
      .toPromise()
      .then(response => response.json() as AddressPickupModel)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
