import { Component } from '@angular/core';
import {App, NavController} from 'ionic-angular';
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private app:App,
  ) {

  }

  logout() {
    this.app.getRootNav().setRoot(LoginPage);
  }

}
