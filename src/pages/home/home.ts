import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goTravel(){
    this.navCtrl.push("TravelPage");
  }

  goSearching(){
    this.navCtrl.push("SearchPage");
  }

  goCalculator(){
    this.navCtrl.push("CalculatorPage");
  }

}
