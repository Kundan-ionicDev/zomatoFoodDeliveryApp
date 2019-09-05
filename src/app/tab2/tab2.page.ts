import { Component, OnInit } from '@angular/core';

declare var RazorpayCheckout: any;


@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  // Declaration for Razor Pay
  paymentAmount: number = 881;
  currency: string = 'INR';
  currencyIcon: string = 'Rs';
  razor_key = 'rzp_test_HyILGa0sBRSupH';
  cardDetails: any = {};

  constructor() { }

  ngOnInit() {
  }

  payWithRazor() {
    var options = {
      description: 'Payment towards food delivery...',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: this.currency, // your 3 letter currency code
      key: this.razor_key, // your Key Id from Razorpay dashboard
      amount: this.paymentAmount, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'Food Delivery',
      prefill: {
        email: 'kundan@credence.com',
        contact: '9960097184',
        name: 'Food Delivery'
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };

    var successCallback = function (payment_id) {
      alert('payment_id: ' + payment_id);
    };

    var cancelCallback = function (error) {
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }

}
