import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  moveFocus(nextElement) {
    nextElement.focus();
  }

  VerifyOtp(){
    this.router.navigateByUrl('/tabs/tabs/home');
  }

}
