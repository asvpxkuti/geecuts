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

/***/ "./src/app/app-routes/routes.ts":
/*!**************************************!*\
  !*** ./src/app/app-routes/routes.ts ***!
  \**************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _pages_about_company_about_company_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/about-company/about-company.component */ "./src/app/pages/about-company/about-company.component.ts");
/* harmony import */ var _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/contact-us/contact-us.component */ "./src/app/pages/contact-us/contact-us.component.ts");
/* harmony import */ var _pages_email_contacts_email_contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/email-contacts/email-contacts.component */ "./src/app/pages/email-contacts/email-contacts.component.ts");
/* harmony import */ var _pages_success_success_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/success/success.component */ "./src/app/pages/success/success.component.ts");




var routes = [
    { path: '', redirectTo: 'about-company', pathMatch: 'full' },
    { path: 'about-company', component: _pages_about_company_about_company_component__WEBPACK_IMPORTED_MODULE_0__["AboutCompanyComponent"] },
    { path: 'customers', component: _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_1__["ContactUsComponent"] },
    { path: 'contact', component: _pages_email_contacts_email_contacts_component__WEBPACK_IMPORTED_MODULE_2__["EmailContactsComponent"] },
    { path: 'success', component: _pages_success_success_component__WEBPACK_IMPORTED_MODULE_3__["SuccessComponent"] }
];


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

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _app_routes_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routes/routes */ "./src/app/app-routes/routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _service_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/client.service */ "./src/app/service/client.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _pages_about_company_about_company_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/about-company/about-company.component */ "./src/app/pages/about-company/about-company.component.ts");
/* harmony import */ var _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/footer/footer.component */ "./src/app/pages/footer/footer.component.ts");
/* harmony import */ var _pages_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/header/header.component */ "./src/app/pages/header/header.component.ts");
/* harmony import */ var _pages_image_loader_image_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/image-loader/image-loader.component */ "./src/app/pages/image-loader/image-loader.component.ts");
/* harmony import */ var _pages_success_success_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/success/success.component */ "./src/app/pages/success/success.component.ts");
/* harmony import */ var _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/contact-us/contact-us.component */ "./src/app/pages/contact-us/contact-us.component.ts");
/* harmony import */ var _pages_email_contacts_email_contacts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/email-contacts/email-contacts.component */ "./src/app/pages/email-contacts/email-contacts.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_about_company_about_company_component__WEBPACK_IMPORTED_MODULE_8__["AboutCompanyComponent"],
                _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _pages_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _pages_image_loader_image_loader_component__WEBPACK_IMPORTED_MODULE_11__["ImageLoaderComponent"],
                _pages_success_success_component__WEBPACK_IMPORTED_MODULE_12__["SuccessComponent"],
                _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_13__["ContactUsComponent"],
                _pages_email_contacts_email_contacts_component__WEBPACK_IMPORTED_MODULE_14__["EmailContactsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_16__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_16__["OwlNativeDateTimeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
            ],
            providers: [_service_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/about-company/about-company.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/about-company/about-company.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mani-section {\r\n    padding: 90px;\r\n    background-color: #ffffff;\r\n}"

/***/ }),

/***/ "./src/app/pages/about-company/about-company.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/about-company/about-company.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-image-loader></app-image-loader>\n\n<section class=\"mani-section\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n         <div class=\"col-md-6\">\n           <h2>Benefits & Features</h2>\n           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n         </div>\n         <div class=\"col-md-6\">\n             <h2>Getting Started</h2>\n             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n         </div>\n       </div>\n     </div>\n</section>\n\n\n<div class=\"container-fluid\">\n  <ul *ngFor=\"let client of clients\">\n    <li>{{ client.name }}</li>\n    <li>{{ client.email }}</li>\n    <li>{{ clientDate}}</li>\n  </ul>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/about-company/about-company.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/about-company/about-company.component.ts ***!
  \****************************************************************/
