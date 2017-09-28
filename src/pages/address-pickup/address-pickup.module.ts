import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddressPickupPage } from './address-pickup';

@NgModule({
  declarations: [
    AddressPickupPage,
  ],
  imports: [
    IonicPageModule.forChild(AddressPickupPage),
  ],
  exports: [
    AddressPickupPage
  ]
})
export class AddressPickupPageModule {}
