import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { SettingProfilePage } from '../setting-profile/setting-profile';
import { WalkthroughPage } from '../walkthrough/walkthrough';

/**
 * Generated class for the MorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app : App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }
  
  gotoSettingProfile(){
    this.navCtrl.push(SettingProfilePage);
  }
  onLogOut() {
    window.localStorage.clear();
    this.app.getRootNav().setRoot(WalkthroughPage);
  }
}
