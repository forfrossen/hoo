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
        this.isFixNavbarLocation = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            if (event.url.toLowerCase() === "/home") {
                _this.isFixNavbarLocation = false;
                _this.moveNavbar("bottom");
            }
            else {
                _this.isFixNavbarLocation = true;
            }
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
            var navBreakPoint = 200;
            if (number > navBreakPoint || window.pageYOffset > navBreakPoint) {
                // add logic
                _this.moveNavbar("top");
            }
            else {
                // remove logic
                _this.moveNavbar("bottom");
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
        console.log(this.router.url);
    };
    AppComponent.prototype.moveNavbar = function (location) {
        var navbar = this.element.nativeElement.children[0].children[0];
        if (location === "top") {
            navbar.classList.remove('navbar-transparent');
            if (!this.isFixNavbarLocation) {
                console.log("Moving Navbar to: ", location);
                navbar.classList.remove('fixed-bottom');
                navbar.classList.add('fixed-top');
            }
        }
        else {
            navbar.classList.add('navbar-transparent');
            if (!this.isFixNavbarLocation) {
                console.log("Moving Navbar to: ", location);
                navbar.classList.remove('fixed-top');
                navbar.classList.add('fixed-bottom');
            }
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
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-facebook */ "./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "./src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-page-scroll-core */ "./node_modules/ngx-page-scroll-core/fesm5/ngx-page-scroll-core.js");
/* harmony import */ var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-page-scroll */ "./node_modules/ngx-page-scroll/fesm5/ngx-page-scroll.js");
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
                _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_13__["PrivacyPolicyComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"],
                ngx_facebook__WEBPACK_IMPORTED_MODULE_11__["FacebookModule"].forRoot(),
                ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_14__["NgxPageScrollCoreModule"],
                ngx_page_scroll__WEBPACK_IMPORTED_MODULE_15__["NgxPageScrollModule"],
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
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "./src/app/privacy-policy/privacy-policy.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'Home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'news', component: _news_news_component__WEBPACK_IMPORTED_MODULE_5__["NewsComponent"] },
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"] },
    { path: 'privacy-policy', component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_7__["PrivacyPolicyComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
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

module.exports = "<div class=\"wrapper\" >\r\n\t<div class=\"section section-dark\" ngsReveal>\r\n\t\t<div class=\"jumbotron band\">\r\n\t\t\t<div class=\"filter-both\"></div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"section section-dark\" ngsReveal>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">                  \r\n\t\t\t\t<div class=\"col-lg-12 col-md-12\">\r\n\r\n\t\t\t\t\t<h2 class=\"headline\" id=\"band\">\r\n\t\t\t\t\t\tBAND\r\n\t\t\t\t\t</h2>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tNot to be forgotten: Halls of Oblivion!\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tUnlike the name might suggest; Halls of Oblivion will stick in your memory.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tDeep in the gloomy \"halls of oblivion\", a tender melody and a whispered word suddenly become a roaring composition with brutal riffs and heavy words. Merciless and honest, the depths of the human soul are awaiting the listener within fictional walls. Internal unrest seeks its way through silence and oblivion in an aggressive and desperate way, thereby obtaining a hearing.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tGoose bumps guaranteed!\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tThe creations of the four handsome men from Vaihingen/Enz represent a cruel, sorrowful ambiance. Halls of Oblivion unveil themes that are often kept secret but should not be forgotten. In doing so, they demonstrate their musical skills and sense of the subtleties of melodic death metal. Influences of black and doom metal complement the use of synthesizers, thus creating a unique atmosphere.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tSince their foundation in 2007/2008, Halls of Oblivion were able to refine their style through personal and common experiences. Since then, it has become more and more apparent what eventually took shape in 2014: A blend more peaceful than melodic death metal, more melodic than black metal, more harmonic than death metal - yet equally complex, graceful and merciless as our existence.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tThe music is mainly written by vocalist and rhythm guitarist Sebastian Ruf, who gives the songs a black metal vibe; as well as lead guitarist Marcel Welte, who skillfully brings it in accordance with melancholic melodies. Markus Kristen is responsible for the recordings and bass guitar, thereby anchoring the harmonic framework of the songs, while Markus Weber provides the final creative touches with his drumming.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tThe longtime friends are an experienced team that is ready to become popular well above the ceiling of the halls. \r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tTheir debut EP „The Blind Legion“ was released in 2015 (digital re-release in 2016). The first full-length album of the quartet “Endtime Poetry” will be published 14th of June 2019 and refines the characteristic style of the band, thereby likewise attracting fans of melodic death and black metal.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"description\">\r\n\t\t\t\t\t\tStep inside - the halls of oblivion!\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"section section-dark\" ngsReveal>\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-6 text-center\">\r\n\t\t\t\t\t\t<h2 class=\"title\">Lineup</h2>\r\n\t\t\t\t\t\t<p class=\"description center\">\r\n\t\t\t\t\t\t\tMarcel Welte - Lead Guitar<br />\r\n\t\t\t\t\t\t\tSebastian Ruf - Vocal + Rhythm Guitar<br />\r\n\t\t\t\t\t\t\tMarkus Kriten - Bass<br />\r\n\t\t\t\t\t\t\tMarkus Weber - Drums<br />\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6 text-center\">\r\n\t\t\t\t\t\t\t<h2 class=\"title\">Contact</h2>\r\n\t\t\t\t\t\t<p class=\"description center\">\r\n\t\t\t\t\t\t\tBand: kontakt@hallsofoblivion.de<br />\r\n\t\t\t\t\t\t\tBooking: booking@hallsofoblivion.de<br />\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n</div>"

/***/ }),

/***/ "./src/app/band/band.component.scss":
/*!******************************************!*\
  !*** ./src/app/band/band.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron.band {\n  background: url(\"/assets/img/band2.jpg\") center no-repeat;\n  background-size: contain;\n  margin-bottom: 0px;\n  border-radius: 0px;\n  height: 25rem; }\n\n@media (min-width: 1325px) {\n  .jumbotron.band {\n    background-size: cover;\n    height: -webkit-fill-available; } }\n\n.image_container {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  border-top: 2px solid grey;\n  border-bottom: 2px solid grey;\n  margin: 0px !important; }\n\n.text-center p.description {\n  text-align: center !important; }\n\n/*      light colors - used for select dropdown         */\n\n.headline {\n  font-family: 'Times New Roman', Times, serif !important;\n  text-transform: uppercase !important;\n  text-align: center;\n  margin-top: 1em;\n  margin-bottom: 0.3em;\n  overflow: hidden;\n  clear: both;\n  margin: 0.67em 0;\n  color: #FFFFFF; }\n\n.headline::before, .headline::after {\n  content: \"\";\n  border: 0;\n  height: 1px;\n  background-repeat: repeat-x;\n  border-top: 0px;\n  display: inline-block;\n  vertical-align: middle;\n  width: 100%;\n  clear: both;\n  overflow: visible;\n  margin: 2.4em 0;\n  margin-bottom: 5px !important; }\n\n.headline::before {\n  background-image: linear-gradient(to right, #0b1011, #0b1011, #0b1011, #FFFFFF);\n  margin: 0 0.66667em 0 -100%; }\n\n.headline::after {\n  background-image: linear-gradient(to right, #FFFFFF, #0b1011, #0b1011, #0b1011);\n  margin: 0 -100% 0 0.66667em; }\n\nimg {\n  width: 100%;\n  max-width: 100%;\n  border: 0; }\n\n.section-dark {\n  padding: 2.5rem 0rem !important; }\n"

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

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"page-header section-dark\">\r\n        <div class=\"filter\"></div>\r\n        <div class=\"content-center\">\r\n            <div class=\"container\">\r\n                <div class=\"title-brand\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"moving-clouds\" style=\"background-image: url('assets/img/clouds.png'); background-size: cover;\"></div>\r\n    </div>\r\n    <div class=\"main\">\r\n\t\t<!--<app-components></app-components>-->\r\n\t\t<app-news></app-news>\r\n\t\t<app-live #live></app-live>\r\n\t\t<app-band #band></app-band>\r\n\t\t<app-media #media></app-media>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header {\n  background: url(\"/assets/img/coverart.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position-x: center;\n  background-position-y: 0px; }\n"

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

module.exports = "<div class=\"wrapper\" id=\"live\" ngsReveal>\r\n\t<div class=\"jumbotron live page-header\">\r\n\t\t<div class=\"filter-both\"></div>\r\n\t</div>\r\n\r\n\t<div class=\"section section-dark\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-12 ml-auto mr-auto text-center\">\r\n\t\t\t\t\t<h2 class=\"title\">Live</h2>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-12 ml-auto mr-auto text-center\">\r\n\t\t\t\t\t<a class=\"bit-widget-initializer\" \r\n\t\t\t\t\t\tdata-artist-name=\"Halls Of Oblivion\"\r\n\t\t\t\t\t\tdata-display-local-dates=\"false\"\r\n\t\t\t\t\t\tdata-display-past-dates=\"false\"\r\n\t\t\t\t\t\tdata-auto-style=\"false\"\r\n\t\t\t\t\t\tdata-text-color=\"#FFFFFF\"\r\n\t\t\t\t\t\tdata-link-color=\"#aa0000\"\r\n\t\t\t\t\t\tdata-background-color=\"rgba(0,0,0,0)\"\r\n\t\t\t\t\t\tdata-display-limit=\"15\"\r\n\t\t\t\t\t\tdata-link-text-color=\"#FFFFFF\"\r\n\t\t\t\t\t\tdata-display-lineup=\"false\"\r\n\t\t\t\t\t\tdata-display-play-my-city=\"true\"\r\n\t\t\t\t\t\tdata-separator-color=\"rgba(124,124,124,0.25)\">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/live/live.component.scss":
/*!******************************************!*\
  !*** ./src/app/live/live.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron.live {\n  background: url(\"/assets/img/hoo_live.jpg\") fixed center no-repeat;\n  background-size: cover;\n  margin-bottom: 0px;\n  border-radius: 0px;\n  height: 30rem; }\n\n:host {\n  margin: 100px 0px; }\n"

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

module.exports = "<div class=\"wrapper\">\r\n\t<div class=\"section section-dark\" ngsReveal>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t<h2 class=\"title\" id=\"songs\">AUDIO</h2>\r\n\t\t\t\t\t\t\t<div class=\"col p-3\">\r\n\t\t\t\t\t\t\t\t<div class='embed-container'>\r\n\t\t\t\t\t\t\t\t\t<iframe src='https://embed.spotify.com/?uri=spotify:track:4acjKOSsASAR0wgcW7GdxI' frameborder='0' allowtransparency='true'></iframe>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col p-3\">\r\n\t\t\t\t\t\t\t\t<div class='embed-container'>\r\n\t\t\t\t\t\t\t\t\t<iframe src=\"https://open.spotify.com/embed/album/1WY6qrHw1xbjYf7aiVeLZc\" frameborder=\"0\" allowtransparency=\"true\"></iframe>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>-->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t<h2 class=\"title\" id=\"videos\">VIDEOs</h2>\r\n\t\t\t\t\t\t\t<div class=\"col p-3\">\r\n\t\t\t\t\t\t\t\t<div class=\"ce_youtube block mx-auto text-center\">\r\n\t\t\t\t\t\t\t\t\t<div class='embed-container'>\r\n\t\t\t\t\t\t\t\t\t\t<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/g19Gjc_5Rk8?start=3\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col p-3\">\r\n\t\t\t\t\t\t\t\t<div class=\"ce_youtube block mx-auto text-center\">\r\n\t\t\t\t\t\t\t\t\t<div class='embed-container'>\r\n\t\t\t\t\t\t\t\t\t\t<iframe src=\"https://www.youtube.com/embed/3JjDRSPaoQo?start=4\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\t\t\t\r\n</div>"

/***/ }),

