(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otp-otp-module"],{

/***/ "./src/app/otp/otp.module.ts":
/*!***********************************!*\
  !*** ./src/app/otp/otp.module.ts ***!
  \***********************************/
/*! exports provided: OtpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPageModule", function() { return OtpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./otp.page */ "./src/app/otp/otp.page.ts");







var routes = [
    {
        path: '',
        component: _otp_page__WEBPACK_IMPORTED_MODULE_6__["OtpPage"]
    }
];
var OtpPageModule = /** @class */ (function () {
    function OtpPageModule() {
    }
    OtpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_otp_page__WEBPACK_IMPORTED_MODULE_6__["OtpPage"]]
        })
    ], OtpPageModule);
    return OtpPageModule;
}());



/***/ }),

/***/ "./src/app/otp/otp.page.html":
/*!***********************************!*\
  !*** ./src/app/otp/otp.page.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>otp</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content padding>\n \n<ion-grid>\n  \n  <ion-row justify-content-center align-items-center style=\"padding-top: 50%;\">\n      <h3>Verification code send to your mobile number</h3>\n    <ion-col size=\"3\">\n      <ion-input placeholder=\"*\" maxlength=\"1\" tabindex=\"1\" (keyup)=\"moveFocus(b)\"  style=\"border-bottom: 1px solid #cccccc\" type=\"tel\"></ion-input>\n    </ion-col>\n    <ion-col size=\"3\">\n      <ion-input placeholder=\"*\" maxlength=\"1\"  tabindex=\"2\" #b (keyup)=\"moveFocus(c)\"  style=\"border-bottom: 1px solid #cccccc\" type=\"tel\"></ion-input>\n    </ion-col>\n\n    <ion-col size=\"3\">\n      <ion-input placeholder=\"*\" maxlength=\"1\"  tabindex=\"3\" #c (keyup)=\"moveFocus(d)\"  style=\"border-bottom: 1px solid #cccccc\" type=\"tel\"></ion-input>\n    </ion-col>\n\n    <ion-col size=\"3\">\n      <ion-input  placeholder=\"*\" maxlength=\"1\"  tabindex=\"4\" #d style=\"border-bottom: 1px solid #cccccc\" type=\"tel\"></ion-input>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-button shape=\"round\" type=\"submit\" color=\"primary\" (click)=\"VerifyOtp()\" expand=\"block\">Verify</ion-button>\n<a >Don't receive the OTP? Resend</a>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/otp/otp.page.scss":
/*!***********************************!*\
  !*** ./src/app/otp/otp.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5kYW4vUHJvamVjdHMvbXlzdHVmZi96b21hdG9Gb29kRGVsaXZlcnlBcHAvc3JjL2FwcC9vdHAvb3RwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9vdHAvb3RwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/otp/otp.page.ts":
/*!*********************************!*\
  !*** ./src/app/otp/otp.page.ts ***!
  \*********************************/
/*! exports provided: OtpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPage", function() { return OtpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var OtpPage = /** @class */ (function () {
    function OtpPage(router) {
        this.router = router;
    }
    OtpPage.prototype.ngOnInit = function () {
    };
    OtpPage.prototype.moveFocus = function (nextElement) {
        nextElement.focus();
    };
    OtpPage.prototype.VerifyOtp = function () {
        this.router.navigateByUrl('/tabs/tabs/home');
    };
    OtpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-otp',
            template: __webpack_require__(/*! ./otp.page.html */ "./src/app/otp/otp.page.html"),
            styles: [__webpack_require__(/*! ./otp.page.scss */ "./src/app/otp/otp.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OtpPage);
    return OtpPage;
}());



/***/ })

}]);
//# sourceMappingURL=otp-otp-module.js.map