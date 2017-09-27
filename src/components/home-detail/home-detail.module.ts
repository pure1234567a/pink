import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HomeDetailComponent } from './home-detail';

@NgModule({
  declarations: [
    HomeDetailComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    HomeDetailComponent
  ]
})
export class HomeDetailComponentModule {}
