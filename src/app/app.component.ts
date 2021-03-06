import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';


import { AdministrateurHomePage } from '../pages/admin_space/administrateur-home/administrateur-home';
import { SplashScreenPage } from '../pages/common/splash-screen/splash-screen';
//import { ItemDetailsPageLogin } from '../pages/item-details-login/item-details-login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    //rootPage:any = AdministrateurHomePage;
    rootPage:any = SplashScreenPage;
    //rootPage:any = ItemDetailsPageLogin;
    
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
}
