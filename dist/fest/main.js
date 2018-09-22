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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#color{\n  background-color: #B58096;\n  background-image: url('run.png');\n  /*Full height */\n  height: auto;\n  /*Center and scale the image nicely*/\n  background-size: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.row{\n  font-size: 1.5em;\n}\n\n/*#color{*/\n\n/*background: url(\"../../assets/images/run.png\") no-repeat center center fixed;*/\n\n/*-webkit-background-size: cover;*/\n\n/*-moz-background-size: cover;*/\n\n/*-o-background-size: cover;*/\n\n/*background-size: cover;*/\n\n/*}*/\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"color\">\n  <div class=\"container\">\n    <div class=\"row\" style=\"display: flex; justify-content: center; color: #18253F\">\n      <div class=\"col-sm-8\" >\n        <div style=\"text-align: center;margin-top: 80px;\">\n          <b><em>“Sports not only build the character. They also reveal it”.</em></b>\n        </div>\n        <p>\n          The significance of sports in a student’s life has best embodied in the quote\n          mentioned above and the best way to enjoy it is by participating in it when\n          opportunity arrives. Such is the importance of sports that even the best of\n          institutions promote the participation of students in it and so does our college,\n          KIET Group of Institutions.\n        </p>\n        <p>\n          The first step of the threefold sports celebration for the entire students of KIET\n          Group of Institutions i.e. Annual Sports Fest, 2018 - “SPARDHA” is scheduled\n          from 22 th September, 2018 to 30 th September, 2018.\n        </p>\n        <div style=\"text-align: right\">\n          <div style=\"flex-basis: 0\">\n            <p>Dr Rajesh Kumar Mishra</p>\n            <p style=\"margin-right: 150px\">Dean-SW</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div style=\"margin-top: 4.15%; color: #6C2424; text-align: center\">n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/admin-details/admin-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin-details/admin-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/admin-details/admin-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin-details/admin-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-header></app-admin-header>\n<div class=\"full\">\n  <div class=\"container\" style=\"text-align: center\">\n    <div style=\"text-align: center; margin-top: 5%\">\n      <h3>Games</h3>\n    </div>\n    <div class=\"card\" style=\"text-align: center; margin-top: 50px\" *ngFor=\"let captain of data; let i = index;\">\n      <div class=\"card-header\" style=\"background-color: #906678\">\n        <h4 style=\"color: #003366\"><b>Team {{ i+1}}</b></h4>\n      </div>\n      <div class=\"card-body\" style=\"background-color: #B58096; color: white\">\n        <div class=\"row\">\n          <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead>\n            <tr style=\"color: #003366\">\n              <th scope=\"col\"><b>#</b></th>\n              <th scope=\"col\"><b>Name</b></th>\n              <th scope=\"col\"><b>Branch</b></th>\n              <th scope=\"col\"><b>Library Id</b></th>\n              <th scope=\"col\"><b>Year</b></th>\n              <th scope=\"col\"><b>Contact</b></th>\n              <th scope=\"col\"><b>Status</b></th>\n              <th scope=\"col\"><b>Role</b></th>\n            </tr>\n            </thead>\n            <tbody>\n\n            <tr>\n              <td>1</td>\n              <td>{{captain.data.name}}</td>\n              <td>{{captain.data.branch}}</td>\n              <td>{{captain.data.libId}}</td>\n              <td>{{captain.data.year}}</td>\n              <td>{{captain.data.phone}}</td>\ngit\n              <th scope=\"col\" *ngIf=\"captain.status === 'TXN_SUCCESS'\"><b>PAID</b></th>\n              <th scope=\"col\" *ngIf=\"captain.status === 'TXN_FAILURE'\"><b>UNPAID</b></th>\n              <th scope=\"col\" *ngIf=\"captain.status === 'PENDING'\"><b>PENDING</b></th>\n              <th scope=\"col\" *ngIf=\"captain.data.type === 'team'\">--</th>\n\n              <td>{{captain.data.role}}</td>\n            </tr>\n            <tr *ngFor=\"let player of captain.data.team; let j = index\">\n              <td>{{j+2}}</td>\n              <td>{{player.name}}</td>\n              <td>{{player.branch}}</td>\n              <td>{{player.libId}}</td>\n              <td>{{player.year}}</td>\n              <td></td>\n              <td></td>\n              <td>{{player.role}}</td>\n            </tr>\n\n\n            </tbody>\n          </table>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <div style=\"margin-top: 20px; color: white\">\n    n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-details/admin-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin-details/admin-details.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDetailsComponent", function() { return AdminDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminDetailsComponent = /** @class */ (function () {
    function AdminDetailsComponent(route, userService) {
        this.route = route;
        this.userService = userService;
        this.data = [];
    }
    AdminDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var details$ = _this.userService.getDetails(params['id'], params['name']);
            details$.subscribe(function (result) {
                _this.data = result.data;
            });
        });
    };
    AdminDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-details',
            template: __webpack_require__(/*! ./admin-details.component.html */ "./src/app/admin-details/admin-details.component.html"),
            styles: [__webpack_require__(/*! ./admin-details.component.css */ "./src/app/admin-details/admin-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AdminDetailsComponent);
    return AdminDetailsComponent;
}());



/***/ }),

/***/ "./src/app/admin-header/admin-header.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin-header/admin-header.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background-color: #906678;\n  color: white;\n}\n\n.nav-link, a {\n  color: white;\n}\n\n.nav-item{\n  margin-right: 15px;\n}\n\n.right{\n  /*margin-left: 80%;*/\n}\n"

/***/ }),

/***/ "./src/app/admin-header/admin-header.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin-header/admin-header.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<nav class=\"navbar navbar-expand-lg \">\n  <a style=\"margin-left: 20px\" class=\"navbar-brand\" routerLink=\"\"><b>Spardha</b></a>\n  <span class=\"flex\" style=\"flex-grow: 1\"></span>\n  <button class=\"navbar-toggler\" style=\"color: white;\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\" style=\"margin-right: 10px; text-align: center\">\n      <i class=\"material-icons\">\n        menu\n      </i>\n    </span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/admin/home\"><b>Home</b><span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/captain-list\"><b>List</b></a>\n      </li>\n      <span style=\"margin-left: 200%\"></span>\n      <div class=\"right\" style=\"text-align: right; justify-content: right; display: flex\">\n        <li class=\"nav-item\" *ngIf=\"!login\">\n          <a class=\"nav-link\">\n            <app-login></app-login>\n          </a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"login\">\n          <a class=\"nav-link\" (click)=\"logout()\" href=\"/admin/login\"><b>Logout</b></a>\n        </li>\n      </div>\n    </ul>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/admin-header/admin-header.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin-header/admin-header.component.ts ***!
  \********************************************************/
/*! exports provided: AdminHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHeaderComponent", function() { return AdminHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminHeaderComponent = /** @class */ (function () {
    function AdminHeaderComponent(router) {
        this.router = router;
        this.login = false;
    }
    AdminHeaderComponent.prototype.ngOnInit = function () {
        // this.username = localStorage.getItem('USER_NAME');
        this.token = localStorage.getItem('USER_TOKEN');
        if (this.token) {
            this.login = true;
        }
    };
    AdminHeaderComponent.prototype.logout = function () {
        localStorage.clear();
        // this.router.navigate([ 'admin', 'login']);
    };
    AdminHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-header',
            template: __webpack_require__(/*! ./admin-header.component.html */ "./src/app/admin-header/admin-header.component.html"),
            styles: [__webpack_require__(/*! ./admin-header.component.css */ "./src/app/admin-header/admin-header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminHeaderComponent);
    return AdminHeaderComponent;
}());



/***/ }),

