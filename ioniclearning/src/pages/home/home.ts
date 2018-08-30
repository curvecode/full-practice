import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1: any;
  tab2: any
  constructor(public navCtrl: NavController) {
    this.tab1 = SearchPage;
    this.tab2 = ProfilePage;
  }

}
