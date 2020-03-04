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

module.exports = "  <!-- <ion-content>\n    <div class=\"login-container\">\n      <img class=\"logo\" src=\"../../assets/icon/icon.png\" />\n        <strong>Welcome to Food Eats</strong>\n        <div>Find restaurants, Make orders & get delivered quickly.</div>\n        <ion-item>\n          <ion-input type=\"email\" placeholder=\"Enter Mobile number\"></ion-input>\n        </ion-item>\n        <ion-button color=\"primary\" expand=\"block\" >Continue</ion-button>\n        <a (click)=\"googleLogin()\" color=\"primary\">Login with google</a>\n        <p (click)=\"openResetPassword()\"><strong>Forgot your password?</strong></p>\n    </div>\n  </ion-content>\n   -->\n\n   <ion-content padding>\n    <div text-center style=\"padding-top: 70px;\">\n      <img class=\"logo\" src=\"../../assets/icon/icon.png\" alt=\"Logo of clean connect\">\n    </div>\n    <div style=\"text-align:center;\">\n      <strong>Welcome to Food Eats</strong>\n    <div>Find restaurants, Make orders & get delivered quickly.</div>\n    </div>\n      <ion-list>  \n        <ion-item lines=\"none\">\n          <ion-label><ion-icon name=\"ios-person-outline\" item-left></ion-icon></ion-label>\n          <ion-icon name=\"md-call\"></ion-icon>\n          <ion-input type=\"tel\" placeholder=\"Mobile number\"></ion-input>\n        </ion-item>\n      </ion-list>\n      <br/>\n      <div style=\"text-align:center;\">\n        <ion-button shape=\"round\" type=\"submit\" color=\"primary\" (click)=\"Continue()\" expand=\"block\">Continue</ion-button>\n        <ion-button shape=\"round\" type=\"submit\" color=\"success\" (click)=\"googleLogin()\" expand=\"block\">Login with google</ion-button>\n        <ion-button shape=\"round\" type=\"submit\" color=\"danger\" (click)=\"facebookLogin()\" expand=\"block\">Login with FACEBOOK</ion-button>\n        <!-- <a (click)=\"googleLogin()\" color=\"primary\">Login with google</a> -->\n      </div>\n       \n  </ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  width: 50%;\n  height: 50%; }\n\nion-item:first-child {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\nion-item:last-child {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\nion-item.item {\n  background-color: rgba(255, 255, 255, 0.4);\n  margin-bottom: 1px; }\n\nion-item.item .label {\n    width: 10%;\n    color: rgba(0, 0, 0, 0.6);\n    font-size: 1.2em; }\n\nion-input {\n  border-bottom: 1px solid #cccccc; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5kYW4vUHJvamVjdHMvbXlzdHVmZi96b21hdG9Gb29kRGVsaXZlcnlBcHAvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDRSxVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQTJDZjtFQUNFLDJCQUEyQjtFQUMzQiw0QkFBNEIsRUFBQTs7QUFFOUI7RUFDRSw4QkFBOEI7RUFDOUIsK0JBQStCLEVBQUE7O0FBRWpDO0VBQ0UsMENBQTBDO0VBQzFDLGtCQUFrQixFQUFBOztBQUZwQjtJQUlJLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBRUUsZ0NBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAubG9naW57XG4vLyAgICAgLy9tYXJnaW4tdG9wOiA1MCU7XG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gfVxuLy8gLnNjcm9sbC1jb250ZW50IHtcbi8vICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4vLyAgIH1cbiAgLmxvZ28ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gIH1cbi8vICAgc3BhbiB7XG4vLyAgICAgY29sb3I6IHdoaXRlO1xuLy8gICB9XG4vLyAgIC5zbGlkZS1iYWNrZ3JvdW5kIHtcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbi8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuLy8gICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgIH1cbi8vICAgLnNsaWRlLXpvb20ge1xuLy8gICAgIGJhY2tncm91bmQ6IHJnYmEoMzIsIDMyLCAzMiwgMC4yKSAhaW1wb3J0YW50O1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vICAgfVxuLy8gICBpb24tc2xpZGVzIHtcbi8vICAgICBoZWlnaHQ6IDEwMHZoO1xuLy8gICB9XG4vLyAgIC8vIGlvbi1pdGVtIHtcbi8vICAgLy8gICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbi8vICAgLy8gICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbi8vICAgLy8gICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuLy8gICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4vLyAgIC8vICAgZm9udC1zaXplOiAwLjllbTtcbi8vICAgLy8gICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlciwgI2YxNDUzZCk7XG4vLyAgIC8vIH1cbi8vICAgIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4vLyAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4vLyAgIH1cbi8vICAgLmxvZ2luLWNvbnRhaW5lciB7XG4vLyAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB0b3A6IDA7XG4vLyAgICAgcGFkZGluZzogMTB2dztcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XG4vLyAgICAgei1pbmRleDogMjtcbi8vICAgfVxuLy8gICBpb24tYnV0dG9uIHtcbi8vICAgICBvcGFjaXR5OiAwLjg7XG4vLyAgIH1cbiAgXG5pb24taXRlbTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbn1cbmlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG5pb24taXRlbS5pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIC5sYWJlbCB7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cbn1cblxuaW9uLWlucHV0e1xuICAvL2JvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjO1xufSJdfQ== */"

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
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");