/***/ "./src/app/admin-home/admin-home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin-home/admin-home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-home/admin-home.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin-home/admin-home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-header></app-admin-header>\n<div class=\"container\">\n  <div style=\"text-align: center; margin-top: 5%\">\n    <h3>Games</h3>\n  </div>\n  <div class=\"row\" style=\"text-align: center; margin-top: 50px\">\n    <div class=\"col-sm-4\" *ngFor=\"let game of games\">\n      <div>\n        <a [routerLink]=\"[game.type,game.name]\" class=\"nav-link\"><p>{{game.name}}</p></a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-home/admin-home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-home/admin-home.component.ts ***!
  \****************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminHomeComponent = /** @class */ (function () {
    function AdminHomeComponent(userService) {
        this.userService = userService;
        this.games = [];
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getData().subscribe(function (data) {
            _this.games = data.data;
        });
    };
    AdminHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-home',
            template: __webpack_require__(/*! ./admin-home.component.html */ "./src/app/admin-home/admin-home.component.html"),
            styles: [__webpack_require__(/*! ./admin-home.component.css */ "./src/app/admin-home/admin-home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AdminHomeComponent);
    return AdminHomeComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.card{\n  width: 40%;\n  margin: 10% 30%;\n}\n\n.card-body{\n  justify-content: center;\n}\n\n.form-group label{\n  margin-right: 20px;\n}\n\nlabel{\n  color: #353535;\n}\n\n@media only screen and (min-width : 980px) and (max-width : 990px){\n  .innerText #help{\n    width: 100%;\n    font-size: 5em;\n    color: white;\n    margin-top: -50px;\n    font-family: 'Cinzel', serif;\n  }\n}\n\n@media only screen and (min-width : 564px) and (max-width : 979px){\n  .card{\n    width: 80%;\n    margin: 10% 0 5% 10%;\n  }\n}\n\n@media only screen and (min-width : 301px) and (max-width : 563px) {\n  .card{\n    width: 80%;\n    margin: 10% 0 5% 10%;\n  }\n}\n\n"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h3 style=\"text-align: center\">Login Page</h3>\n  </div>\n  <div class=\"card-body\">\n    <form method=\"post\" [formGroup]=\"loginForm\"  (submit)='onLogin()'>\n      <div class=\"form-group\">\n        <label for=\"email\">Email address</label>\n        <input type=\"email\" [formControl]=\"emailControl\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" [formControl]=\"passwordControl\" class=\"form-control\" id=\"password\" placeholder=\"Password\">\n      </div>\n      <button type=\"submit\" [disabled]=\"\" class=\"btn btn-primary\">Login</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/event-bus.service */ "./src/app/services/event-bus.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = /** @class */ (function () {
    function AdminComponent(router, userService, eventBus) {
        this.router = router;
        this.userService = userService;
        this.eventBus = eventBus;
        this.emailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.passwordControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: this.emailControl,
            password: this.passwordControl
        });
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.onLogin = function () {
        var _this = this;
        var obs = this.userService.loginAdmin(this.loginForm.value);
        obs.subscribe(function (data) {
            if (data.success) {
                localStorage.setItem('USER_TOKEN', data.token);
                // localStorage.setItem('USER_NAME', data.username);
                localStorage.setItem('USER_ROLE', data.admin);
                _this.eventBus.announce('LOGIN_SUCCESS');
                _this.router.navigate(['admin/home']);
            }
        }, function (error) {
            // this.alertService.error(error.error.message);
        });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__["EventBusService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./event/event.component */ "./src/app/event/event.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _divide_divide_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./divide/divide.component */ "./src/app/divide/divide.component.ts");
/* harmony import */ var _individual_individual_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./individual/individual.component */ "./src/app/individual/individual.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _captain_captain_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./captain/captain.component */ "./src/app/captain/captain.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin-home/admin-home.component */ "./src/app/admin-home/admin-home.component.ts");
/* harmony import */ var _admin_details_admin_details_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin-details/admin-details.component */ "./src/app/admin-details/admin-details.component.ts");
/* harmony import */ var _admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin-header/admin-header.component */ "./src/app/admin-header/admin-header.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _next_page_next_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./next-page/next-page.component */ "./src/app/next-page/next-page.component.ts");
/* harmony import */ var _failed_failed_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./failed/failed.component */ "./src/app/failed/failed.component.ts");
/* harmony import */ var _individual_player_individual_player_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./individual-player/individual-player.component */ "./src/app/individual-player/individual-player.component.ts");
/* harmony import */ var _payment_response_payment_response_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./payment-response/payment-response.component */ "./src/app/payment-response/payment-response.component.ts");
/* harmony import */ var _captain_id_captain_id_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./captain-id/captain-id.component */ "./src/app/captain-id/captain-id.component.ts");
/* harmony import */ var _captain_list_captain_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./captain-list/captain-list.component */ "./src/app/captain-list/captain-list.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _event_event_component__WEBPACK_IMPORTED_MODULE_11__["EventComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
                _player_player_component__WEBPACK_IMPORTED_MODULE_16__["PlayerComponent"],
                _payment_payment_component__WEBPACK_IMPORTED_MODULE_17__["PaymentComponent"],
                _divide_divide_component__WEBPACK_IMPORTED_MODULE_18__["DivideComponent"],
                _individual_individual_component__WEBPACK_IMPORTED_MODULE_19__["IndividualComponent"],
                _team_team_component__WEBPACK_IMPORTED_MODULE_20__["TeamComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _captain_captain_component__WEBPACK_IMPORTED_MODULE_22__["CaptainComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_23__["UserComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_24__["AdminComponent"],
                _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_25__["AdminHomeComponent"],
                _admin_details_admin_details_component__WEBPACK_IMPORTED_MODULE_26__["AdminDetailsComponent"],
                _admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_27__["AdminHeaderComponent"],
                _next_page_next_page_component__WEBPACK_IMPORTED_MODULE_29__["NextPageComponent"],
                _failed_failed_component__WEBPACK_IMPORTED_MODULE_30__["FailedComponent"],
                _individual_player_individual_player_component__WEBPACK_IMPORTED_MODULE_31__["IndividualPlayerComponent"],
                _payment_response_payment_response_component__WEBPACK_IMPORTED_MODULE_32__["PaymentResponseComponent"],
                _captain_id_captain_id_component__WEBPACK_IMPORTED_MODULE_33__["CaptainIdComponent"],
                _captain_list_captain_list_component__WEBPACK_IMPORTED_MODULE_34__["CaptainListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_6__["myRoutes"]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__["FileUploadModule"]
            ],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"], _guard_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/captain-id/captain-id.component.css":
/*!*****************************************************!*\
  !*** ./src/app/captain-id/captain-id.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.card{\n  width: 40%;\n  margin: 10% 30%;\n}\n\n.card-body{\n  justify-content: center;\n}\n\n.form-group label{\n  margin-right: 20px;\n}\n\nlabel{\n  color: #353535;\n}\n\n@media only screen and (min-width : 980px) and (max-width : 990px){\n  .innerText #help{\n    width: 100%;\n    font-size: 5em;\n    color: white;\n    margin-top: -50px;\n    font-family: 'Cinzel', serif;\n  }\n}\n\n@media only screen and (min-width : 564px) and (max-width : 979px){\n  .card{\n    width: 80%;\n    margin: 10% 0 5% 10%;\n  }\n}\n\n@media only screen and (min-width : 301px) and (max-width : 563px) {\n  .card{\n    width: 80%;\n    margin: 10% 0 5% 10%;\n  }\n}\n\n"

/***/ }),

/***/ "./src/app/captain-id/captain-id.component.html":
/*!******************************************************!*\
  !*** ./src/app/captain-id/captain-id.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h3 style=\"text-align: center\">Generate Unique Key</h3>\n  </div>\n  <div class=\"card-body\">\n    <form method=\"post\" [formGroup]=\"loginForm\"  (submit)='onLogin()'>\n      <div class=\"form-group\">\n        <label for=\"email\">Library ID</label>\n        <input type=\"text\" [formControl]=\"libControl\" class=\"form-control\" id=\"email\" placeholder=\"Enter library ID\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Unique ID</label>\n        <input type=\"text\" [formControl]=\"uniqueControl\" class=\"form-control\" id=\"password\" placeholder=\"enter unique code\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>Games <span style=\"color: red;\">*</span></label>\n        <select class=\"form-control\"  [formControl]=\"gamesControl\">\n          <option value=\"cricket\">Cricket</option>\n          <option value=\"football\">Football</option>\n          <option value=\"volleyball\">VolleyBall</option>\n          <option value=\"basket-ball\">Basket Ball</option>\n        </select>\n      </div>\n\n      <button type=\"submit\" [disabled]=\"\" class=\"btn btn-primary\">Submit</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/captain-id/captain-id.component.ts":
/*!****************************************************!*\
  !*** ./src/app/captain-id/captain-id.component.ts ***!
  \****************************************************/
/*! exports provided: CaptainIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptainIdComponent", function() { return CaptainIdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/event-bus.service */ "./src/app/services/event-bus.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CaptainIdComponent = /** @class */ (function () {
    function CaptainIdComponent(router, userService, eventBus) {
        this.router = router;
        this.userService = userService;
        this.eventBus = eventBus;
        this.libControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.uniqueControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.gamesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('cricket', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            libId: this.libControl,
            uniqueId: this.uniqueControl,
            game: this.gamesControl
        });
    }
    CaptainIdComponent.prototype.ngOnInit = function () {
    };
    CaptainIdComponent.prototype.onLogin = function () {
        var _this = this;
        var obs = this.userService.addCaptain(this.loginForm.value);
        obs.subscribe(function (data) {
            if (data.success) {
                _this.eventBus.announce('LOGIN_SUCCESS');
                _this.router.navigate(['/home']);
            }
        }, function (error) {
            // this.alertService.error(error.error.message);
        });
    };
    CaptainIdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-captain-id',
            template: __webpack_require__(/*! ./captain-id.component.html */ "./src/app/captain-id/captain-id.component.html"),
            styles: [__webpack_require__(/*! ./captain-id.component.css */ "./src/app/captain-id/captain-id.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__["EventBusService"]])
    ], CaptainIdComponent);
    return CaptainIdComponent;
}());



/***/ }),

/***/ "./src/app/captain-list/captain-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/captain-list/captain-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/captain-list/captain-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/captain-list/captain-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-header></app-admin-header>\n<div style=\"text-align: center; margin-top: 10px\">\n  <h4>Captains Details</h4>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"table-responsive\">\n\n      <table class=\"table\">\n        <thead>\n        <tr>\n          <th scope=\"col\">#</th>\n          <th scope=\"col\">Library Id</th>\n          <th scope=\"col\">Game</th>\n          <th scope=\"col\">Verification Code</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let captain of captains; let i = index\">\n          <th scope=\"row\">{{i+1}}</th>\n          <td>{{captain.libId}}</td>\n          <td>{{captain.game}}</td>\n          <td>{{captain.uniqueId}}</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <br>\n  <br>\n</div>\n\n"

/***/ }),

/***/ "./src/app/captain-list/captain-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/captain-list/captain-list.component.ts ***!
  \********************************************************/
/*! exports provided: CaptainListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptainListComponent", function() { return CaptainListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CaptainListComponent = /** @class */ (function () {
    function CaptainListComponent(userService) {
        this.userService = userService;
    }
    CaptainListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var list$ = this.userService.captainLIst();
        list$.subscribe(function (result) {
            console.log(result);
            _this.captains = result;
        });
    };
    CaptainListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-captain-list',
            template: __webpack_require__(/*! ./captain-list.component.html */ "./src/app/captain-list/captain-list.component.html"),
            styles: [__webpack_require__(/*! ./captain-list.component.css */ "./src/app/captain-list/captain-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], CaptainListComponent);
    return CaptainListComponent;
}());



/***/ }),

