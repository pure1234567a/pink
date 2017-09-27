import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabnavPage } from './tabnav';
import { HomePage } from '../home/home';

@NgModule({
  declarations: [
    TabnavPage,
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(TabnavPage),
  ]
})
export class TabnavPageModule {}
