(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: loadRemoteChildren, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRemoteChildren", function() { return loadRemoteChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _apps_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apps.configuration */ "./src/app/apps.configuration.ts");





/**
 * Lazy load remote bundle (AOT compatible!)
 */
const loadRemoteChildren = (configuration) => {
    // const importUrl = !!environment.devModulePrefixPath && name === environment.devModuleName
    //   ? `${environment.devModulePrefixPath}/bundle.umd.min.js` : `${url}/bundle.umd.min.js`;
    // const importUrl = '../../../entry/entry.module#EntryModule';
    const importUrl = `${configuration.devUrl || configuration.url}/bundle.umd.min.js`;
    return SystemJS.import(importUrl)
        .then(entryModule => entryModule.EntryModule)
        .catch(err => {
        handleLoadError(importUrl, err);
    });
};
const handleLoadError = function (url, err) {
    const msg = `Failed to load service from '${url}'.`;
    console.error(msg, err);
    // const msgEncoded = encodeURIComponent(msg);
    // window.location.href = `/error/${msgEncoded}`;
};
const routes = [
    {
        path: 'services',
        children: Object(_apps_configuration__WEBPACK_IMPORTED_MODULE_4__["getApps"])().map(item => {
            return {
                path: item.path,
                loadChildren: () => loadRemoteChildren(item)
            };
        })
    },
    {
        path: 'error/:msg',
        component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"]
    },
    {
        path: 'error',
        component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-panel\">\n\n  <div style=\"text-align:center\">\n    <div class=\"github\">\n      <a class=\"github-button\" href=\"https://github.com/marfusios/micro-frontend-gateway\"\n         data-size=\"large\"\n         aria-label=\"Star marfusios/micro-frontend-gateway on GitHub\">Git repo</a>\n    </div>\n    <h1>\n      GATEWAY\n    </h1>\n    <span>to micro frontends</span>\n  </div>\n\n  <app-navigation></app-navigation>\n\n</div>\n\n<div class=\"content-panel\">\n\n  <router-outlet></router-outlet>\n\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-panel {\n  border-bottom: 1px solid #999999;\n  padding-bottom: 10px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2); }\n\n.content-panel {\n  padding-top: 20px; }\n\nh1 {\n  display: inline-block; }\n\n.github {\n  position: absolute;\n  left: 10px;\n  top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9NYXJmdXNpb3MvbWljcm8tZnJvbnRlbmQtZ2F0ZXdheS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFnQztFQUNoQyxxQkFBb0I7RUFDcEIsMkNBQXNDLEVBQ3ZDOztBQUVEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0Usc0JBQXFCLEVBQ3RCOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixVQUFTLEVBQ1YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLXBhbmVsIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk5OTk7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4yKTtcbn1cblxuLmNvbnRlbnQtcGFuZWwge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuaDEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5naXRodWIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _apps_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apps.configuration */ "./src/app/apps.configuration.ts");
/* harmony import */ var _services_component_loader_service_component_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/component-loader-service/component-loader.service */ "./src/app/services/component-loader-service/component-loader.service.ts");




let AppComponent = class AppComponent {
    constructor(_componentLoaderService) {
        this._componentLoaderService = _componentLoaderService;
        this.loadGlobalBundles();
    }
    loadGlobalBundles() {
        Object(_apps_configuration__WEBPACK_IMPORTED_MODULE_2__["getApps"])().forEach(app => this._componentLoaderService.updateModule(app));
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_component_loader_service_component_loader_service__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _services_component_loader_service_component_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/component-loader-service/component-loader.service */ "./src/app/services/component-loader-service/component-loader.service.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"],
            _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot({}),
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_1__["AgGridModule"].withComponents([]),
        ],
        providers: [
            _services_component_loader_service_component_loader_service__WEBPACK_IMPORTED_MODULE_10__["ComponentLoaderService"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/apps.configuration.ts":
/*!***************************************!*\
  !*** ./src/app/apps.configuration.ts ***!
  \***************************************/
/*! exports provided: getApps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApps", function() { return getApps; });
function getApps() {
    return [
        {
            title: 'MicroFrontend Alpha',
            name: 'alpha',
            path: 'alpha',
            url: 'http://mkotas.cz/micro-frontend-alpha',
        },
        {
            title: 'MicroFrontend Beta',
            name: 'beta',
            path: 'beta',
            url: 'http://mkotas.cz/micro-frontend-beta',
        },
    ];
}


/***/ }),

/***/ "./src/app/components/error/error.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"message-box\">\n    <div class=\"message\">{{message}}</div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/error/error.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 20px; }\n\n.message-box {\n  border: 1px solid indianred; }\n\n.message {\n  padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9NYXJmdXNpb3MvbWljcm8tZnJvbnRlbmQtZ2F0ZXdheS9zcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSw0QkFBMkIsRUFDNUI7O0FBRUQ7RUFDRSxhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5tZXNzYWdlLWJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGluZGlhbnJlZDtcbn1cblxuLm1lc3NhZ2Uge1xuICBwYWRkaW5nOiA1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ErrorComponent = class ErrorComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.activatedRoute.params.subscribe(params => {
            const msgParam = params['msg'];
            const msgDecoded = decodeURIComponent(msgParam);
            this.message = msgDecoded;
        });
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ErrorComponent.prototype, "message", void 0);
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: __webpack_require__(/*! ./error.component.html */ "./src/app/components/error/error.component.html"),
        styles: [__webpack_require__(/*! ./error.component.scss */ "./src/app/components/error/error.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], ErrorComponent);



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul>\n    <li><a routerLink=\"services/alpha\" routerLinkActive=\"active\">ALPHA service</a></li>\n    <li><a routerLink=\"services/beta\" routerLinkActive=\"active\">BETA service</a></li>\n    <li style=\"float:right\"><a href=\"https://github.com/Marfusios/micro-frontend-gateway\" target=\"_blank\">About</a></li>\n  </ul>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: transparent; }\n\nli {\n  float: left;\n  border-right: 1px solid #bbb; }\n\nli:last-child {\n  border-right: none; }\n\nli a {\n  display: block;\n  color: #333333;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none; }\n\nli a:hover:not(.active) {\n  background-color: #eee; }\n\n.active {\n  background-color: #3949ab;\n  color: #F6F7FC !important; }\n\n.container {\n  margin-left: 10px;\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9NYXJmdXNpb3MvbWljcm8tZnJvbnRlbmQtZ2F0ZXdheS9zcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL01hcmZ1c2lvcy9taWNyby1mcm9udGVuZC1nYXRld2F5L3NyYy9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFxQjtFQUNyQixVQUFTO0VBQ1QsV0FBVTtFQUNWLGlCQUFnQjtFQUNoQiw4QkFBNkIsRUFDOUI7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsNkJBQTJCLEVBQzVCOztBQUVEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsZUFBYztFQUNkLGVDcEJxQjtFRHFCckIsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSx1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSwwQkN4Qm9CO0VEeUJwQiwwQkFBdUMsRUFDeEM7O0FBRUQ7RUFDRSxrQkFBaUI7RUFDakIsbUJBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vZ2xvYmFsXCI7XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5saSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNiYmI7XG59XG5cbmxpOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbmxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICR0ZXh0QmFzZUNvbG9yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5saSBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeUNvbG9yO1xuICBjb2xvcjogJGJhY2tncm91bmRMaWdodENvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuIiwiXG4kdGV4dEJhc2VDb2xvcjogIzMzMzMzMztcbiR0ZXh0U3ViSGVhZGVyQ29sb3I6ICM2NjY2NjY7XG4kdGV4dERpc2FibGVkQ29sb3I6ICM5OTk5OTk7XG5cbiRiYWNrZ3JvdW5kQmFzZUNvbG9yOiAjZmZmZmZmO1xuJGJhY2tncm91bmRMaWdodENvbG9yOiAjRjZGN0ZDO1xuXG4kcHJpbWFyeUNvbG9yOiAjMzk0OWFiO1xuJHNlY29uZGFyeUNvbG9yOiAjZGNkMDRjO1xuIl19 */"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavigationComponent = class NavigationComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
        styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavigationComponent);



/***/ }),