/***/ "./src/app/captain/captain.component.css":
/*!***********************************************!*\
  !*** ./src/app/captain/captain.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/captain/captain.component.html":
/*!************************************************!*\
  !*** ./src/app/captain/captain.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  captain works!\n</p>\n"

/***/ }),

/***/ "./src/app/captain/captain.component.ts":
/*!**********************************************!*\
  !*** ./src/app/captain/captain.component.ts ***!
  \**********************************************/
/*! exports provided: CaptainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptainComponent", function() { return CaptainComponent; });
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

var CaptainComponent = /** @class */ (function () {
    function CaptainComponent() {
    }
    CaptainComponent.prototype.ngOnInit = function () {
    };
    CaptainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-captain',
            template: __webpack_require__(/*! ./captain.component.html */ "./src/app/captain/captain.component.html"),
            styles: [__webpack_require__(/*! ./captain.component.css */ "./src/app/captain/captain.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CaptainComponent);
    return CaptainComponent;
}());



/***/ }),

/***/ "./src/app/divide/divide.component.css":
/*!*********************************************!*\
  !*** ./src/app/divide/divide.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".event-screen{\n  display: flex;\n  width: 100%;\n}\n\n#full{\n  /*background-color: #B58096;*/\n  background-image: url('back.jpg');\n  /* Full height */\n  height: auto;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nimg{\n  height: 500px;\n  width: 80%;\n}\n\n.formal-eve{\n  margin-top: 50px;\n  justify-content: center;\n  text-align: center;\n}\n\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: #ffffff;\n  font-size: 50px;\n}\n\n@media only screen and (min-width : 980px) and (max-width : 990px){\n  img{\n    height: 500px;\n    width: 300px;\n  }\n}\n\n@media only screen and (min-width : 770px) and (max-width : 979px){\n  img{\n    height: 500px;\n    width: 290px;\n  }\n}\n\n@media only screen and (min-width : 567px) and (max-width : 769px){\n  img{\n    height: 400px;\n    width: 100%;\n  }\n}\n\n@media only screen and (min-width : 301px) and (max-width : 566px) {\n  img{\n    height: 300px;\n    width: 100%;\n  }\n}\n\n"

/***/ }),

/***/ "./src/app/divide/divide.component.html":
/*!**********************************************!*\
  !*** ./src/app/divide/divide.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div id=\"full\">\n  <div id=\"event-screen\">\n    <div class=\"container\">\n      <div class=\"row\" style=\"display: flex; justify-content: center; text-align: center\">\n        <div class=\"col-sm-6\">\n          <div class=\"formal-eve\">\n            <!--<h3>Team Games</h3>-->\n            <a routerLink=\"team\">\n              <img src=\"../../assets/images/team.jpg\">\n              <div class=\"centered\">Team Game</div>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"formal-eve\">\n            <!--<h3>Individual Games</h3>-->\n            <a routerLink=\"individual\">\n              <img src=\"../../assets/images/badmn.jpg\">\n              <div class=\"centered\">Individual Game</div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <span></span>\n  </div>\n  <div style=\"margin-top: 24px; color: #ffffff;\">n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/divide/divide.component.ts":
/*!********************************************!*\
  !*** ./src/app/divide/divide.component.ts ***!
  \********************************************/
/*! exports provided: DivideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivideComponent", function() { return DivideComponent; });
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

var DivideComponent = /** @class */ (function () {
    function DivideComponent() {
    }
    DivideComponent.prototype.ngOnInit = function () {
    };
    DivideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-divide',
            template: __webpack_require__(/*! ./divide.component.html */ "./src/app/divide/divide.component.html"),
            styles: [__webpack_require__(/*! ./divide.component.css */ "./src/app/divide/divide.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DivideComponent);
    return DivideComponent;
}());



/***/ }),

/***/ "./src/app/event/event.component.css":
/*!*******************************************!*\
  !*** ./src/app/event/event.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.data{\n  /*background: #F9F9F9;*/\n  justify-content: center;\n\n}\n\n.container{\n  display: flex;\n  justify-content: center;\n}\n\n.data-wrap{\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.data-wrap .wrap{\n  padding: 15px;\n}\n\n#header{\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100px;\n  line-height:90px;\n  font-size: 2em;\n  color: #2F2F2F;\n  font-weight: 700;\n}\n\n.row{\n  /*width: 80%;*/\n  margin-top: 15px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n\n.card{\n  width: 200px;\n  height: 160px;\n}\n\n.card p{\n  color: #353535;\n  line-height: 10px;\n}\n\n.card img{\n  width: 200px;\n  height: 160px;\n}\n\n.card img:hover{\n  box-shadow: 1px 4px 8px 1px rgba(0, 0, 0, 0.2), 1px 6px 20px 1px rgba(0, 0, 0, 0.19);\n}\n\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: #ffffff;\n  font-size: 35px;\n}\n"

/***/ }),

/***/ "./src/app/event/event.component.html":
/*!********************************************!*\
  !*** ./src/app/event/event.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"image\">\n  <div class=\"container\">\n    <!--<div id=\"header\">-->\n      <!--<p>SPORTS EVENT</p>-->\n    <!--</div>-->\n    <div class=\"row\">\n      <div class=\"data-wrap\">\n        <div class=\"wrap\">\n          <div class=\"card\">\n            <a routerLink=\"/type/team\">\n              <img class=\"card-img-top\" src=\"../../assets/images/cricket.jpg\" alt=\"Card image cap\">\n              <div class=\"centered\">Cricket</div>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"data-wrap\">\n        <div class=\"wrap\">\n          <div class=\"card\">\n            <a routerLink=\"/type/team\">\n              <img class=\"card-img-top\" src=\"../../assets/images/football.jpg\" alt=\"Card image cap\">\n              <div class=\"centered\">Foot Ball</div>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"data-wrap\">\n        <div class=\"wrap\">\n          <div class=\"card\">\n            <a routerLink=\"/type/individual\">\n              <img class=\"card-img-top\" src=\"../../assets/images/tt.jpeg\" alt=\"Card image cap\">\n              <div class=\"centered\">Table Tennis</div>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"data-wrap\">\n        <div class=\"wrap\">\n          <div class=\"card\">\n            <a routerLink=\"/type/team\">\n              <img class=\"card-img-top\" src=\"../../assets/images/volleyball.jpg\" alt=\"Card image cap\">\n              <div class=\"centered\">Volley Ball</div>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"data-wrap\">\n        <div class=\"wrap\">\n          <div class=\"card\">\n            <a routerLink=\"/type/team\">\n              <img class=\"card-img-top\" src=\"../../assets/images/basketball-hd.jpg\" alt=\"Card image cap\">\n              <div class=\"centered\">Basket Ball</div>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"data-wrap\">\n        <div class=\"wrap\">\n          <div class=\"card\">\n            <a routerLink=\"/type/individual\">\n              <img class=\"card-img-top\" src=\"../../assets/images/chess.jpg\" alt=\"Card image cap\">\n              <div class=\"centered\">Chess</div>\n\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"data-wrap\">\n        <div class=\"wrap\">\n          <div class=\"card\">\n            <a routerLink=\"/type/individual\">\n              <img class=\"card-img-top\" src=\"../../assets/images/carom.jpg\" alt=\"Card image cap\">\n              <div class=\"centered\">Carrom</div>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"data-wrap\">\n        <div class=\"wrap\">\n          <div class=\"card\">\n            <a routerLink=\"/type/individual\">\n              <img class=\"card-img-top\" src=\"../../assets/images/pool.jpg\" alt=\"Card image cap\">\n              <div class=\"centered\">Pool Game</div>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"data-wrap\">\n        <div class=\"wrap\">\n          <div class=\"card\">\n            <a routerLink=\"/type/individual\">\n              <img class=\"card-img-top\" src=\"../../assets/images/lawn.jpg\" alt=\"Card image cap\">\n              <div class=\"centered\">Lawn Tennis</div>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"data-wrap\">\n        <div class=\"wrap\">\n          <div class=\"card\">\n            <a routerLink=\"/type/individual\">\n              <img class=\"card-img-top\" src=\"../../assets/images/race.jpg\" alt=\"Card image cap\">\n              <div class=\"centered\">Athletics</div>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"data-wrap\">\n        <div class=\"wrap\">\n          <div class=\"card\">\n            <a routerLink=\"/type/individual\">\n              <img class=\"card-img-top\" src=\"../../assets/images/badmin.jpg\" alt=\"Card image cap\">\n              <div class=\"centered\">Badminton</div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <span style=\"margin: 100px\"></span>\n</div>\n"

/***/ }),

/***/ "./src/app/event/event.component.ts":
/*!******************************************!*\
  !*** ./src/app/event/event.component.ts ***!
  \******************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
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

var EventComponent = /** @class */ (function () {
    function EventComponent() {
    }
    EventComponent.prototype.ngOnInit = function () {
    };
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.css */ "./src/app/event/event.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/failed/failed.component.css":
/*!*********************************************!*\
  !*** ./src/app/failed/failed.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/failed/failed.component.html":
/*!**********************************************!*\
  !*** ./src/app/failed/failed.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align: center; justify-content: center; margin-top: 100px\">\n  <p>You are not authenticated</p>\n  <p>Please register first or login</p>\n  <a routerLink=\"/home\">Go to Home Page</a>\n</div>\n"

/***/ }),

