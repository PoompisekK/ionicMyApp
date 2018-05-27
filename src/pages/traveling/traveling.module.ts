import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelingPage } from './traveling';

@NgModule({
  declarations: [
    TravelingPage,
  ],
  imports: [
    IonicPageModule.forChild(TravelingPage),
  ],
})
export class TravelingPageModule {}
