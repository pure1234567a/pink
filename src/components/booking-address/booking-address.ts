import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the BookingAddressComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'booking-address',
  templateUrl: 'booking-address.html'
})
export class BookingAddressComponent {
  @Input() items:any;
  @Output() itemClicked:EventEmitter<any> = new EventEmitter<any>();

  text: string;

  constructor() {
    console.log('Hello BookingAddressComponent Component');
    this.text = 'Hello World';
  }

}
