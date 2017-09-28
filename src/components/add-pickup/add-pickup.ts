import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BookingPage } from '../../pages/booking/booking';

/**
 * Generated class for the AddPickupComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'add-pickup',
  templateUrl: 'add-pickup.html'
})
export class AddPickupComponent {
  navCtrl: any;
  @Input() items: any;
  @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    console.log('Hello AddPickupComponent Component');
  }

  gotoBooking(){
    this.navCtrl.push(BookingPage);
  }
}
