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

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-icon name=\"navigate\"></ion-icon>\n        <span style=\"font-size: 14px;\" (click)=\"getUserLocation()\">\n            <!-- <ion-searchbar  (click)=\"getUserLocation()\" placeholder=\"search restaurants etc\" [(ngModel)]=\"locationname\"></ion-searchbar> -->\n           {{ locationname }}\n        </span>\n      <!-- <ion-icon name=\"cart\" slot=\"end\">\n          <ion-badge>99</ion-badge>\n      </ion-icon> -->\n      <ion-icon name=\"cart\" slot=\"end\">\n          <ion-badge color=\"danger\">5</ion-badge>\n        </ion-icon>    \n    </ion-toolbar>\n  </ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content\n          pullingIcon=\"arrow-dropdown\"\n          pullingText=\"Pull to refresh\"\n          refreshingSpinner=\"circles\"\n          refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n      </ion-refresher>\n    <ion-slides #slides [options]=\"sliderConfig\">\n      <ion-slide *ngFor=\"let s of offers\"> \n          <img src=\"{{s.imgpath}}\" />\n      </ion-slide>\n    </ion-slides>\n\n    <!-- Searchbar with cancel button always shown -->\n    <ion-searchbar animated placeholder=\"search for restaurant\"></ion-searchbar>\n\n\n    <ion-item *ngFor=\"let item of product\" (click)=\"presentModal(item.restaurant.photos)\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{item.restaurant.featured_image}}\" />\n      </ion-avatar>\n      \n      <ion-label>\n        <h2>{{ item.restaurant.name }}</h2>\n        <h3>{{ item.restaurant.location.address }}</h3>\n        <h4>{{ item.restaurant.timings }}</h4>\n       <ion-grid>\n         <ion-row>\n           <ion-col size=\"4\">\n             <h4>* {{ item.restaurant.user_rating.aggregate_rating }}</h4>\n           </ion-col>\n           <ion-col size=\"4\">\n             <h4>{{ 24 }} mins</h4>\n           </ion-col>\n           <ion-col size=\"4\">\n           <h4> {{ item.restaurant.average_cost_for_two}} for two</h4>\n          </ion-col>\n         </ion-row>\n       </ion-grid>\n      </ion-label>\n    </ion-item>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-color {\n  color: black; }\n\nion-avatar,\nion-avatar > img {\n  border-radius: 6%;\n  height: 5rem;\n  width: 5rem; }\n\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important; }\n\nrating ion-icon {\n  color: gray; }\n\nrating ion-icon.filled {\n    color: #ffb400; }\n\n/* Show background if class is active */\n\n.show-background {\n  border-style: none;\n  background: var(--ion-color-primary); }\n\n/* Remove bottom border on md */\n\n.header-md::after {\n  background-image: none; }\n\n/* Remove bottom border on ios */\n\n.header-ios ion-toolbar:last-child {\n  --border-width: 0; }\n\nion-content .scroll {\n  height: 100%; }\n\n.slider-pager-page {\n  color: white;\n  fill: #f90;\n  stroke: red;\n  background-color: blue; }\n\n.slider-pager-page.active {\n  fill: #f90;\n  stroke: red;\n  color: blue;\n  background-color: red; }\n\n.swiper-slide {\n  display: block; }\n\n.slide-image {\n  max-height: 50%;\n  max-width: 60%;\n  margin: 36px 0; }\n\nb {\n  font-weight: 500; }\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #60646b; }\n\np b {\n    color: #000000; }\n\n.slider {\n  height: 100vh;\n  width: auto; }\n\n.slider-slide {\n  height: 100vh;\n  width: 100vh; }\n\n.button-save {\n  position: absolute;\n  bottom: 15%;\n  left: 0px;\n  right: 0px;\n  margin: 0px 20px;\n  background: #1aad19;\n  border-radius: 20px; }\n\nion-scroll {\n  height: 50px; }\n\nion-scroll .scroll-zoom-wrapper {\n    display: inline-flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5kYW4vRG9jdW1lbnRzL3Rlc3QwMS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUNKLEVBQUE7O0FBRUE7O0VBRUksaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxXQUFVLEVBQUE7O0FBR2Q7RUFDRSx5QkFBYTtFQUNiLHdDQUFpQixFQUFBOztBQUVuQjtFQUVJLFdBQVcsRUFBQTs7QUFGZjtJQUtNLGNBQWMsRUFBQTs7QUFLcEIsdUNBQUE7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsb0NBQW9DLEVBQUE7O0FBR3RDLCtCQUFBOztBQUNBO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCLGdDQUFBOztBQUNBO0VBQ0UsaUJBQWUsRUFBQTs7QUFFZjtFQUFzQixZQUFZLEVBQUE7O0FBRWxDO0VBRUUsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsc0JBQXNCLEVBQUE7O0FBRXhCO0VBRUUsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0VBQ1gscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFKaEI7SUFPSSxjQUFjLEVBQUE7O0FBS2xCO0VBQ0UsYUFBWTtFQUNaLFdBQVUsRUFBQTs7QUFHWjtFQUNFLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBSWQ7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxZQUFZLEVBQUE7O0FBRGQ7SUFJSSxvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jb2xvcntcbiAgICBjb2xvcjpibGFja1xufVxuXG5pb24tYXZhdGFyLFxuaW9uLWF2YXRhciA+IGltZ3tcbiAgICBib3JkZXItcmFkaXVzOjYlO1xuICAgIGhlaWdodDo1cmVtO1xuICAgIHdpZHRoOjVyZW07XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbnJhdGluZyB7XG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogZ3JheTtcblxuICAgICYuZmlsbGVkIHtcbiAgICAgIGNvbG9yOiAjZmZiNDAwO1xuICAgIH1cbiAgfVxufVxuXG4vKiBTaG93IGJhY2tncm91bmQgaWYgY2xhc3MgaXMgYWN0aXZlICovXG4uc2hvdy1iYWNrZ3JvdW5kIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi8qIFJlbW92ZSBib3R0b20gYm9yZGVyIG9uIG1kICovXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG5cbi8qIFJlbW92ZSBib3R0b20gYm9yZGVyIG9uIGlvcyAqL1xuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xufVxuICBpb24tY29udGVudCAuc2Nyb2xsIHsgaGVpZ2h0OiAxMDAlOyB9XG4gIFxuICAuc2xpZGVyLXBhZ2VyLXBhZ2VcbiAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmaWxsOiAjZjkwO1xuICAgIHN0cm9rZTogcmVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIH1cbiAgLnNsaWRlci1wYWdlci1wYWdlLmFjdGl2ZVxuICB7XG4gICAgZmlsbDogI2Y5MDtcbiAgICBzdHJva2U6IHJlZDtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIH1cbiAgXG4gIC5zd2lwZXItc2xpZGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAuc2xpZGUtaW1hZ2Uge1xuICAgIG1heC1oZWlnaHQ6IDUwJTtcbiAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICBtYXJnaW46IDM2cHggMDtcbiAgfVxuICBcbiAgYiB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBcbiAgcCB7XG4gICAgcGFkZGluZzogMCA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjNjA2NDZiO1xuICBcbiAgICBiIHtcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cbiAgfVxuICBcbiAgXG4gIC5zbGlkZXJ7XG4gICAgaGVpZ2h0OjEwMHZoO1xuICAgIHdpZHRoOmF1dG87IFxuICB9XG4gIFxuICAuc2xpZGVyLXNsaWRlIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2aDtcbiAgfVxuIFxuXG4gIC5idXR0b24tc2F2ZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTUlO1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIG1hcmdpbjogMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogIzFhYWQxOTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG4gIGlvbi1zY3JvbGx7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIFxuICAgIC5zY3JvbGwtem9vbS13cmFwcGVye1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgfVxuICB9XG4gICJdfQ== */"

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
    function HomePage(nativeGeocoder, googlePlus, nativeStorage, commonservice, loadingController, modalController, router, geolocation, route) {
        this.nativeGeocoder = nativeGeocoder;
        this.googlePlus = googlePlus;
        this.nativeStorage = nativeStorage;
        this.commonservice = commonservice;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.router = router;
        this.geolocation = geolocation;
        this.route = route;
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
                alert('Result ::' + JSON.stringify(result[0].toString()));
                _this.locationname = result[0].thoroughfare + result[0].subLocality + result[0].subAdministrativeArea;
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
            alert('Products :: ' + JSON.stringify(success.nearby_restaurants));
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
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map