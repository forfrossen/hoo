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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer *ngIf=\"removeFooter()\"></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-scrollreveal */ "./node_modules/ngx-scrollreveal/esm5/ngx-scrollreveal.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location, config) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
        this.renderer.listenGlobal('window', 'scroll', function (event) {
            var number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            }
            else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]),
        __metadata("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            providers: [ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_6__["NgsRevealConfig"]]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_6__["NgsRevealConfig"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-scrollreveal */ "./node_modules/ngx-scrollreveal/esm5/ngx-scrollreveal.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_11__["HomeModule"],
                ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_6__["NgsRevealModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"] },
    { path: '', redirectTo: 'forbidden', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/band/band.component.html":
/*!******************************************!*\
  !*** ./src/app/band/band.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n\t<div class=\"section section-dark\" ngsReveal>\r\n\t\t<figure class=\"image_container\">\r\n\t\t\t<img src=\"assets/img/band2.jpg\" alt=\"\"/>\r\n\t\t</figure>\r\n\t</div>\r\n\r\n\t<div class=\"section section-dark\" ngsReveal>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">                  \r\n\t\t\t\t<div class=\"col-lg-12 col-md-12\">\r\n\r\n\t\t\t\t\t<h2 class=\"headline\">\r\n\t\t\t\t\t\tBAND\r\n\t\t\t\t\t</h2>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tNot to be forgotten: Halls of Oblivion!\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tUnlike the name might suggest; Halls of Oblivion will stick in your memory.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tDeep in the gloomy \"halls of oblivion\", a tender melody and a whispered word suddenly become a roaring composition with brutal riffs and heavy words. Merciless and honest, the depths of the human soul are awaiting the listener within fictional walls. Internal unrest seeks its way through silence and oblivion in an aggressive and desperate way, thereby obtaining a hearing.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tGoose bumps guaranteed!\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tThe creations of the four handsome men from Vaihingen/Enz represent a cruel, sorrowful ambiance. Halls of Oblivion unveil themes that are often kept secret but should not be forgotten. In doing so, they demonstrate their musical skills and sense of the subtleties of melodic death metal. Influences of black and doom metal complement the use of synthesizers, thus creating a unique atmosphere.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tSince their foundation in 2007/2008, Halls of Oblivion were able to refine their style through personal and common experiences. Since then, it has become more and more apparent what eventually took shape in 2014: A blend more peaceful than melodic death metal, more melodic than black metal, more harmonic than death metal - yet equally complex, graceful and merciless as our existence.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tThe music is mainly written by vocalist and rhythm guitarist Sebastian Ruf, who gives the songs a black metal vibe; as well as lead guitarist Marcel Welte, who skillfully brings it in accordance with melancholic melodies. Markus Kristen is responsible for the recordings and bass guitar, thereby anchoring the harmonic framework of the songs, while Markus Weber provides the final creative touches with his drumming.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tThe longtime friends are an experienced team that is ready to become popular well above the ceiling of the halls. \r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tTheir debut EP „The Blind Legion“ was released in 2015 (digital re-release in 2016). The first full-length album of the quartet “Endtime Poetry” will be published 14th of June 2019 and refines the characteristic style of the band, thereby likewise attracting fans of melodic death and black metal.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tStep inside - the halls of oblivion!\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"section section-dark\" ngsReveal>\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-6 text-center\">\r\n\t\t\t\t\t\t<h2 class=\"title\">Lineup</h2>\r\n\t\t\t\t\t\t<p class=\"description center\">\r\n\t\t\t\t\t\t\tMarcel Welte - Lead Guitar<br />\r\n\t\t\t\t\t\t\tSebastian Ruf - Vocal + Rhythm Guitar<br />\r\n\t\t\t\t\t\t\tMarkus Kriten - Bass<br />\r\n\t\t\t\t\t\t\tMarkus Weber - Drums<br />\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6 text-center\">\r\n\t\t\t\t\t\t\t<h2 class=\"title\">Contact</h2>\r\n\t\t\t\t\t\t<p class=\"description center\">\r\n\t\t\t\t\t\t\tBand: kontakt@hallsofoblivion.de<br />\r\n\t\t\t\t\t\t\tBooking: booking@hallsofoblivion.de<br />\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n</div>"

/***/ }),