/***/ "./src/app/failed/failed.component.ts":
/*!********************************************!*\
  !*** ./src/app/failed/failed.component.ts ***!
  \********************************************/
/*! exports provided: FailedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailedComponent", function() { return FailedComponent; });
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

var FailedComponent = /** @class */ (function () {
    function FailedComponent() {
    }
    FailedComponent.prototype.ngOnInit = function () {
    };
    FailedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-failed',
            template: __webpack_require__(/*! ./failed.component.html */ "./src/app/failed/failed.component.html"),
            styles: [__webpack_require__(/*! ./failed.component.css */ "./src/app/failed/failed.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FailedComponent);
    return FailedComponent;
}());



/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('USER_TOKEN')) {
            return true;
        }
        this.router.navigate(['failed']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background-color: #906678;\n  color: white;\n}\n\n.nav-link, a {\n  color: white;\n}\n\n.nav-item{\n  margin-right: 15px;\n}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<nav class=\"navbar navbar-expand-lg \">\n  <a style=\"margin-left: 20px\" class=\"navbar-brand\" routerLink=\"\"><b>Spardha</b></a>\n  <span class=\"flex\" style=\"flex-grow: 1\"></span>\n  <button class=\"navbar-toggler\" style=\"color: white;\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\" style=\"margin-right: 10px; text-align: center\">\n      <i class=\"material-icons\">\n        menu\n      </i>\n    </span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"\"><b>Home</b><span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/about\"><b>About</b></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/event\"><b>Event</b></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" *ngIf=\"login\" routerLink=\"/user\"><b>Payments</b></a>\n      </li>\n      <span style=\"margin-left: 70%\"></span>\n      <div class=\"right\" style=\"text-align: right; justify-content: right; display: flex\">\n        <li class=\"nav-item\" *ngIf=\"!login\">\n          <a class=\"nav-link\">\n            <app-login></app-login>\n          </a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"login\">\n          <a class=\"nav-link\" (click)=\"logout()\" href=\"/\"><b>Logout</b></a>\n        </li>\n      </div>\n    </ul>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/event-bus.service */ "./src/app/services/event-bus.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(eventBus, router) {
        this.eventBus = eventBus;
        this.router = router;
        this.login = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.username = localStorage.getItem('USER_NAME');
        this.token = localStorage.getItem('USER_TOKEN');
        if (this.token) {
            this.login = true;
        }
        this.eventBus.listen('LOGIN_SUCCESS').subscribe(function (user) {
            // this.username = user.username;
            _this.login = true;
        });
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.clear();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__["EventBusService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.page-header {\n  color: black;\n\n  /* Full height */\n  height: auto;\n  /*background-size: cover;*/\n}\n\n#color{\n  /*background-color: #B58096;*/\n  background-image: url('run.png');\n  /* Full height */\n  height: 91.5%;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\np{\n  font-family: 'Cinzel', serif;\n}\n\n#motto{\n  position: relative;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 200px;\n  flex-basis: 0;\n  /*width: 50%;*/\n  margin: auto;\n\n  text-align: center;\n\n}\n\n.innerText #help{\n  width: 100%;\n  font-size: 5em;\n  color: white;\n  margin-top: -50px;\n  font-family: 'Cinzel', serif;\n}\n\n#spaceSpan{\n  flex-basis: 100%;\n}\n\n.date{\n  width: 100%;\n  font-size: 2em;\n  font-weight: bold;\n  /*color: #1f5ba9;*/\n  /*color: rgb(255, 217, 51);;*/\n  color: #003366;\n  font-family: 'Cinzel', serif;\n}\n\n.wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.button {\n  width: 160px;\n  height: 45px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 2.5px;\n  font-weight: 500;\n  color: #ffffff;\n  background-color: #003366;\n  border: none;\n  border-radius: 45px;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease 0s;\n  cursor: pointer;\n  outline: none;\n  margin-top: 50px;\n\n}\n\n#footer p{\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  color: #ffffff;\n  text-align: center;\n  flex-wrap: wrap;\n  overflow-wrap: break-word;\n}\n\n.button:hover {\n  background-color: #dc3545;\n  box-shadow: 0 5px 5px;\n  color: #ffffff;\n  -webkit-transform: translateY(-2px);\n          transform: translateY(-2px);\n}\n\nimg{\n  width: 400px;\n  height:200px\n}\n\n@media only screen and (min-width : 980px) and (max-width : 990px){\n  .innerText #help{\n    width: 100%;\n    font-size: 5em;\n    color: white;\n    margin-top: -50px;\n    font-family: 'Cinzel', serif;\n  }\n}\n\n@media only screen and (min-width : 564px) and (max-width : 979px){\n  .innerText #help{\n    width: 100%;\n    font-size: 5em;\n    color: white;\n    margin-top: -50px;\n    font-family: 'Cinzel', serif;\n  }\n}\n\n@media only screen and (min-width : 301px) and (max-width : 563px) {\n  .innerText #help{\n    width: 100%;\n    font-size: 4em;\n    color: white;\n    margin-top: -50px;\n    font-family: 'Cinzel', serif;\n  }\n\n  .date{\n    width: 100%;\n    font-size: 2em;\n    /*color: #1f5ba9;*/\n    /*color: rgb(255, 217, 51);;*/\n    color: #18253F;\n    font-family: 'Cinzel', serif;\n  }\n\n  img{\n    width: 200px;\n    height:150px;\n  }\n}\n\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n\n<div id=\"color\">\n  <div class=\"container\">\n    <div class=\"page-header\">\n      <div class=\"filter\"></div>\n      <div class=\"content-center\">\n        <div id=\"motto\">\n          <span class=\"spaceSpan\"></span>\n          <div class=\"innerText\">\n            <img src=\"../../assets/images/name.gif\">\n            <!--<p id=\"help\">Spardha '18</p>-->\n            <p class=\"date\">22-30<sup>Th</sup> SEPTEMBER</p>\n            <p class=\"date\">Annual Sports Fest 2K18</p>\n          </div>\n          <span class=\"spaceSpan\"></span>\n          <div class=\"wrap\">\n            <button class=\"button\"  (click)=\"nextPage()\">Register</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id=\"footer\">\n    <p><b>Copyright © 2018 - Spardha | Design and developed by</b>\n      <a href=\"https://www.linkedin.com/in/rupesh-yadav-977575137/\" target=\"_blank\" >\n        Rupesh yadav\n      </a>\n    </p>\n  </div>\n</div>\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.OnNotifyRefresh = function (refresh) {
        if (refresh) {
            this.ngOnInit();
        }
    };
    HomeComponent.prototype.nextPage = function () {
        this.router.navigate(['type']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/individual-player/individual-player.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/individual-player/individual-player.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/individual-player/individual-player.component.html":
/*!********************************************************************!*\
  !*** ./src/app/individual-player/individual-player.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  individual-player works!\n</p>\n"

/***/ }),

/***/ "./src/app/individual-player/individual-player.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/individual-player/individual-player.component.ts ***!
  \******************************************************************/
/*! exports provided: IndividualPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualPlayerComponent", function() { return IndividualPlayerComponent; });
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

var IndividualPlayerComponent = /** @class */ (function () {
    function IndividualPlayerComponent() {
    }
    IndividualPlayerComponent.prototype.ngOnInit = function () {
    };
    IndividualPlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-individual-player',
            template: __webpack_require__(/*! ./individual-player.component.html */ "./src/app/individual-player/individual-player.component.html"),
            styles: [__webpack_require__(/*! ./individual-player.component.css */ "./src/app/individual-player/individual-player.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndividualPlayerComponent);
    return IndividualPlayerComponent;
}());



/***/ }),

/***/ "./src/app/individual/individual.component.css":
/*!*****************************************************!*\
  !*** ./src/app/individual/individual.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  margin-top: 100px;\n}\n\n\nlabel, p{\n  color: #353535;\n}\n\n\n/*input[type=\"file\"] {*/\n\n\n/*display: none;*/\n\n\n/*}*/\n\n\n/*.custom-file-upload {*/\n\n\n/*border: 1px solid #ccc;*/\n\n\n/*display: inline-block;*/\n\n\n/*padding: 6px 12px;*/\n\n\n/*background-color: #35BF4D;*/\n\n\n/*color: white;*/\n\n\n/*cursor: pointer;*/\n\n\n/*}*/\n"

/***/ }),