/***/ "./src/app/media/media.component.scss":
/*!********************************************!*\
  !*** ./src/app/media/media.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ce_youtube-wrapper {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  overflow: hidden; }\n\n.embed-container {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  overflow: hidden;\n  max-width: 100%;\n  height: auto; }\n\n.embed-container iframe,\n.embed-container object,\n.embed-container embed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n"

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

module.exports = "<div class=\"wrapper\" id=\"news\" #news >\r\n\t<div class=\"section section-dark\" ngsReveal>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row justify-content-center\">\r\n\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t<h2 class=\"title ml-auto mr-auto text-center\">News</h2>\r\n\t\t\t\t\t<a href=\"https://open.spotify.com/track/4acjKOSsASAR0wgcW7GdxI\">\r\n\t\t\t\t\t\t<div class=\"card text-white bg-secondary mb-3\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"card-title text-white \">Single Release - The Servant</h5>\r\n\t\t\t\t\t\t\t\t<div class=\"card-text\">\r\n\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t🔥🔥🔥 Here it is !!! 🔥🔥🔥\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\tThe first single of our upcoming album \"Endtime Poetry\" - The Servant !\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\tEndtime Peotry will be released via Metalapolis Records 21.06.2019 !\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\tRelease party will be the Break Your Neck Extended event on 08.06.2018 at the Rockfabrik - mark your calendars, prepare your necks and come along to celebrate with us!\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\tUntil then, enjoy The Servant !!! Have no mercy with those puny ears of yours  😜🤘🤘🤘\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<img class=\"card-img\" src=\"https://scontent-frx5-1.xx.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/c0.152.640.335a/s526x296/60971818_6118643162994_122244965496520704_n.png.jpg?_nc_cat=102&amp;efg=eyJxZV9ncm91cHMiOlsibm9fc2FmZV9pbWFnZV9mb3JfYWRzX2ltYWdlIl19&amp;_nc_ht=scontent-frx5-1.xx&amp;oh=bb628d8317c669adcbca64a3e4fc950b&amp;oe=5D53D957\" data-src=\"https://scontent-frx5-1.xx.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/c0.152.640.335a/s526x296/60971818_6118643162994_122244965496520704_n.png.jpg?_nc_cat=102&amp;efg=eyJxZV9ncm91cHMiOlsibm9fc2FmZV9pbWFnZV9mb3JfYWRzX2ltYWdlIl19&amp;_nc_ht=scontent-frx5-1.xx&amp;oh=bb628d8317c669adcbca64a3e4fc950b&amp;oe=5D53D957\" alt=\"\" >\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<!--\r\n\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"fb-page\" data-href=\"https://www.facebook.com/hallsofoblivion/\"\r\n\t\t\t\t\t\tdata-tabs=\"timeline\"\r\n\t\t\t\t\t\tdata-width=\"500\"\r\n\t\t\t\t\t\tdata-height=\"\"\r\n\t\t\t\t\t\tdata-small-header=\"true\"\r\n\t\t\t\t\t\tdata-adapt-container-width=\"true\"\r\n\t\t\t\t\t\tdata-hide-cover=\"true\"\r\n\t\t\t\t\t\tdata-show-facepile=\"false\">\r\n\t\t\t\t\t\t<blockquote cite=\"https://www.facebook.com/hallsofoblivion/\" class=\"fb-xfbml-parse-ignore\">\r\n\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/hallsofoblivion/\">Halls of Oblivion</a>\r\n\t\t\t\t\t\t</blockquote>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t-->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

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
    function NewsComponent(
    //private fb: FacebookService
    ) {
    }
    /*
    asdf(){
      const params: InitParams = {
        appId             : '893642437633967',
        status            : true,
        cookie            : true,
        xfbml             : true,
        version           : 'v3.3'
      };
  
      this.fb.init(params);
  
      
      
      this.fb.getLoginStatus()
        .then(response => {
          if (response.status === 'connected') {
            var accessToken = response.authResponse.accessToken;
          }
        });
  
      this.fb.api('/156249841069523/published_posts', 'get', { accessToken: 'EAAMsw1gNJ68BAOHsZClCZBh4ZAeqktR56oeZBQZBZCckL1NdBsQQODSDVZAqnFXKYAKo94Q8XBdCFvHRhqfQZCMdZCWrJN4RBySby3wqlh9ebvfHIh7WLPZAJ9SPlcrZBNfeb4xQ8HRrYgtA3S5XN0sU8ZBLSA5i1dOhZAzVDiEmc44nJg01JhN9jsR3lZBCBxbXrGDKcLCzJq4Uy6kQZDZD' })
        .then(res => console.log(res))
        .catch(e => console.log(e));
    }
  
    */
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