/***/ "./src/app/band/band.component.scss":
/*!******************************************!*\
  !*** ./src/app/band/band.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".band {\n  background: url('band.jpg');\n  margin-bottom: 0px;\n  border-radius: 0px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position-x: center;\n  background-position-y: -250px;\n  height: 30rem;\n  border-top: 2px solid grey;\n  border-bottom: 2px solid grey; }\n\n.image_container {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  border-top: 2px solid grey;\n  border-bottom: 2px solid grey;\n  margin: 0px !important; }\n\n.text-center p.description {\n  text-align: center !important; }\n\n/*      light colors - used for select dropdown         */\n\n.headline {\n  font-family: 'Times New Roman', Times, serif !important;\n  text-transform: uppercase !important;\n  text-align: center;\n  margin-top: 1em;\n  margin-bottom: 0.3em;\n  overflow: hidden;\n  clear: both;\n  margin: 0.67em 0;\n  color: #FFFFFF; }\n\n.headline::before, .headline::after {\n  content: \"\";\n  border: 0;\n  height: 1px;\n  background-repeat: repeat-x;\n  border-top: 0px;\n  display: inline-block;\n  vertical-align: middle;\n  width: 100%;\n  clear: both;\n  overflow: visible;\n  margin: 2.4em 0;\n  margin-bottom: 5px !important; }\n\n.headline::before {\n  background-image: linear-gradient(to right, #0b1011, #0b1011, #0b1011, #FFFFFF);\n  margin: 0 0.66667em 0 -100%; }\n\n.headline::after {\n  background-image: linear-gradient(to right, #FFFFFF, #0b1011, #0b1011, #0b1011);\n  margin: 0 -100% 0 0.66667em; }\n\nimg {\n  width: 100%;\n  max-width: 100%;\n  border: 0; }\n\n.section-dark {\n  padding: 2.5rem 0rem !important; }\n"

/***/ }),

/***/ "./src/app/band/band.component.ts":
/*!****************************************!*\
  !*** ./src/app/band/band.component.ts ***!
  \****************************************/