/*! exports provided: AboutCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutCompanyComponent", function() { return AboutCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _service_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/client.service */ "./src/app/service/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutCompanyComponent = /** @class */ (function () {
    function AboutCompanyComponent(clientService) {
        this.clientService = clientService;
    }
    AboutCompanyComponent.prototype.ngOnInit = function () {
    };
    ;
    AboutCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-company',
            template: __webpack_require__(/*! ./about-company.component.html */ "./src/app/pages/about-company/about-company.component.html"),
            styles: [__webpack_require__(/*! ./about-company.component.css */ "./src/app/pages/about-company/about-company.component.css")]
        }),
        __metadata("design:paramtypes", [_service_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"]])
    ], AboutCompanyComponent);
    return AboutCompanyComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"mani-section\">\n  <div class=\"container-fluid text-center\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h1>Current Appointments</h1>\n            <p *ngFor=\"let data of clientInfo; let i = index\">{{ i + 1}} - {{data.name}}-{{data.email}}-{{data.customerApptDate}}-{{data.submitted_date}}</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _service_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/client.service */ "./src/app/service/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(_http, clientService) {
        this._http = _http;
        this.clientService = clientService;
        this.clientModel = {
            time: '',
        };
        this.times = ['10:00 AM', '10:30 PM', '11:00 AM',
            '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
            '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
            '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
            '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
            '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
        ];
    }
    ContactUsComponent.prototype.disableEnterKey = function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            //console.log('nice try');
            return false;
        }
    };
    ContactUsComponent.prototype.bookAppointment = function (elem) {
        debugger;
        elem.target.style.backgroundColor = 'yellow';
        this.clientModel.time = elem.target.value;
        this.allButtons = document.querySelectorAll('input.btn');
        this.allButtons.forEach(function (elemVal) {
            if (elemVal.style.backgroundColor === "") {
                elemVal.classList.add('disabled');
            }
            else {
                return;
            }
        });
        console.log(this.allButtons);
    };
    ContactUsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.fetchClients().subscribe(function (data) {
            _this.clientInfo = data;
        });
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/pages/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/pages/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _service_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/pages/email-contacts/email-contacts.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/email-contacts/email-contacts.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mani-section {\r\n    padding: 90px;\r\n    background-color: #ffffff;\r\n  }\r\n\r\n.header-section {\r\npadding: 50px;\r\nbackground-color: #ffffff;\r\nfont-family: Georgia, serif;\r\n}"

/***/ }),

/***/ "./src/app/pages/email-contacts/email-contacts.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/email-contacts/email-contacts.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <section class=\"header-section\">\n    <div class=\"container-fluid text-center\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h1>Book an Appointment</h1>\n        </div>  \n      </div>  \n    </div>\n</section>\n\n<section class=\"mani-section\">\n    <div class=\"container-fluid\">\n     \n        <form  (keydown.enter)=\"disableEnterKey($event)\" #personalForm=\"ngForm\" novalidate>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                  <h1>Pick a day</h1>\n                  <label for=\"date-mani\">Date:</label>\n                  <input class=\"form-control\" [(ngModel)]=\"contactInfo.bookingDate\" [owlDateTimeTrigger]=\"dt\" [owlDateTime]=\"dt\" id=\"mydate\" name=\"mydate\" size=\"30\">\n                  <owl-date-time #dt></owl-date-time>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"name\">Name:</label>\n                  <input class=\"form-control\" appUpdateOnblur  #name_=\"ngModel\"  id=\"name\" [(ngModel)]=\"contactInfo.name\" placeholder=\"Enter your name\" name=\"name_\" size=\"30\" required minlength=\"2\" >\n                  <div class=\"alert alert-danger\" *ngIf=\"name_.errors?.required && name_.touched\">\n                    Name is required.\n                  </div>\n                  <div class=\"alert alert-danger\" *ngIf=\"name_.errors?.minlength && name_.touched\">\n                    Name must be at least 2 characters long.\n                  </div>\n              </div>\n            </div> <!-- end-of-first-col -->\n            <div class=\"col-md-3\">\n              <h1>Pick a service</h1>\n              <div class=\"form-group\">\n                  <label for=\"name\">I Need A:</label>\n                  <select placeholder=\"Pick Something\" name=\"job\" class=\"form-control\" id=\"job\" #job=\"ngModel\" [(ngModel)]='contactInfo.job'>\n                    <option *ngFor=\"let data of hairStore\" [ngValue]=\"data.price\"> {{data.hairjob}}</option>\n                  </select>\n                  <div class=\"alert alert-danger\" *ngIf=\"job.errors?.required && job.touched\">\n                    This field is required.\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"email\">Email:</label>\n                  <input class=\"form-control\" #email=\"ngModel\" [(ngModel)]=\"contactInfo.email\" id=\"email\" ng-pattern=\"/^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/\" placeholder=\"Enter email\" name=\"email\" size=\"30\" required appUpdateOnblur>\n                  <div class=\"alert alert-danger\" *ngIf=\"email.errors?.required && email.touched\">\n                    Email is required.\n                  </div>\n                  <div class=\"alert alert-danger\" *ngIf=\"email.errors?.pattern && email.touched\">\n                    Please enter a valid email\n                  </div>\n              </div>\n              <button [disabled]=\"personalForm.invalid\" (click)=emailUser() type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Send</button>\n            </div>\n            <div class=\"col-md-6\">\n                <h1>Verify Appointment Details</h1>\n              <div class=\"form-group\">\n                  <!-- <label for=\"name\">Pleas review</label> -->\n                  <p>Your Name is: {{contactInfo.name}}</p>\n                  <p>Your Email is: {{contactInfo.email}}<p>\n                  <p>Your Appointment is on: {{contactInfo.bookingDate}}</p>\n                  <p>Your Total Cost is: {{contactInfo.job}}</p>\n              </div>\n            </div>\n          </div> <!-- end-of-first-row -->\n          \n        </form>\n    </div>\n</section>\n \n\n\n\n\n\n  \n  "