/***/ "./src/app/individual/individual.component.html":
/*!******************************************************!*\
  !*** ./src/app/individual/individual.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n\n\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <div class=\"card\">\n        <div class=\"card-header\" style=\"color: #ffffff; background-color: #906678\">\n          Register to an Event\n        </div>\n        <div class=\"card-body\">\n          <form method=\"post\" [formGroup]=\"uploadForm\" enctype=\"multipart/form-data\" (ngSubmit)=\"OnUpload(uploadForm.value)\" >\n\n            <div class=\"form-group\">\n              <label>Library Id<span style=\"color: red;\">*</span></label>\n              <input type=\"text\"  class=\"form-control\" #sub formControlName=\"libId\" placeholder=\"college library id\">\n            </div>\n\n            <div class=\"form-group\">\n              <label>Mobile Number<span style=\"color: red;\">*</span></label>\n              <input type=\"text\" class=\"form-control\" #sub formControlName=\"phone\" placeholder=\"personal mobile number\">\n            </div>\n\n            <div class=\"form-group\">\n              <label>Games <span style=\"color: red;\">*</span></label>\n              <select class=\"form-control\" formControlName=\"game\">\n                <option value=\"table-tennis\">Table tennis</option>\n                <option value=\"chess\">Chess</option>\n                <option value=\"carrom\">Carrom</option>\n                <option value=\"pool\">Pool Game</option>\n                <option value=\"lawn-tennis\">Lawn tennis</option>\n                <option value=\"athletics\">Athletics</option>\n                <option value=\"badminton\">Badminton</option>\n              </select>\n            </div>\n\n            <div class=\"form-group\">\n              <label>Name<span style=\"color: red;\">*</span></label>\n              <input type=\"text\" disabled  class=\"form-control\" #sub formControlName=\"name\" value=\"{{data.Name}}\" placeholder=\"Your full name\">\n            </div>\n\n            <div class=\"form-group\">\n              <label>Gender<span style=\"color: red;\">*</span></label>\n              <input type=\"text\" disabled  class=\"form-control\" #sub value=\"{{data.Gender}}\" formControlName=\"gender\" placeholder=\"personal mobile number\">\n            </div>\n\n            <div class=\"form-group\">\n              <label>Select Branch<span style=\"color: red;\">*</span></label>\n              <input type=\"text\" disabled  class=\"form-control\" #sub value=\"{{data.Dept}}\" formControlName=\"branch\" placeholder=\"Branch\">\n            </div>\n\n            <div class=\"form-group\">\n              <label>Year <span style=\"color: red;\">*</span></label>\n              <input type=\"text\" disabled  class=\"form-control\" #sub value=\"{{data.year}}\" formControlName=\"year\" placeholder=\"Year\">\n            </div>\n\n            <div class=\"form-group\">\n              <span *ngIf=\"err\" style=\"color: red\">{{'*'+error}}</span>\n            </div>\n\n            <button type=\"submit\" [disabled]=\"uploadForm.invalid || !block\" class=\"btn btn-primary\">Submit</button>\n            <!--[disabled]=\"uploadForm.invalid || condition\"-->\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <p>If you have any problem in the registration process, you can contact to\n            <b>\n              Your respective game Apex\n            </b>\n            or can call at <b>7455969734 (Rupesh yadav)</b>\n          </p>\n        </div>\n      </div>\n      <div class=\"card\" style=\"margin-top: 20px\">\n        <div class=\"card-body\">\n          <table class=\"table\">\n            <tbody>\n            <tr>\n              <td scope=\"row\">- Do not register again for same game</td>\n            </tr>\n            <tr>\n            <tr>\n              <td scope=\"row\">- Go to Payments if you have already registered</td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/individual/individual.component.ts":
/*!****************************************************!*\
  !*** ./src/app/individual/individual.component.ts ***!
  \****************************************************/
