(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- <ion-content>\n    <div class=\"login-container\">\n      <img class=\"logo\" src=\"../../assets/icon/icon.png\" />\n        <strong>Welcome to Food Eats</strong>\n        <div>Find restaurants, Make orders & get delivered quickly.</div>\n        <ion-item>\n          <ion-input type=\"email\" placeholder=\"Enter Mobile number\"></ion-input>\n        </ion-item>\n        <ion-button color=\"primary\" expand=\"block\" >Continue</ion-button>\n        <a (click)=\"googleLogin()\" color=\"primary\">Login with google</a>\n        <p (click)=\"openResetPassword()\"><strong>Forgot your password?</strong></p>\n    </div>\n  </ion-content>\n   -->\n\n   <ion-content padding>\n    <div text-center style=\"padding-top: 70px;\">\n      <img class=\"logo\" src=\"../../assets/icon/icon.png\" alt=\"Logo of clean connect\">\n    </div>\n    <div style=\"text-align:center;\">\n      <strong>Welcome to Food Eats</strong>\n    <div>Find restaurants, Make orders & get delivered quickly.</div>\n    </div>\n      <ion-list>  \n        <ion-item lines=\"none\">\n          <ion-label><ion-icon name=\"ios-person-outline\" item-left></ion-icon></ion-label>\n          <ion-icon name=\"md-call\"></ion-icon>\n          <ion-input type=\"tel\" placeholder=\"Mobile number\"></ion-input>\n        </ion-item>\n      </ion-list>\n      <br/>\n      <div style=\"text-align:center;\">\n        <ion-button shape=\"round\" type=\"submit\" color=\"primary\" (click)=\"Continue()\" expand=\"block\">Continue</ion-button>\n        <ion-button shape=\"round\" type=\"submit\" color=\"success\" (click)=\"googleLogin()\" expand=\"block\">Login with google</ion-button>\n        <!-- <a (click)=\"googleLogin()\" color=\"primary\">Login with google</a> -->\n      </div>\n       \n  </ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  width: 50%;\n  height: 50%; }\n\nion-item:first-child {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\nion-item:last-child {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\nion-item.item {\n  background-color: rgba(255, 255, 255, 0.4);\n  margin-bottom: 1px; }\n\nion-item.item .label {\n    width: 10%;\n    color: rgba(0, 0, 0, 0.6);\n    font-size: 1.2em; }\n\nion-input {\n  border-bottom: 1px solid #cccccc; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5kYW4vRG9jdW1lbnRzL3Rlc3QwMS9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPRTtFQUNFLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBMkNmO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE0QixFQUFBOztBQUU5QjtFQUNFLDhCQUE4QjtFQUM5QiwrQkFBK0IsRUFBQTs7QUFFakM7RUFDRSwwQ0FBMEM7RUFDMUMsa0JBQWtCLEVBQUE7O0FBRnBCO0lBSUksVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFFRSxnQ0FBZ0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5sb2dpbntcbi8vICAgICAvL21hcmdpbi10b3A6IDUwJTtcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyB9XG4vLyAuc2Nyb2xsLWNvbnRlbnQge1xuLy8gICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbi8vICAgfVxuICAubG9nbyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgfVxuLy8gICBzcGFuIHtcbi8vICAgICBjb2xvcjogd2hpdGU7XG4vLyAgIH1cbi8vICAgLnNsaWRlLWJhY2tncm91bmQge1xuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuLy8gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4vLyAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbi8vICAgfVxuLy8gICAuc2xpZGUtem9vbSB7XG4vLyAgICAgYmFja2dyb3VuZDogcmdiYSgzMiwgMzIsIDMyLCAwLjIpICFpbXBvcnRhbnQ7XG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICB9XG4vLyAgIGlvbi1zbGlkZXMge1xuLy8gICAgIGhlaWdodDogMTAwdmg7XG4vLyAgIH1cbi8vICAgLy8gaW9uLWl0ZW0ge1xuLy8gICAvLyAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuLy8gICAvLyAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuLy8gICAvLyAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4vLyAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbi8vICAgLy8gICBmb250LXNpemU6IDAuOWVtO1xuLy8gICAvLyAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZjE0NTNkKTtcbi8vICAgLy8gfVxuLy8gICAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbi8vICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbi8vICAgfVxuLy8gICAubG9naW4tY29udGFpbmVyIHtcbi8vICAgICBjb2xvcjogd2hpdGU7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHRvcDogMDtcbi8vICAgICBwYWRkaW5nOiAxMHZ3O1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBtYXJnaW46IDAgYXV0bztcbi8vICAgICB6LWluZGV4OiAyO1xuLy8gICB9XG4vLyAgIGlvbi1idXR0b24ge1xuLy8gICAgIG9wYWNpdHk6IDAuODtcbi8vICAgfVxuICBcbmlvbi1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cbmlvbi1pdGVtLml0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbiAgLmxhYmVsIHtcbiAgICB3aWR0aDogMTAlO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuXG5pb24taW5wdXR7XG4gIC8vYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2M7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var LoginPage = /** @class */ (function () {
    function LoginPage(googlePlus, commonservice, router, navCtrl) {
        this.googlePlus = googlePlus;
        this.commonservice = commonservice;
        this.router = router;
        this.navCtrl = navCtrl;
        this.backgrounds = [
            '../../assets/background/background-1.jpg',
            '../../assets/background/background-2.jpg',
            '../../assets/background/background-3.jpg',
            '../../assets/background/background-4.jpg'
        ];
    }
    LoginPage.prototype.ngOnInit = function () {
        //this.getProduct();
    };
    LoginPage.prototype.googleLogin = function () {
        var _this = this;
        this.logindata = [];
        this.commonservice.showLoading('Please wait');
        this.googlePlus.login({})
            .then(function (res) {
            // alert('res :' + JSON.stringify(res));
            localStorage.setItem("isLogin", "true");
            _this.logindata = res;
            localStorage.setItem("logindata", res);
            // alert('data' +  JSON.stringify(this.logindata));
            _this.commonservice.dismissLoading();
            var navigationExtras = {
                queryParams: {
                    special: JSON.stringify(_this.logindata)
                }
            };
            _this.router.navigate(['/tabs/tabs/home'], navigationExtras);
        })
            .catch(function (err) {
            alert(err);
            _this.commonservice.dismissLoading();
            alert("some error occure" + JSON.stringify(err));
        });
        // let navigationExtras: NavigationExtras = {
        //   queryParams: {
        //     special: JSON.stringify(this.logindata)
        //   }
        // };
        // this.router.navigate(['/tabs'], navigationExtras);
        //this.router.navigate(['/tabs/tabs/home'], navigationExtras);
    };
    LoginPage.prototype.Continue = function () {
        var navigationExtras = {
            queryParams: {
                special: JSON.stringify(null)
            }
        };
        // this.router.navigate(['/tabs'], navigationExtras);
        // this.router.navigate(['/tabs/tabs/home'], navigationExtras);
        // this.router.navigateByUrl('/tabs/tabs/home');
        this.router.navigateByUrl('otp');
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            providers: [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__["GooglePlus"], _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]],
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__["GooglePlus"],
            _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map