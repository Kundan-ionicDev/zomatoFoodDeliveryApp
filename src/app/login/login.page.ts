import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import {CommonService} from '../common.service';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
// import * as Parse from 'parse';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers:[GooglePlus,CommonService]
})
export class LoginPage implements OnInit {
  backgrounds = [
    '../../assets/background/background-1.jpg',
    '../../assets/background/background-2.jpg',
    '../../assets/background/background-3.jpg',
    '../../assets/background/background-4.jpg'
  ];
  
  logindata : any;
  constructor(
    private googlePlus: GooglePlus,
    public commonservice: CommonService,
    public router:Router,
    private facebook: Facebook,
    public navCtrl:NavController) {
  }

  ngOnInit() {
    //this.getProduct();
  }

  async facebookLogin() {

    this.facebook.login(['public_profile', 'user_friends', 'email'])
      .then(
        (res: FacebookLoginResponse) => 
        alert('Logged into Facebook!'+ JSON.stringify(res))
        )
      .catch(e => 
        alert('Error logging into Facebook'+JSON.stringify(e))
        );

    try {
      // Log in to Facebook and request user data
      let facebookResponse = await this.facebook.login(['public_profile', 'email']);
      let facebookAuthData = {
        id: facebookResponse.authResponse.userID,
        access_token: facebookResponse.authResponse.accessToken,
      };
      alert('dddd');
      // Request the user from parse
      let toLinkUser;// = new Parse.User();
      let user = await toLinkUser._linkWith('facebook', {authData: facebookAuthData});

      // If user did not exist, updates its data
      if (!user.existed()) {
        let userData = await this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture)', []);
        alert('userData'+ JSON.stringify(userData));
        user.set('username', userData.name);
        user.set('name', userData.name);
        user.set('email', userData.email);
        await user.save();
      }

      // this.navCtrl.setRoot('HomePage');
    } catch (err) {
      alert('Error logging in'+ JSON.stringify(err));
    }
  }

  async googleLogin() {
    alert('please wait');
    this.commonservice.showLoading('Please wait');
    this.googlePlus.login({
    })
      .then(async res => {
        alert('login sucessfull' + JSON.stringify(res));
        // localStorage.setItem("isLogin","true");
        // const { role, data } = await loading.onDidDismiss();
        // this.router.navigate(['/home'], { replaceUrl: true })
      })
      .catch(async err => {
        alert('Error'+ JSON.stringify(err));
        // const { role, data } = await loading.onDidDismiss();

        alert("some error occure" + JSON.stringify(err));
      });
  }

  // googleLogin() {
  //   this.logindata =[];
  //   this.commonservice.showLoading('Please wait');
  //   this.googlePlus.login({
  //   })
  //     .then(res => {
  //       alert('res :' + JSON.stringify(res));
  //       localStorage.setItem("isLogin","true");
       
  //       this.logindata = res;
  //       localStorage.setItem("logindata", res);
  //       // alert('data' +  JSON.stringify(this.logindata));
  //       this.commonservice.dismissLoading();
  //         let navigationExtras: NavigationExtras = {
  //           queryParams: {
  //             special: JSON.stringify(this.logindata)
  //           }
  //         };
  //         this.router.navigate(['/tabs/tabs/home'], navigationExtras);
  //     })
  //     .catch(err => {
  //       alert(err);
  //       this.commonservice.dismissLoading();
  //       alert("some error occure" + JSON.stringify(err));
  //     });
  // }

  Continue(){
     let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(null)
      }
    };
   // this.router.navigate(['/tabs'], navigationExtras);
   // this.router.navigate(['/tabs/tabs/home'], navigationExtras);
   // this.router.navigateByUrl('/tabs/tabs/home');
   this.router.navigateByUrl('otp');
  }
}
