(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["autocomplete-autocomplete-module"],{

/***/ "./src/app/autocomplete/autocomplete.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/autocomplete/autocomplete.module.ts ***!
  \*****************************************************/
/*! exports provided: AutocompletePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompletePageModule", function() { return AutocompletePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _autocomplete_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./autocomplete.page */ "./src/app/autocomplete/autocomplete.page.ts");







var routes = [
    {
        path: '',
        component: _autocomplete_page__WEBPACK_IMPORTED_MODULE_6__["AutocompletePage"]
    }
];
var AutocompletePageModule = /** @class */ (function () {
    function AutocompletePageModule() {
    }
    AutocompletePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_autocomplete_page__WEBPACK_IMPORTED_MODULE_6__["AutocompletePage"]]
        })
    ], AutocompletePageModule);
    return AutocompletePageModule;
}());



/***/ }),

/***/ "./src/app/autocomplete/autocomplete.page.html":
/*!*****************************************************!*\
  !*** ./src/app/autocomplete/autocomplete.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>Enter address</ion-title>\n      <ion-searchbar [(ngModel)]=\"autocomplete.query\" [showCancelButton]=\"true\"   (ionInput)=\"updateSearch()\" (ionCancel)=\"dismiss()\"></ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n      <ion-item *ngFor=\"let item of autocompleteItems\" tappable   (click)=\"chooseItem(item)\">\n        {{ item }}\n      </ion-item>\n    </ion-list>\n  </ion-content>"

/***/ }),

/***/ "./src/app/autocomplete/autocomplete.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/autocomplete/autocomplete.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/autocomplete/autocomplete.page.ts":
/*!***************************************************!*\
  !*** ./src/app/autocomplete/autocomplete.page.ts ***!
  \***************************************************/
/*! exports provided: AutocompletePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompletePage", function() { return AutocompletePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AutocompletePage = /** @class */ (function () {
    function AutocompletePage() {
    }
    AutocompletePage.prototype.ngOnInit = function () {
    };
    AutocompletePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-autocomplete',
            template: __webpack_require__(/*! ./autocomplete.page.html */ "./src/app/autocomplete/autocomplete.page.html"),
            styles: [__webpack_require__(/*! ./autocomplete.page.scss */ "./src/app/autocomplete/autocomplete.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AutocompletePage);
    return AutocompletePage;
}());



/***/ })

}]);
//# sourceMappingURL=autocomplete-autocomplete-module.js.map