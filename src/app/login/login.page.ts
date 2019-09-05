import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import {CommonService} from '../common.service';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

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
    public navCtrl:NavController) {
  }

  ngOnInit() {
    //this.getProduct();
  }

  googleLogin() {
    this.logindata =[];
    this.commonservice.showLoading('Please wait');
    this.googlePlus.login({
    })
      .then(res => {
        // alert('res :' + JSON.stringify(res));
        localStorage.setItem("isLogin","true");
       
        this.logindata = res;
        localStorage.setItem("logindata", res);
        // alert('data' +  JSON.stringify(this.logindata));
        this.commonservice.dismissLoading();
          let navigationExtras: NavigationExtras = {
            queryParams: {
              special: JSON.stringify(this.logindata)
            }
          };
          this.router.navigate(['/tabs/tabs/home'], navigationExtras);
      })
      .catch(err => {
        alert(err);
        this.commonservice.dismissLoading();
        alert("some error occure" + JSON.stringify(err));
      });
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     special: JSON.stringify(this.logindata)
    //   }
    // };
   // this.router.navigate(['/tabs'], navigationExtras);
   //this.router.navigate(['/tabs/tabs/home'], navigationExtras);
   
  }

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