/*! exports provided: BandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandComponent", function() { return BandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BandComponent = /** @class */ (function () {
    function BandComponent() {
    }
    BandComponent.prototype.ngOnInit = function () {
    };
    BandComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-band',
            template: __webpack_require__(/*! ./band.component.html */ "./src/app/band/band.component.html"),
            styles: [__webpack_require__(/*! ./band.component.scss */ "./src/app/band/band.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], BandComponent);
    return BandComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"page-header section-dark\">\r\n        <div class=\"filter\"></div>\r\n        <div class=\"content-center\">\r\n            <div class=\"container\">\r\n                <div class=\"title-brand\">\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"moving-clouds\" style=\"background-image: url('assets/img/clouds.png'); \"></div>\r\n    </div>\r\n    <div class=\"main\">\r\n\t\t<!--<app-components></app-components>-->\r\n\t\t<app-news></app-news>\r\n\t\t<app-live #live></app-live>\r\n\t\t<app-band #band></app-band>\r\n\t\t<app-media #media></app-media>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header {\n  background: url('coverart.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position-x: center;\n  background-position-y: 0px; }\n\n::ng-deep .section-dark {\n  padding: 8rem 0rem !important;\n  background-image: url('zwartevilt.png');\n  background-size: auto;\n  background-position: 50% 50%;\n  background-repeat: repeat;\n  bottom: auto; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.model = {
            left: true,
            middle: false,
            right: false
        };
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var app_live_live_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/live/live.component */ "./src/app/live/live.component.ts");
/* harmony import */ var app_band_band_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/band/band.component */ "./src/app/band/band.component.ts");
/* harmony import */ var app_news_news_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var app_media_media_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/media/media.component */ "./src/app/media/media.component.ts");
/* harmony import */ var ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-scrollreveal */ "./node_modules/ngx-scrollreveal/esm5/ngx-scrollreveal.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_10__["NgsRevealModule"],
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                app_live_live_component__WEBPACK_IMPORTED_MODULE_6__["LiveComponent"],
                app_band_band_component__WEBPACK_IMPORTED_MODULE_7__["BandComponent"],
                app_news_news_component__WEBPACK_IMPORTED_MODULE_8__["NewsComponent"],
                app_media_media_component__WEBPACK_IMPORTED_MODULE_9__["MediaComponent"],
            ],
            exports: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('./assets/img/daniel-olahh.jpg');\">\r\n    <div class=\"filter\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"motto text-center\">\r\n            <h1>Example page</h1>\r\n            <h3>Start designing your landing page here.</h3>\r\n            <br />\r\n            <a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" class=\"btn btn-outline-neutral btn-round\"><i class=\"fa fa-play\"></i>Watch video</a>\r\n            <button type=\"button\" class=\"btn btn-outline-neutral btn-round\">Download</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"main\">\r\n    <div class=\"section text-center\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 mr-auto ml-auto\">\r\n                <h2 class=\"title\">Let's talk product</h2>\r\n                <h5 class=\"description\">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>\r\n                <br>\r\n                <a href=\"#paper-kit\" class=\"btn btn-danger btn-round\">See Details</a>\r\n            </div>\r\n        </div>\r\n        <br/><br/>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <div class=\"info\">\r\n                    <div class=\"icon icon-danger\">\r\n                        <i class=\"nc-icon nc-album-2\"></i>\r\n                    </div>\r\n                    <div class=\"description\">\r\n                        <h4 class=\"info-title\">Beautiful Gallery</h4>\r\n                        <p class=\"description\">Spend your time generating new ideas. You don't have to think of implementing.</p>\r\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"info\">\r\n                    <div class=\"icon icon-danger\">\r\n                        <i class=\"nc-icon nc-bulb-63\"></i>\r\n                    </div>\r\n                    <div class=\"description\">\r\n                        <h4 class=\"info-title\">New Ideas</h4>\r\n                        <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>\r\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"info\">\r\n                    <div class=\"icon icon-danger\">\r\n                        <i class=\"nc-icon nc-chart-bar-32\"></i>\r\n                    </div>\r\n                    <div class=\"description\">\r\n                        <h4 class=\"info-title\">Statistics</h4>\r\n                        <p>Choose from a veriety of many colors resembling sugar paper pastels.</p>\r\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"info\">\r\n                    <div class=\"icon icon-danger\">\r\n                        <i class=\"nc-icon nc-sun-fog-29\"></i>\r\n                    </div>\r\n                    <div class=\"description\">\r\n                        <h4 class=\"info-title\">Delightful design</h4>\r\n                        <p>Find unique and handmade delightful designs related items directly from our sellers.</p>\r\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class=\"section section-dark text-center\">\r\n    <div class=\"container\">\r\n        <h2 class=\"title\">Let's talk about us</h2>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card card-profile card-plain\">\r\n                    <div class=\"card-avatar\">\r\n                        <a href=\"#avatar\"><img src=\"./assets/img/faces/clem-onojeghuo-3.jpg\" alt=\"...\"></a>\r\n                    </div>\r\n                    <div class=\"card-block\">\r\n                        <a href=\"#paper-kit\">\r\n                            <div class=\"author\">\r\n                                <h4 class=\"card-title\">Henry Ford</h4>\r\n                                <h6 class=\"card-category\">Product Manager</h6>\r\n                            </div>\r\n                        </a>\r\n                        <p class=\"card-description text-center\">\r\n                        Teamwork is so important that it is virtually impossible for you to reach the heights of your capabilities or make the money that you want without becoming very good at it.\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"card-footer text-center\">\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card card-profile card-plain\">\r\n                    <div class=\"card-avatar\">\r\n                        <a href=\"#avatar\"><img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"...\"></a>\r\n                    </div>\r\n                    <div class=\"card-block\">\r\n                        <a href=\"#paper-kit\">\r\n                            <div class=\"author\">\r\n                                <h4 class=\"card-title\">Sophie West</h4>\r\n                                <h6 class=\"card-category\">Designer</h6>\r\n                            </div>\r\n                        </a>\r\n                        <p class=\"card-description text-center\">\r\n                        A group becomes a team when each member is sure enough of himself and his contribution to praise the skill of the others. No one can whistle a symphony. It takes an orchestra to play it.\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"card-footer text-center\">\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card card-profile card-plain\">\r\n                    <div class=\"card-avatar\">\r\n                        <a href=\"#avatar\"><img src=\"./assets/img/faces/erik-lucatero-2.jpg\" alt=\"...\"></a>\r\n                    </div>\r\n                    <div class=\"card-block\">\r\n                        <a href=\"#paper-kit\">\r\n                            <div class=\"author\">\r\n                                <h4 class=\"card-title\">Robert Orben</h4>\r\n                                <h6 class=\"card-category\">Developer</h6>\r\n                            </div>\r\n                        </a>\r\n                        <p class=\"card-description text-center\">\r\n                        The strength of the team is each individual member. The strength of each member is the team. If you can laugh together, you can work together, silence isn’t golden, it’s deadly.\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"card-footer text-center\">\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n    <div class=\"section landing-section\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 mr-auto ml-auto\">\r\n                    <h2 class=\"text-center\">Keep in touch?</h2>\r\n                    <form class=\"contact-form\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <label>Name</label>\r\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                      <span class=\"input-group-text\"><i class=\"nc-icon nc-single-02\"></i></span>\r\n                                    </div>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <label>Email</label>\r\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                      <span class=\"input-group-text\">  <i class=\"nc-icon nc-email-85\"></i></span>\r\n                                    </div>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" >\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <label>Message</label>\r\n                        <textarea class=\"form-control\" rows=\"4\" placeholder=\"Tell us your thoughts and feelings...\"></textarea>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4 mr-auto ml-auto\">\r\n                                <button class=\"btn btn-danger btn-lg btn-fill\">Send Message</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/landing/landing.component.scss":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () { };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/live/live.component.html":