// import * as Parse from 'parse';
var LoginPage = /** @class */ (function () {
    function LoginPage(googlePlus, commonservice, router, facebook, navCtrl) {
        this.googlePlus = googlePlus;
        this.commonservice = commonservice;
        this.router = router;
        this.facebook = facebook;
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
    LoginPage.prototype.facebookLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var facebookResponse, facebookAuthData, toLinkUser, user, userData, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.facebook.login(['public_profile', 'user_friends', 'email'])
                            .then(function (res) {
                            return alert('Logged into Facebook!' + JSON.stringify(res));
                        })
                            .catch(function (e) {
                            return alert('Error logging into Facebook' + JSON.stringify(e));
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        return [4 /*yield*/, this.facebook.login(['public_profile', 'email'])];
                    case 2:
                        facebookResponse = _a.sent();
                        facebookAuthData = {
                            id: facebookResponse.authResponse.userID,
                            access_token: facebookResponse.authResponse.accessToken,
                        };
                        alert('dddd');
                        toLinkUser = void 0;
                        return [4 /*yield*/, toLinkUser._linkWith('facebook', { authData: facebookAuthData })];
                    case 3:
                        user = _a.sent();
                        if (!!user.existed()) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture)', [])];
                    case 4:
                        userData = _a.sent();
                        alert('userData' + JSON.stringify(userData));
                        user.set('username', userData.name);
                        user.set('name', userData.name);
                        user.set('email', userData.email);
                        return [4 /*yield*/, user.save()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        err_1 = _a.sent();
                        alert('Error logging in' + JSON.stringify(err_1));
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.googleLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                alert('please wait');
                this.commonservice.showLoading('Please wait');
                this.googlePlus.login({})
                    .then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        alert('login sucessfull' + JSON.stringify(res));
                        return [2 /*return*/];
                    });
                }); })
                    .catch(function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        alert('Error' + JSON.stringify(err));
                        // const { role, data } = await loading.onDidDismiss();
                        alert("some error occure" + JSON.stringify(err));
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    // googleLogin() {
    //   this.logindata =[];
    //   this.commonservice.showLoading('Please wait');
    //   this.googlePlus.login({
    //   })
    //     .then(res => {
    //       alert('res :' + JSON.stringify(res));
    //       localStorage.setItem("isLogin","true");
    //       this.logindata = res;
    //       localStorage.setItem("logindata", res);
    //       // alert('data' +  JSON.stringify(this.logindata));
    //       this.commonservice.dismissLoading();
    //         let navigationExtras: NavigationExtras = {
    //           queryParams: {
    //             special: JSON.stringify(this.logindata)
    //           }
    //         };
    //         this.router.navigate(['/tabs/tabs/home'], navigationExtras);
    //     })
    //     .catch(err => {
    //       alert(err);
    //       this.commonservice.dismissLoading();
    //       alert("some error occure" + JSON.stringify(err));
    //     });
    // }
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
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__["Facebook"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map