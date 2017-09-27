import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeServiceProvider } from "./home.service";
import { HomeModel } from "./home.model";
import { BookingPage } from '../booking/booking';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  home: HomeModel = new HomeModel();

  constructor(public navCtrl: NavController, public navParams: NavParams,public homeServiceProvider:HomeServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.getHomeData();
  }
  getHomeData() {
    this.homeServiceProvider.getHome().then((data) => {
      this.home = data; ///////////////////// บรรทัดนี้ตอนแรกยังไม่มี มาเขียนเพิ่มตอนที่จะไปโชว์ที่หน้าจอ ตามขั้นตอนด้านล่าง
      console.log(data);
    },(error) => {
      console.error(error);
    });
  }
  gotoBooking(){
    this.navCtrl.push(BookingPage);
  }

}