/***/ "./src/app/privacy-policy/privacy-policy.component.html":
/*!**************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"jumbotron live\">\r\n        <div class=\"filter-both\"></div>\r\n      </div>\r\n    \r\n  <div class=\"main\">\r\n    <div class=\"section section-dark\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">                  \r\n          <div class=\"col-lg-12 col-md-12\">\r\n          \r\n            <h1 class=\"headline-hr  ce_rsce_oneo_separator \">\r\n                Data Protection / Datenschutz\r\n            </h1>\r\n            <div class=\"ce_text block\">\r\n                <div class=\"ce_text first block\">\r\n                  <h3 class=\"headline\">Datenschutzerklärung nach den Vorgaben der DSGVO</h3>\r\n                  <p class=\"description\">Wir freuen uns über Ihren Besuch auf unserer Website und Ihrem Interesse an unserem Unternehmen. Der Schutz\r\n                    Ihrer persönlichen Daten ist für uns wichtig und wir nehmen den Schutz dieser Daten sehr ernst. Wir halten uns\r\n                    daher an die gültigen Datenschutzbestimmungen in all unseren geschäftlichen Prozessen. Unsere\r\n                    Datenschutzerklärung erstreckt sich nicht auf die Webseiten anderer Anbieter, mit denen wir ggfs. verlinkt sind.\r\n                    Mit dem Besuch unserer Website willigen Sie in die Nutzung Ihrer personenbezogenen Daten ein und erklären sich\r\n                    mit der nachfolgenden Datenschutzerklärung einverstanden.</p>\r\n                </div>\r\n                <div class=\"ce_text block\">\r\n                  <h3 class=\"headline\">Begriffsbestimmungen:</h3>\r\n                  <p class=\"description\">Diese Datenschutzerklärung beruht auf den Begrifflichkeiten der europäischen Datenschutz-Grundverordnung\r\n                    (DSGVO) und soll sowohl für die Öffentlichkeit als auch für unsere Kunden und Geschäftspartner einfach lesbar\r\n                    und verständlich sein. Um dies zu gewährleisten, möchten wir vorab die verwendeten Begrifflichkeiten erläutern.\r\n                  </p>\r\n                  <ul class=\"description\">\r\n                    <li><strong>Personenbezogene Daten</strong><br>Personenbezogene Daten sind alle Informationen, die sich auf eine\r\n                      identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen. Als\r\n                      identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels\r\n                      Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung\r\n                      oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen,\r\n                      psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind,\r\n                      identifiziert werden kann.</li>\r\n                    <li><strong>Betroffene Person<br></strong>Betroffene Person ist jede identifizierte oder identifizierbare\r\n                      natürliche Person, deren personenbezogene Daten von dem für die Verarbeitung Verantwortlichen verarbeitet\r\n                      werden.</li>\r\n                    <li><strong>Verarbeitung<br></strong>Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren\r\n                      ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das\r\n                      Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das\r\n                      Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form\r\n                      der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.\r\n                    </li>\r\n                    <li><strong>Einschränkung der Verarbeitung<br></strong>Einschränkung der Verarbeitung ist die Markierung\r\n                      gespeicherter personenbezogener Daten mit dem Ziel, ihre künftige Verarbeitung einzuschränken.</li>\r\n                    <li><strong>Profiling<br></strong>Profiling ist jede Art der automatisierten Verarbeitung personenbezogener\r\n                      Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche\r\n                      Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten, insbesondere, um Aspekte bezüglich\r\n                      Arbeitsleistung, wirtschaftlicher Lage, Gesundheit, persönlicher Vorlieben, Interessen, Zuverlässigkeit,\r\n                      Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen.</li>\r\n                    <li><strong>Pseudonymisierung<br></strong>Pseudonymisierung ist die Verarbeitung personenbezogener Daten in\r\n                      einer Weise, auf welche die personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr\r\n                      einer spezifischen betroffenen Person zugeordnet werden können, sofern diese zusätzlichen Informationen\r\n                      gesondert aufbewahrt werden und technischen und organisatorischen Maßnahmen unterliegen, die gewährleisten,\r\n                      dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen Person\r\n                      zugewiesen werden.</li>\r\n                    <li><strong>Verantwortlicher oder für die Verarbeitung Verantwortlicher<br></strong>Verantwortlicher oder für\r\n                      die Verarbeitung Verantwortlicher ist die natürliche oder juristische Person, Behörde, Einrichtung oder andere\r\n                      Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von\r\n                      personenbezogenen Daten entscheidet. Sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder\r\n                      das Recht der Mitgliedstaaten vorgegeben, so kann der Verantwortliche beziehungsweise können die bestimmten\r\n                      Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden.</li>\r\n                    <li><strong>Auftragsverarbeiter<br></strong>Auftragsverarbeiter ist eine natürliche oder juristische Person,\r\n                      Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen\r\n                      verarbeitet.</li>\r\n                    <li><strong>Empfänger<br></strong>Empfänger ist eine natürliche oder juristische Person, Behörde, Einrichtung\r\n                      oder andere Stelle, der personenbezogene Daten offengelegt werden, unabhängig davon, ob es sich bei ihr um\r\n                      einen Dritten handelt oder nicht. Behörden, die im Rahmen eines bestimmten Untersuchungsauftrags nach dem\r\n                      Unionsrecht oder dem Recht der Mitgliedstaaten möglicherweise personenbezogene Daten erhalten, gelten jedoch\r\n                      nicht als Empfänger.</li>\r\n                    <li><strong>Dritter<br></strong>Dritter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder\r\n                      andere Stelle außer der betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den Personen,\r\n                      die unter der unmittelbaren Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind, die\r\n                      personenbezogenen Daten zu verarbeiten.</li>\r\n                    <li><strong>Einwilligung<br></strong>Einwilligung ist jede von der betroffenen Person freiwillig für den\r\n                      bestimmten Fall in informierter Weise und unmissverständlich abgegebene Willensbekundung in Form einer\r\n                      Erklärung oder einer sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen\r\n                      gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist.</li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n    \r\n              <div class=\"ce_text block\">\r\n    \r\n    \r\n    \r\n                <h3 class=\"headline\">Name und Anschrift des Verantwortlichen:</h3>\r\n                <p class=\"description\">\r\n                  Der Verantwortliche im Sinne der Datenschutz-Grundverordnung und anderer nationaler Datenschutzgesetze der\r\n                  Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist:\r\n                  <br><br>\r\n                  Markus Kristen<br>\r\n                  Dieselstraße 42<br>\r\n                  71665 Vaihingen an der Enz<br><br>\r\n                  E-Mail:&nbsp; <a href=\"mailto:markusk@hallsofoblivion.de\" target=\"_blank\">markusk [at] hallsofoblivion [dot] de</a><br>\r\n                  Webseite: <a href=\"https://www.hallsofoblivion.de/\">www.hallsofoblivion.de</a></p>\r\n    \r\n              </div>\r\n    \r\n              <div class=\"ce_text block\">\r\n    \r\n    \r\n    \r\n                <div class=\"ce_text block\">\r\n                  <h3 class=\"headline\">Allgemeines zur Datenverarbeitung</h3>\r\n                  <p class=\"description\"><strong>Umfang der Verarbeitung personenbezogener Daten<br></strong>Wir verarbeiten personenbezogene Daten\r\n                    unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer\r\n                    Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten unserer Nutzer erfolgt\r\n                    regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige\r\n                    Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch\r\n                    gesetzliche Vorschriften gestattet ist.<br><br><strong>Rechtsgrundlage für die Verarbeitung personenbezogener\r\n                      Daten<br></strong>Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der\r\n                    betroffenen Person einholen, dient Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a EU-Datenschutzgrundverordnung (DSGVO) als\r\n                    Rechtsgrundlage.<br><br>Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages,\r\n                    dessen Vertragspartei die betroffene Person ist, erforderlich ist, dient Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b\r\n                    DSGVO als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher\r\n                    Maßnahmen erforderlich sind.</p>\r\n                  <p class=\"description\">Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen Verpflichtung erforderlich\r\n                    ist, der unser Unternehmen unterliegt, dient Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;c DSGVO als Rechtsgrundlage.</p>\r\n                  <p class=\"description\">Für den Fall, dass lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person eine\r\n                    Verarbeitung personenbezogener Daten erforderlich machen, dient Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;d DSGVO als\r\n                    Rechtsgrundlage.</p>\r\n                  <p class=\"description\">Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten\r\n                    erforderlich und überwiegen die Interessen, Grundrechte und Grundfreiheiten des Betroffenen das erstgenannte\r\n                    Interesse nicht, so dient Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO als Rechtsgrundlage für die\r\n                    Verarbeitung.<br><br><strong>Datenlöschung und Speicherdauer<br></strong>Die personenbezogenen Daten der\r\n                    betroffenen Person werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt. Eine Speicherung\r\n                    kann darüber hinaus erfolgen, wenn dies durch den europäischen oder nationalen Gesetzgeber in unionsrechtlichen\r\n                    Verordnungen, Gesetzen oder sonstigen Vorschriften, denen der Verantwortliche unterliegt, vorgesehen wurde. Eine\r\n                    Sperrung oder Löschung der Daten erfolgt auch dann, wenn eine durch die genannten Normen vorgeschriebene\r\n                    Speicherfrist abläuft, es sei denn, dass eine Erforderlichkeit zur weiteren Speicherung der Daten für einen\r\n                    Vertragsabschluss oder eine Vertragserfüllung besteht.</p>\r\n                </div>\r\n                <div class=\"ce_text block\">\r\n                  <h3 class=\"headline\">Bereitstellung der Website und Erstellung von Logfiles</h3>\r\n                  <p class=\"description\"><strong>Beschreibung und Umfang der Datenverarbeitung<br></strong>Bei jedem Aufruf unserer Internetseite\r\n                    erfasst unser System und der Provider automatisiert Daten und Informationen vom Computersystem des aufrufenden\r\n                    Rechners. Folgende Daten werden hierbei erhoben:<strong><br></strong></p>\r\n                  <ul class=\"description\">\r\n                    <li>IP-Adresse des anfragenden Rechners,</li>\r\n                    <li>Datum und Uhrzeit des Zugriffs,</li>\r\n                    <li>Name und URL der abgerufenen Datei,</li>\r\n                    <li>Website, von der aus der Zugriff erfolgt (Referrer-URL),</li>\r\n                    <li>verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers.</li>\r\n                  </ul>\r\n                  <p class=\"description\">Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:</p>\r\n                  <ul class=\"description\">\r\n                    <li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,</li>\r\n                    <li>Gewährleistung einer komfortablen Nutzung unserer Website,</li>\r\n                    <li>Auswertung der Systemsicherheit und -stabilität sowie</li>\r\n                    <li>zu weiteren administrativen Zwecken.</li>\r\n                  </ul>\r\n                  <p class=\"description\"><strong>Rechtsgrundlage für die Datenverarbeitung</strong><br>Die Rechtsgrundlage für die Datenverarbeitung ist\r\n                    Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus oben aufgelisteten Zwecken zur\r\n                    Datenerhebung. In keinem Fall verwenden wir die erhobenen Daten zu dem Zweck, Rückschlüsse auf Ihre Person zu\r\n                    ziehen.<br><br>Darüber hinaus setzen wir beim Besuch unserer Website Cookies sowie Analysedienste ein. Nähere\r\n                    Erläuterungen dazu erhalten Sie weiter in dieser Datenschutzerklärung.</p>\r\n                  <p class=\"description\"><strong>Zweck der Datenverarbeitung</strong> <br>Die vorübergehende Speicherung der IP-Adresse durch das System\r\n                    ist notwendig, um eine Auslieferung der Website an den Rechner des Nutzers zu ermöglichen. Hierfür muss die\r\n                    IP-Adresse des Nutzers für die Dauer der Sitzung gespeichert bleiben.<br><br>Die Speicherung in Logfiles\r\n                    erfolgt, um die Funktionsfähigkeit der Website sicherzustellen. Zudem dienen uns die Daten zur Optimierung der\r\n                    Website und zur Sicherstellung der Sicherheit unserer informationstechnischen Systeme. Eine Auswertung der Daten\r\n                    zu Marketingzwecken findet in diesem Zusammenhang nicht statt. <br><br>In diesen Zwecken liegt auch unser\r\n                    berechtigtes Interesse an der Datenverarbeitung nach Art. 6 Abs. 1 lit. f DSGVO.</p>\r\n                  <p class=\"description\"><strong>Dauer der Speicherung</strong> <br>Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes\r\n                    ihrer Erhebung nicht mehr erforderlich sind. Im Falle der Erfassung der Daten zur Bereitstellung der Website ist\r\n                    dies der Fall, wenn die jeweilige Sitzung beendet ist.&nbsp;Im Falle der Speicherung der Daten in Logfiles ist\r\n                    dies nach spätestens sieben Tagen der Fall. Eine darüberhinausgehende Speicherung ist möglich. In diesem Fall\r\n                    werden die IP-Adressen der Nutzer gelöscht oder verfremdet, sodass eine Zuordnung des aufrufenden Clients nicht\r\n                    mehr möglich ist.</p>\r\n                  <p class=\"description\"><strong>Widerspruchs- und Beseitigungsmöglichkeit</strong> <br>Die Erfassung der Daten zur Bereitstellung der\r\n                    Website und die Speicherung der Daten in Logfiles ist für den Betrieb der Internetseite zwingend erforderlich.\r\n                    Es besteht folglich seitens des Nutzers keine Widerspruchsmöglichkeit.</p>\r\n                </div>\r\n                <div class=\"ce_text block\">\r\n                  <h3 class=\"headline\">Verwendung von Cookies</h3>\r\n                  <p class=\"description\"><strong>Beschreibung und Umfang der Datenverarbeitung</strong> <br>Unsere Webseite verwendet Cookies. Bei\r\n                    Cookies handelt es sich um Textdateien, die im Internetbrowser bzw. vom Internetbrowser auf dem Computersystem\r\n                    des Nutzers gespeichert werden. Ruft ein Nutzer eine Website auf, so kann ein Cookie auf dem Betriebssystem des\r\n                    Nutzers gespeichert werden. Dieser Cookie enthält eine charakteristische Zeichenfolge, die eine eindeutige\r\n                    Identifizierung des Browsers beim erneuten Aufrufen der Website ermöglicht. <br><br>Wir setzen Cookies ein, um\r\n                    unsere Website nutzerfreundlicher zu gestalten. Einige Elemente unserer Internetseite erfordern es, dass der\r\n                    aufrufende Browser auch nach einem Seitenwechsel identifiziert werden kann. In den Cookies werden dabei folgende\r\n                    Daten gespeichert und übermittelt:</p>\r\n                  <ul class=\"description\">\r\n                    <li>Spracheinstellungen</li>\r\n                    <li>Länderkennung</li>\r\n                    <li>Log-In-Informationen</li>\r\n                  </ul>\r\n                  <p class=\"description\">Wir verwenden auf unserer Website darüber hinaus Cookies, die eine Analyse des Surfverhaltens der Nutzer\r\n                    ermöglichen. Auf diese Weise können folgende Daten übermittelt werden:</p>\r\n                  <ul class=\"description\">\r\n                    <li>Eingegebene Suchbegriffe</li>\r\n                    <li>Häufigkeit von Seitenaufrufen</li>\r\n                    <li>Inanspruchnahme von Website-Funktionen</li>\r\n                  </ul>\r\n                  <p class=\"description\">Die auf diese Weise erhobenen Daten der Nutzer werden durch technische Vorkehrungen pseudonymisiert. Daher ist\r\n                    eine Zuordnung der Daten zum aufrufenden Nutzer nicht mehr möglich. Die Daten werden nicht gemeinsam mit\r\n                    sonstigen personenbezogenen Daten der Nutzer gespeichert.</p>\r\n                  <p class=\"description\">Beim Aufruf unserer Website werden die Nutzer durch einen Infobanner über die Verwendung von Cookies zu\r\n                    Analysezwecken informiert und auf diese Datenschutzerklärung verwiesen. Es erfolgt in diesem Zusammenhang auch\r\n                    ein Hinweis darauf, wie die Speicherung von Cookies in den Browsereinstellungen unterbunden werden kann.</p>\r\n                  <p class=\"description\"><strong>Rechtsgrundlage für die Datenverarbeitung</strong><br>Die Rechtsgrundlage für die Verarbeitung\r\n                    personenbezogener Daten unter Verwendung technisch notweniger Cookies ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f\r\n                    DSGVO.</p>\r\n                  <p class=\"description\">Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter Verwendung von Cookies zu Analysezwecken\r\n                    ist bei Vorliegen einer diesbezüglichen Einwilligung des Nutzers Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO.</p>\r\n                  <p class=\"description\"><strong>Zweck der Datenverarbeitung</strong><br>Der Zweck der Verwendung technisch notwendiger Cookies ist, die\r\n                    Nutzung von Websites für die Nutzer zu vereinfachen. Einige Funktionen unserer Internetseite können ohne den\r\n                    Einsatz von Cookies nicht angeboten werden. Für diese ist es erforderlich, dass der Browser auch nach einem\r\n                    Seitenwechsel wiedererkannt wird.&nbsp;Für folgende Anwendungen benötigen wir Cookies:</p>\r\n                  <ul class=\"description\">\r\n                    <li>Länderkennung</li>\r\n                    <li>Userverhalten</li>\r\n                    <li>Übernahme von Spracheinstellungen</li>\r\n                    <li>Merken von Suchbegriffen</li>\r\n                  </ul>\r\n                  <p class=\"description\">Die durch technisch notwendige Cookies erhobenen Nutzerdaten werden nicht zur Erstellung von Nutzerprofilen\r\n                    verwendet.&nbsp;Die Verwendung der Analyse-Cookies erfolgt zu dem Zweck, die Qualität unserer Website und ihre\r\n                    Inhalte zu verbessern. Durch die Analyse-Cookies erfahren wir, wie die Website genutzt wird und können so unser\r\n                    Angebot stetig optimieren.&nbsp;In diesen Zwecken liegt auch unser berechtigtes Interesse in der Verarbeitung\r\n                    der personenbezogenen Daten nach Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO.</p>\r\n                  <p class=\"description\"><strong>Dauer der Speicherung, Widerspruchs- und Beseitigungsmöglichkeit</strong> <br>Cookies werden auf dem\r\n                    Rechner des Nutzers gespeichert und von diesem an unserer Seite übermittelt. Daher haben Sie als Nutzer auch die\r\n                    volle Kontrolle über die Verwendung von Cookies. Durch eine Änderung der Einstellungen in Ihrem Internetbrowser\r\n                    können Sie die Übertragung von Cookies deaktivieren oder einschränken. Bereits gespeicherte Cookies können\r\n                    jederzeit gelöscht werden. Dies kann auch automatisiert erfolgen. Werden Cookies für unsere Website deaktiviert,\r\n                    können möglicherweise nicht mehr alle Funktionen der Website vollumfänglich genutzt werden.</p>\r\n                </div>\r\n                <div class=\"ce_text block\">\r\n                  <h3 class=\"headline\">E-Mail-Kontakt</h3>\r\n                  <p class=\"description\">Es ist eine Kontaktaufnahme über die bereitgestellte E-Mail-Adresse möglich. In diesem Fall werden die mit der\r\n                    E-Mail übermittelten personenbezogenen Daten des Nutzers gespeichert.&nbsp;Es erfolgt in diesem Zusammenhang\r\n                    keine Weitergabe der Daten an Dritte. Die Daten werden ausschließlich für die Verarbeitung der Konversation\r\n                    verwendet.<br><br><strong>Rechtsgrundlage für die Datenverarbeitung</strong><br>Rechtsgrundlage für die\r\n                    Verarbeitung der Daten ist bei Vorliegen einer Einwilligung des Nutzers Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a\r\n                    DSGVO.&nbsp;Rechtsgrundlage für die Verarbeitung der Daten, die im Zuge einer Übersendung einer E-Mail\r\n                    übermittelt werden, ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO. Zielt der E-Mail-Kontakt auf den Abschluss\r\n                    eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b\r\n                    DSGVO.<br><br><strong>Zweck der Datenverarbeitung<br></strong>Die Verarbeitung der personenbezogenen Daten aus\r\n                    der Eingabemaske dient uns allein zur Bearbeitung der Kontaktaufnahme. Im Falle einer Kontaktaufnahme per E-Mail\r\n                    liegt hieran auch das erforderliche berechtigte Interesse an der Verarbeitung der Daten.&nbsp;Die sonstigen\r\n                    während des Absendevorgangs verarbeiteten personenbezogenen Daten dienen dazu, einen Missbrauch des\r\n                    Kontaktformulars zu verhindern und die Sicherheit unserer informationstechnischen Systeme\r\n                    sicherzustellen.<br><br><strong>Dauer der Speicherung</strong><br>Die Daten werden gelöscht, sobald sie für die\r\n                    Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Für die personenbezogenen Daten aus der\r\n                    Eingabemaske des Kontaktformulars und diejenigen, die per E-Mail übersandt wurden, ist dies dann der Fall, wenn\r\n                    die jeweilige Konversation mit dem Nutzer beendet ist. Beendet ist die Konversation dann, wenn sich aus den\r\n                    Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist.&nbsp;Die während des\r\n                    Absendevorgangs zusätzlich erhobenen personenbezogenen Daten werden spätestens nach einer Frist von sieben Tagen\r\n                    gelöscht.<br><br><strong>Widerspruchs- und Beseitigungsmöglichkeit</strong><br>Der Nutzer hat jederzeit die\r\n                    Möglichkeit, seine Einwilligung zur Verarbeitung der personenbezogenen Daten zu widerrufen. Nimmt der Nutzer per\r\n                    E-Mail Kontakt mit uns auf, so kann er der Speicherung seiner personenbezogenen Daten jederzeit widersprechen.\r\n                    In einem solchen Fall kann die Konversation nicht fortgeführt werden. Im Falle des&nbsp;&nbsp;Widerrufs der\r\n                    Einwilligung und der Widerspruch der Speicherung wenden Sie sich bitte an den unten genannten \r\n                    Datenschutzverantwortlichen.&nbsp;Alle personenbezogenen Daten, die im Zuge der Kontaktaufnahme\r\n                    gespeichert wurden, werden in diesem Fall gelöscht.</p>\r\n                </div>\r\n                <div class=\"ce_text block\">\r\n                  <h3 class=\"headline\">Rechte der betroffenen Person</h3>\r\n                  <p class=\"description\">Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener i.S.d. DSGVO und es stehen Ihnen\r\n                    folgende Rechte gegenüber dem Verantwortlichen zu:</p>\r\n                  <p class=\"description\"><strong>1. Auskunftsrecht<br></strong>Sie können von dem Verantwortlichen eine Bestätigung darüber verlangen,\r\n                    ob personenbezogene Daten, die Sie betreffen, von uns verarbeitet werden. Liegt eine solche Verarbeitung vor,\r\n                    können Sie von dem Verantwortlichen über folgende Informationen Auskunft verlangen:</p>\r\n                  <ul class=\"description\">\r\n                    <li>die Zwecke, zu denen die personenbezogenen Daten verarbeitet werden;</li>\r\n                    <li>die Kategorien von personenbezogenen Daten, welche verarbeitet werden;</li>\r\n                    <li>die Empfänger bzw. die Kategorien von Empfängern, gegenüber denen die Sie betreffenden personenbezogenen\r\n                      Daten offengelegt wurden oder noch offengelegt werden;</li>\r\n                    <li>die geplante Dauer der Speicherung der Sie betreffenden personenbezogenen Daten oder, falls konkrete Angaben\r\n                      hierzu nicht möglich sind, Kriterien für die Festlegung der Speicherdauer;</li>\r\n                    <li>das Bestehen eines Rechts auf Berichtigung oder Löschung der Sie betreffenden personenbezogenen Daten, eines\r\n                      Rechts auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese\r\n                      Verarbeitung;</li>\r\n                    <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;</li>\r\n                    <li>alle verfügbaren Informationen über die Herkunft der Daten, wenn die personenbezogenen Daten nicht bei der\r\n                      betroffenen Person erhoben werden;</li>\r\n                    <li>das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Art.&nbsp;22\r\n                      Abs.&nbsp;1 und 4 DSGVO und – zumindest in diesen Fällen – aussagekräftige Informationen über die involvierte\r\n                      Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene\r\n                      Person.</li>\r\n                  </ul>\r\n                  <p class=\"description\">Ihnen steht das Recht zu, Auskunft darüber zu verlangen, ob die Sie betreffenden personenbezogenen Daten in ein\r\n                    Drittland oder an eine internationale Organisation übermittelt werden. In diesem Zusammenhang können Sie\r\n                    verlangen, über die geeigneten Garantien gem. Art.&nbsp;46 DSGVO im Zusammenhang mit der Übermittlung\r\n                    unterrichtet zu werden.</p>\r\n                  <p class=\"description\"><strong>2. Recht auf Berichtigung<br></strong>Sie haben ein Recht auf Berichtigung und/oder Vervollständigung\r\n                    gegenüber dem Verantwortlichen, sofern die verarbeiteten personenbezogenen Daten, die Sie betreffen, unrichtig\r\n                    oder unvollständig sind. Der Verantwortliche hat die Berichtigung unverzüglich vorzunehmen.</p>\r\n                  <p class=\"description\"><strong>3. Recht auf Einschränkung der Verarbeitung<br></strong>Unter den folgenden Voraussetzungen können Sie\r\n                    die Einschränkung der Verarbeitung der Sie betreffenden personenbezogenen Daten verlangen:</p>\r\n                  <ul class=\"description\">\r\n                    <li>wenn Sie die Richtigkeit der Sie betreffenden personenbezogenen für eine Dauer bestreiten, die es dem\r\n                      Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen;</li>\r\n                    <li>die Verarbeitung unrechtmäßig ist und Sie die Löschung der personenbezogenen Daten ablehnen und stattdessen\r\n                      die Einschränkung der Nutzung der personenbezogenen Daten verlangen;</li>\r\n                    <li>der Verantwortliche die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger benötigt, Sie\r\n                      diese jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen, oder</li>\r\n                    <li>wenn Sie Widerspruch gegen die Verarbeitung gemäß Art.&nbsp;21 Abs.&nbsp;1 DSGVO eingelegt haben und noch\r\n                      nicht feststeht, ob die berechtigten Gründe des Verantwortlichen gegenüber Ihren Gründen überwiegen.</li>\r\n                  </ul>\r\n                  <p class=\"description\">Wurde die Verarbeitung der Sie betreffenden personenbezogenen Daten eingeschränkt, dürfen diese Daten – von\r\n                    ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von\r\n                    Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen\r\n                    eines wichtigen öffentlichen Interesses der Union oder eines Mitgliedstaats verarbeitet werden.</p>\r\n                  <p class=\"description\">Wurde die Einschränkung der Verarbeitung nach den o.g. Voraussetzungen eingeschränkt, werden Sie von dem\r\n                    Verantwortlichen unterrichtet bevor die Einschränkung aufgehoben wird.</p>\r\n                  <p class=\"description\"><strong>4. Recht auf Löschung<br></strong>a)&nbsp;&nbsp;&nbsp;&nbsp;Löschungspflicht</p>\r\n                  <p class=\"description\">Sie können von dem Verantwortlichen verlangen, dass die Sie betreffenden personenbezogenen Daten unverzüglich\r\n                    gelöscht werden, und der Verantwortliche ist verpflichtet, diese Daten unverzüglich zu löschen, sofern einer der\r\n                    folgenden Gründe zutrifft:</p>\r\n                  <ul class=\"description\">\r\n                    <li>Die Sie betreffenden personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige\r\n                      Weise verarbeitet wurden, nicht mehr notwendig.</li>\r\n                    <li>Sie widerrufen Ihre Einwilligung, auf die sich die Verarbeitung gem. Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a\r\n                      oder Art.&nbsp;9 Abs.&nbsp;2 lit.&nbsp;a DSGVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage\r\n                      für die Verarbeitung.</li>\r\n                    <li>Sie legen gem. Art.&nbsp;21 Abs.&nbsp;1 DSGVO Widerspruch gegen die Verarbeitung ein und es liegen keine\r\n                      vorrangigen berechtigten Gründe für die Verarbeitung vor, oder Sie legen gem. Art.&nbsp;21 Abs.&nbsp;2 DSGVO\r\n                      Widerspruch gegen die Verarbeitung ein.</li>\r\n                    <li>Die Sie betreffenden personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>\r\n                    <li>Die Löschung der Sie betreffenden personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung\r\n                      nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.</li>\r\n                    <li>Die Sie betreffenden personenbezogenen Daten wurden in Bezug auf angebotene Dienste der\r\n                      Informationsgesellschaft gemäß Art.&nbsp;8 Abs.&nbsp;1 DSGVO erhoben.</li>\r\n                  </ul>\r\n                  <p class=\"description\">b) Information an Dritte</p>\r\n                  <p class=\"description\">Hat der Verantwortliche die Sie betreffenden personenbezogenen Daten öffentlich gemacht und ist er gem.\r\n                    Art.&nbsp;17 Abs.&nbsp;1 DSGVO zu deren Löschung verpflichtet, so trifft er unter Berücksichtigung der\r\n                    verfügbaren Technologie und der Implementierungskosten angemessene Maßnahmen, auch technischer Art, um für die\r\n                    Datenverarbeitung Verantwortliche, die die personenbezogenen Daten verarbeiten, darüber zu informieren, dass Sie\r\n                    als betroffene Person von ihnen die Löschung aller Links zu diesen personenbezogenen Daten oder von Kopien oder\r\n                    Replikationen dieser personenbezogenen Daten verlangt haben.</p>\r\n                  <p class=\"description\">c) Ausnahmen</p>\r\n                  <p class=\"description\">Das Recht auf Löschung besteht nicht, soweit die Verarbeitung erforderlich ist:</p>\r\n                  <ul class=\"description\">\r\n                    <li>zur Ausübung des Rechts auf freie Meinungsäußerung und Information;</li>\r\n                    <li>zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der Union oder der\r\n                      Mitgliedstaaten, dem der Verantwortliche unterliegt, erfordert, oder zur Wahrnehmung einer Aufgabe, die im\r\n                      öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen\r\n                      wurde;</li>\r\n                    <li>aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß Art.&nbsp;9 Abs.&nbsp;2\r\n                      lit.&nbsp;h und i sowie Art.&nbsp;9 Abs.&nbsp;3 DSGVO;</li>\r\n                    <li>für im öffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder historische Forschungszwecke\r\n                      oder für statistische Zwecke gem. Art.&nbsp;89 Abs.&nbsp;1 DSGVO, soweit das unter Abschnitt a) genannte Recht\r\n                      voraussichtlich die Verwirklichung der Ziele dieser Verarbeitung unmöglich macht oder ernsthaft\r\n                      beeinträchtigt, oder</li>\r\n                    <li>zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li>\r\n                  </ul>\r\n                  <p class=\"description\"><strong>Recht auf Unterrichtung</strong><br>Haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung\r\n                    der Verarbeitung gegenüber dem Verantwortlichen geltend gemacht, ist dieser verpflichtet, allen Empfängern,\r\n                    denen die Sie betreffenden personenbezogenen Daten offengelegt wurden, diese Berichtigung oder Löschung der\r\n                    Daten oder Einschränkung der Verarbeitung mitzuteilen, es sei denn, dies erweist sich als unmöglich oder ist mit\r\n                    einem unverhältnismäßigen Aufwand verbunden.&nbsp;Ihnen steht gegenüber dem Verantwortlichen das Recht zu, über\r\n                    diese Empfänger unterrichtet zu werden.</p>\r\n                  <p class=\"description\"><strong>Recht auf Datenübertragbarkeit<br></strong>Sie haben das Recht, die Sie betreffenden personenbezogenen\r\n                    Daten, die Sie dem Verantwortlichen bereitgestellt haben, in einem strukturierten, gängigen und\r\n                    maschinenlesbaren Format zu erhalten. Außerdem haben Sie das Recht diese Daten einem anderen Verantwortlichen\r\n                    ohne Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu\r\n                    übermitteln, sofern</p>\r\n                  <ul class=\"description\">\r\n                    <li>die Verarbeitung auf einer Einwilligung gem. Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO oder Art.&nbsp;9\r\n                      Abs.&nbsp;2 lit.&nbsp;a DSGVO oder auf einem Vertrag gem. Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO beruht und\r\n                    </li>\r\n                    <li>die Verarbeitung mithilfe automatisierter Verfahren erfolgt.</li>\r\n                  </ul>\r\n                  <p class=\"description\">In Ausübung dieses Rechts haben Sie ferner das Recht, zu erwirken, dass die Sie betreffenden personenbezogenen\r\n                    Daten direkt von einem Verantwortlichen einem anderen Verantwortlichen übermittelt werden, soweit dies technisch\r\n                    machbar ist. Freiheiten und Rechte anderer Personen dürfen hierdurch nicht beeinträchtigt werden.</p>\r\n                  <p class=\"description\">Das Recht auf Datenübertragbarkeit gilt nicht für eine Verarbeitung personenbezogener Daten, die für die\r\n                    Wahrnehmung einer Aufgabe erforderlich ist, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher\r\n                    Gewalt erfolgt, die dem Verantwortlichen übertragen wurde.</p>\r\n                  <p class=\"description\"><strong>Widerspruchsrecht<br></strong>Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen Situation\r\n                    ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von\r\n                    Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf\r\n                    diese Bestimmungen gestütztes Profiling.</p>\r\n                  <p class=\"description\">Der Verantwortliche verarbeitet die Sie betreffenden personenbezogenen Daten nicht mehr, es sei denn, er kann\r\n                    zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten\r\n                    überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>\r\n                  <p class=\"description\">Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das\r\n                    Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke\r\n                    derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in\r\n                    Verbindung steht.</p>\r\n                  <p class=\"description\">Widersprechen Sie der Verarbeitung für Zwecke der Direktwerbung, so werden die Sie betreffenden\r\n                    personenbezogenen Daten nicht mehr für diese Zwecke verarbeitet.</p>\r\n                  <p class=\"description\">Sie haben die Möglichkeit, im Zusammenhang mit der Nutzung von Diensten der Informationsgesellschaft –\r\n                    ungeachtet der Richtlinie 2002/58/EG – Ihr Widerspruchsrecht mittels automatisierter Verfahren auszuüben, bei\r\n                    denen technische Spezifikationen verwendet werden.<br><br><strong>Recht auf Widerruf der datenschutzrechtlichen\r\n                      Einwilligungserklärung<br></strong>Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung\r\n                    jederzeit zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der\r\n                    Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.<br><br><strong>Automatisierte Entscheidung\r\n                      im Einzelfall einschließlich Profiling<br></strong>Sie haben das Recht, nicht einer ausschließlich auf einer\r\n                    automatisierten Verarbeitung – einschließlich Profiling – beruhenden Entscheidung unterworfen zu werden, die\r\n                    Ihnen gegenüber rechtliche Wirkung entfaltet oder Sie in ähnlicher Weise erheblich beeinträchtigt. Dies gilt\r\n                    nicht, wenn die Entscheidung</p>\r\n                  <ul class=\"description\">\r\n                    <li>für den Abschluss oder die Erfüllung eines Vertrags zwischen Ihnen und dem Verantwortlichen erforderlich\r\n                      ist,</li>\r\n                    <li>aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der Verantwortliche unterliegt,\r\n                      zulässig ist und diese Rechtsvorschriften angemessene Maßnahmen zur Wahrung Ihrer Rechte und Freiheiten sowie\r\n                      Ihrer berechtigten Interessen enthalten oder</li>\r\n                    <li>mit Ihrer ausdrücklichen Einwilligung erfolgt.</li>\r\n                  </ul>\r\n                  <p class=\"description\">Allerdings dürfen diese Entscheidungen nicht auf besonderen Kategorien personenbezogener Daten nach Art.&nbsp;9\r\n                    Abs.&nbsp;1 DSGVO beruhen, sofern nicht Art.&nbsp;9 Abs.&nbsp;2 lit.&nbsp;a oder g DSGVO gilt und angemessene\r\n                    Maßnahmen zum Schutz der Rechte und Freiheiten sowie Ihrer berechtigten Interessen getroffen wurden.</p>\r\n                  <p class=\"description\">Hinsichtlich der in (1) und (3) genannten Fälle trifft der Verantwortliche angemessene Maßnahmen, um die Rechte\r\n                    und Freiheiten sowie Ihre berechtigten Interessen zu wahren, wozu mindestens das Recht auf Erwirkung des\r\n                    Eingreifens einer Person seitens des Verantwortlichen, auf Darlegung des eigenen Standpunkts und auf Anfechtung\r\n                    der Entscheidung gehört.</p>\r\n                  <p class=\"description\"><strong>Recht auf Beschwerde bei einer Aufsichtsbehörde<br></strong>Unbeschadet eines anderweitigen\r\n                    verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer\r\n                    Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts\r\n                    des mutmaßlichen Verstoßes, zu, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden\r\n                    personenbezogenen Daten gegen die DSGVO verstößt.</p>\r\n                  <p class=\"description\">Die Aufsichtsbehörde, bei der die Beschwerde eingereicht wurde, unterrichtet den Beschwerdeführer über den\r\n                    Stand und die Ergebnisse der Beschwerde einschließlich der Möglichkeit eines gerichtlichen Rechtsbehelfs nach\r\n                    Art.&nbsp;78 DSGVO.</p>\r\n                </div>\r\n    \r\n    \r\n    \r\n              </div>\r\n    \r\n              <div class=\"ce_text block\">\r\n    \r\n    \r\n    \r\n                <h3 class=\"headline\">Datenschutzerklärung der Dienste Dritter</h3>\r\n                <p class=\"description\"><strong><strong>Datenschutzerklärung für die v</strong>erwendung von Webfonts<br></strong>Auf diesen\r\n                  Internetseiten werden externe Schriften, Google Fonts verwendet. Google Fonts ist ein Dienst der Google Inc.\r\n                  (\"Google\"). Die Einbindung dieser Web Fonts erfolgt durch einen Serveraufruf, in der Regel ein Server von Google\r\n                  in den USA. Hierdurch wird an den Server übermittelt, welche unserer Internetseiten Sie besucht haben. Auch wird\r\n                  die IP-Adresse des Browsers des Endgerätes des Besuchers dieser Internetseiten von Google gespeichert. Nähere\r\n                  Informationen finden Sie in den Datenschutzhinweisen von Google, die Sie hier abrufen können: <a class=\"text\"\r\n                    href=\"https://www.google.com/fonts#AboutPlace:about\" target=\"_blank\"\r\n                    rel=\"nofollow\">www.google.com/fonts#AboutPlace:about</a>, <a class=\"text\"\r\n                    href=\"https://www.google.com/policies/privacy/\" target=\"_blank\"\r\n                    rel=\"nofollow\">www.google.com/policies/privacy/<br><br></a><strong>Datenschutzerklärung für Google\r\n                    Analytics<br></strong>Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“).\r\n                  Google Analytics verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert werden und die eine\r\n                  Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre\r\n                  Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort\r\n                  gespeichert.&nbsp;</p>\r\n                <p class=\"description\">Im Falle der Aktivierung der IP-Anonymisierung auf dieser Webseite, wird Ihre IP-Adresse von Google jedoch\r\n                  innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den\r\n                  Europäischen Wirtschaftsraum zuvor gekürzt.&nbsp;Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server\r\n                  von Google in den USA übertragen und dort gekürzt.&nbsp;Die IP-Anonymisierung ist auf dieser Website aktiv. Im\r\n                  Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website\r\n                  auszuwerten,&nbsp;um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung\r\n                  und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen.<br><br>Die im\r\n                  Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google\r\n                  zusammengeführt. Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer\r\n                  Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht\r\n                  sämtliche Funktionen dieser Website vollumfänglich werden nutzen können.&nbsp;<br><br>Sie können darüber hinaus\r\n                  die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer\r\n                  IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem\r\n                  folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <a\r\n                    href=\"http://tools.google.com/dlpage/gaoptout?hl=de\"\r\n                    target=\"_blank\">http://tools.google.com/dlpage/gaoptout?hl=de</a>.&nbsp;</p>\r\n                <p class=\"description\"><strong><strong><strong>Datenschutzerklärung für die v</strong>erwendung von&nbsp;</strong>Google Adwords\r\n                    Conversion Tracking<br></strong>Um die Nutzung unserer Webseite statistisch zu erfassen und zum Zwecke der\r\n                  Optimierung unserer Website für Sie auszuwerten, nutzen wir ferner das Google Conversion Tracking. Dabei wird von\r\n                  Google Adwords ein Cookie auf Ihrem Rechner gesetzt, sofern Sie über eine Google-Anzeige auf unsere Webseite\r\n                  gelangt sind. Diese Cookies verlieren nach 30 Tagen ihre Gültigkeit und dienen nicht der persönlichen\r\n                  Identifizierung. Besucht der Nutzer bestimmte Seiten der Webseite des Adwords-Kunden und das Cookie ist noch nicht\r\n                  abgelaufen, können Google und der Kunde erkennen, dass der Nutzer auf die Anzeige geklickt hat und zu dieser Seite\r\n                  weitergeleitet wurde. Jeder Adwords-Kunde erhält ein anderes Cookie. <br><br>Cookies können somit nicht über die\r\n                  Webseiten von Adwords-Kunden nachverfolgt werden. Die mithilfe des Conversion-Cookies eingeholten Informationen\r\n                  dienen dazu, Conversion-Statistiken für Adwords-Kunden zu erstellen, die sich für Conversion-Tracking entschieden\r\n                  haben. Die Adwords-Kunden erfahren die Gesamtanzahl der Nutzer, die auf ihre Anzeige geklickt haben und zu einer\r\n                  mit einem Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden. Sie erhalten jedoch keine Informationen,\r\n                  mit denen sich Nutzer persönlich identifizieren lassen. <br><br>Wenn Sie nicht an dem Tracking-Verfahren\r\n                  teilnehmen möchten, können Sie auch das hierfür erforderliche Setzen eines Cookies ablehnen – etwa per\r\n                  Browser-Einstellung, die das automatische Setzen von Cookies generell deaktiviert. Sie können Cookies für\r\n                  Conversion-Tracking auch deaktivieren, indem Sie Ihren Browser so einstellen, dass Cookies von der Domain „<a\r\n                    href=\"http://www.googleadservices.com/\" target=\"_blank\">www.googleadservices.com</a>“ blockiert werden. Googles\r\n                  Datenschutzbelehrung zum Conversion-Tracking findenSie&nbsp;hier:&nbsp;<a\r\n                    href=\"https://services.google.com/sitestats/de.html\"\r\n                    target=\"_blank\">(https://services.google.com/sitestats/de.html)</a>.</p>\r\n    \r\n    \r\n    \r\n              </div>\r\n    \r\n              <div class=\"ce_text block\">\r\n    \r\n    \r\n    \r\n                <p class=\"description\" style=\"text-align: justify;\"><strong>Facebook</strong><br>Diese Webseite verwendet einen Link oder Button zum\r\n                  sozialen Netzwerk Facebook. Hierbei handelt es sich nur um eine Verlinkung und nicht um ein so genanntes „Social\r\n                  Plugin“. Wenn Sie den Link also nicht nutzen, wird auch keine Information an Facebook übermittelt und kein\r\n                  Facebook-Cookie auf Ihrem Rechner platziert.</p>\r\n                <p class=\"description\" style=\"text-align: justify;\">Sobald Sie den Link anklicken, ohne bei Facebook angemeldet zu sein, öffnet sich in\r\n                  einem neuen Fenster die Anmelde­maske von Facebook. Zugleich platziert Facebook ein Cookie auf Ihrer Festplatte.\r\n                  Wenn Sie den Link als bereits eingeloggter Facebook-Nutzer betätigen, wird die Information an Facebook\r\n                  übermittelt, dass Sie den jeweiligen Artikel empfehlen möchten. Besucher Ihrer Facebook-Seite können dann – in\r\n                  Abhängigkeit von Ihren Privatsphäre-Einstellungen auf Facebook – sehen, dass Sie den Artikel empfehlen.<br>Seiten\r\n                  innerhalb von Facebook werden ausschließlich von der Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304,\r\n                  USA (Facebook) betrieben. Welche Daten Facebook auf diesen Seiten erhebt, entzieht sich deswegen der unserer\r\n                  Kenntnis und dem Einflussbereich.&nbsp;Allgemeine Hinweise dazu finden Sie unter <a\r\n                    href=\"https://www.facebook.com/about/privacy/your-info-on-other#applications\">https://www.facebook.com/about/privacy/your-info-on-other#applications</a>.\r\n                </p>\r\n                <p class=\"description\" style=\"text-align: justify;\"><strong>Datenschutzerklärung für die Nutzung von YouTube:<br></strong>Unsere\r\n                  Webseite nutzt Plugins der von Google betriebenen Seite YouTube. Betreiber der Seiten ist die YouTube, LLC, 901\r\n                  Cherry Ave., San Bruno, CA 94066, USA. Wenn Sie eine unserer mit einem YouTube-Plugin ausgestatteten Seiten\r\n                  besuchen, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem Youtube-Server mitgeteilt,\r\n                  welche unserer Seiten Sie besucht haben. Wenn Sie in Ihrem YouTube-Account eingeloggt sind ermöglichen Sie\r\n                  YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich\r\n                  aus Ihrem YouTube-Account ausloggen.&nbsp;Weitere Informationen zum Umgang von Nutzerdaten finden Sie in der\r\n                  Datenschutzerklärung von YouTube unter <a href=\"https://www.google.de/intl/de/policies/privacy\"\r\n                    target=\"_blank\">https://www.google.de/intl/de/policies/privacy</a><strong><br><br>Weitere soziale Netzwerke wie\r\n                    u.a. Twitter und Google+.</strong><br>Sobald Sie einen Link zu einem sozialen Netzwerk anklicken, wird eine\r\n                  direkte Verbindung mit dem Server aufgebaut und das jeweilige soziale Netzwerk kann bereits Ihre Daten erheben.\r\n                  Sind Sie bei einem sozialen Netzwerk eingeloggt, kann dieses Ihren Besuch dieser Website Ihrem Benutzerkonto\r\n                  zuordnen.</p>\r\n                <p class=\"description\" style=\"text-align: justify;\">Wenn Sie Mitglied bei einem sozialen Netzwerk sind und nicht möchten, dass dieses\r\n                  die bei Ihrem Besuch unserer Webseite gesammelten Daten mit Ihren gespeicherten Mitgliedsdaten verknüpft, müssen\r\n                  Sie sich vor dem anklicken des Links aus dem jeweiligen sozialen Netzwerk ausloggen.</p>\r\n                <p class=\"description\" style=\"text-align: justify;\">Auf den Umfang der Daten, die von den sozialen Netzwerken mit dem anklicken des\r\n                  Links erhoben werden, haben wir keinen Einfluss. Zweck und Umfang der Datenerhebung und die weitere Verarbeitung\r\n                  und Nutzung der Daten durch die jeweiligen sozialen Netzwerke sowie Ihre diesbezüglichen Rechte und\r\n                  Einstellungsmöglichkeiten zum Schutz Ihrer Privatsphäre entnehmen Sie bitte den Datenschutzhinweisen der\r\n                  jeweiligen sozialen Netzwerke.</p>\r\n    \r\n    \r\n    \r\n              </div>\r\n    \r\n              <div class=\"ce_text block\">\r\n    \r\n    \r\n    \r\n                <p class=\"description\" style=\"text-align: justify;\"><strong>Sonstige Links auf externe Anbieter</strong><br>Soweit darüber hinaus auf\r\n                  Web­seiten anderer Anbieter verlinkt wird, gilt diese Daten­schutz­erklärung nicht für deren Inhalte. Welche Daten\r\n                  die Betreiber dieser Seiten möglicherweise erheben, entzieht sich unserer Kenntnis sowie Einfluss­bereich.\r\n                  Informationen erhalten Sie im Daten­schutz­hinweis der jeweiligen Seite.</p>\r\n                <h3 class=\"headline\">Datensicherheit</h3>\r\n                <p class=\"description\">Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) zur\r\n                  Verschlüsselung. Ob eine einzelne Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an\r\n                  der geschlossenen Darstellung des Schüssel- beziehungsweise Schloss-Symbols in der unteren Statusleiste Ihres\r\n                  Browsers.<br><br>Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um\r\n                  Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung\r\n                  oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der\r\n                  technologischen Entwicklung fortlaufend verbessert.</p>\r\n                <h3 class=\"headline\">Änderung dieser Datenschutzerklärung</h3>\r\n                <p class=\"description\">Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung unserer Website und Angebote darüber\r\n                  oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese\r\n                  Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf unserer Website von\r\n                  Ihnen abgerufen und ausgedruckt werden.<br><br>Stand Mai 2019</p>\r\n    \r\n    \r\n    \r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>        \r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron.live {\n  background: url(\"/assets/img/hoo_live.jpg\") fixed center no-repeat;\n  background-position-y: 300%;\n  background-size: cover;\n  margin-bottom: 0px;\n  border-radius: 0px;\n  height: 30rem;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n"

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.ts":
/*!************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.ts ***!
  \************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
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

var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
    };
    PrivacyPolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__(/*! ./privacy-policy.component.html */ "./src/app/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__(/*! ./privacy-policy.component.scss */ "./src/app/privacy-policy/privacy-policy.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
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

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"2500\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"navbar-translate\">\r\n\t\t\t<a class=\"navbar-brand\" href=\"Home\">Halls Of Oblivion</a>\r\n\t\t\t<button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\r\n\t\t\t\t<span class=\"navbar-toggler-bar\"></span>\r\n\t\t\t\t<span class=\"navbar-toggler-bar\"></span>\r\n\t\t\t\t<span class=\"navbar-toggler-bar\"></span>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div class=\"navbar-collapse\" id=\"navbarToggler\">\r\n\t\t\t<ul class=\"navbar-nav ml-auto\">\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a class=\"nav-link\" pageScroll href=\"#news\">News</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a class=\"nav-link\" pageScroll href=\"#live\">Live</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a class=\"nav-link\" pageScroll href=\"#band\">Band</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<!--\r\n\t\t\t\t<li class=\"nav-item \">\r\n\t\t\t\t\t<div ngbDropdown class=\"d-inline-block dropdown\">\r\n\t\t\t\t\t\t<a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>Band</a>\r\n\t\t\t\t\t\t<div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\r\n\t\t\t\t\t\t\t<a class=\"dropdown-item\">Sebastian</a>\r\n\t\t\t\t\t\t\t<a class=\"dropdown-item\">Marcel</a>\r\n\t\t\t\t\t\t\t<a class=\"dropdown-item\">Markus K</a>\r\n\t\t\t\t\t\t\t<a class=\"dropdown-item\">Markus W</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t-->\r\n\r\n\t\t\t\t<li class=\"nav-item \">\r\n\t\t\t\t\t<div ngbDropdown class=\"d-inline-block dropdown\">\r\n\t\t\t\t\t\t<a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>Media</a>\r\n\t\t\t\t\t\t<div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\r\n\t\t\t\t\t\t\t<a class=\"dropdown-item\" pageScroll href=\"#videos\">Videos</a>\r\n\t\t\t\t\t\t\t<!--<a class=\"dropdown-item\" pageScroll href=\"#videos\">Pictures</a>-->\r\n\t\t\t\t\t\t\t<a class=\"dropdown-item\" pageScroll href=\"#songs\">Songs</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a class=\"nav-link\" href=\"https://hallsofoblivion.bandcamp.com/merch\">Merch</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a class=\"nav-link\" href=\"privacy-policy\">Datenschutz</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<!--\r\n\t\t\t\t<li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\r\n\t\t\t\t\t<a href=\"http://pk2-angular.creative-tim.com/documentation/tutorial\" class=\"nav-link\" target=\"_blank\"><i class=\"nc-icon nc-book-bookmark\"></i> Documentation</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t-->\r\n\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Instagram\" data-placement=\"bottom\" href=\"https://instagram.com/hallsofoblivion\" target=\"_blank\">\r\n\t\t\t\t\t\t<i class=\"fa fa-instagram\"></i>\r\n\t\t\t\t\t\t<p class=\"d-lg-none\">Instagram</p>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a class=\"nav-link\" rel=\"tooltip\" title=\"Like us on Facebook\" data-placement=\"bottom\" href=\"https://www.facebook.com/hallsofoblivion\" target=\"_blank\">\r\n\t\t\t\t\t\t<i class=\"fa fa-facebook-square\"></i>\r\n\t\t\t\t\t\t<p class=\"d-lg-none\">Facebook</p>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-collapse:after {\n  background-color: black !important; }\n\na:hover, a:focus {\n  color: #f33816 !important; }\n"

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