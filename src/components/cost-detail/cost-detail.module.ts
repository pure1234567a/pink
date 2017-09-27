import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CostDetailComponent } from './cost-detail';

@NgModule({
  declarations: [
    CostDetailComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    CostDetailComponent
  ]
})
export class CostDetailComponentModule {}