/*! exports provided: IndividualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualComponent", function() { return IndividualComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IndividualComponent = /** @class */ (function () {
    function IndividualComponent(formBuilder, userService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.data = {};
        this.block = false;
        this.err = false;
    }
    IndividualComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploadForm = this.formBuilder.group({
            name: '',
            branch: '',
            year: '',
            libId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            game: ['chess', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gender: '',
            type: ['individual']
        });
        this.uploadForm.controls['libId'].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (value) {
            return value.length > 3;
        })).subscribe(function (val) {
            var lib$ = _this.userService.libraryData(val);
            lib$.subscribe(function (value) {
                if (value[0].valid) {
                    _this.block = true;
                    _this.data = value[0];
                    _this.uploadForm.controls['name'].setValue(value[0].Name);
                    _this.uploadForm.controls['branch'].setValue(value[0].Dept);
                    _this.uploadForm.controls['year'].setValue(value[0].year);
                    _this.uploadForm.controls['gender'].setValue(value[0].Gender);
                }
                else {
                    _this.uploadForm.controls['name'].setValue('');
                    _this.uploadForm.controls['branch'].setValue('');
                    _this.uploadForm.controls['year'].setValue('');
                    _this.uploadForm.controls['gender'].setValue('');
                    _this.block = false;
                }
            });
        });
    };
    //////// Submit Form/////////////
    IndividualComponent.prototype.OnUpload = function (submitForm) {
        var _this = this;
        var obs$ = this.userService.singleRegister(submitForm);
        obs$.subscribe(function (data) {
            if (data.success) {
                localStorage.setItem('USER_TOKEN', data.token);
                localStorage.setItem('USER_NAME', data.libId);
                _this.router.navigate(['player']);
            }
            else {
                _this.err = true;
                _this.error = data.message;
            }
        });
    };
    IndividualComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-individual',
            template: __webpack_require__(/*! ./individual.component.html */ "./src/app/individual/individual.component.html"),
            styles: [__webpack_require__(/*! ./individual.component.css */ "./src/app/individual/individual.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IndividualComponent);
    return IndividualComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*a{*/\n  /*text-decoration: none;*/\n  /*color: #428bca;*/\n  /*font-family: 'Lato', sans-serif;*/\n  /*font-weight: 700;*/\n  /*!*color: #E5E5E5;*!*/\n  /*border-radius: 45px;*/\n  /*}*/\n  /* The Modal (background) */\n  .modal {\n  display: none; /* Hidden by default */\n  /*position: fixed; !* Stay in place *!*/\n  z-index: 1; /* Sit on top */\n  padding-top: 70px; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n  /* Modal Content */\n  .modal-content {\n  position: relative;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  border: 1px solid #888;\n  width: 40%;\n  height: 80%;\n  box-shadow: 0 4px 8px 0 #ffffff,0 0px 0px 0 #ffffff;\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s\n}\n  /* Add Animation */\n  @-webkit-keyframes animatetop {\n  from {top:-300px; opacity:0}\n  to {top:0; opacity:1}\n}\n  @keyframes animatetop {\n  from {top:-300px; opacity:0}\n  to {top:0; opacity:1}\n}\n  /* The Close Button */\n  .close {\n  color: white;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n  .close:hover,\n.close:focus {\n  color: #ffffff;\n  text-decoration: none;\n  cursor: pointer;\n}\n  .modal-header {\n  height: 50px;\n  padding: 10px;\n  background-color: #906678;\n  color: white;\n  text-align: center;\n  justify-content: center;\n}\n  .modal-header h3{\n  color: white;\n}\n  .modal-body h4{\n  justify-content: center;\n  text-align: center;\n}\n  .modal-body {\n  margin: 10px 0;\n  padding: 2px 16px;\n  color: #353535;\n}\n  .col-xs-12 p,h1,h3,h4,h5,h6{\n  color: black;\n}\n  /*button{*/\n  /*background-color: #dc3545;*/\n  /*font-family: 'Lato', sans-serif;*/\n  /*font-weight: 700;*/\n  /*color: #E5E5E5;*/\n  /*margin: 10px;*/\n  /*border-radius: 45px;*/\n  /*}*/\n  button:hover{\n  /*background*/\n  color: #ffffff;\n}\n  form{\n  width: 100%;\n  height: 100%;\n}\n  /* Tabs */\n  body {\n  padding: 2rem 1rem;\n}\n  @media only screen and (min-width : 564px) and (max-width : 979px){\n\n  /* Modal Content */\n  .modal-content {\n    position: relative;\n    background-color: #fefefe;\n    margin: auto;\n    padding: 0;\n    border: 1px solid #888;\n    width: 60%;\n    height: 80%;\n    box-shadow: 0 4px 8px 0 #ffffff,0 0px 0px 0 #ffffff;\n    -webkit-animation-name: animatetop;\n    -webkit-animation-duration: 0.4s;\n    animation-name: animatetop;\n    animation-duration: 0.4s\n  }\n\n}\n  @media only screen and (min-width : 301px) and (max-width : 563px) {\n\n  /* Modal Content */\n  .modal-content {\n    position: relative;\n    background-color: #fefefe;\n    margin: auto;\n    padding: 0;\n    border: 1px solid #888;\n    width: 90%;\n    height: 80%;\n    box-shadow: 0 4px 8px 0 #ffffff,0 0px 0px 0 #ffffff;\n    -webkit-animation-name: animatetop;\n    -webkit-animation-duration: 0.4s;\n    animation-name: animatetop;\n    animation-duration: 0.4s\n  }\n}\n\n\n\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a id=\"clickme\" class=\"nav-link\" routerLink=\"#\" style=\"color: #906678; background-color: #ffffff; border-radius: 15px;\">\n  Status\n</a>\n\n\n<div id=\"myModal\" class=\"modal\">\n  <!-- Modal content -->\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h3>Spardha</h3>\n    </div>\n    <div class=\"container\">\n      <div class=\"modal-body\">\n        <h4>Check Status</h4>\n        <form method=\"post\" [formGroup]=\"loginForm\" (submit)=\"onLogin()\">\n\n          <div class=\"form-group\">\n            <label for=\"email\">Library Id</label>\n            <input type=\"text\" required class=\"form-control\" [formControl]=\"libControl\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"college library ID\">\n          </div>\n          <div class=\"form-group\">\n            <label>Games <span style=\"color: red;\">*</span></label>\n            <select class=\"form-control\"  [formControl]=\"gameControl\">\n              <option value=\"cricket\">Cricket</option>\n              <option value=\"football\">Football</option>\n              <option value=\"volleyball\">VolleyBall</option>\n              <option value=\"basket-ball\">Basket Ball</option>\n              <option value=\"table-tennis\">Table tennis</option>\n              <option value=\"chess\">Chess</option>\n              <option value=\"carrom\">Carrom</option>\n              <option value=\"pool\">Pool Game</option>\n              <option value=\"lawn-tennis\">Lawn tennis</option>\n              <option value=\"athletics\">Athletics</option>\n              <option value=\"badminton\">Badminton</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <span *ngIf=\"err\" style=\"color: red\">{{'*'+error}}</span>\n          </div>\n          <div class=\"form-group\">\n            <span style=\"color: red\">Only for Team captain</span>\n          </div>\n\n          <button type=\"submit\" [disabled]=\"loginForm.invalid\" class=\"btn btn-primary\">Login</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/event-bus.service */ "./src/app/services/event-bus.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService, eventBus) {
        this.router = router;
        this.userService = userService;
        this.eventBus = eventBus;
        this.err = false;
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.libControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
        this.gameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('cricket', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            libId: this.libControl,
            game: this.gameControl
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__(function () {
            // Get the modal
            var modal = document.getElementById('myModal');
            // Get the button that opens the modal
            var btn = document.getElementById('clickme');
            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName('close')[0];
            // When the user clicks the button, open the modal
            btn.onclick = function () {
                modal.style.display = 'block';
            };
            // When the user clicks on <span> (x), close the modal
            jquery__WEBPACK_IMPORTED_MODULE_1__('span').onclick = function () {
                modal.style.display = 'none';
            };
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            };
        });
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        var obs = this.userService.loginUser(this.loginForm.value);
        obs.subscribe(function (data) {
            if (data.success) {
                localStorage.setItem('USER_TOKEN', data.token);
                localStorage.setItem('USER_NAME', data.username);
                _this.router.navigate(['user']);
                _this.eventBus.announce('LOGIN_SUCCESS');
                _this.refresh.next(true);
            }
            else {
                _this.err = true;
                _this.error = data.message;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LoginComponent.prototype, "refresh", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_event_bus_service__WEBPACK_IMPORTED_MODULE_2__["EventBusService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/next-page/next-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/next-page/next-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.page-header {\n  color: black;\n\n  /* Full height */\n  height: auto;\n  /*background-size: cover;*/\n}\n\np{\n  font-family: 'Cinzel', serif;\n}\n\n#motto{\n  position: relative;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 200px;\n  flex-basis: 0;\n  /*width: 50%;*/\n  margin: auto;\n\n  text-align: center;\n\n}\n\n.innerText #help{\n  width: 100%;\n  font-size: 5em;\n  color: white;\n  margin-top: -50px;\n  font-family: 'Cinzel', serif;\n}\n\n#spaceSpan{\n  flex-basis: 100%;\n}\n\n.date{\n  width: 100%;\n  font-size: 2em;\n  font-weight: bold;\n  /*color: #1f5ba9;*/\n  /*color: rgb(255, 217, 51);;*/\n  color: #003366;\n  font-family: 'Cinzel', serif;\n}\n\n.wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.button {\n  width: 160px;\n  height: 45px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 2.5px;\n  font-weight: 500;\n  color: #ffffff;\n  background-color: #003366;\n  border: none;\n  border-radius: 45px;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease 0s;\n  cursor: pointer;\n  outline: none;\n  margin-top: 50px;\n\n}\n\n.button:hover {\n  background-color: #dc3545;\n  box-shadow: 0 5px 5px;\n  color: #ffffff;\n  -webkit-transform: translateY(-2px);\n          transform: translateY(-2px);\n}\n\nimg{\n  width: 400px;\n  height:200px\n}\n\n@media only screen and (min-width : 980px) and (max-width : 990px){\n  .innerText #help{\n    width: 100%;\n    font-size: 5em;\n    color: white;\n    margin-top: -50px;\n    font-family: 'Cinzel', serif;\n  }\n}\n\n@media only screen and (min-width : 564px) and (max-width : 979px){\n  .innerText #help{\n    width: 100%;\n    font-size: 5em;\n    color: white;\n    margin-top: -50px;\n    font-family: 'Cinzel', serif;\n  }\n}\n\n@media only screen and (min-width : 301px) and (max-width : 563px) {\n  .innerText #help{\n    width: 100%;\n    font-size: 4em;\n    color: white;\n    margin-top: -50px;\n    font-family: 'Cinzel', serif;\n  }\n\n  .date{\n    width: 100%;\n    font-size: 2em;\n    /*color: #1f5ba9;*/\n    /*color: rgb(255, 217, 51);;*/\n    color: #003366;\n    font-family: 'Cinzel', serif;\n  }\n\n  img{\n    width: 200px;\n    height:150px;\n  }\n}\n\n"

/***/ }),

/***/ "./src/app/next-page/next-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/next-page/next-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\" style=\"text-align: center; justify-content: center; margin-top: 100px\">\n  <p>You have successfully registered your team</p>\n  <p></p>\n  <a routerLink=\"/home\">Go to Home Page</a>\n</div>\n"

/***/ }),

/***/ "./src/app/next-page/next-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/next-page/next-page.component.ts ***!
  \**************************************************/
/*! exports provided: NextPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextPageComponent", function() { return NextPageComponent; });
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

var NextPageComponent = /** @class */ (function () {
    function NextPageComponent() {
    }
    NextPageComponent.prototype.ngOnInit = function () {
    };
    NextPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-next-page',
            template: __webpack_require__(/*! ./next-page.component.html */ "./src/app/next-page/next-page.component.html"),
            styles: [__webpack_require__(/*! ./next-page.component.css */ "./src/app/next-page/next-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NextPageComponent);
    return NextPageComponent;
}());



/***/ }),

/***/ "./src/app/payment-response/payment-response.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/payment-response/payment-response.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/payment-response/payment-response.component.html":
/*!******************************************************************!*\
  !*** ./src/app/payment-response/payment-response.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  payment-response works!\n</p>\n"

/***/ }),

/***/ "./src/app/payment-response/payment-response.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/payment-response/payment-response.component.ts ***!
  \****************************************************************/
/*! exports provided: PaymentResponseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentResponseComponent", function() { return PaymentResponseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentResponseComponent = /** @class */ (function () {
    function PaymentResponseComponent(userService) {
        this.userService = userService;
    }
    PaymentResponseComponent.prototype.ngOnInit = function () {
        this.userService.paytmResponse().subscribe(function (result) {
            // console.log(result);
        });
    };
    PaymentResponseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-response',
            template: __webpack_require__(/*! ./payment-response.component.html */ "./src/app/payment-response/payment-response.component.html"),
            styles: [__webpack_require__(/*! ./payment-response.component.css */ "./src/app/payment-response/payment-response.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], PaymentResponseComponent);
    return PaymentResponseComponent;
}());



/***/ }),

/***/ "./src/app/payment/payment.component.css":
/*!***********************************************!*\
  !*** ./src/app/payment/payment.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/payment/payment.component.html":
/*!************************************************!*\
  !*** ./src/app/payment/payment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\" style=\"text-align: center; justify-content: center\">\n  <div class=\"row\" style=\"text-align: center; justify-content: center; margin-top: 50px\">\n\n      <table class=\"table\">\n        <thead>\n        <tr>\n          <th scope=\"col\">Captain Name</th>\n          <th scope=\"col\">Game</th>\n          <th scope=\"col\">Payment Amount</th>\n        </tr>\n        </thead>\n        <tbody>\n\n        <tr>\n          <td>{{data.name}}</td>\n          <td>{{data.game}}</td>\n          <td>{{payble}}</td>\n          <!--<td><a [routerLink]=\"['/admin/data/pending', pending.id]\" class=\"nav-link\">click here</a></td>-->\n          <!--<td>{{pending.uploadOn}}</td>-->\n        </tr>\n\n        </tbody>\n      </table>\n  </div>\n  <button (click)=\"GoPayment()\" *ngIf=\"disable\" class=\"btn btn-danger\">Pay Now</button>\n  <button (click)=\"GoPayment()\" disabled *ngIf=\"!disable\" class=\"btn btn-danger\">PAID</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.data = '';
        this.payble = '';
        this.paytm = '';
        this.disable = true;
    }
    PaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.userService.getID(id).subscribe(function (data) {
                if (data.success) {
                    console.log('data --> ', data);
                    _this.data = data.data;
                    _this.payble = data.TXN_AMOUNT;
                    _this.paytm = data;
                    if (data.status === 'TXN_SUCCESS') {
                        _this.disable = false;
                    }
                    else {
                        _this.disable = true;
                    }
                }
            });
        });
    };
    PaymentComponent.prototype.GoPayment = function () {
        this.userService.goPaytm(this.paytm);
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/payment/payment.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/player/player.component.css":
/*!*********************************************!*\
  !*** ./src/app/player/player.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  margin-top: 100px;\n}\n\n\nlabel, p{\n  color: #353535;\n}\n\n\n/*input[type=\"file\"] {*/\n\n\n/*display: none;*/\n\n\n/*}*/\n\n\n/*.custom-file-upload {*/\n\n\n/*border: 1px solid #ccc;*/\n\n\n/*display: inline-block;*/\n\n\n/*padding: 6px 12px;*/\n\n\n/*background-color: #35BF4D;*/\n\n\n/*color: white;*/\n\n\n/*cursor: pointer;*/\n\n\n/*}*/\n"

/***/ }),

/***/ "./src/app/player/player.component.html":
/*!**********************************************!*\
  !*** ./src/app/player/player.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n\n\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <div class=\"card\">\n        <div class=\"card-header\" style=\"color: #ffffff; background-color: #906678\">\n          Add Team Member to the Game (*If any)\n        </div>\n        <div class=\"card-body\">\n          <form [formGroup]=\"invoiceForm\" (ngSubmit)=\"OnUpload(invoiceForm.value)\">\n            <div formArrayName=\"itemRows\">\n              <!-- Check the correct way to iterate your form array -->\n              <div *ngFor=\"let itemrow of invoiceForm.controls.itemRows.controls; let i=index\"  [formGroupName]=\"i\">\n                <h4>Member #{{ i + 1 }}</h4>\n                <!--<div class=\"form-group\">-->\n                  <!--<label>Name</label>-->\n                  <!--<input formControlName=\"name\" value=\"{{data.title}}\"  class=\"form-control\">-->\n                <!--</div>-->\n                <!--<div class=\"form-group\">-->\n                  <!--<label>Year <span style=\"color: red;\">*</span></label>-->\n                  <!--<select class=\"form-control\"  formControlName=\"year\">-->\n                    <!--<option value=\"4\">4 th</option>-->\n                    <!--<option value=\"3\">3 rd</option>-->\n                    <!--<option value=\"2\">2 nd</option>-->\n                  <!--</select>-->\n                <!--</div>-->\n                <div class=\"form-group\">\n                  <label>Library Id</label>\n                  <input formControlName=\"libId\" required  class=\"form-control\">\n                </div>\n                <!--<div class=\"form-group\">-->\n                  <!--<label>Roll number</label>-->\n                  <!--<input formControlName=\"rollNumber\" class=\"form-control\">-->\n                <!--</div>-->\n                <div style=\"margin-bottom: 10px; text-align: right; justify-content: right\">\n                  <button *ngIf=\"invoiceForm.controls.itemRows.controls.length > 1\" (click)=\"deleteRow(i)\" class=\"btn btn-danger\">Delete Member</button>\n                </div>\n              </div>\n            </div>\n            <button type=\"button\" (click)=\"addNewRow()\" class=\"btn btn-primary\">Add new Member</button>\n            <br>\n            <div class=\"form-group\">\n              <span *ngIf=\"err\" style=\"color: red\">{{'*'+error}}</span>\n            </div>\n            <hr>\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n            <span>( Also Click on Submit If you don't have team)</span>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <!--<div class=\"card-header\" style=\"color: #ffffff; background-color: #906678\">-->\n          <!--Rules of games-->\n        <!--</div>-->\n        <div class=\"card-body\">\n          <p>If you have any problem in the registration process, you can contact to\n            <b>\n              Your respective game Apex\n            </b>\n            or can call at <b>7455969734 (Rupesh yadav)</b>\n          </p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(_fb, userService, router) {
        this._fb = _fb;
        this.userService = userService;
        this.router = router;
        this.err = false;
    }
    PlayerComponent.prototype.ngOnInit = function () {
        this.invoiceForm = this._fb.group({
            itemRows: this._fb.array([this.initItemRows()]) // here
        });
    };
    PlayerComponent.prototype.initItemRows = function () {
        return this._fb.group({
            // list all your form controls here, which belongs to your form array
            libId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    PlayerComponent.prototype.addNewRow = function () {
        // control refers to your formarray
        var control = this.invoiceForm.controls['itemRows'];
        // add new formgroup
        control.push(this.initItemRows());
    };
    PlayerComponent.prototype.deleteRow = function (index) {
        // control refers to your formarray
        var control = this.invoiceForm.controls['itemRows'];
        // remove the chosen row
        control.removeAt(index);
    };
    PlayerComponent.prototype.OnUpload = function (submitForm) {
        var _this = this;
        var obs$ = this.userService.addMember(submitForm);
        obs$.subscribe(function (data) {
            if (data.success) {
                if (data.type === 'team') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Team has been registered successfully', '', 'success');
                    _this.router.navigate(['/next']);
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Team has been registered successfully, Now go to payment page', '', 'success');
                    _this.router.navigate(['/payment', data.id]);
                }
            }
            else {
                _this.err = true;
                _this.error = data.message;
            }
        });
    };
    PlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.css */ "./src/app/player/player.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: myRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myRoutes", function() { return myRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event/event.component */ "./src/app/event/event.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _divide_divide_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./divide/divide.component */ "./src/app/divide/divide.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _individual_individual_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./individual/individual.component */ "./src/app/individual/individual.component.ts");
/* harmony import */ var _captain_captain_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./captain/captain.component */ "./src/app/captain/captain.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-home/admin-home.component */ "./src/app/admin-home/admin-home.component.ts");
/* harmony import */ var _admin_details_admin_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-details/admin-details.component */ "./src/app/admin-details/admin-details.component.ts");
/* harmony import */ var _next_page_next_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./next-page/next-page.component */ "./src/app/next-page/next-page.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _failed_failed_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./failed/failed.component */ "./src/app/failed/failed.component.ts");
/* harmony import */ var _payment_response_payment_response_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./payment-response/payment-response.component */ "./src/app/payment-response/payment-response.component.ts");
/* harmony import */ var _captain_id_captain_id_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./captain-id/captain-id.component */ "./src/app/captain-id/captain-id.component.ts");
/* harmony import */ var _captain_list_captain_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./captain-list/captain-list.component */ "./src/app/captain-list/captain-list.component.ts");



















