import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
 
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router:Router,
    private nativeStorage: NativeStorage,
    public navCtrl:NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // alert('initializeApp');
      let status=localStorage.getItem("isLogin");
      if(status=="true"){
        // alert('status == true');
        this.router.navigate(['/onboaring'], { replaceUrl: true })
      }else{
        // alert('else');
        //this.router.navigate(['/tabs/tabs/home'], { replaceUrl: true })
        this.router.navigate(['/onboaring'], { replaceUrl: true })
      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    // this.platform.ready().then(() => {
    //   //Here we will check if the user is already logged in
    //   //because we don't want to ask users to log in each time they open the app
    //   this.nativeStorage.getItem('google_user')
    //   .then( data => {
    //     //user is previously logged and we have his data
    //     //we will let him access the app
    //     this.router.navigate(["/home"]);
    //     this.splashScreen.hide();
    //   }, err => {
    //     this.router.navigate(["/login"]);
    //     this.splashScreen.hide();
    //   })
    //   this.statusBar.styleDefault();
    // });
  }
  
}
