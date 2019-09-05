(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onboaring-onboaring-module"],{

/***/ "./src/app/onboaring/onboaring.module.ts":
/*!***********************************************!*\
  !*** ./src/app/onboaring/onboaring.module.ts ***!
  \***********************************************/
/*! exports provided: OnboaringPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboaringPageModule", function() { return OnboaringPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _onboaring_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onboaring.page */ "./src/app/onboaring/onboaring.page.ts");







var routes = [
    {
        path: '',
        component: _onboaring_page__WEBPACK_IMPORTED_MODULE_6__["OnboaringPage"]
    }
];
var OnboaringPageModule = /** @class */ (function () {
    function OnboaringPageModule() {
    }
    OnboaringPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_onboaring_page__WEBPACK_IMPORTED_MODULE_6__["OnboaringPage"]]
        })
    ], OnboaringPageModule);
    return OnboaringPageModule;
}());



/***/ }),

/***/ "./src/app/onboaring/onboaring.page.html":
/*!***********************************************!*\
  !*** ./src/app/onboaring/onboaring.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen=\"true\">\n  <ion-slides #slides  pager=\"true\"  style=\"height: 100%;width:100%;\">\n    <ion-slide style=\"background-image: url(../../assets/foodslides/food1.jpg); background-position: center center;max-width:100%;\n    background-repeat: no-repeat;background-size: cover;-webkit-background-size: cover;-o-background-size: cover;-moz-background-size: cover;\">\n       </ion-slide>\n\n    <ion-slide style=\"background-image: url(../../assets/foodslides/food2.png); max-width:100%;\n    background-position: center center; background-repeat: no-repeat;background-size: cover;-webkit-background-size: cover;-o-background-size: cover;-moz-background-size: cover;\">\n      </ion-slide>\n\n    <ion-slide style=\"background-image: url(../../assets/foodslides/food3.jpg); max-width:100%;\n    background-position: center center; background-repeat: no-repeat;background-size: cover;-webkit-background-size: cover;-o-background-size: cover;-moz-background-size: cover;\">\n    </ion-slide>\n  \n\n  <ion-slide>\n    <div style=\"background-image: url(../../../assets/foodslides/food4.jpg); background-position: center center; background-repeat: no-repeat; height: 100%;background-size: cover;-webkit-background-size: cover;-o-background-size: cover;-moz-background-size: cover;\" >      \n      <ion-grid style=\"height: 100%;\">\n        <ion-row style=\"height: 100%;\">\n          <ion-col style=\"text-align: center; margin: 0px auto; display: inline-flex;\">              \n            <div class=\"ion-padding-top ion-padding-bottom\" style=\"text-align: center; margin: 0px auto;\">\n                 <ion-button color=\"transparent\" expand=\"block\" class=\"email-button-cls button-save\" type=\"submit\" (click)=\"onSubmit()\" shape=\"round\" style=\"position: absolute; bottom:7%; left: 0px; right: 0px;\">Continue</ion-button>\n            </div>                \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ion-slide>\n</ion-slides>\n</ion-content>\n  "

/***/ }),

/***/ "./src/app/onboaring/onboaring.page.scss":
/*!***********************************************!*\
  !*** ./src/app/onboaring/onboaring.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: transparent;\n  --border-color: transparent; }\n\nion-content .scroll {\n  height: 100%; }\n\n.md .swiper-slide .swiper-slide-active,\n.ios .swiper-slide .swiper-slide-active,\n.wp .swiper-slide .swiper-slide-active {\n  width: 100px; }\n\n.slider-pager-page {\n  color: white;\n  fill: #f90;\n  stroke: red;\n  background-color: blue; }\n\n.slider-pager-page.active {\n  fill: #f90;\n  stroke: red;\n  color: blue;\n  background-color: red; }\n\n.swiper-slide {\n  display: block; }\n\n.slide-image {\n  max-height: 50%;\n  max-width: 60%;\n  margin: 36px 0; }\n\nb {\n  font-weight: 500; }\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #60646b; }\n\np b {\n    color: #000000; }\n\n.slider {\n  height: 100vh;\n  width: auto; }\n\n.slider-slide {\n  height: 100vh;\n  width: auto; }\n\n.button-save {\n  position: absolute;\n  bottom: 15%;\n  left: 0px;\n  right: 0px;\n  margin: 0px 20px;\n  background: #1aad19;\n  border-radius: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5kYW4vRG9jdW1lbnRzL3Rlc3QwMS9zcmMvYXBwL29uYm9hcmluZy9vbmJvYXJpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkseUJBQWE7RUFDYiwyQkFBZSxFQUFBOztBQUVqQjtFQUFzQixZQUFZLEVBQUE7O0FBRWxDOzs7RUFJTyxZQUFZLEVBQUE7O0FBR25CO0VBRUUsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsc0JBQXNCLEVBQUE7O0FBRXhCO0VBRUUsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0VBQ1gscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFKaEI7SUFPSSxjQUFjLEVBQUE7O0FBS2xCO0VBQ0UsYUFBWTtFQUNaLFdBQVUsRUFBQTs7QUFHWjtFQUNFLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL29uYm9hcmluZy9vbmJvYXJpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC8vIFRPRE8gdGVzdCB0cmFuc3BhcmVudCBhbmQgZnVsbHNjcmVlblxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIGlvbi1jb250ZW50IC5zY3JvbGwgeyBoZWlnaHQ6IDEwMCU7IH1cbiAgXG4gIC5tZCxcbiAgLmlvcyxcbiAgLndwIHtcbiAgICAgIC5zd2lwZXItc2xpZGUgLnN3aXBlci1zbGlkZS1hY3RpdmV7XG4gICAgICAgICB3aWR0aDogMTAwcHg7Ly95b3VyIHdpZHRoIGhlcmVcbiAgICAgfVxuICAgfVxuICAuc2xpZGVyLXBhZ2VyLXBhZ2VcbiAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmaWxsOiAjZjkwO1xuICAgIHN0cm9rZTogcmVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIH1cbiAgLnNsaWRlci1wYWdlci1wYWdlLmFjdGl2ZVxuICB7XG4gICAgZmlsbDogI2Y5MDtcbiAgICBzdHJva2U6IHJlZDtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIH1cbiAgXG4gIC5zd2lwZXItc2xpZGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAuc2xpZGUtaW1hZ2Uge1xuICAgIG1heC1oZWlnaHQ6IDUwJTtcbiAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICBtYXJnaW46IDM2cHggMDtcbiAgfVxuICBcbiAgYiB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBcbiAgcCB7XG4gICAgcGFkZGluZzogMCA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjNjA2NDZiO1xuICBcbiAgICBiIHtcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cbiAgfVxuICBcbiAgXG4gIC5zbGlkZXJ7XG4gICAgaGVpZ2h0OjEwMHZoO1xuICAgIHdpZHRoOmF1dG87IFxuICB9XG4gIFxuICAuc2xpZGVyLXNsaWRlIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIFxuICAuYnV0dG9uLXNhdmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDE1JTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBtYXJnaW46IDBweCAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMxYWFkMTk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgfVxuXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/onboaring/onboaring.page.ts":
/*!*********************************************!*\
  !*** ./src/app/onboaring/onboaring.page.ts ***!
  \*********************************************/
