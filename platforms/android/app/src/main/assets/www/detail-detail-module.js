(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-detail-module"],{

/***/ "./src/app/detail/detail.module.ts":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.module.ts ***!
  \*****************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/detail/detail.page.ts");







var routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]
    }
];
var DetailPageModule = /** @class */ (function () {
    function DetailPageModule() {
    }
    DetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
        })
    ], DetailPageModule);
    return DetailPageModule;
}());



/***/ }),

/***/ "./src/app/detail/detail.page.html":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n      <ion-buttons (click)=\"close()\" style=\"margin-left: 17px;\" end float-left color=\"primary\">Back</ion-buttons>\n    <ion-title text-center>Details</ion-title>\n  </ion-toolbar>\n  \n</ion-header> -->\n<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"home\"></ion-back-button>\n          \n      </ion-buttons>\n      Menu\n    </ion-toolbar>\n  </ion-header>\n<ion-content>\n    <!-- <ion-card *ngFor=\"let item of userData\">\n        <img class=\"imgHeight\" src=\"{{item.photo.thumb_url}}\" />\n        <ion-card-content>\n            <ion-item>\n                <ion-avatar slot=\"start\">\n                  <img src=\"{{item.photo.user.profile_image}}\">\n                </ion-avatar>\n                <ion-label [innerHTML]=\"item.photo.user.name\"></ion-label>\n              </ion-item>\n           <div class=\"foodie\"> foodie level : <span [innerHTML]=\"item.photo.user.foodie_level\"></span></div>\n           \n          <div class=\"foodie\"> foodie level : <span [innerHTML]=\"item.photo.user.foodie_level_num\"></span></div>\n        </ion-card-content>\n      </ion-card> -->\n      <ion-item *ngFor=\"let item of menuitems\">\n        <ion-avatar slot=\"start\">\n          <img src=\"{{item.image}}\" />\n        </ion-avatar>\n          \n        <ion-label>\n          <h2>{{ item.name }}</h2>\n          <h3>Price : {{ item.price }}</h3>\n          <h4>Available :{{ item.available }}</h4>\n        </ion-label>\n        <ion-grid>\n            <ion-row>\n              <ion-col size=\"6\">\n                  <div class=\"flex_row\">\n                      <p ng-click=\"sub(item)\" >\n                        <span><ion-icon name=\"md-add\"></ion-icon></span>\n                      </p>\n                      &nbsp;<p> {{item.price}} </p>&nbsp;\n                      <p ng-click=\"add(item)\">\n                          <span><ion-icon name=\"md-remove\"></ion-icon></span>\n                      </p>\n                    </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n      </ion-item>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/detail/detail.page.scss":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-inner {\n  border-bottom: none !important; }\n\n.imgHeight {\n  height: 250px; }\n\n.foodie {\n  margin-top: 10px; }\n\nion-avatar,\nion-avatar > img {\n  border-radius: 6%;\n  height: 5rem;\n  width: 5rem; }\n\n.red:before {\n  color: red; }\n\n.green:before {\n  color: green; }\n\n.flex_row {\n  display: flex;\n  flex-direction: row; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5kYW4vUHJvamVjdHMvbXlzdHVmZi96b21hdG9Gb29kRGVsaXZlcnlBcHAvc3JjL2FwcC9kZXRhaWwvZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUE4QixFQUFBOztBQUVsQztFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7O0VBRUksaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxXQUFVLEVBQUE7O0FBR2Q7RUFDSSxVQUFVLEVBQUE7O0FBR1Y7RUFDQSxZQUFZLEVBQUE7O0FBR1o7RUFFQSxhQUFhO0VBRWIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWwvZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLWlubmVye1xuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cbi5pbWdIZWlnaHR7XG4gICAgaGVpZ2h0OiAyNTBweDtcbn1cbi5mb29kaWV7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLWF2YXRhcixcbmlvbi1hdmF0YXIgPiBpbWd7XG4gICAgYm9yZGVyLXJhZGl1czo2JTtcbiAgICBoZWlnaHQ6NXJlbTtcbiAgICB3aWR0aDo1cmVtO1xufVxuXG4ucmVkOmJlZm9yZSB7XG4gICAgY29sb3I6IHJlZDtcbiAgICB9XG5cbiAgICAuZ3JlZW46YmVmb3JlIHtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgfVxuXG4gICAgLmZsZXhfcm93IHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7IFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/detail/detail.page.ts":
/*!***************************************!*\
  !*** ./src/app/detail/detail.page.ts ***!
  \***************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");





var DetailPage = /** @class */ (function () {
    function DetailPage(route, modalCtrl, common) {
        this.route = route;
        this.modalCtrl = modalCtrl;
        this.common = common;
        // this.route.queryParams.subscribe(params => {
        //   if (params && params.special) {
        //     this.userData = JSON.parse(params.special);
        //     alert('LoggedIn User Data ::' + JSON.stringify(this.userData));
        //   }
        // });
        // this.userData = localStorage.getItem('prevdata');
        // alert('details' + this.userData);
    }
    DetailPage.prototype.ngOnInit = function () {
        var _this = this;
        //  this.userData = localStorage.getItem('prevdata');
        //  alert('details' + this.userData);
        this.common.getMenu().subscribe(function (data) {
            // alert('data'+ JSON.stringify(data));
            _this.menu = data;
            _this.menuitems = _this.menu.menu;
            // alert('Data ::- '+ JSON.stringify(this.menu.menu[0].description));
        });
    };
    DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.page.html */ "./src/app/detail/detail.page.html"),
            styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/detail/detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], DetailPage);
    return DetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=detail-detail-module.js.map