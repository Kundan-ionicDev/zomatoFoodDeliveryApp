import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
 logindetails:any;
  constructor() {
    this.logindetails = localStorage.getItem("logindata");
    alert('logindetails' + JSON.stringify(this.logindetails));
   }

  ngOnInit() {
  }

}