var myRoutes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'type',
        component: _divide_divide_component__WEBPACK_IMPORTED_MODULE_5__["DivideComponent"]
    },
    {
        path: 'type/team',
        component: _team_team_component__WEBPACK_IMPORTED_MODULE_6__["TeamComponent"]
    },
    {
        path: 'type/individual',
        component: _individual_individual_component__WEBPACK_IMPORTED_MODULE_7__["IndividualComponent"]
    },
    {
        path: 'event',
        component: _event_event_component__WEBPACK_IMPORTED_MODULE_1__["EventComponent"]
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    },
    {
        path: 'player',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]],
        component: _player_player_component__WEBPACK_IMPORTED_MODULE_3__["PlayerComponent"]
    },
    {
        path: 'payment/:id',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]],
        component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_4__["PaymentComponent"]
    },
    {
        path: 'captain',
        component: _captain_captain_component__WEBPACK_IMPORTED_MODULE_8__["CaptainComponent"]
    },
    {
        path: 'admin/login',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"]
    },
    {
        path: 'user',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]],
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"]
    },
    {
        path: 'admin/home',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]],
        component: _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_11__["AdminHomeComponent"]
    },
    {
        path: 'admin/home/:id/:name',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]],
        component: _admin_details_admin_details_component__WEBPACK_IMPORTED_MODULE_12__["AdminDetailsComponent"]
    },
    {
        path: 'next',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]],
        component: _next_page_next_page_component__WEBPACK_IMPORTED_MODULE_13__["NextPageComponent"]
    },
    {
        path: 'failed',
        component: _failed_failed_component__WEBPACK_IMPORTED_MODULE_15__["FailedComponent"]
    },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'payment_response',
        component: _payment_response_payment_response_component__WEBPACK_IMPORTED_MODULE_16__["PaymentResponseComponent"]
    },
    {
        path: 'captain/unique/id',
        component: _captain_id_captain_id_component__WEBPACK_IMPORTED_MODULE_17__["CaptainIdComponent"]
    },
    {
        path: 'captain-list',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]],
        component: _captain_list_captain_list_component__WEBPACK_IMPORTED_MODULE_18__["CaptainListComponent"]
    }
];


/***/ }),

/***/ "./src/app/services/event-bus.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/event-bus.service.ts ***!
  \***********************************************/
/*! exports provided: EventBusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBusService", function() { return EventBusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventBusService = /** @class */ (function () {
    function EventBusService() {
        this.bus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    EventBusService.prototype.announce = function (event, data) {
        this.bus.next({ event: event, data: data });
    };
    EventBusService.prototype.listen = function (event) {
        return this.bus.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (item) { return item.event === event; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (item) { return item.data; }));
    };
    EventBusService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], EventBusService);
    return EventBusService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.teamRegister = function (userForm) {
        return this.http.post('/user/register', userForm);
    };
    UserService.prototype.singleRegister = function (userForm) {
        return this.http.post('/user/register', userForm);
    };
    UserService.prototype.loginUser = function (loginForm) {
        return this.http.post('/user/login', loginForm);
    };
    UserService.prototype.addMember = function (member) {
        var token = localStorage.getItem('USER_TOKEN');
        return this.http.post('/user/member', member, {
            headers: { Authorization: 'Bearer ' + token }
        });
    };
    UserService.prototype.approve = function (value) {
        var token = localStorage.getItem('USER_TOKEN');
        return this.http.post('/user/approve', { value: value }, {
            headers: { Authorization: 'Bearer ' + token }
        });
    };
    UserService.prototype.loginAdmin = function (adminForm) {
        return this.http.post('/admin/login', adminForm);
    };
    UserService.prototype.getData = function () {
        var token = localStorage.getItem('USER_TOKEN');
        return this.http.get('/admin/data', {
            headers: { Authorization: 'bearer ' + token }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (pending) {
            return pending;
        }));
    };
    UserService.prototype.getDetails = function (type, game) {
        var token = localStorage.getItem('USER_TOKEN');
        return this.http.post('/admin/details', { type: type, game: game }, {
            headers: { Authorization: 'Bearer ' + token }
        });
    };
    UserService.prototype.addCaptain = function (value) {
        return this.http.post('/user/add-captain', { value: value });
    };
    UserService.prototype.libraryData = function (sub) {
        var url = 'https://www.kiet.edu/erp-apis/index.php/verify/libid/' + sub;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }));
    };
    UserService.prototype.getID = function (id) {
        var token = localStorage.getItem('USER_TOKEN');
        return this.http.get('/user/keys?id=' + id, {
            headers: { Authorization: 'bearer ' + token }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (pending) {
            return pending;
        }));
    };
    UserService.prototype.goPaytm = function (val) {
        document.location.href = 'http://sportsfest.kiet.edu/user/paytm_data?amount=' + JSON.stringify(val);
    };
    UserService.prototype.paytmResponse = function () {
        var token = localStorage.getItem('USER_TOKEN');
        return this.http.post('/user/paytm_response', {
            headers: { Authorization: 'Bearer ' + token }
        });
    };
    UserService.prototype.refreshData = function () {
        var token = localStorage.getItem('USER_TOKEN');
        return this.http.post('/user/refresh-event', {}, {
            headers: { Authorization: 'Bearer ' + token }
        });
    };
    UserService.prototype.captainLIst = function () {
        var url = '/admin/captainList';
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/team/team.component.css":
/*!*****************************************!*\
  !*** ./src/app/team/team.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  margin-top: 100px;\n}\n\n\nlabel, p{\n  color: #353535;\n}\n\n\n/*input[type=\"file\"] {*/\n\n\n/*display: none;*/\n\n\n/*}*/\n\n\n/*.custom-file-upload {*/\n\n\n/*border: 1px solid #ccc;*/\n\n\n/*display: inline-block;*/\n\n\n/*padding: 6px 12px;*/\n\n\n/*background-color: #35BF4D;*/\n\n\n/*color: white;*/\n\n\n/*cursor: pointer;*/\n\n\n/*}*/\n"

/***/ }),

