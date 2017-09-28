import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingProfileServiceProvider } from "./setting-profile.service";
import { settingProfileModel } from "./setting-profile.model";
/**
 * Generated class for the SettingProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-setting-profile',
  templateUrl: 'setting-profile.html',
})
export class SettingProfilePage {
  settingProfile : settingProfileModel = new settingProfileModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public settingProfileServiceProvider : SettingProfileServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingProfilePage');
    this.getSettingProfileData();
  }
  getSettingProfileData() {
    this.settingProfileServiceProvider.getSettingProfile().then((data) => {
      this.settingProfile = data; 
      console.log(data);
    },(error) => {
      console.error(error);
    });
  }
}
