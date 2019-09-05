import { Component, ViewChild } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { CommonService } from '../common.service';
import { ModalController, LoadingController } from '@ionic/angular';
import { Subscription, fromEvent } from 'rxjs';
import { IonSlides } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router,ActivatedRoute, NavigationExtras } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions,NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [GooglePlus]
})
export class HomePage {
  
  private backbuttonSubscription: Subscription;
  public product = [];
  public categories = [];
  data: any;
  sliderConfig = {
    autoplay: false,
    pages:true,
    zoom: {
      maxRatio: 4
    },
    slidesPerView: 2.9,
    spaceBetween: 2,
    centeredSlides: false
  };
  @ViewChild('slides') slides: IonSlides;
  user: any;
  rate: any;
  public offers = [];
  locationCoords: any;
  timetest: any;
  locationname:any;
  geocodes: any;
  // lat:any ='19.116197';
  // lon:any = '72.871237';

  constructor(
    private nativeGeocoder: NativeGeocoder,
    private googlePlus: GooglePlus,  
    private nativeStorage: NativeStorage,
    public commonservice: CommonService,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public router: Router,
    private geolocation: Geolocation) { 
      this.locationCoords = {
        latitude: "",
        longitude: "",
        accuracy: "",
        timestamp: ""
      }
      this.timetest = Date.now();
      this.getUserLocation();
  }
 
  ngOnInit() {
    // this.checkGPSPermission();
    // this.getcategories();
    // this.getProduct();
    this.getOffers();
    // this.getUserLocation();
  }

  

  getUserLocation(){
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.geolocation.getCurrentPosition().then(resp => {
      this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
        .then((result: NativeGeocoderResult[]) => {
          // alert('Result ::'+ JSON.stringify(result[0].toString()));
          this.locationname = result[0].thoroughfare + result[0].subLocality + result[0].subAdministrativeArea;
          // this.geocodes =[
          //   {
          //     'Latitude': result[0].latitude,
          //     'Longitude':result[0].longitude
          //   }
          // ]
          // localStorage.setItem('geocode', this.geocodes);
          this.commonservice.latitude = result[0].latitude;
          this.commonservice.longitude = result[0].longitude;
          
          this.getcategories();
          this.getOffers();
          this.getProduct(result[0].latitude , result[0].longitude);
        }, error => {
          console.log(error)
        });
    }, error => {
      console.log('Error getting location', error);
    })
  }


  doGoogleLogout(){
    this.googlePlus.logout()
    .then(res => {
      //user logged out so we will remove him from the NativeStorage
      this.nativeStorage.remove('google_user');
      this.router.navigate(["/login"]);
    }, err => {
      console.log(err);
    });
  }

  getProduct(latitude:any,longitude:any) {
    alert('Latitude Longitude  ::' + latitude + longitude);
    this.commonservice.showLoading("please wait");
    this.commonservice.getData(latitude,longitude).subscribe(
      success => {
        // alert('Products :: '+ JSON.stringify(success.nearby_restaurants));
        this.product = success.nearby_restaurants;
        this.commonservice.dismissLoading();
      });
  }

  getcategories(){
    this.commonservice.showLoading("please wait");
    this.commonservice.getcategories().subscribe(
      success => {
        this.categories = success.categories;
        this.commonservice.dismissLoading();
      });
  }

  //async presentModal(data) {
   // alert('data:: ' + JSON.stringify(data));
    // this.router.navigate(['detail'], { replaceUrl: true })

    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     special: JSON.stringify(data)
    //   }
    // };
    // alert('navigationExtras' + JSON.stringify(navigationExtras));
    //localStorage.setItem('prevdata',JSON.stringify(data));
    // this.router.navigate(['detail'], { replaceUrl: false })
    //this.router.navigateByUrl('detail');
    // this.router.navigate(['/phot-modal'],navigationExtras);
    // const modal = await this.modalController.create({
    //   component: PhotModalPage,
    //   componentProps: {
    //     "param": data
    //   }
    // });
    // return await modal.present();
  //}

  async presentModal(data) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(data)
      }
    };
    //alert('navigationExtras' + JSON.stringify(navigationExtras));
    this.router.navigateByUrl('detail');
    // const modal = await this.modalController.create({
    //   component: PhotModalPage,
    //   componentProps: {
    //     "param": data
    //   }
    // });
    // return await modal.present();
  }

  async showAddressModal (data) {
    // let modal = this.modalController.create(AutocompletePage);
    // let me = this;
    // modal.onDidDismiss(data => {
    //   this.address.place = data;
    // });
    // modal.present();
    // const modal = await this.modalController.create({
    //   component: AutocompletePage,
    //   componentProps: {
    //     "param": data
    //   }
    // });
    // return await modal.present();
  }

  getOffers(){
    this.offers = [
      {
        "id": 1,
        "imgpath": "../../assets/offer/offer1.jpeg"
      },
      {
        "id": 2,
        "imgpath": "../../assets/offer/offer2.jpeg"
      },
      {
        "id": 3,
        "imgpath": "../../assets/offer/offer3.png"
      },
      {
        "id": 4,
        "imgpath": "../../assets/offer/offer4.jpeg"
      },
      {
        "id": 5,
        "imgpath": "../../assets/offer/offer5.jpeg"
      },
      {
        "id": 6,
        "imgpath": "../../assets/offer/offer6.jpg"
      },
      {
        "id": 7,
        "imgpath": "../../assets/offer/offer1.jpeg"
      },
      {
        "id": 8,
        "imgpath": "../../assets/offer/offer2.jpeg"
      },
      {
        "id": 9,
        "imgpath": "../../assets/offer/offer3.png"
      },
      {
        "id": 10,
        "imgpath": "../../assets/offer/offer4.jpeg"
      },
      {
        "id": 11,
        "imgpath": "../../assets/offer/offer5.jpeg"
      },
      {
        "id": 12,
        "imgpath": "../../assets/offer/offer6.jpg"
      }
    ]
  }

}
