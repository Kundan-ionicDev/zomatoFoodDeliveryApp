(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic4-rating */ "./node_modules/ionic4-rating/dist/index.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                ionic4_rating__WEBPACK_IMPORTED_MODULE_6__["IonicRatingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header padding>\n    <ion-toolbar color=\"sucess\">\n        <ion-icon name=\"navigate\"></ion-icon>\n        <span style=\"font-size: 14px;\" (click)=\"getUserLocation()\">\n            {{ locationname }}\n        </span>\n      <ion-icon name=\"cart\" slot=\"end\">\n          <ion-badge color=\"danger\">5</ion-badge>\n        </ion-icon>    \n    </ion-toolbar>\n  </ion-header>\n<ion-content>\n    <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content\n          pullingIcon=\"arrow-dropdown\"\n          pullingText=\"Pull to refresh\"\n          refreshingSpinner=\"circles\"\n          refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n      </ion-refresher> -->\n    <ion-slides #slides [options]=\"sliderConfig\">\n      <ion-slide *ngFor=\"let s of offers\"> \n          <img src=\"{{s.imgpath}}\" />\n      </ion-slide>\n    </ion-slides>\n\n    <!-- Searchbar with cancel button always shown -->\n    <ion-searchbar animated placeholder=\"search for restaurant\"></ion-searchbar>\n\n\n    <ion-item *ngFor=\"let item of product\" (click)=\"presentModal(item.restaurant.photos)\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{item.restaurant.featured_image}}\" />\n      </ion-avatar>\n      \n      <ion-label>\n        <h2>{{ item.restaurant.name }}</h2>\n        <h3>{{ item.restaurant.location.address }}</h3>\n        <h4>{{ item.restaurant.timings }}</h4>\n       <ion-grid>\n         <ion-row>\n           <ion-col size=\"4\">\n             <h4>* {{ item.restaurant.user_rating.aggregate_rating }}</h4>\n           </ion-col>\n           <ion-col size=\"4\">\n             <h4>{{ 24 }} mins</h4>\n           </ion-col>\n           <ion-col size=\"4\">\n           <h4> {{ item.restaurant.average_cost_for_two}} for two</h4>\n          </ion-col>\n         </ion-row>\n       </ion-grid>\n      </ion-label>\n    </ion-item>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-color {\n  color: black; }\n\nion-avatar,\nion-avatar > img {\n  border-radius: 6%;\n  height: 5rem;\n  width: 5rem; }\n\nion-toolbar {\n  --ion-color-base: transparent !important; }\n\nrating ion-icon {\n  color: gray; }\n\nrating ion-icon.filled {\n    color: #ffb400; }\n\n/* Show background if class is active */\n\n.show-background {\n  border-style: none;\n  background: var(--ion-color-primary); }\n\n/* Remove bottom border on md */\n\n.header-md::after {\n  background-image: none; }\n\n/* Remove bottom border on ios */\n\n.header-ios ion-toolbar:last-child {\n  --border-width: 0; }\n\nion-content .scroll {\n  height: 100%; }\n\n.slider-pager-page {\n  color: white;\n  fill: #f90;\n  stroke: red;\n  background-color: blue; }\n\n.slider-pager-page.active {\n  fill: #f90;\n  stroke: red;\n  color: blue;\n  background-color: red; }\n\n.swiper-slide {\n  display: block; }\n\n.slide-image {\n  max-height: 50%;\n  max-width: 60%;\n  margin: 36px 0; }\n\nb {\n  font-weight: 500; }\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #60646b; }\n\np b {\n    color: #000000; }\n\n.slider {\n  height: 100vh;\n  width: auto; }\n\n.slider-slide {\n  height: 100vh;\n  width: 100vh; }\n\n.button-save {\n  position: absolute;\n  bottom: 15%;\n  left: 0px;\n  right: 0px;\n  margin: 0px 20px;\n  background: #1aad19;\n  border-radius: 20px; }\n\nion-scroll {\n  height: 50px; }\n\nion-scroll .scroll-zoom-wrapper {\n    display: inline-flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5kYW4vUHJvamVjdHMvbXlzdHVmZi96b21hdG9Gb29kRGVsaXZlcnlBcHAvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFDSixFQUFBOztBQUVBOztFQUVJLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsV0FBVSxFQUFBOztBQUdkO0VBRUUsd0NBQWlCLEVBQUE7O0FBRW5CO0VBRUksV0FBVyxFQUFBOztBQUZmO0lBS00sY0FBYyxFQUFBOztBQUtwQix1Q0FBQTs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0MsRUFBQTs7QUFHdEMsK0JBQUE7O0FBQ0E7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEIsZ0NBQUE7O0FBQ0E7RUFDRSxpQkFBZSxFQUFBOztBQUVmO0VBQXNCLFlBQVksRUFBQTs7QUFFbEM7RUFFRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7RUFDWCxzQkFBc0IsRUFBQTs7QUFFeEI7RUFFRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUpoQjtJQU9JLGNBQWMsRUFBQTs7QUFLbEI7RUFDRSxhQUFZO0VBQ1osV0FBVSxFQUFBOztBQUdaO0VBQ0UsYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFJZDtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLFlBQVksRUFBQTs7QUFEZDtJQUlJLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWNvbG9ye1xuICAgIGNvbG9yOmJsYWNrXG59XG5cbmlvbi1hdmF0YXIsXG5pb24tYXZhdGFyID4gaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6NiU7XG4gICAgaGVpZ2h0OjVyZW07XG4gICAgd2lkdGg6NXJlbTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAvLy0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5yYXRpbmcge1xuICBpb24taWNvbiB7XG4gICAgY29sb3I6IGdyYXk7XG5cbiAgICAmLmZpbGxlZCB7XG4gICAgICBjb2xvcjogI2ZmYjQwMDtcbiAgICB9XG4gIH1cbn1cblxuLyogU2hvdyBiYWNrZ3JvdW5kIGlmIGNsYXNzIGlzIGFjdGl2ZSAqL1xuLnNob3ctYmFja2dyb3VuZCB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4vKiBSZW1vdmUgYm90dG9tIGJvcmRlciBvbiBtZCAqL1xuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuXG4vKiBSZW1vdmUgYm90dG9tIGJvcmRlciBvbiBpb3MgKi9cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci13aWR0aDogMDtcbn1cbiAgaW9uLWNvbnRlbnQgLnNjcm9sbCB7IGhlaWdodDogMTAwJTsgfVxuICBcbiAgLnNsaWRlci1wYWdlci1wYWdlXG4gIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZmlsbDogI2Y5MDtcbiAgICBzdHJva2U6IHJlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICB9XG4gIC5zbGlkZXItcGFnZXItcGFnZS5hY3RpdmVcbiAge1xuICAgIGZpbGw6ICNmOTA7XG4gICAgc3Ryb2tlOiByZWQ7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB9XG4gIFxuICAuc3dpcGVyLXNsaWRlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLnNsaWRlLWltYWdlIHtcbiAgICBtYXgtaGVpZ2h0OiA1MCU7XG4gICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiAzNnB4IDA7XG4gIH1cbiAgXG4gIGIge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgXG4gIHAge1xuICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzYwNjQ2YjtcbiAgXG4gICAgYiB7XG4gICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG4gIH1cbiAgXG4gIFxuICAuc2xpZGVye1xuICAgIGhlaWdodDoxMDB2aDtcbiAgICB3aWR0aDphdXRvOyBcbiAgfVxuICBcbiAgLnNsaWRlci1zbGlkZSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdmg7XG4gIH1cbiBcblxuICAuYnV0dG9uLXNhdmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDE1JTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBtYXJnaW46IDBweCAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMxYWFkMTk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgfVxuICBpb24tc2Nyb2xse1xuICAgIGhlaWdodDogNTBweDtcbiAgICBcbiAgICAuc2Nyb2xsLXpvb20td3JhcHBlcntcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIH1cbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");