/*!******************************************!*\
  !*** ./src/app/live/live.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" ngsReveal>\r\n\t<div class=\"jumbotron live\"></div>\r\n\r\n\t<div class=\"section section-dark\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-12 ml-auto mr-auto text-center\">\r\n\t\t\t\t\t<h2 class=\"title\">Live</h2>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-12 ml-auto mr-auto text-center\">\r\n\t\t\t\t\t<a class=\"bit-widget-initializer\" \r\n\t\t\t\t\t\tdata-artist-name=\"Halls Of Oblivion\"\r\n\t\t\t\t\t\tdata-display-local-dates=\"false\"\r\n\t\t\t\t\t\tdata-display-past-dates=\"false\"\r\n\t\t\t\t\t\tdata-auto-style=\"false\"\r\n\t\t\t\t\t\tdata-text-color=\"#FFFFFF\"\r\n\t\t\t\t\t\tdata-link-color=\"#aa0000\"\r\n\t\t\t\t\t\tdata-background-color=\"rgba(0,0,0,0)\"\r\n\t\t\t\t\t\tdata-display-limit=\"15\"\r\n\t\t\t\t\t\tdata-link-text-color=\"#FFFFFF\"\r\n\t\t\t\t\t\tdata-display-lineup=\"false\"\r\n\t\t\t\t\t\tdata-display-play-my-city=\"true\"\r\n\t\t\t\t\t\tdata-separator-color=\"rgba(124,124,124,0.25)\">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/live/live.component.scss":
/*!******************************************!*\
  !*** ./src/app/live/live.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron.live {\n  background: url('hoo_live.JPG') fixed center no-repeat;\n  background-size: cover;\n  margin-bottom: 0px;\n  border-radius: 0px;\n  height: 30rem; }\n\n:host {\n  margin: 100px 0px; }\n"

/***/ }),

/***/ "./src/app/live/live.component.ts":
/*!****************************************!*\
  !*** ./src/app/live/live.component.ts ***!
  \****************************************/
/*! exports provided: LiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveComponent", function() { return LiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LiveComponent = /** @class */ (function () {
    function LiveComponent() {
    }
    LiveComponent.prototype.ngOnInit = function () {
    };
    LiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-live',
            template: __webpack_require__(/*! ./live.component.html */ "./src/app/live/live.component.html"),
            styles: [__webpack_require__(/*! ./live.component.scss */ "./src/app/live/live.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LiveComponent);
    return LiveComponent;
}());



/***/ }),