/***/ "./src/app/team/team.component.html":
/*!******************************************!*\
  !*** ./src/app/team/team.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n\n\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <div class=\"card\">\n        <div class=\"card-header\" style=\"color: #ffffff; background-color: #906678\">\n          Register to an Event\n        </div>\n        <div class=\"card-body\">\n          <form method=\"post\" [formGroup]=\"uploadForm\" enctype=\"multipart/form-data\" (ngSubmit)=\"OnUpload(uploadForm.value)\" >\n\n            <div class=\"form-group\">\n              <label>Library Id<span style=\"color: red;\">*</span></label>\n              <input type=\"text\"  class=\"form-control\" #sub formControlName=\"libId\" placeholder=\"college library id\">\n            </div>\n            <div class=\"form-group\">\n              <label>Verification Code<span style=\"color: red;\">*</span></label>\n              <input type=\"text\"  class=\"form-control\" #sub formControlName=\"uniqueId\" placeholder=\"Enter verification code\">\n            </div>\n\n            <div class=\"form-group\">\n              <label>Mobile Number<span style=\"color: red;\">*</span></label>\n              <input type=\"text\" class=\"form-control\" #sub formControlName=\"phone\" placeholder=\"personal mobile number\">\n            </div>\n\n            <div class=\"form-group\">\n              <label>Games <span style=\"color: red;\">*</span></label>\n              <select class=\"form-control\"  formControlName=\"game\">\n                <option value=\"cricket\">Cricket</option>\n                <option value=\"football\">Football</option>\n                <option value=\"volleyball\">VolleyBall</option>\n                <option value=\"basket-ball\">Basket Ball</option>\n              </select>\n            </div>\n\n            <div class=\"form-group\">\n              <label>Name<span style=\"color: red;\">*</span></label>\n              <input type=\"text\" disabled  class=\"form-control\" #sub formControlName=\"name\" value=\"{{data.Name}}\" placeholder=\"Your full name\">\n            </div>\n\n            <div class=\"form-group\">\n              <label>Gender<span style=\"color: red;\">*</span></label>\n              <input type=\"text\" disabled  class=\"form-control\" #sub value=\"{{data.Gender}}\" formControlName=\"gender\" placeholder=\"personal mobile number\">\n            </div>\n\n            <div class=\"form-group\">\n              <label>Select Branch<span style=\"color: red;\">*</span></label>\n              <input type=\"text\" disabled  class=\"form-control\" #sub value=\"{{data.Dept}}\" formControlName=\"branch\" placeholder=\"Branch\">\n            </div>\n\n            <div class=\"form-group\">\n              <label>Year <span style=\"color: red;\">*</span></label>\n              <input type=\"text\" disabled  class=\"form-control\" #sub value=\"{{data.year}}\" formControlName=\"year\" placeholder=\"Year\">\n            </div>\n\n            <div class=\"form-group\">\n              <span *ngIf=\"err\" style=\"color: red\">{{'*'+error}}</span>\n            </div>\n\n            <button type=\"submit\" [disabled]=\"uploadForm.invalid || !block\" class=\"btn btn-primary\">Submit</button>\n            <!--[disabled]=\"uploadForm.invalid || condition\"-->\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <p>If you have any problem in the registration process, you can contact to\n            <b>\n              Your respective game Apex\n            </b>\n            or can call at <b>7455969734 (Rupesh yadav)</b>\n          </p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/event-bus.service */ "./src/app/services/event-bus.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TeamComponent = /** @class */ (function () {
    function TeamComponent(formBuilder, userService, router, eventBus) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.eventBus = eventBus;
        this.err = false;
        this.block = false;
        this.data = {};
    }
    TeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploadForm = this.formBuilder.group({
            name: '',
            branch: '',
            year: '',
            libId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            game: ['cricket', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            uniqueId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gender: '',
            type: ['team']
        });
        this.uploadForm.controls['libId'].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (value) {
            return value.length > 3;
        })).subscribe(function (val) {
            var lib$ = _this.userService.libraryData(val);
            lib$.subscribe(function (value) {
                if (value[0].valid) {
                    _this.block = true;
                    _this.data = value[0];
                    _this.uploadForm.controls['name'].setValue(value[0].Name);
                    _this.uploadForm.controls['branch'].setValue(value[0].Dept);
                    _this.uploadForm.controls['year'].setValue(value[0].year);
                    _this.uploadForm.controls['gender'].setValue(value[0].Gender);
                }
                else {
                    _this.uploadForm.controls['name'].setValue(null);
                    _this.uploadForm.controls['branch'].setValue(null);
                    _this.uploadForm.controls['year'].setValue(null);
                    _this.uploadForm.controls['gender'].setValue(null);
                    _this.block = false;
                }
            });
        });
    };
    //////// Submit Form/////////////
    TeamComponent.prototype.OnUpload = function (submitForm) {
        var _this = this;
        var obs$ = this.userService.teamRegister(submitForm);
        obs$.subscribe(function (data) {
            _this.error = data.message;
            _this.err = true;
            if (data.success) {
                localStorage.setItem('USER_TOKEN', data.token);
                localStorage.setItem('USER_NAME', data.libId);
                _this.eventBus.announce('LOGIN_SUCCESS');
                _this.router.navigate(['player']);
            }
            else {
                _this.err = true;
                _this.error = data.message;
            }
        });
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__["EventBusService"]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div style=\"text-align: center; margin-top: 10px\">\n  <h4>Your registered team</h4>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"table-responsive\">\n\n    <table class=\"table\">\n      <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Captain Name</th>\n        <th scope=\"col\">Game</th>\n        <th scope=\"col\">Team Member</th>\n        <th scope=\"col\">Amount</th>\n        <th scope=\"col\">Check</th>\n        <!--<th scope=\"col\"><button (click)=\"refreshButton()\" class=\"btn btn-danger\">Refresh</button></th>-->\n      </tr>\n      </thead>\n      <tbody>\n\n      <tr *ngFor=\"let name of names; let i = index\">\n        <th scope=\"row\">{{i+1}}</th>\n        <td>{{name.captain.name}}</td>\n        <td>{{name.captain.game}}</td>\n        <td>{{name.captain.team.length+1}}</td>\n\n        <td *ngIf=\"name.captain.type === 'team'\">Not Required</td>\n        <td *ngIf=\"name.status === 'TXN_FAILURE' && name.captain.type === 'individual'\">UNPAID</td>\n        <td *ngIf=\"name.status === 'PENDING' && name.captain.type === 'individual'\">PENDING</td>\n        <td *ngIf=\"name.status === 'TXN_SUCCESS' && name.amount >= 68 && name.captain.type === 'individual'\">PAID</td>\n        <td *ngIf=\"name.status === 'TXN_SUCCESS' && name.amount < 68 && name.captain.type === 'individual'\">UNPAID</td>\n\n        <td *ngIf=\"name.captain.type === 'team'\"></td>\n        <td *ngIf=\"name.status === 'TXN_FAILURE' && name.captain.type === 'individual'\"><a  [routerLink]=\"['/payment', name.captain._id]\">Pay Again</a></td>\n        <td *ngIf=\"name.status === 'PENDING' && name.captain.type === 'individual'\"><a (click)=\"refreshButton()\" routerLink=\"#\">Refresh</a></td>\n        <td *ngIf=\"name.status === 'TXN_SUCCESS' && name.amount >= 68 && name.captain.type === 'individual'\"></td>\n        <td *ngIf=\"name.status === 'TXN_SUCCESS' && name.amount < 68 && name.captain.type === 'individual'\"><a  [routerLink]=\"['/payment', name.captain._id]\">Pay Again</a></td>\n\n      </tr>\n      </tbody>\n    </table>\n    </div>\n  </div>\n  <br>\n  <br>\n  <div><b>Note</b>--> Please Click on Refresh after some time, If the <b>Payment Status</b> is <b>PENDING</b></div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = /** @class */ (function () {
    // amount: number;
    function UserComponent(userService, route) {
        this.userService = userService;
        this.route = route;
        this.names = [];
        this.CUST_ID = '';
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var state = params['status'];
            var message = params['message'];
            _this.refreshButton();
            sweetalert__WEBPACK_IMPORTED_MODULE_2___default()(message, '', state);
        });
    };
    UserComponent.prototype.refreshButton = function () {
        var _this = this;
        var refresh$ = this.userService.refreshData();
        refresh$.subscribe(function (result) {
            _this.names = result.data;
        });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserComponent);
    return UserComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/shido/Desktop/fest/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map