import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {CommonService} from './common.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { IonicRatingModule } from 'ionic4-rating';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule, 
    IonicModule.forRoot(),
     AppRoutingModule,
     IonicRatingModule,
     
  ],
  providers: [
    StatusBar,
    NativeStorage,
    SplashScreen,
    AndroidPermissions,
    Geolocation,
    NativeGeocoder,
    LocationAccuracy,
    Facebook,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
