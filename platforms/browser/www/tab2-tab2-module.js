(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]
    }
];
var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t\t<ion-toolbar>\n\t\t  <ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"home\"></ion-back-button>\n\t\t\t  \n\t\t  </ion-buttons>\n\t\t  Cart\n\t\t</ion-toolbar>\n\t  </ion-header>\n<ion-content padding>\n\t<ion-item>\n\t\t<ion-avatar slot=\"start\">\n\t\t\t<img src=\"../../assets/fk/Martabak.jpg\" />\n\t\t</ion-avatar>\n\t\t<ion-label>\n\t\t\t<h2>Chicken Martabak</h2>\n\t\t\t<h3 style=\"color:grey;\">Chicken , spicy and garlic</h3>\n\t\t\t<ion-grid>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<ion-icon name=\"md-add\"></ion-icon>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\tRs. 481\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<ion-icon name=\"md-remove\"></ion-icon>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t   </ion-grid>\n\t\t</ion-label>\n\t</ion-item>\n\t<ion-item>\n\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t<img src=\"../../assets/fk/chickenCrisphy.jpg\" />\n\t\t\t</ion-avatar>\n\t\t\t<ion-label>\n\t\t\t\t<h2>Chicken Crisphy</h2>\n\t\t\t\t<h3 style=\"color:grey;\">Chicken , spicy and garlic</h3>\n\t\t\t\t<ion-grid>\n\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col size=\"3\">\n\t\t\t\t\t\t\t<ion-icon name=\"md-add\"></ion-icon>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"3\">\n\t\t\t\t\t\t\tRs. 400 &nbsp;&nbsp;\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t\t<ion-icon name=\"md-remove\"></ion-icon>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t   </ion-grid>\n\t\t\t</ion-label>\n\t\t</ion-item>\n\n\t\t\n\n\t\t<ion-grid>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<ion-icon name=\"basket\"></ion-icon>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\tQuantity 2\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\tTotal <b>Rs. 881</b>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t\t<ion-button expand=\"full\" (click)=\"payWithRazor()\">Checkout and Pay</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar,\nion-avatar > img {\n  border-radius: 6%;\n  height: 8rem;\n  width: 8rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5kYW4vRG9jdW1lbnRzL3Rlc3QwMS9zcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxXQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhcixcbmlvbi1hdmF0YXIgPiBpbWd7XG4gICAgYm9yZGVyLXJhZGl1czo2JTtcbiAgICBoZWlnaHQ6OHJlbTtcbiAgICB3aWR0aDo4cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Tab2Page = /** @class */ (function () {
    function Tab2Page() {
        // Declaration for Razor Pay
        this.paymentAmount = 881;
        this.currency = 'INR';
        this.currencyIcon = 'Rs';
        this.razor_key = 'rzp_test_HyILGa0sBRSupH';
        this.cardDetails = {};
    }
    Tab2Page.prototype.ngOnInit = function () {
    };
    Tab2Page.prototype.payWithRazor = function () {
        var options = {
            description: 'Payment towards food delivery...',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: this.currency,
            key: this.razor_key,
            amount: this.paymentAmount,
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
                    alert('dismissed');
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
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map