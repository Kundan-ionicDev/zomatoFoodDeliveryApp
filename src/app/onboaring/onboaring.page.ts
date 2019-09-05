import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { GeolocationOptions,Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-onboaring',
  templateUrl: './onboaring.page.html',
  styleUrls: ['./onboaring.page.scss'],
})
export class OnboaringPage implements OnInit {
  showSkip = true;
  @ViewChild('slides') slides: IonSlides;
  sliderOptions = { pager: true, autoHeight: true }
  locationCoords: any;
  
  
  constructor(
    public router:Router,
    public navCtrl:NavController,
    private geolocation: Geolocation,
    private androidPermissions: AndroidPermissions,
    private locationAccuracy: LocationAccuracy,
  ) { }

  ngOnInit() {
    this.checkGPSPermission();
  }

//Check if application having GPS access permission  
checkGPSPermission() {
  this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
    result => {
      if (result.hasPermission) {

        //If having permission show 'Turn On GPS' dialogue
        this.askToTurnOnGPS();
      } else {

        //If not having permission ask for permission
        this.requestGPSPermission();
      }
    },
    err => {
      alert(err);
    }
  );
}

requestGPSPermission() {
  this.locationAccuracy.canRequest().then((canRequest: boolean) => {
    if (canRequest) {
      console.log("4");
    } else {
      //Show 'GPS Permission Request' dialogue
      this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
        .then(
          () => {
            // call method to turn on GPS
            this.askToTurnOnGPS();
          },
          error => {
            //Show alert if user click on 'No Thanks'
            alert('requestPermission Error requesting location permissions ' + error)
          }
        );
    }
  });
}

askToTurnOnGPS() {
  this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
    () => {
      // When GPS Turned ON call method to get Accurate location coordinates
      this.getLocationCoordinates()
    },
    error => alert('Error requesting location permissions ' + JSON.stringify(error))
  );
}

// Methos to get device accurate coordinates using device GPS
getLocationCoordinates() {
  this.geolocation.getCurrentPosition().then((resp,) => {
    this.locationCoords.latitude = resp.coords.latitude;
    this.locationCoords.longitude = resp.coords.longitude;
    this.locationCoords.accuracy = resp.coords.accuracy;
    this.locationCoords.timestamp = resp.timestamp;
  }).catch((error) => {
    // alert('Error getting location' + error);
  });
  // alert('[GeoProvider] getUserCurrentPosition launched...' + JSON.stringify(this.locationCoords));

      return new Promise((resolve, reject) => {

          let geolocationOptions: GeolocationOptions = {
              enableHighAccuracy: true,
              timeout: 2500,
              maximumAge: 600000 // 10 minuts
          };

          this.geolocation.getCurrentPosition(geolocationOptions).then(
              (position) => {
                  // alert('[GeoProvider] getCurrentPosition success: '+ position.coords.latitude + position.coords.longitude);
                  this.locationCoords.latitude = position.coords.latitude;
                  this.locationCoords.longitude = position.coords.longitude;
                 
                  resolve(this.locationCoords);
              },
              (err) => {
                  // alert('[GeoProvider] getCurrentPosition error: '+ JSON.stringify(err));
                  if (this.locationCoords.latitud != null && this.locationCoords.longitud != null) {
                      resolve(this.locationCoords);
                  } else {
                     
                  }
              }
          );

      });
}

  onSubmit(){
    this.router.navigate(['/login']);
  }
}
