import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  goBack(){
    this.navCtrl.pop();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  initializeItems(){
    this.items = [
      'Bangkok',
      'Ranong',
      'Rayong',
      'Yala',
      'Udon',
      'Suradthani',
      'Sukhothai',
      'Ayudthaya',
      'Kampangpetch',
      'Chainad',
      'Konkhan'
    ]
  }
}
