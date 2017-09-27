import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { BookingPage } from '../booking/booking';
import { CostPage } from '../cost/cost';
import { StatusPage } from '../status/status';
import { MorePage } from '../more/more';

/**
 * Generated class for the TabnavPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-tabnav',
  templateUrl: 'tabnav.html'
})
@IonicPage()
export class TabnavPage {

  homeRoot = HomePage
  bookingRoot = BookingPage
  costRoot = CostPage
  statusRoot = StatusPage
  moreRoot = MorePage


  constructor(public navCtrl: NavController) {}

}
