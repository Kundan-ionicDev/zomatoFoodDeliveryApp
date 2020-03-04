(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "./src/app/account/account.page.ts");







var routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]
    }
];
var AccountPageModule = /** @class */ (function () {
    function AccountPageModule() {
    }
    AccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
        })
    ], AccountPageModule);
    return AccountPageModule;
}());



/***/ }),

/***/ "./src/app/account/account.page.html":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n\n      <ion-title>Kundan Sakpal</ion-title>\n  \n      <ion-buttons end>\n        <button ion-button icon-only>\n          <ion-icon name=\"person-add\" class=\"badge-container\">\n            <span class=\"custom-badge\">3</span>\n          </ion-icon>\n        </button>\n        <button ion-button icon-only (click)=\"goOptions()\">\n          <ion-icon name=\"more\"></ion-icon>\n        </button>\n      </ion-buttons>\n  \n  </ion-header> -->\n  <ion-header>\n      <ion-toolbar>\n        <ion-avatar slot=\"start\"> \n          <span><ion-icon name=\"account\"></ion-icon></span>\n          <ion-title>Kundan Sakpal</ion-title>\n        </ion-avatar>\n      </ion-toolbar>\n    </ion-header>\n  <ion-content>\n  \n      <ion-row padding>\n      <!-- Avatar -->\n      <ion-col col-3>\n          <ion-item>\n              <ion-avatar slot=\"start\">\n                <img src=\"../../assets/avatar/kundan.jpg\" />\n              </ion-avatar>\n              \n              <ion-label>\n                <h2>Kundan Sakpal</h2>\n                <h3>kundansakpal@gmail.com</h3>\n              </ion-label>\n            </ion-item>\n      </ion-col>\n      \n    </ion-row>\n   \n    <!-- Edit/follow button -->\n    <!-- <ion-row no-padding no-margin>\n      <ion-col no-padding no-margin col-4></ion-col>\n        <ion-col no-padding no-margin text-center col-8>\n        <button class=\"edit-button\" (click)=\"goEditProfile()\">Edit your profile</button>\n      </ion-col>\n      <ion-col col-3></ion-col>\n    </ion-row> -->\n  \n    <!-- Profile info -->\n    <div padding>\n      <p no-margin no-padding><b>Address</b></p>\n      <p no-padding no-margin class=\"info\">Flat no B 404, Royal Palace, Andheri East Chakala Mumbai 400099</p>\n    </div>\n  \n   \n  \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/account/account.page.scss":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Profile avatar */\n.avatar {\n  border-radius: 100%;\n  position: absolute; }\n/* Small for notifications */\n.badge-container {\n  position: relative; }\n.custom-badge {\n  position: absolute;\n  top: 5px;\n  left: 15px;\n  border-radius: 100%;\n  color: #fff;\n  font-size: 12px !important;\n  padding: 4px;\n  font-weight: bold; }\n.info {\n  padding-top: 4px; }\n/* Profile edit button */\n.edit-button {\n  background: #fff;\n  border: 1px solid #ccc;\n  font-size: 13px;\n  border-radius: 3px;\n  padding: 5px;\n  font-weight: bold;\n  width: 90%;\n  margin-right: 30px; }\n.edit-button:active {\n  border-color: #dce2ed; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5kYW4vUHJvamVjdHMvbXlzdHVmZi96b21hdG9Gb29kRGVsaXZlcnlBcHAvc3JjL2FwcC9hY2NvdW50L2FjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFBO0FBQ0E7RUFDSSxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7QUFHcEIsNEJBQUE7QUFDQTtFQUNFLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0Usa0JBQWlCO0VBQ2pCLFFBQU87RUFDUCxVQUFTO0VBRVQsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsZ0JBQWdCLEVBQUE7QUFHbEIsd0JBQUE7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFByb2ZpbGUgYXZhdGFyICovXG4uYXZhdGFyIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuXG4gIC8qIFNtYWxsIGZvciBub3RpZmljYXRpb25zICovXG4gIC5iYWRnZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5jdXN0b20tYmFkZ2Uge1xuICAgIHBvc2l0aW9uOmFic29sdXRlOyBcbiAgICB0b3A6NXB4OyBcbiAgICBsZWZ0OjE1cHg7IFxuICAgIC8vYmFja2dyb3VuZDogbWFwLWdldChkYW5nZXIpOyBcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlOyBcbiAgICBjb2xvcjogI2ZmZjsgXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogNHB4OyBcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5pbmZvIHtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICB9XG5cbiAgLyogUHJvZmlsZSBlZGl0IGJ1dHRvbiAqL1xuICAuZWRpdC1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7IFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxuICAgIGZvbnQtc2l6ZTogMTNweDsgXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgfVxuXG4gIC5lZGl0LWJ1dHRvbjphY3RpdmUge1xuICAgIGJvcmRlci1jb2xvcjogI2RjZTJlZDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/account/account.page.ts":
/*!*****************************************!*\
  !*** ./src/app/account/account.page.ts ***!
  \*****************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccountPage = /** @class */ (function () {
    function AccountPage() {
        this.logindetails = localStorage.getItem("logindata");
        alert('logindetails' + JSON.stringify(this.logindetails));
    }
    AccountPage.prototype.ngOnInit = function () {
    };
    AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.page.html */ "./src/app/account/account.page.html"),
            styles: [__webpack_require__(/*! ./account.page.scss */ "./src/app/account/account.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccountPage);
    return AccountPage;
}());



/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map