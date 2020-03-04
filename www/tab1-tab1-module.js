(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]
    }
];
var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"widget_wrap\" style=\"width:100%;height:100%;display:inline-block;\">\n    <iframe src=\"https://www.zomato.com/widgets/all_collections.php?city_id=3&language_id=1&theme=dark&widgetType=large\" \n    style=\"position:relative;width:100%;height:100%;\" border=\"0\" frameborder=\"0\"></iframe></div> -->\n<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"home\"></ion-back-button>\n            \n        </ion-buttons>\n        Search\n    </ion-toolbar>\n</ion-header>\n      \n<ion-content>\n    <!-- Searchbar with cancel button always shown -->\n    <ion-searchbar animated placeholder=\"search for restaurant, receipe etc\"></ion-searchbar>\n\n    <ion-slides #slides [options]=\"sliderConfig\">\n        <ion-slide *ngFor=\"let s of categories\"> \n            <ion-button shape=\"round\" type=\"submit\" color=\"primary\">{{ s.categories.name }}</ion-button>\n        </ion-slide>\n    </ion-slides>\n      \n\n    <ion-item *ngFor=\"let item of data\">\n        <ion-avatar slot=\"start\">\n            <img src=\"{{item.restaurant.featured_image}}\" />\n        </ion-avatar>\n        \n        <ion-label>\n            <h2>{{ item.restaurant.name }}</h2>\n            <h3>{{ item.restaurant.location.address }}</h3>\n            <h4>{{ item.restaurant.timings }}</h4>\n            <ion-grid>\n            <ion-row>\n                <ion-col size=\"4\">\n                <h4>* {{ item.restaurant.user_rating.aggregate_rating }}</h4>\n                </ion-col>\n                <ion-col size=\"4\">\n                <h4>{{ 24 }} mins</h4>\n                </ion-col>\n                <ion-col size=\"4\">\n                <h4> {{ item.restaurant.average_cost_for_two}} for two</h4>\n            </ion-col>\n            </ion-row>\n            </ion-grid>\n        </ion-label>\n    </ion-item>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var Tab1Page = /** @class */ (function () {
    function Tab1Page(commonservice) {
        this.commonservice = commonservice;
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
        this.getcategories();
        alert('Latitude :' + this.commonservice.latitude + 'Longitude :' + this.commonservice.longitude);
        this.getSearchResults(this.commonservice.latitude, this.commonservice.longitude);
    }
    Tab1Page.prototype.ngOnInit = function () {
        // this.geocode = localStorage.getItem('geocode');
    };
    Tab1Page.prototype.getcategories = function () {
        var _this = this;
        this.commonservice.showLoading("please wait");
        this.commonservice.getcategories().subscribe(function (success) {
            _this.categories = success.categories;
            _this.commonservice.dismissLoading();
        });
    };
    Tab1Page.prototype.getSearchResults = function (latitude, longitude) {
        var _this = this;
        alert('Latitude Longitude  ::' + latitude + longitude);
        this.commonservice.showLoading("please wait");
        this.commonservice.getSearchResults(latitude, longitude, 'Chinese').subscribe(function (success) {
            _this.searchresults = success;
            _this.data = _this.searchresults.restaurants;
            alert('this.searchresults' + JSON.stringify(_this.searchresults));
            _this.commonservice.dismissLoading();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
    ], Tab1Page.prototype, "slides", void 0);
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map