var HomePage = /** @class */ (function () {
    // lat:any ='19.116197';
    // lon:any = '72.871237';
    function HomePage(nativeGeocoder, googlePlus, nativeStorage, commonservice, loadingController, modalController, router, geolocation) {
        this.nativeGeocoder = nativeGeocoder;
        this.googlePlus = googlePlus;
        this.nativeStorage = nativeStorage;
        this.commonservice = commonservice;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.router = router;
        this.geolocation = geolocation;
        this.product = [];
        this.categories = [];
        this.sliderConfig = {
            autoplay: false,
            pages: true,
            zoom: {
                maxRatio: 4
            },
            slidesPerView: 2.9,
            spaceBetween: 2,
            centeredSlides: false
        };
        this.offers = [];
        this.locationCoords = {
            latitude: "",
            longitude: "",
            accuracy: "",
            timestamp: ""
        };
        this.timetest = Date.now();
        this.getUserLocation();
    }
    HomePage.prototype.ngOnInit = function () {
        // this.checkGPSPermission();
        // this.getcategories();
        // this.getProduct();
        this.getOffers();
        // this.getUserLocation();
    };
    HomePage.prototype.getUserLocation = function () {
        var _this = this;
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
                .then(function (result) {
                // alert('Result ::'+ JSON.stringify(result[0].toString()));
                _this.locationname = result[0].thoroughfare + result[0].subLocality + result[0].subAdministrativeArea;
                // this.geocodes =[
                //   {
                //     'Latitude': result[0].latitude,
                //     'Longitude':result[0].longitude
                //   }
                // ]
                // localStorage.setItem('geocode', this.geocodes);
                _this.commonservice.latitude = result[0].latitude;
                _this.commonservice.longitude = result[0].longitude;
                _this.getcategories();
                _this.getOffers();
                _this.getProduct(result[0].latitude, result[0].longitude);
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log('Error getting location', error);
        });
    };
    HomePage.prototype.doGoogleLogout = function () {
        var _this = this;
        this.googlePlus.logout()
            .then(function (res) {
            //user logged out so we will remove him from the NativeStorage
            _this.nativeStorage.remove('google_user');
            _this.router.navigate(["/login"]);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.getProduct = function (latitude, longitude) {
        var _this = this;
        alert('Latitude Longitude  ::' + latitude + longitude);
        this.commonservice.showLoading("please wait");
        this.commonservice.getData(latitude, longitude).subscribe(function (success) {
            // alert('Products :: '+ JSON.stringify(success.nearby_restaurants));
            _this.product = success.nearby_restaurants;
            _this.commonservice.dismissLoading();
        });
    };
    HomePage.prototype.getcategories = function () {
        var _this = this;
        this.commonservice.showLoading("please wait");
        this.commonservice.getcategories().subscribe(function (success) {
            _this.categories = success.categories;
            _this.commonservice.dismissLoading();
        });
    };
    //async presentModal(data) {
    // alert('data:: ' + JSON.stringify(data));
    // this.router.navigate(['detail'], { replaceUrl: true })
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     special: JSON.stringify(data)
    //   }
    // };
    // alert('navigationExtras' + JSON.stringify(navigationExtras));
    //localStorage.setItem('prevdata',JSON.stringify(data));
    // this.router.navigate(['detail'], { replaceUrl: false })
    //this.router.navigateByUrl('detail');
    // this.router.navigate(['/phot-modal'],navigationExtras);
    // const modal = await this.modalController.create({
    //   component: PhotModalPage,
    //   componentProps: {
    //     "param": data
    //   }
    // });
    // return await modal.present();
    //}
    HomePage.prototype.presentModal = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var navigationExtras;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                navigationExtras = {
                    queryParams: {
                        special: JSON.stringify(data)
                    }
                };
                //alert('navigationExtras' + JSON.stringify(navigationExtras));
                this.router.navigateByUrl('detail');
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.showAddressModal = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.getOffers = function () {
        this.offers = [
            {
                "id": 1,
                "imgpath": "../../assets/offer/offer1.jpeg"
            },
            {
                "id": 2,
                "imgpath": "../../assets/offer/offer2.jpeg"
            },
            {
                "id": 3,
                "imgpath": "../../assets/offer/offer3.png"
            },
            {
                "id": 4,
                "imgpath": "../../assets/offer/offer4.jpeg"
            },
            {
                "id": 5,
                "imgpath": "../../assets/offer/offer5.jpeg"
            },
            {
                "id": 6,
                "imgpath": "../../assets/offer/offer6.jpg"
            },
            {
                "id": 7,
                "imgpath": "../../assets/offer/offer1.jpeg"
            },
            {
                "id": 8,
                "imgpath": "../../assets/offer/offer2.jpeg"
            },
            {
                "id": 9,
                "imgpath": "../../assets/offer/offer3.png"
            },
            {
                "id": 10,
                "imgpath": "../../assets/offer/offer4.jpeg"
            },
            {
                "id": 11,
                "imgpath": "../../assets/offer/offer5.jpeg"
            },
            {
                "id": 12,
                "imgpath": "../../assets/offer/offer6.jpg"
            }
        ];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])
    ], HomePage.prototype, "slides", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            providers: [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__["GooglePlus"]],
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeGeocoder"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__["GooglePlus"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"],
            _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map