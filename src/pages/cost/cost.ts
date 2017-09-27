import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CostServiceProvider } from "./cost.service";
import { CostModel } from "./cost.model";
/**
 * Generated class for the CostPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cost',
  templateUrl: 'cost.html',
})
export class CostPage {
  price: string = 'lamunphan';
  cost:CostModel = new CostModel();

  constructor(public navCtrl: NavController, public navParams: NavParams, public costServiceProvider: CostServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CostPage');
    this.getCostData();
  }
  getCostData() {
    this.costServiceProvider.getCost().then((data) => {
      this.cost = data;
      console.log(data);
    }, (err) => {
      console.error(err);
    });

  }

}