/***/ }),

/***/ "./src/app/pages/email-contacts/email-contacts.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/email-contacts/email-contacts.component.ts ***!
  \******************************************************************/
/*! exports provided: EmailContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailContactsComponent", function() { return EmailContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _service_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/client.service */ "./src/app/service/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailContactsComponent = /** @class */ (function () {
    function EmailContactsComponent(_http, router, clientService) {
        this._http = _http;
        this.router = router;
        this.clientService = clientService;
        this.contactInfo = {
            email: '',
            name: '',
            bookingDate: '',
            job: ''
        };
        this.hairStore = [
            { 'hairjob': 'Hair Cut', 'price': 25 },
            { 'hairjob': 'Line Up', 'price': 15 },
            { 'hairjob': 'Beard Clean Up', 'price': 15 }
        ];
    }
    EmailContactsComponent.prototype.ngOnInit = function () {
    };
    EmailContactsComponent.prototype.emailUser = function () {
        var _this = this;
        var httpsHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        httpsHeaders.set('Content-Type', 'application/x-www-form-urlencoded');
        this.data = {
            'email': this.contactInfo.email,
            'date': JSON.stringify(this.contactInfo.bookingDate),
            'name': this.contactInfo.name,
            'job': this.contactInfo.job
        };
        this.clientService.saveClient(this.data, { observe: 'response' }).subscribe(function (data) {
            console.log('saving data:' + data);
        });
        this.clientService.sendClientData(this.data, { headers: httpsHeaders, observe: 'response' }).subscribe(function (data) {
            console.log(_this.data);
            if (data) {
                console.log("successfully sent email");
                _this.router.navigate(['success']);
            }
            else {
                console.log("opps something went wrong");
            }
        });
    };
    EmailContactsComponent.prototype.disableEnterKey = function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            //console.log('nice try');
            return false;
        }
    };
    EmailContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email-contacts',
            template: __webpack_require__(/*! ./email-contacts.component.html */ "./src/app/pages/email-contacts/email-contacts.component.html"),
            styles: [__webpack_require__(/*! ./email-contacts.component.css */ "./src/app/pages/email-contacts/email-contacts.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]])
    ], EmailContactsComponent);
    return EmailContactsComponent;
}());



/***/ }),

/***/ "./src/app/pages/footer/footer.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/footer/footer.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mani-section {\r\n    padding: 90px;\r\n   /*  background-color: #ffffff; */\r\n   color: antiquewhite;\r\n   background: #141E30; \r\n   background: linear-gradient(to right, #243B55, #141E30); \r\n  }\r\n  \r\n  /* fallback for old browsers */\r\n  \r\n  /* Chrome 10-25, Safari 5.1-6 */\r\n  \r\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n"

/***/ }),

