import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../common.service';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public categories = [];
  searchresults: any;
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
  geocode:any;
  data:any;

  constructor(
    public commonservice: CommonService,
  ) { 
    this.getcategories();
    alert('Latitude :' + this.commonservice.latitude + 'Longitude :'+ this.commonservice.longitude);
    this.getSearchResults(this.commonservice.latitude,this.commonservice.longitude);
  }

  ngOnInit() {
    // this.geocode = localStorage.getItem('geocode');
  }

  getcategories(){
    this.commonservice.showLoading("please wait");
    this.commonservice.getcategories().subscribe(
      success => {
        this.categories = success.categories;
        this.commonservice.dismissLoading();
      });
  }

  getSearchResults(latitude:any,longitude:any) {
    alert('Latitude Longitude  ::' + latitude + longitude);
    this.commonservice.showLoading("please wait");
    this.commonservice.getSearchResults(latitude,longitude,'Chinese').subscribe(
      success => {
        this.searchresults = success;
        this.data = this.searchresults.restaurants;
        alert('this.searchresults' + JSON.stringify(this.searchresults));
        this.commonservice.dismissLoading();
      });
  }


}
