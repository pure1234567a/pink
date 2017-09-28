import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddressPickupServiceProvider } from "./address-pickup.service";
import { AddressPickupModel } from "./address-pickup.model";


/**
 * Generated class for the AddressPickupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-address-pickup',
  templateUrl: 'address-pickup.html',
})
export class AddressPickupPage {
  addressPickup: AddressPickupModel = new AddressPickupModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public addressPickupServiceProvider: AddressPickupServiceProvider) {
    this.getAddressPickupData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressPickupPage');
  }
  getAddressPickupData() {
    this.addressPickupServiceProvider.getAddressPickup().then((data) => {
      this.addressPickup = data;
      console.log(data);
    }, (err) => {
      console.error(err);
    });

  }

}