/***/ "./src/app/pages/footer/footer.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/footer/footer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"mani-section\">\n  <div class=\"container-fluid text-center\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <ul class=\"list-inline\">\n          <li class=\"list-inline-item\"><img class=\"img-fluid\" src=\"../../../assets/img/fb-48.png\" alt=\"Instagram\"><a href=\"\"></a></li>\n          <li class=\"list-inline-item\"><img class=\"img-fluid\" src=\"../../../assets/img/insta-48.png\" alt=\"Facebook\"><a href=\"\"></a></li>\n          <li class=\"list-inline-item\"><img class=\"img-fluid\" src=\"../../../assets/img/twit-48.png\" alt=\"Twitter\"><a href=\"\"></a></li>\n        </ul>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <p>2018&copy; Terms & Conditions, Careers, Privacy Policy</p>\n      </div>\n    </div> \n  </div>\n</section>"

/***/ }),

/***/ "./src/app/pages/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
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
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/pages/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/pages/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/pages/header/header.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/header/header.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    color: #ff0000;\r\n    text-align: center;\r\n  }\r\n  .carousel-inner img {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/pages/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark justify-content-center\">\n  <a class=\"navbar-brand\" href=\"#\"><img src=\"../../../assets/img/fb-48.png\" alt=\"logo\" style=\"width:40px;\">\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav w-100 justify-content-center\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/about-company\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/services\">Services</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/contact\">Book an Appointment</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/customers\">View Appointments</a>\n        </li>\n    </ul>\n  </div> \n</nav>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
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
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/pages/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/pages/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/image-loader/image-loader.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/image-loader/image-loader.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/image-loader/image-loader.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/image-loader/image-loader.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ul class=\"carousel-indicators\">\n    <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n  </ul>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"img-fluid\" src=\"./assets/img/geecut1e.jpg\" alt=\"Los Angeles\">\n      <div class=\"carousel-caption\">\n        <h3>Los Angeles</h3>\n        <p>We had such a great time in LA!</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"img-fluid\" src=\"../assets/img/geecut2e.jpg\" alt=\"Chicago\">\n      <div class=\"carousel-caption\">\n        <h3>Chicago</h3>\n        <p>Thank you, Chicago!</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"img-fluid\" src=\"./assets/img/geecut3e.jpg\" alt=\"New York\">\n      <div class=\"carousel-caption\">\n        <h3>New York</h3>\n        <p>We love the Big Apple!</p>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\"></span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\"></span>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/image-loader/image-loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/image-loader/image-loader.component.ts ***!
  \**************************************************************/
/*! exports provided: ImageLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoaderComponent", function() { return ImageLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageLoaderComponent = /** @class */ (function () {
    function ImageLoaderComponent() {
    }
    ImageLoaderComponent.prototype.ngOnInit = function () {
    };
    ImageLoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-loader',
            template: __webpack_require__(/*! ./image-loader.component.html */ "./src/app/pages/image-loader/image-loader.component.html"),
            styles: [__webpack_require__(/*! ./image-loader.component.css */ "./src/app/pages/image-loader/image-loader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageLoaderComponent);
    return ImageLoaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/success/success.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/success/success.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/success/success.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/success/success.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  success works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/success/success.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/success/success.component.ts ***!
  \****************************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuccessComponent = /** @class */ (function () {
    function SuccessComponent() {
    }
    SuccessComponent.prototype.ngOnInit = function () {
    };
    SuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-success',
            template: __webpack_require__(/*! ./success.component.html */ "./src/app/pages/success/success.component.html"),
            styles: [__webpack_require__(/*! ./success.component.css */ "./src/app/pages/success/success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "./src/app/service/client.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/client.service.ts ***!
  \*******************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientService = /** @class */ (function () {
    function ClientService(_http) {
        this._http = _http;
    }
    ClientService.prototype.fetchClients = function () {
        return this._http.get("/client").map(function (response) { return response; });
    };
    ClientService.prototype.saveClient = function (data, options) {
        return this._http.post("/client/save", data, options);
    };
    ClientService.prototype.sendClientData = function (data, options) {
        return this._http.post("/client/sendmail", data, options);
    };
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ClientService);
    return ClientService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! C:\Projects\angular projects-frontend\geecutsapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map