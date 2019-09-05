import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, fromEvent } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  userData: any;
  menu: any;
  menuitems:any;
  private backbuttonSubscription: Subscription;
  
  constructor(
    private route: ActivatedRoute,
    public modalCtrl:ModalController,
    private common: CommonService,
  ) {
      
      // this.route.queryParams.subscribe(params => {
      //   if (params && params.special) {
      //     this.userData = JSON.parse(params.special);
      //     alert('LoggedIn User Data ::' + JSON.stringify(this.userData));
      //   }
      // });
      // this.userData = localStorage.getItem('prevdata');
      // alert('details' + this.userData);
   }

   ngOnInit() {
    //  this.userData = localStorage.getItem('prevdata');
    //  alert('details' + this.userData);
    this.common.getMenu().subscribe(data => {
      // alert('data'+ JSON.stringify(data));
      this.menu = data;
      this.menuitems = this.menu.menu;
      // alert('Data ::- '+ JSON.stringify(this.menu.menu[0].description));
    });
  }

}