/***/ "./src/app/media/media.component.html":
/*!********************************************!*\
  !*** ./src/app/media/media.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n\t<div class=\"section section-dark\" ngsReveal>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t<h2 class=\"title\">AUDIO</h2>\r\n\t\t\t\t\t\t\t<p class=\"description mx-auto w-50 p-3 text-center\">\r\n\t\t\t\t\t\t\t\t<iframe src=\"https://open.spotify.com/embed/album/1WY6qrHw1xbjYf7aiVeLZc\" width=\"300\" height=\"380\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t<h2 class=\"title\">VIDEOs</h2>\r\n\t\t\t\t\t\t\t<div class=\"ce_youtube block mx-auto text-center\">\r\n\t\t\t\t\t\t\t\t<h4>To The Grave</h4>\r\n\t\t\t\t\t\t\t\t<div class=\"ce_youtube-wrapper\">\r\n\t\t\t\t\t\t\t\t\t<iframe src=\"https://www.youtube.com/embed/3JjDRSPaoQo?rel=0&amp;autohide=1&amp;showinfo=0\" frameborder=\"0\"></iframe>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\t\t\t\r\n</div>"

/***/ }),

/***/ "./src/app/media/media.component.scss":
/*!********************************************!*\
  !*** ./src/app/media/media.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ce_youtube-wrapper {\n  position: relative;\n  margin: 1.6em 0;\n  padding-bottom: 56.25%;\n  height: 0;\n  overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/media/media.component.ts":
/*!******************************************!*\
  !*** ./src/app/media/media.component.ts ***!
  \******************************************/
/*! exports provided: MediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaComponent", function() { return MediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MediaComponent = /** @class */ (function () {
    function MediaComponent() {
    }
    MediaComponent.prototype.ngOnInit = function () {
    };
    MediaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-media',
            template: __webpack_require__(/*! ./media.component.html */ "./src/app/media/media.component.html"),
            styles: [__webpack_require__(/*! ./media.component.scss */ "./src/app/media/media.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MediaComponent);
    return MediaComponent;
}());



/***/ }),