/***/ "./src/app/services/component-loader-service/component-loader.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/services/component-loader-service/component-loader.service.ts ***!
  \*******************************************************************************/
/*! exports provided: ComponentLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLoaderService", function() { return ComponentLoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


function _window() {
    return window;
}
let ComponentLoaderService = class ComponentLoaderService {
    constructor(_compiler) {
        this._compiler = _compiler;
        _window().AppGlobalComponent = _window().AppGlobalComponent || {};
    }
    updateModule(configuration) {
        // const importUrl = !!environment.devModulePrefixPath && name === environment.devModuleName
        // ? `${environment.devModulePrefixPath}/global.bundle.umd.min.js` : `${configuration.url}/global.bundle.umd.min.js`;
        const importUrl = `${configuration.devUrl || configuration.url}/global.bundle.umd.min.js`;
        SystemJS.import(importUrl)
            .then(globalModule => {
            const factories = this._compiler.compileModuleAndAllComponentsSync(globalModule.GlobalModule);
            factories.componentFactories.forEach(item => {
                this.addOrReplaceComponent(item.selector, item);
            });
        })
            .catch(err => {
            console.error(`Failed to load global bundle: ${importUrl}. ${err}`);
        });
    }
    addOrReplaceComponent(name, factory) {
        _window().AppGlobalComponent[name] = factory;
    }
};
ComponentLoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"]])
], ComponentLoaderService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    devModuleName: '',
    devModulePrefixPath: ''
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_16__);


















SystemJS.set('jquery', SystemJS.newModule(jquery__WEBPACK_IMPORTED_MODULE_4__));
SystemJS.set('@angular/core', SystemJS.newModule(_angular_core__WEBPACK_IMPORTED_MODULE_0__));
SystemJS.set('@angular/common', SystemJS.newModule(_angular_common__WEBPACK_IMPORTED_MODULE_5__));
SystemJS.set('@angular/common/http', SystemJS.newModule(_angular_common_http__WEBPACK_IMPORTED_MODULE_6__));
SystemJS.set('@angular/router', SystemJS.newModule(_angular_router__WEBPACK_IMPORTED_MODULE_7__));
SystemJS.set('@angular/forms', SystemJS.newModule(_angular_forms__WEBPACK_IMPORTED_MODULE_8__));
SystemJS.set('@angular/animations', SystemJS.newModule(_angular_animations__WEBPACK_IMPORTED_MODULE_9__));
SystemJS.set('@angular/platform-browser', SystemJS.newModule(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__));
SystemJS.set('@angular/platform-browser/animations', SystemJS.newModule(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__));
SystemJS.set('ag-grid-angular', SystemJS.newModule(ag_grid_angular__WEBPACK_IMPORTED_MODULE_16__));
SystemJS.set('rxjs', SystemJS.newModule(rxjs__WEBPACK_IMPORTED_MODULE_10__));
SystemJS.set('rxjs/operators', SystemJS.newModule(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__));
SystemJS.set('tslib', SystemJS.newModule(tslib__WEBPACK_IMPORTED_MODULE_12__));
SystemJS.set('@ngrx/store', SystemJS.newModule(_ngrx_store__WEBPACK_IMPORTED_MODULE_13__));
// SystemJS.set('ace-builds/src-noconflict/ace', SystemJS.newModule(ace));
// SystemJS.set('ace-builds/src-noconflict/theme-chrome', SystemJS.newModule(aceChrome));
// SystemJS.set('ace-builds/src-noconflict/mode-html.js', SystemJS.newModule(aceHtml));
// SystemJS.set('ace-builds/src-noconflict/mode-sql.js', SystemJS.newModule(aceSql));
// SystemJS.set('froala-editor/js/froala_editor.min.js', SystemJS.newModule(froalaEditor));
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/Marfusios/micro-frontend-gateway/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map