/*! exports provided: OnboaringPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboaringPage", function() { return OnboaringPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "./node_modules/@ionic-native/location-accuracy/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");







var OnboaringPage = /** @class */ (function () {
    function OnboaringPage(router, navCtrl, geolocation, androidPermissions, locationAccuracy) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.androidPermissions = androidPermissions;
        this.locationAccuracy = locationAccuracy;
        this.showSkip = true;
        this.sliderOptions = { pager: true, autoHeight: true };
    }
    OnboaringPage.prototype.ngOnInit = function () {
        this.checkGPSPermission();
    };
    //Check if application having GPS access permission  
    OnboaringPage.prototype.checkGPSPermission = function () {
        var _this = this;
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function (result) {
            if (result.hasPermission) {
                //If having permission show 'Turn On GPS' dialogue
                _this.askToTurnOnGPS();
            }
            else {
                //If not having permission ask for permission
                _this.requestGPSPermission();
            }
        }, function (err) {
            alert(err);
        });
    };
    OnboaringPage.prototype.requestGPSPermission = function () {
        var _this = this;
        this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                console.log("4");
            }
            else {
                //Show 'GPS Permission Request' dialogue
                _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
                    .then(function () {
                    // call method to turn on GPS
                    _this.askToTurnOnGPS();
                }, function (error) {
                    //Show alert if user click on 'No Thanks'
                    alert('requestPermission Error requesting location permissions ' + error);
                });
            }
        });
    };
    OnboaringPage.prototype.askToTurnOnGPS = function () {
        var _this = this;
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
            // When GPS Turned ON call method to get Accurate location coordinates
            _this.getLocationCoordinates();
        }, function (error) { return alert('Error requesting location permissions ' + JSON.stringify(error)); });
    };
    // Methos to get device accurate coordinates using device GPS
    OnboaringPage.prototype.getLocationCoordinates = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.locationCoords.latitude = resp.coords.latitude;
            _this.locationCoords.longitude = resp.coords.longitude;
            _this.locationCoords.accuracy = resp.coords.accuracy;
            _this.locationCoords.timestamp = resp.timestamp;
        }).catch(function (error) {
            // alert('Error getting location' + error);
        });
        // alert('[GeoProvider] getUserCurrentPosition launched...' + JSON.stringify(this.locationCoords));
        return new Promise(function (resolve, reject) {
            var geolocationOptions = {
                enableHighAccuracy: true,
                timeout: 2500,
                maximumAge: 600000 // 10 minuts
            };
            _this.geolocation.getCurrentPosition(geolocationOptions).then(function (position) {
                // alert('[GeoProvider] getCurrentPosition success: '+ position.coords.latitude + position.coords.longitude);
                _this.locationCoords.latitude = position.coords.latitude;
                _this.locationCoords.longitude = position.coords.longitude;
                resolve(_this.locationCoords);
            }, function (err) {
                // alert('[GeoProvider] getCurrentPosition error: '+ JSON.stringify(err));
                if (_this.locationCoords.latitud != null && _this.locationCoords.longitud != null) {
                    resolve(_this.locationCoords);
                }
                else {
                }
            });
        });
    };
    OnboaringPage.prototype.onSubmit = function () {
        this.router.navigate(['/login']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], OnboaringPage.prototype, "slides", void 0);
    OnboaringPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-onboaring',
            template: __webpack_require__(/*! ./onboaring.page.html */ "./src/app/onboaring/onboaring.page.html"),
            styles: [__webpack_require__(/*! ./onboaring.page.scss */ "./src/app/onboaring/onboaring.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__["AndroidPermissions"],
            _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_5__["LocationAccuracy"]])
    ], OnboaringPage);
    return OnboaringPage;
}());



/***/ })

}]);
//# sourceMappingURL=onboaring-onboaring-module.js.map