/***/ "./src/app/news/news.component.html":
/*!******************************************!*\
  !*** ./src/app/news/news.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"fb-root\"></div>\r\n<script async defer crossorigin=\"anonymous\" src=\"https://connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v3.3\"></script>\r\n\r\n<div class=\"wrapper\" #news ngsReveal>\r\n\t<div class=\"section section-dark\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t<div class=\"fb-page\" data-href=\"https://www.facebook.com/hallsofoblivion/\" data-tabs=\"timeline\" data-width=\"500\" data-height=\"\" data-small-header=\"true\" data-adapt-container-width=\"true\" data-hide-cover=\"true\" data-show-facepile=\"false\"><blockquote cite=\"https://www.facebook.com/hallsofoblivion/\" class=\"fb-xfbml-parse-ignore\"><a href=\"https://www.facebook.com/hallsofoblivion/\">Halls of Oblivion</a></blockquote></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-12 col-md-12\">\r\n\t\t\t\t\t<h2 class=\"title ml-auto mr-auto text-center\">News</h2>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum enim nec eros sollicitudin lobortis. Curabitur metus libero, lobortis a ligula vitae, tristique egestas eros. Duis malesuada sed sem dictum sollicitudin. Mauris bibendum nec felis eget ultricies. Vestibulum eu placerat purus, quis auctor massa. Curabitur fringilla ut leo ac malesuada. Duis feugiat consectetur mattis. Duis euismod eleifend aliquet. Sed tincidunt mattis pharetra.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tInterdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla tortor et ultricies tempor. Etiam a mauris sed est efficitur maximus vel eu metus. Etiam non vestibulum libero. Quisque lobortis pretium lacinia. Cras est felis, eleifend in faucibus et, ornare ac urna. Morbi ac libero in sapien euismod commodo nec at tortor.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tNulla blandit maximus leo, vitae eleifend ex. Suspendisse sapien ante, vehicula a pulvinar consectetur, malesuada in velit. Duis id pretium arcu. Ut tristique nibh sit amet sem convallis placerat. Maecenas id velit hendrerit, molestie purus vitae, consectetur sem. Suspendisse euismod sodales nunc non placerat. Praesent metus ipsum, dapibus at rutrum a, blandit maximus quam. Vivamus scelerisque ante ut augue condimentum volutpat. Ut ut dolor quis lorem gravida ultricies eget at dolor. Phasellus id sodales ante.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tDonec sit amet diam lacus. Nullam facilisis risus ut dolor tempor, et euismod metus blandit. Phasellus semper a risus vitae sollicitudin. Aenean lobortis sed mauris quis finibus. Aliquam id tellus sit amet odio semper venenatis quis non elit. Sed ac mi dictum, sagittis leo a, pretium odio. Phasellus quis elementum dolor. Mauris laoreet, mi vitae convallis rutrum, ante sapien vestibulum felis, ut tempus odio lorem vel neque. Mauris ut urna tempus, congue ex ut, venenatis lectus. Duis a fringilla ante.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/news/news.component.scss":
/*!******************************************!*\
  !*** ./src/app/news/news.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.scss */ "./src/app/news/news.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <nav class=\"footer-nav\">\r\n                \r\n            </nav>\r\n            <div class=\"credits ml-auto\">\r\n                <span class=\"copyright\">\r\n                    © {{test | date: 'yyyy'}}, Halls Of Oblivion\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"navbar-translate\">\r\n\t\t\t<button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\r\n\t\t\t\t<span class=\"navbar-toggler-bar\"></span>\r\n\t\t\t\t<span class=\"navbar-toggler-bar\"></span>\r\n\t\t\t\t<span class=\"navbar-toggler-bar\"></span>\r\n\t\t\t</button>\r\n\t\t\t<a class=\"navbar-brand\" href=\"Home\">Halls Of Oblivion</a>\r\n\t\t</div>\r\n\t\t<div class=\"navbar-collapse\" id=\"navbarToggler\">\r\n\t\t\t<ul class=\"navbar-nav ml-auto\">\r\n\t\t\t\r\n\r\n\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a class=\"nav-link\" href=\"javascript:scroll(news)\">News</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a class=\"nav-link\" href=\"#Live\">Live</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t\r\n\t\t\t\t<li class=\"nav-item \">\r\n\t\t\t\t\t<div ngbDropdown class=\"d-inline-block dropdown\">\r\n\t\t\t\t\t\t<a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>Band</a>\r\n\t\t\t\t\t\t<div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\r\n\t\t\t\t\t\t\t<a class=\"dropdown-item\">Sebastian</a>\r\n\t\t\t\t\t\t\t<a class=\"dropdown-item\">Marcel</a>\r\n\t\t\t\t\t\t\t<a class=\"dropdown-item\">Markus K</a>\r\n\t\t\t\t\t\t\t<a class=\"dropdown-item\">Markus W</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\r\n\t\t\t\t<li class=\"nav-item \">\r\n\t\t\t\t\t<div ngbDropdown class=\"d-inline-block dropdown\">\r\n\t\t\t\t\t\t<a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>Media</a>\r\n\t\t\t\t\t\t<div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\r\n\t\t\t\t\t\t\t<a class=\"dropdown-item\">Videos</a>\r\n\t\t\t\t\t\t\t<a class=\"dropdown-item\">Pictures</a>\r\n\t\t\t\t\t\t\t<a class=\"dropdown-item\">Songs</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t\t<a class=\"nav-link\" href=\"ScrollReveal().reveal('.Merch')\">Merch</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\r\n\t\t\t\t<!--\r\n\t\t\t\t<li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\r\n\t\t\t\t\t<a href=\"http://pk2-angular.creative-tim.com/documentation/tutorial\" class=\"nav-link\" target=\"_blank\"><i class=\"nc-icon nc-book-bookmark\"></i> Documentation</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t-->\r\n\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Instagram\" data-placement=\"bottom\" href=\"https://instagram.com/hallsofoblivion\" target=\"_blank\">\r\n\t\t\t\t\t\t<i class=\"fa fa-instagram\"></i>\r\n\t\t\t\t\t\t<p class=\"d-lg-none\">Instagram</p>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a class=\"nav-link\" rel=\"tooltip\" title=\"Like us on Facebook\" data-placement=\"bottom\" href=\"https://www.facebook.com/hallsofoblivion\" target=\"_blank\">\r\n\t\t\t\t\t\t<i class=\"fa fa-facebook-square\"></i>\r\n\t\t\t\t\t\t<p class=\"d-lg-none\">Facebook</p>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-collapse:after {\n  background-color: black !important; }\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.scroll = function (element) {
        console.log(element);
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\markus.ZION89\Documents\node\HOO-Website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map