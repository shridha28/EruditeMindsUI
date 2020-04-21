function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/CustomerApp/Home/CustomerApp.MainModule.ts":
  /*!********************************************************!*\
    !*** ./src/CustomerApp/Home/CustomerApp.MainModule.ts ***!
    \********************************************************/

  /*! exports provided: MainModule */

  /***/
  function srcCustomerAppHomeCustomerAppMainModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainModule", function () {
      return MainModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _CustomerApp_MasterPageComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./CustomerApp.MasterPageComponent */
    "./src/CustomerApp/Home/CustomerApp.MasterPageComponent.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../app-routing.module */
    "./src/CustomerApp/app-routing.module.ts");
    /* harmony import */


    var _Routing_CustomerApp_MainRouting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../Routing/CustomerApp.MainRouting */
    "./src/CustomerApp/Routing/CustomerApp.MainRouting.ts");

    var MainModule = function MainModule() {
      _classCallCheck(this, MainModule);
    };

    MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MainModule,
      bootstrap: [_CustomerApp_MasterPageComponent__WEBPACK_IMPORTED_MODULE_4__["MasterPageComponent"]]
    });
    MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MainModule_Factory(t) {
        return new (t || MainModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_Routing_CustomerApp_MainRouting__WEBPACK_IMPORTED_MODULE_6__["MainRoutes"])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MainModule, {
        declarations: [_CustomerApp_MasterPageComponent__WEBPACK_IMPORTED_MODULE_4__["MasterPageComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_CustomerApp_MasterPageComponent__WEBPACK_IMPORTED_MODULE_4__["MasterPageComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_Routing_CustomerApp_MainRouting__WEBPACK_IMPORTED_MODULE_6__["MainRoutes"])],
          providers: [],
          bootstrap: [_CustomerApp_MasterPageComponent__WEBPACK_IMPORTED_MODULE_4__["MasterPageComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/CustomerApp/Home/CustomerApp.MasterPageComponent.ts":
  /*!*****************************************************************!*\
    !*** ./src/CustomerApp/Home/CustomerApp.MasterPageComponent.ts ***!
    \*****************************************************************/

  /*! exports provided: MasterPageComponent */

  /***/
  function srcCustomerAppHomeCustomerAppMasterPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MasterPageComponent", function () {
      return MasterPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MasterPageComponent = function MasterPageComponent() {
      _classCallCheck(this, MasterPageComponent);
    };

    MasterPageComponent.ɵfac = function MasterPageComponent_Factory(t) {
      return new (t || MasterPageComponent)();
    };

    MasterPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MasterPageComponent,
      selectors: [["my-app-root"]],
      decls: 24,
      vars: 0,
      consts: [["lang", "en"], ["href", "https://fonts.googleapis.com/css?family=Lato:100,300,300i,400&display=swap", "rel", "stylesheet"], [1, "row"], ["src", "assets/horse.JPG", 1, "logo"], [1, "logo"], [1, "main-nav"], ["routerLink", "/wdwdo"], ["href", "#"], ["routerLink", "signup"]],
      template: function MasterPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Wilkommen zu Heilbronn!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ERUDITE MINDS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "What do we do");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Tutorials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sign up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".section[_ngcontent-%COMP%] {\r\n\tclear: both;\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n}\r\n\r\n\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    zoom: 1; \r\n}\r\n\r\n.row[_ngcontent-%COMP%]:before, .row[_ngcontent-%COMP%]:after {\r\n    content:\"\";\r\n    display:table;\r\n}\r\n\r\n.row[_ngcontent-%COMP%]:after {\r\n    clear:both;\r\n}\r\n\r\n\r\n\r\n.col[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n\tfloat:left;\r\n\tmargin: 1% 0 1% 1.6%;\r\n}\r\n\r\n.col[_ngcontent-%COMP%]:first-child { margin-left: 0; }\r\n\r\n\r\n\r\n\r\n\r\n@media only screen and (max-width: 480px) {\r\n\t.col[_ngcontent-%COMP%] { \r\n\t\t\r\n        margin: 0;\r\n\t}\r\n}\r\n\r\n\r\n\r\n.span-2-of-2[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n}\r\n\r\n.span-1-of-2[_ngcontent-%COMP%] {\r\n\twidth: 49.2%;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 480px) {\r\n\t.span-2-of-2[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-1-of-2[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n}\r\n\r\n\r\n\r\n.span-3-of-3[_ngcontent-%COMP%] {\r\n\twidth: 100%; \r\n}\r\n\r\n.span-2-of-3[_ngcontent-%COMP%] {\r\n\twidth: 66.13%; \r\n}\r\n\r\n.span-1-of-3[_ngcontent-%COMP%] {\r\n\twidth: 32.26%; \r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 480px) {\r\n\t.span-3-of-3[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-2-of-3[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-1-of-3[_ngcontent-%COMP%] {\r\n\t\twidth: 100%;\r\n\t}\r\n}\r\n\r\n\r\n\r\n.span-4-of-4[_ngcontent-%COMP%] {\r\n\twidth: 100%; \r\n}\r\n\r\n.span-3-of-4[_ngcontent-%COMP%] {\r\n\twidth: 74.6%; \r\n}\r\n\r\n.span-2-of-4[_ngcontent-%COMP%] {\r\n\twidth: 49.2%; \r\n}\r\n\r\n.span-1-of-4[_ngcontent-%COMP%] {\r\n\twidth: 23.8%; \r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 480px) {\r\n\t.span-4-of-4[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-3-of-4[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-2-of-4[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-1-of-4[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n}\r\n\r\n\r\n\r\n.span-5-of-5[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n}\r\n\r\n.span-4-of-5[_ngcontent-%COMP%] {\r\n  \twidth: 79.68%; \r\n}\r\n\r\n.span-3-of-5[_ngcontent-%COMP%] {\r\n  \twidth: 59.36%; \r\n}\r\n\r\n.span-2-of-5[_ngcontent-%COMP%] {\r\n  \twidth: 39.04%;\r\n}\r\n\r\n.span-1-of-5[_ngcontent-%COMP%] {\r\n  \twidth: 18.72%;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 480px) {\r\n\t.span-5-of-5[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-4-of-5[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-3-of-5[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-2-of-5[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-1-of-5[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n}\r\n\r\n\r\n\r\n.span-6-of-6[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n}\r\n\r\n.span-5-of-6[_ngcontent-%COMP%] {\r\n  \twidth: 83.06%;\r\n}\r\n\r\n.span-4-of-6[_ngcontent-%COMP%] {\r\n  \twidth: 66.13%;\r\n}\r\n\r\n.span-3-of-6[_ngcontent-%COMP%] {\r\n  \twidth: 49.2%;\r\n}\r\n\r\n.span-2-of-6[_ngcontent-%COMP%] {\r\n  \twidth: 32.26%;\r\n}\r\n\r\n.span-1-of-6[_ngcontent-%COMP%] {\r\n  \twidth: 15.33%;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 480px) {\r\n\t.span-6-of-6[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-5-of-6[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-4-of-6[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-3-of-6[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-2-of-6[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-1-of-6[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n}\r\n\r\n\r\n\r\n.span-7-of-7[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n}\r\n\r\n.span-6-of-7[_ngcontent-%COMP%] {\r\n\twidth: 85.48%;\r\n}\r\n\r\n.span-5-of-7[_ngcontent-%COMP%] {\r\n  \twidth: 70.97%;\r\n}\r\n\r\n.span-4-of-7[_ngcontent-%COMP%] {\r\n  \twidth: 56.45%;\r\n}\r\n\r\n.span-3-of-7[_ngcontent-%COMP%] {\r\n  \twidth: 41.94%;\r\n}\r\n\r\n.span-2-of-7[_ngcontent-%COMP%] {\r\n  \twidth: 27.42%;\r\n}\r\n\r\n.span-1-of-7[_ngcontent-%COMP%] {\r\n  \twidth: 12.91%;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 480px) {\r\n\t.span-7-of-7[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-6-of-7[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-5-of-7[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-4-of-7[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-3-of-7[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-2-of-7[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-1-of-7[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n}\r\n\r\n\r\n\r\n.span-8-of-8[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n}\r\n\r\n.span-7-of-8[_ngcontent-%COMP%] {\r\n\twidth: 87.3%; \r\n}\r\n\r\n.span-6-of-8[_ngcontent-%COMP%] {\r\n\twidth: 74.6%; \r\n}\r\n\r\n.span-5-of-8[_ngcontent-%COMP%] {\r\n\twidth: 61.9%; \r\n}\r\n\r\n.span-4-of-8[_ngcontent-%COMP%] {\r\n\twidth: 49.2%; \r\n}\r\n\r\n.span-3-of-8[_ngcontent-%COMP%] {\r\n\twidth: 36.5%;\r\n}\r\n\r\n.span-2-of-8[_ngcontent-%COMP%] {\r\n\twidth: 23.8%; \r\n}\r\n\r\n.span-1-of-8[_ngcontent-%COMP%] {\r\n\twidth: 11.1%; \r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 480px) {\r\n\t.span-8-of-8[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-7-of-8[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-6-of-8[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-5-of-8[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-4-of-8[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-3-of-8[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-2-of-8[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-1-of-8[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n}\r\n\r\n\r\n\r\n.span-9-of-9[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n}\r\n\r\n.span-8-of-9[_ngcontent-%COMP%] {\r\n\twidth: 88.71%;\r\n}\r\n\r\n.span-7-of-9[_ngcontent-%COMP%] {\r\n\twidth: 77.42%; \r\n}\r\n\r\n.span-6-of-9[_ngcontent-%COMP%] {\r\n\twidth: 66.13%; \r\n}\r\n\r\n.span-5-of-9[_ngcontent-%COMP%] {\r\n\twidth: 54.84%; \r\n}\r\n\r\n.span-4-of-9[_ngcontent-%COMP%] {\r\n\twidth: 43.55%; \r\n}\r\n\r\n.span-3-of-9[_ngcontent-%COMP%] {\r\n\twidth: 32.26%;\r\n}\r\n\r\n.span-2-of-9[_ngcontent-%COMP%] {\r\n\twidth: 20.97%; \r\n}\r\n\r\n.span-1-of-9[_ngcontent-%COMP%] {\r\n\twidth: 9.68%; \r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 480px) {\r\n\t.span-9-of-9[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-8-of-9[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-7-of-9[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-6-of-9[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-5-of-9[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-4-of-9[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-3-of-9[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-2-of-9[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-1-of-9[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n}\r\n\r\n\r\n\r\n.span-10-of-10[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n}\r\n\r\n.span-9-of-10[_ngcontent-%COMP%] {\r\n\twidth: 89.84%;\r\n}\r\n\r\n.span-8-of-10[_ngcontent-%COMP%] {\r\n\twidth: 79.68%;\r\n}\r\n\r\n.span-7-of-10[_ngcontent-%COMP%] {\r\n\twidth: 69.52%; \r\n}\r\n\r\n.span-6-of-10[_ngcontent-%COMP%] {\r\n\twidth: 59.36%; \r\n}\r\n\r\n.span-5-of-10[_ngcontent-%COMP%] {\r\n\twidth: 49.2%; \r\n}\r\n\r\n.span-4-of-10[_ngcontent-%COMP%] {\r\n\twidth: 39.04%; \r\n}\r\n\r\n.span-3-of-10[_ngcontent-%COMP%] {\r\n\twidth: 28.88%;\r\n}\r\n\r\n.span-2-of-10[_ngcontent-%COMP%] {\r\n\twidth: 18.72%; \r\n}\r\n\r\n.span-1-of-10[_ngcontent-%COMP%] {\r\n\twidth: 8.56%; \r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 480px) {\r\n\t.span-10-of-10[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-9-of-10[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-8-of-10[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-7-of-10[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-6-of-10[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-5-of-10[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-4-of-10[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-3-of-10[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-2-of-10[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-1-of-10[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n}\r\n\r\n\r\n\r\n.span-11-of-11[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n}\r\n\r\n.span-10-of-11[_ngcontent-%COMP%] {\r\n\twidth: 90.76%;\r\n}\r\n\r\n.span-9-of-11[_ngcontent-%COMP%] {\r\n\twidth: 81.52%;\r\n}\r\n\r\n.span-8-of-11[_ngcontent-%COMP%] {\r\n\twidth: 72.29%;\r\n}\r\n\r\n.span-7-of-11[_ngcontent-%COMP%] {\r\n\twidth: 63.05%; \r\n}\r\n\r\n.span-6-of-11[_ngcontent-%COMP%] {\r\n\twidth: 53.81%; \r\n}\r\n\r\n.span-5-of-11[_ngcontent-%COMP%] {\r\n\twidth: 44.58%; \r\n}\r\n\r\n.span-4-of-11[_ngcontent-%COMP%] {\r\n\twidth: 35.34%; \r\n}\r\n\r\n.span-3-of-11[_ngcontent-%COMP%] {\r\n\twidth: 26.1%;\r\n}\r\n\r\n.span-2-of-11[_ngcontent-%COMP%] {\r\n\twidth: 16.87%; \r\n}\r\n\r\n.span-1-of-11[_ngcontent-%COMP%] {\r\n\twidth: 7.63%; \r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 480px) {\r\n\t.span-11-of-11[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-10-of-11[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-9-of-11[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-8-of-11[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-7-of-11[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-6-of-11[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-5-of-11[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-4-of-11[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-3-of-11[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-2-of-11[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-1-of-11[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n}\r\n\r\n\r\n\r\n.span-12-of-12[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n}\r\n\r\n.span-11-of-12[_ngcontent-%COMP%] {\r\n\twidth: 91.53%;\r\n}\r\n\r\n.span-10-of-12[_ngcontent-%COMP%] {\r\n\twidth: 83.06%;\r\n}\r\n\r\n.span-9-of-12[_ngcontent-%COMP%] {\r\n\twidth: 74.6%;\r\n}\r\n\r\n.span-8-of-12[_ngcontent-%COMP%] {\r\n\twidth: 66.13%;\r\n}\r\n\r\n.span-7-of-12[_ngcontent-%COMP%] {\r\n\twidth: 57.66%; \r\n}\r\n\r\n.span-6-of-12[_ngcontent-%COMP%] {\r\n\twidth: 49.2%; \r\n}\r\n\r\n.span-5-of-12[_ngcontent-%COMP%] {\r\n\twidth: 40.73%; \r\n}\r\n\r\n.span-4-of-12[_ngcontent-%COMP%] {\r\n\twidth: 32.26%; \r\n}\r\n\r\n.span-3-of-12[_ngcontent-%COMP%] {\r\n\twidth: 23.8%;\r\n}\r\n\r\n.span-2-of-12[_ngcontent-%COMP%] {\r\n\twidth: 15.33%; \r\n}\r\n\r\n.span-1-of-12[_ngcontent-%COMP%] {\r\n\twidth: 6.86%; \r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 480px) {\r\n\t.span-12-of-12[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-11-of-12[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-10-of-12[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-9-of-12[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-8-of-12[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-7-of-12[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-6-of-12[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-5-of-12[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-4-of-12[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-3-of-12[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-2-of-12[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n\t.span-1-of-12[_ngcontent-%COMP%] {\r\n\t\twidth: 100%; \r\n\t}\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n    line-height: 1.15; \r\n    -webkit-text-size-adjust: 100%; \r\n  }\r\n\r\n\r\n\r\n\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n\r\n\r\n\r\nmain[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n\r\n\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-size: 2em;\r\n    margin: 0.67em 0;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\nhr[_ngcontent-%COMP%] {\r\n    box-sizing: content-box; \r\n    height: 0; \r\n    overflow: visible; \r\n  }\r\n\r\n\r\n\r\npre[_ngcontent-%COMP%] {\r\n    font-family: monospace, monospace; \r\n    font-size: 1em; \r\n  }\r\n\r\n\r\n\r\n\r\n\r\na[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n  }\r\n\r\n\r\n\r\nabbr[title][_ngcontent-%COMP%] {\r\n    border-bottom: none; \r\n    text-decoration: underline; \r\n    -webkit-text-decoration: underline dotted;\r\n            text-decoration: underline dotted; \r\n  }\r\n\r\n\r\n\r\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\r\n    font-weight: bolder;\r\n  }\r\n\r\n\r\n\r\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%] {\r\n    font-family: monospace, monospace; \r\n    font-size: 1em; \r\n  }\r\n\r\n\r\n\r\nsmall[_ngcontent-%COMP%] {\r\n    font-size: 80%;\r\n  }\r\n\r\n\r\n\r\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline;\r\n  }\r\n\r\nsub[_ngcontent-%COMP%] {\r\n    bottom: -0.25em;\r\n  }\r\n\r\nsup[_ngcontent-%COMP%] {\r\n    top: -0.5em;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    border-style: none;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    font-family: inherit; \r\n    font-size: 100%; \r\n    line-height: 1.15; \r\n    margin: 0; \r\n  }\r\n\r\n\r\n\r\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] { \r\n    overflow: visible;\r\n  }\r\n\r\n\r\n\r\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] { \r\n    text-transform: none;\r\n  }\r\n\r\n\r\n\r\nbutton[_ngcontent-%COMP%], [type=\"button\"][_ngcontent-%COMP%], [type=\"reset\"][_ngcontent-%COMP%], [type=\"submit\"][_ngcontent-%COMP%] {\r\n    -webkit-appearance: button;\r\n  }\r\n\r\n\r\n\r\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, [type=\"button\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"reset\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"submit\"][_ngcontent-%COMP%]::-moz-focus-inner {\r\n    border-style: none;\r\n    padding: 0;\r\n  }\r\n\r\n\r\n\r\nbutton[_ngcontent-%COMP%]:-moz-focusring, [type=\"button\"][_ngcontent-%COMP%]:-moz-focusring, [type=\"reset\"][_ngcontent-%COMP%]:-moz-focusring, [type=\"submit\"][_ngcontent-%COMP%]:-moz-focusring {\r\n    outline: 1px dotted ButtonText;\r\n  }\r\n\r\n\r\n\r\nfieldset[_ngcontent-%COMP%] {\r\n    padding: 0.35em 0.75em 0.625em;\r\n  }\r\n\r\n\r\n\r\nlegend[_ngcontent-%COMP%] {\r\n    box-sizing: border-box; \r\n    color: inherit; \r\n    display: table; \r\n    max-width: 100%; \r\n    padding: 0; \r\n    white-space: normal; \r\n  }\r\n\r\n\r\n\r\nprogress[_ngcontent-%COMP%] {\r\n    vertical-align: baseline;\r\n  }\r\n\r\n\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n    overflow: auto;\r\n  }\r\n\r\n\r\n\r\n[type=\"checkbox\"][_ngcontent-%COMP%], [type=\"radio\"][_ngcontent-%COMP%] {\r\n    box-sizing: border-box; \r\n    padding: 0; \r\n  }\r\n\r\n\r\n\r\n[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\r\n    height: auto;\r\n  }\r\n\r\n\r\n\r\n[type=\"search\"][_ngcontent-%COMP%] {\r\n    -webkit-appearance: textfield; \r\n    outline-offset: -2px; \r\n  }\r\n\r\n\r\n\r\n[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n  }\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\r\n    -webkit-appearance: button; \r\n    font: inherit; \r\n  }\r\n\r\n\r\n\r\n\r\n\r\ndetails[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n\r\n\r\n\r\nsummary[_ngcontent-%COMP%] {\r\n    display: list-item;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\ntemplate[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n\r\n\r\n[hidden][_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n*[_ngcontent-%COMP%]{\r\n    margin:0;\r\n    padding:0;\r\n    box-sizing: border-box; \r\n    \r\n}\r\n\r\nhtml[_ngcontent-%COMP%]\r\n{\r\n    background-color: white;\r\n    color:black;\r\n    font-family: 'Lato','Arial',sans-serif;\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    text-rendering: optimizeLegibility;\r\n}\r\n\r\n.row[_ngcontent-%COMP%]\r\n{\r\n    max-width: 1140px;\r\n    margin: 0 auto;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]\r\n{\r\n    background-color: black;\r\n    background-position: center;\r\n    background-size: cover;\r\n    height: 13vh;\r\n    background-attachment: fixed;\r\n    \r\n}\r\n\r\n.top-text[_ngcontent-%COMP%]\r\n{\r\n   position: absolute;\r\n   width: 1140px;\r\n   top:50%;\r\n   left:50%;\r\n   transform: translate(-50%,-50%);\r\n   \r\n}\r\n\r\n\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]\r\n{\r\n    \r\n    text-transform: uppercase;  \r\n    font-weight: 300;\r\n    \r\n    \r\n}\r\n\r\nh1[_ngcontent-%COMP%]\r\n{\r\n    color: #fff;\r\n    font-size: 150%;\r\n    word-spacing: 3px;\r\n    font-family:Gadget, sans-serif  \r\n       \r\n}\r\n\r\nh2[_ngcontent-%COMP%]\r\n{\r\n    color: black;\r\n    font-size: 150%;\r\n    word-spacing: 1px;\r\n    text-align: center;\r\n    letter-spacing: 1px;\r\n    padding : 10px;\r\n    \r\n}\r\n\r\nh2[_ngcontent-%COMP%]:after\r\n{\r\n    display: block;\r\n    width: 100px;\r\n    height: 2px;\r\n    margin: 0 auto;\r\n    border-bottom: 2px solid #d35400;\r\n    content:\" \";\r\n    margin-top: 30px;\r\n    \r\n    \r\n}\r\n\r\nh3[_ngcontent-%COMP%]\r\n{\r\n    font-size: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.btn[_ngcontent-%COMP%]\r\n{\r\n    display: inline-block;\r\n    padding: 10px 30px;\r\n    font-weight: 350;\r\n    text-decoration: none;\r\n    border-radius:200px;  \r\n    transition: background-color 0.2s,border 0.2s;\r\n    \r\n}\r\n\r\n.btn-full[_ngcontent-%COMP%]:link, .btn-full[_ngcontent-%COMP%]:visited\r\n{\r\n    background-color: #d35400; \r\n    border: 1px solid #d35400;\r\n    color:#fff;\r\n    \r\n}\r\n\r\n.btn-ghost[_ngcontent-%COMP%]:link, .btn-ghost[_ngcontent-%COMP%]:visited\r\n{\r\n     border: 1px solid #d35400;\r\n     color: #fff;\r\n     margin-left: 10px;\r\n}\r\n\r\n.btn-full[_ngcontent-%COMP%]:active, .btn-full[_ngcontent-%COMP%]:hover\r\n{\r\n    background-color:  #b14600;  \r\n    color:#fff;\r\n    \r\n}\r\n\r\n.btn-ghost[_ngcontent-%COMP%]:active, .btn-ghost[_ngcontent-%COMP%]:hover\r\n{\r\n     background-color:  #b14600;  \r\n     border: 1px solid #b14600;\r\n     color: #fff;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.main-nav[_ngcontent-%COMP%]\r\n{\r\n    float: right;\r\n    list-style: none;\r\n    margin-top: 50px;\r\n    \r\n}\r\n\r\n.main-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]\r\n{\r\n    display: inline-block;\r\n    margin-left: 40px;\r\n    \r\n    \r\n}\r\n\r\n.main-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:link, .main-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited\r\n{\r\n    padding: 8px 0;\r\n    text-decoration: none;\r\n    color:#fff; \r\n    text-transform: uppercase;\r\n    word-spacing: 2px;\r\n    font-size: 90%;\r\n    border-bottom: 2px solid transparent;\r\n    transition: border-bottom 0.2s;\r\n}\r\n\r\n.main-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .main-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active\r\n{\r\n    border-bottom: 2px solid #b14600;\r\n    \r\n    \r\n}\r\n\r\n.box[_ngcontent-%COMP%]\r\n{\r\n    padding: 1px;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]\r\n{\r\n    height: 100px;\r\n    width:auto;\r\n    float: left;\r\n    border-radius: 70px;\r\n   \r\n   \r\n}\r\n\r\nsection[_ngcontent-%COMP%]\r\n{\r\n    padding: 80px;\r\n\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n\tbackground-image: linear-gradient(rgba(0, 0, 0, 0.43),\r\n\trgba(0, 0, 0, 0.43)), url(\"/assets/mainpg_header.jpg\");\r\n\tbackground-position: center;\r\n\tbackground-size: cover;\r\n\theight : 100vh;\r\n\tbackground-attachment: fixed;\r\n\theight: 100vh;\r\n\t\r\n}\r\n\r\n.long-copy[_ngcontent-%COMP%]\r\n{\r\n    line-height: 145%;\r\n    width: 70%;\r\n    margin-left: 15%;\r\n    text-align: center;\r\n}\r\n\r\n.icon-big[_ngcontent-%COMP%]\r\n{\r\n    font-size: 300%;\r\n    color: #d35400;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DdXN0b21lckFwcC9Ib21lL1ZlbmRvcnMvR3JpZC5jc3MiLCJzcmMvQ3VzdG9tZXJBcHAvSG9tZS9WZW5kb3JzL25vcm1hbGl6ZS5jc3MiLCJzcmMvQ3VzdG9tZXJBcHAvSG9tZS9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNkZBQTZGOztBQUU3RjtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osV0FBVztBQUNaOztBQUVBLDZGQUE2Rjs7QUFFN0Y7SUFDSSxPQUFPLEVBQUUsbUNBQW1DO0FBQ2hEOztBQUVBOztJQUVJLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksVUFBVTtBQUNkOztBQUVBLDhGQUE4Rjs7QUFFOUY7Q0FDQyxjQUFjO0NBQ2QsVUFBVTtDQUNWLG9CQUFvQjtBQUNyQjs7QUFFQSxtQkFBbUIsY0FBYyxFQUFFOztBQUFFLHNDQUFzQzs7QUFHM0UsdURBQXVEOztBQUV2RDtDQUNDO0VBQ0Msc0JBQXNCO1FBQ2hCLFNBQVM7Q0FDaEI7QUFDRDs7QUFHQSxpR0FBaUc7O0FBR2pHO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBLDJDQUEyQzs7QUFFM0M7Q0FDQztFQUNDLFdBQVc7Q0FDWjtDQUNBO0VBQ0MsV0FBVztDQUNaO0FBQ0Q7O0FBR0EsbUdBQW1HOztBQUduRztDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFHQSwyQ0FBMkM7O0FBRTNDO0NBQ0M7RUFDQyxXQUFXO0NBQ1o7Q0FDQTtFQUNDLFdBQVc7Q0FDWjtDQUNBO0VBQ0MsV0FBVztDQUNaO0FBQ0Q7O0FBRUEsa0dBQWtHOztBQUdsRztDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFHQSwyQ0FBMkM7O0FBRTNDO0NBQ0M7RUFDQyxXQUFX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QUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1COzs7QUFHdkI7O0FBQ0E7O0lBRUksYUFBYTs7QUFFakI7O0FBRUE7Q0FDQzt1REFDc0Q7Q0FDdEQsMkJBQTJCO0NBQzNCLHNCQUFzQjtDQUN0QixjQUFjO0NBQ2QsNEJBQTRCO0NBQzVCLGFBQWE7O0FBRWQ7O0FBQ0E7O0lBRUksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUNBOztJQUVJLGVBQWU7SUFDZixjQUFjO0lBQ2QsY0FBYztJQUNkLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvQ3VzdG9tZXJBcHAvSG9tZS9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiAgU0VDVElPTlMgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uc2VjdGlvbiB7XHJcblx0Y2xlYXI6IGJvdGg7XHJcblx0cGFkZGluZzogMHB4O1xyXG5cdG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4vKiAgR1JPVVBJTkcgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4ucm93IHtcclxuICAgIHpvb206IDE7IC8qIEZvciBJRSA2LzcgKHRyaWdnZXIgaGFzTGF5b3V0KSAqL1xyXG59XHJcblxyXG4ucm93OmJlZm9yZSxcclxuLnJvdzphZnRlciB7XHJcbiAgICBjb250ZW50OlwiXCI7XHJcbiAgICBkaXNwbGF5OnRhYmxlO1xyXG59XHJcbi5yb3c6YWZ0ZXIge1xyXG4gICAgY2xlYXI6Ym90aDtcclxufVxyXG5cclxuLyogIEdSSUQgQ09MVU1OIFNFVFVQICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5jb2wge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZsb2F0OmxlZnQ7XHJcblx0bWFyZ2luOiAxJSAwIDElIDEuNiU7XHJcbn1cclxuXHJcbi5jb2w6Zmlyc3QtY2hpbGQgeyBtYXJnaW4tbGVmdDogMDsgfSAvKiBhbGwgYnJvd3NlcnMgZXhjZXB0IElFNiBhbmQgbG93ZXIgKi9cclxuXHJcblxyXG4vKiAgUkVNT1ZFIE1BUkdJTlMgQVMgQUxMIEdPIEZVTEwgV0lEVEggQVQgNDgwIFBJWEVMUyAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cdC5jb2wgeyBcclxuXHRcdC8qbWFyZ2luOiAxJSAwIDElIDAlOyovXHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbi8qICBHUklEIE9GIFRXTyAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5cclxuLnNwYW4tMi1vZi0yIHtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNwYW4tMS1vZi0yIHtcclxuXHR3aWR0aDogNDkuMiU7XHJcbn1cclxuXHJcbi8qICBHTyBGVUxMIFdJRFRIIEFUIExFU1MgVEhBTiA0ODAgUElYRUxTICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblx0LnNwYW4tMi1vZi0yIHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcblx0LnNwYW4tMS1vZi0yIHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcbn1cclxuXHJcblxyXG4vKiAgR1JJRCBPRiBUSFJFRSAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5cdFxyXG4uc3Bhbi0zLW9mLTMge1xyXG5cdHdpZHRoOiAxMDAlOyBcclxufVxyXG5cclxuLnNwYW4tMi1vZi0zIHtcclxuXHR3aWR0aDogNjYuMTMlOyBcclxufVxyXG5cclxuLnNwYW4tMS1vZi0zIHtcclxuXHR3aWR0aDogMzIuMjYlOyBcclxufVxyXG5cclxuXHJcbi8qICBHTyBGVUxMIFdJRFRIIEFUIExFU1MgVEhBTiA0ODAgUElYRUxTICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblx0LnNwYW4tMy1vZi0zIHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcblx0LnNwYW4tMi1vZi0zIHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcblx0LnNwYW4tMS1vZi0zIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxufVxyXG5cclxuLyogIEdSSUQgT0YgRk9VUiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5cdFxyXG4uc3Bhbi00LW9mLTQge1xyXG5cdHdpZHRoOiAxMDAlOyBcclxufVxyXG5cclxuLnNwYW4tMy1vZi00IHtcclxuXHR3aWR0aDogNzQuNiU7IFxyXG59XHJcblxyXG4uc3Bhbi0yLW9mLTQge1xyXG5cdHdpZHRoOiA0OS4yJTsgXHJcbn1cclxuXHJcbi5zcGFuLTEtb2YtNCB7XHJcblx0d2lkdGg6IDIzLjglOyBcclxufVxyXG5cclxuXHJcbi8qICBHTyBGVUxMIFdJRFRIIEFUIExFU1MgVEhBTiA0ODAgUElYRUxTICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblx0LnNwYW4tNC1vZi00IHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcblx0LnNwYW4tMy1vZi00IHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcblx0LnNwYW4tMi1vZi00IHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcblx0LnNwYW4tMS1vZi00IHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcbn1cclxuXHJcblxyXG4vKiAgR1JJRCBPRiBGSVZFICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcblx0XHJcbi5zcGFuLTUtb2YtNSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zcGFuLTQtb2YtNSB7XHJcbiAgXHR3aWR0aDogNzkuNjglOyBcclxufVxyXG5cclxuLnNwYW4tMy1vZi01IHtcclxuICBcdHdpZHRoOiA1OS4zNiU7IFxyXG59XHJcblxyXG4uc3Bhbi0yLW9mLTUge1xyXG4gIFx0d2lkdGg6IDM5LjA0JTtcclxufVxyXG5cclxuLnNwYW4tMS1vZi01IHtcclxuICBcdHdpZHRoOiAxOC43MiU7XHJcbn1cclxuXHJcblxyXG4vKiAgR08gRlVMTCBXSURUSCBBVCBMRVNTIFRIQU4gNDgwIFBJWEVMUyAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cdC5zcGFuLTUtb2YtNSB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG5cdC5zcGFuLTQtb2YtNSB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG5cdC5zcGFuLTMtb2YtNSB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG5cdC5zcGFuLTItb2YtNSB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG5cdC5zcGFuLTEtb2YtNSB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG59XHJcblxyXG5cclxuLyogIEdSSUQgT0YgU0lYICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcblxyXG4uc3Bhbi02LW9mLTYge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3Bhbi01LW9mLTYge1xyXG4gIFx0d2lkdGg6IDgzLjA2JTtcclxufVxyXG5cclxuLnNwYW4tNC1vZi02IHtcclxuICBcdHdpZHRoOiA2Ni4xMyU7XHJcbn1cclxuXHJcbi5zcGFuLTMtb2YtNiB7XHJcbiAgXHR3aWR0aDogNDkuMiU7XHJcbn1cclxuXHJcbi5zcGFuLTItb2YtNiB7XHJcbiAgXHR3aWR0aDogMzIuMjYlO1xyXG59XHJcblxyXG4uc3Bhbi0xLW9mLTYge1xyXG4gIFx0d2lkdGg6IDE1LjMzJTtcclxufVxyXG5cclxuXHJcbi8qICBHTyBGVUxMIFdJRFRIIEFUIExFU1MgVEhBTiA0ODAgUElYRUxTICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblx0LnNwYW4tNi1vZi02IHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcblx0LnNwYW4tNS1vZi02IHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcblx0LnNwYW4tNC1vZi02IHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcblx0LnNwYW4tMy1vZi02IHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcblx0LnNwYW4tMi1vZi02IHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcblx0LnNwYW4tMS1vZi02IHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyogIEdSSUQgT0YgU0VWRU4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuXHJcbi5zcGFuLTctb2YtNyB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zcGFuLTYtb2YtNyB7XHJcblx0d2lkdGg6IDg1LjQ4JTtcclxufVxyXG5cclxuLnNwYW4tNS1vZi03IHtcclxuICBcdHdpZHRoOiA3MC45NyU7XHJcbn1cclxuXHJcbi5zcGFuLTQtb2YtNyB7XHJcbiAgXHR3aWR0aDogNTYuNDUlO1xyXG59XHJcblxyXG4uc3Bhbi0zLW9mLTcge1xyXG4gIFx0d2lkdGg6IDQxLjk0JTtcclxufVxyXG5cclxuLnNwYW4tMi1vZi03IHtcclxuICBcdHdpZHRoOiAyNy40MiU7XHJcbn1cclxuXHJcbi5zcGFuLTEtb2YtNyB7XHJcbiAgXHR3aWR0aDogMTIuOTElO1xyXG59XHJcblxyXG5cclxuLyogIEdPIEZVTEwgV0lEVEggQVQgTEVTUyBUSEFOIDQ4MCBQSVhFTFMgKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHQuc3Bhbi03LW9mLTcge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxuXHQuc3Bhbi02LW9mLTcge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxuXHQuc3Bhbi01LW9mLTcge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxuXHQuc3Bhbi00LW9mLTcge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxuXHQuc3Bhbi0zLW9mLTcge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxuXHQuc3Bhbi0yLW9mLTcge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxuXHQuc3Bhbi0xLW9mLTcge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxufVxyXG5cclxuXHJcbi8qICBHUklEIE9GIEVJR0hUICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcblx0XHJcbi5zcGFuLTgtb2YtOCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zcGFuLTctb2YtOCB7XHJcblx0d2lkdGg6IDg3LjMlOyBcclxufVxyXG5cclxuLnNwYW4tNi1vZi04IHtcclxuXHR3aWR0aDogNzQuNiU7IFxyXG59XHJcblxyXG4uc3Bhbi01LW9mLTgge1xyXG5cdHdpZHRoOiA2MS45JTsgXHJcbn1cclxuXHJcbi5zcGFuLTQtb2YtOCB7XHJcblx0d2lkdGg6IDQ5LjIlOyBcclxufVxyXG5cclxuLnNwYW4tMy1vZi04IHtcclxuXHR3aWR0aDogMzYuNSU7XHJcbn1cclxuXHJcbi5zcGFuLTItb2YtOCB7XHJcblx0d2lkdGg6IDIzLjglOyBcclxufVxyXG5cclxuLnNwYW4tMS1vZi04IHtcclxuXHR3aWR0aDogMTEuMSU7IFxyXG59XHJcblxyXG5cclxuLyogIEdPIEZVTEwgV0lEVEggQVQgTEVTUyBUSEFOIDQ4MCBQSVhFTFMgKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHQuc3Bhbi04LW9mLTgge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxuXHQuc3Bhbi03LW9mLTgge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxuXHQuc3Bhbi02LW9mLTgge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxuXHQuc3Bhbi01LW9mLTgge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxuXHQuc3Bhbi00LW9mLTgge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxuXHQuc3Bhbi0zLW9mLTgge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxuXHQuc3Bhbi0yLW9mLTgge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxuXHQuc3Bhbi0xLW9mLTgge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxufVxyXG5cclxuXHJcbi8qICBHUklEIE9GIE5JTkUgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuXHJcbi5zcGFuLTktb2YtOSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zcGFuLTgtb2YtOSB7XHJcblx0d2lkdGg6IDg4LjcxJTtcclxufVxyXG5cclxuLnNwYW4tNy1vZi05IHtcclxuXHR3aWR0aDogNzcuNDIlOyBcclxufVxyXG5cclxuLnNwYW4tNi1vZi05IHtcclxuXHR3aWR0aDogNjYuMTMlOyBcclxufVxyXG5cclxuLnNwYW4tNS1vZi05IHtcclxuXHR3aWR0aDogNTQuODQlOyBcclxufVxyXG5cclxuLnNwYW4tNC1vZi05IHtcclxuXHR3aWR0aDogNDMuNTUlOyBcclxufVxyXG5cclxuLnNwYW4tMy1vZi05IHtcclxuXHR3aWR0aDogMzIuMjYlO1xyXG59XHJcblxyXG4uc3Bhbi0yLW9mLTkge1xyXG5cdHdpZHRoOiAyMC45NyU7IFxyXG59XHJcblxyXG4uc3Bhbi0xLW9mLTkge1xyXG5cdHdpZHRoOiA5LjY4JTsgXHJcbn1cclxuXHJcblxyXG4vKiAgR08gRlVMTCBXSURUSCBBVCBMRVNTIFRIQU4gNDgwIFBJWEVMUyAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cdC5zcGFuLTktb2YtOSB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG5cdC5zcGFuLTgtb2YtOSB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG5cdC5zcGFuLTctb2YtOSB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG5cdC5zcGFuLTYtb2YtOSB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG5cdC5zcGFuLTUtb2YtOSB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG5cdC5zcGFuLTQtb2YtOSB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG5cdC5zcGFuLTMtb2YtOSB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG5cdC5zcGFuLTItb2YtOSB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG5cdC5zcGFuLTEtb2YtOSB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG59XHJcblxyXG5cclxuLyogIEdSSUQgT0YgVEVOICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcblxyXG4uc3Bhbi0xMC1vZi0xMCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zcGFuLTktb2YtMTAge1xyXG5cdHdpZHRoOiA4OS44NCU7XHJcbn1cclxuXHJcbi5zcGFuLTgtb2YtMTAge1xyXG5cdHdpZHRoOiA3OS42OCU7XHJcbn1cclxuXHJcbi5zcGFuLTctb2YtMTAge1xyXG5cdHdpZHRoOiA2OS41MiU7IFxyXG59XHJcblxyXG4uc3Bhbi02LW9mLTEwIHtcclxuXHR3aWR0aDogNTkuMzYlOyBcclxufVxyXG5cclxuLnNwYW4tNS1vZi0xMCB7XHJcblx0d2lkdGg6IDQ5LjIlOyBcclxufVxyXG5cclxuLnNwYW4tNC1vZi0xMCB7XHJcblx0d2lkdGg6IDM5LjA0JTsgXHJcbn1cclxuXHJcbi5zcGFuLTMtb2YtMTAge1xyXG5cdHdpZHRoOiAyOC44OCU7XHJcbn1cclxuXHJcbi5zcGFuLTItb2YtMTAge1xyXG5cdHdpZHRoOiAxOC43MiU7IFxyXG59XHJcblxyXG4uc3Bhbi0xLW9mLTEwIHtcclxuXHR3aWR0aDogOC41NiU7IFxyXG59XHJcblxyXG5cclxuLyogIEdPIEZVTEwgV0lEVEggQVQgTEVTUyBUSEFOIDQ4MCBQSVhFTFMgKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHQuc3Bhbi0xMC1vZi0xMCB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG5cdC5zcGFuLTktb2YtMTAge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxuXHQuc3Bhbi04LW9mLTEwIHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcblx0LnNwYW4tNy1vZi0xMCB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG5cdC5zcGFuLTYtb2YtMTAge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxuXHQuc3Bhbi01LW9mLTEwIHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcblx0LnNwYW4tNC1vZi0xMCB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG5cdC5zcGFuLTMtb2YtMTAge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxuXHQuc3Bhbi0yLW9mLTEwIHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcblx0LnNwYW4tMS1vZi0xMCB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG59XHJcblxyXG5cclxuLyogIEdSSUQgT0YgRUxFVkVOICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5zcGFuLTExLW9mLTExIHtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNwYW4tMTAtb2YtMTEge1xyXG5cdHdpZHRoOiA5MC43NiU7XHJcbn1cclxuXHJcbi5zcGFuLTktb2YtMTEge1xyXG5cdHdpZHRoOiA4MS41MiU7XHJcbn1cclxuXHJcbi5zcGFuLTgtb2YtMTEge1xyXG5cdHdpZHRoOiA3Mi4yOSU7XHJcbn1cclxuXHJcbi5zcGFuLTctb2YtMTEge1xyXG5cdHdpZHRoOiA2My4wNSU7IFxyXG59XHJcblxyXG4uc3Bhbi02LW9mLTExIHtcclxuXHR3aWR0aDogNTMuODElOyBcclxufVxyXG5cclxuLnNwYW4tNS1vZi0xMSB7XHJcblx0d2lkdGg6IDQ0LjU4JTsgXHJcbn1cclxuXHJcbi5zcGFuLTQtb2YtMTEge1xyXG5cdHdpZHRoOiAzNS4zNCU7IFxyXG59XHJcblxyXG4uc3Bhbi0zLW9mLTExIHtcclxuXHR3aWR0aDogMjYuMSU7XHJcbn1cclxuXHJcbi5zcGFuLTItb2YtMTEge1xyXG5cdHdpZHRoOiAxNi44NyU7IFxyXG59XHJcblxyXG4uc3Bhbi0xLW9mLTExIHtcclxuXHR3aWR0aDogNy42MyU7IFxyXG59XHJcblxyXG5cclxuLyogIEdPIEZVTEwgV0lEVEggQVQgTEVTUyBUSEFOIDQ4MCBQSVhFTFMgKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHQuc3Bhbi0xMS1vZi0xMSB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG5cdC5zcGFuLTEwLW9mLTExIHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcblx0LnNwYW4tOS1vZi0xMSB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG5cdC5zcGFuLTgtb2YtMTEge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxuXHQuc3Bhbi03LW9mLTExIHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcblx0LnNwYW4tNi1vZi0xMSB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG5cdC5zcGFuLTUtb2YtMTEge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxuXHQuc3Bhbi00LW9mLTExIHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcblx0LnNwYW4tMy1vZi0xMSB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG5cdC5zcGFuLTItb2YtMTEge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxuXHQuc3Bhbi0xLW9mLTExIHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcbn1cclxuXHJcblxyXG4vKiAgR1JJRCBPRiBUV0VMVkUgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLnNwYW4tMTItb2YtMTIge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3Bhbi0xMS1vZi0xMiB7XHJcblx0d2lkdGg6IDkxLjUzJTtcclxufVxyXG5cclxuLnNwYW4tMTAtb2YtMTIge1xyXG5cdHdpZHRoOiA4My4wNiU7XHJcbn1cclxuXHJcbi5zcGFuLTktb2YtMTIge1xyXG5cdHdpZHRoOiA3NC42JTtcclxufVxyXG5cclxuLnNwYW4tOC1vZi0xMiB7XHJcblx0d2lkdGg6IDY2LjEzJTtcclxufVxyXG5cclxuLnNwYW4tNy1vZi0xMiB7XHJcblx0d2lkdGg6IDU3LjY2JTsgXHJcbn1cclxuXHJcbi5zcGFuLTYtb2YtMTIge1xyXG5cdHdpZHRoOiA0OS4yJTsgXHJcbn1cclxuXHJcbi5zcGFuLTUtb2YtMTIge1xyXG5cdHdpZHRoOiA0MC43MyU7IFxyXG59XHJcblxyXG4uc3Bhbi00LW9mLTEyIHtcclxuXHR3aWR0aDogMzIuMjYlOyBcclxufVxyXG5cclxuLnNwYW4tMy1vZi0xMiB7XHJcblx0d2lkdGg6IDIzLjglO1xyXG59XHJcblxyXG4uc3Bhbi0yLW9mLTEyIHtcclxuXHR3aWR0aDogMTUuMzMlOyBcclxufVxyXG5cclxuLnNwYW4tMS1vZi0xMiB7XHJcblx0d2lkdGg6IDYuODYlOyBcclxufVxyXG5cclxuXHJcbi8qICBHTyBGVUxMIFdJRFRIIEFUIExFU1MgVEhBTiA0ODAgUElYRUxTICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblx0LnNwYW4tMTItb2YtMTIge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxuXHQuc3Bhbi0xMS1vZi0xMiB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG5cdC5zcGFuLTEwLW9mLTEyIHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcblx0LnNwYW4tOS1vZi0xMiB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG5cdC5zcGFuLTgtb2YtMTIge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxuXHQuc3Bhbi03LW9mLTEyIHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcblx0LnNwYW4tNi1vZi0xMiB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG5cdC5zcGFuLTUtb2YtMTIge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxuXHQuc3Bhbi00LW9mLTEyIHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcblx0LnNwYW4tMy1vZi0xMiB7XHJcblx0XHR3aWR0aDogMTAwJTsgXHJcblx0fVxyXG5cdC5zcGFuLTItb2YtMTIge1xyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdH1cclxuXHQuc3Bhbi0xLW9mLTEyIHtcclxuXHRcdHdpZHRoOiAxMDAlOyBcclxuXHR9XHJcbn0iLCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXHJcblxyXG4vKiBEb2N1bWVudFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cclxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXHJcbiAqL1xyXG5cclxuIGh0bWwge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cclxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xyXG4gIH1cclxuICBcclxuICAvKiBTZWN0aW9uc1xyXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxyXG4gICAqL1xyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cclxuICAgKi9cclxuICBcclxuICBtYWluIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXHJcbiAgICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cclxuICAgKi9cclxuICBcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIG1hcmdpbjogMC42N2VtIDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEdyb3VwaW5nIGNvbnRlbnRcclxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gIFxyXG4gIC8qKlxyXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXHJcbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXHJcbiAgICovXHJcbiAgXHJcbiAgaHIge1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cclxuICAgIGhlaWdodDogMDsgLyogMSAqL1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cclxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAgICovXHJcbiAgXHJcbiAgcHJlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xyXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcclxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cclxuICAgKi9cclxuICBcclxuICBhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxyXG4gICAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXHJcbiAgICovXHJcbiAgXHJcbiAgYWJiclt0aXRsZV0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxyXG4gICAqL1xyXG4gIFxyXG4gIGIsXHJcbiAgc3Ryb25nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxyXG4gICAqL1xyXG4gIFxyXG4gIGNvZGUsXHJcbiAga2JkLFxyXG4gIHNhbXAge1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXHJcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cclxuICAgKi9cclxuICBcclxuICBzbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXHJcbiAgICogYWxsIGJyb3dzZXJzLlxyXG4gICAqL1xyXG4gIFxyXG4gIHN1YixcclxuICBzdXAge1xyXG4gICAgZm9udC1zaXplOiA3NSU7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICB9XHJcbiAgXHJcbiAgc3ViIHtcclxuICAgIGJvdHRvbTogLTAuMjVlbTtcclxuICB9XHJcbiAgXHJcbiAgc3VwIHtcclxuICAgIHRvcDogLTAuNWVtO1xyXG4gIH1cclxuICBcclxuICAvKiBFbWJlZGRlZCBjb250ZW50XHJcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICBcclxuICAvKipcclxuICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxyXG4gICAqL1xyXG4gIFxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZvcm1zXHJcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICBcclxuICAvKipcclxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cclxuICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXHJcbiAgICovXHJcbiAgXHJcbiAgYnV0dG9uLFxyXG4gIGlucHV0LFxyXG4gIG9wdGdyb3VwLFxyXG4gIHNlbGVjdCxcclxuICB0ZXh0YXJlYSB7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xyXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXHJcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xyXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxyXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXHJcbiAgICovXHJcbiAgXHJcbiAgYnV0dG9uLFxyXG4gIGlucHV0IHsgLyogMSAqL1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxyXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cclxuICAgKi9cclxuICBcclxuICBidXR0b24sXHJcbiAgc2VsZWN0IHsgLyogMSAqL1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXHJcbiAgICovXHJcbiAgXHJcbiAgYnV0dG9uLFxyXG4gIFt0eXBlPVwiYnV0dG9uXCJdLFxyXG4gIFt0eXBlPVwicmVzZXRcIl0sXHJcbiAgW3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXHJcbiAgICovXHJcbiAgXHJcbiAgYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxyXG4gIFt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyLFxyXG4gIFt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXHJcbiAgW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxyXG4gICAqL1xyXG4gIFxyXG4gIGJ1dHRvbjotbW96LWZvY3VzcmluZyxcclxuICBbdHlwZT1cImJ1dHRvblwiXTotbW96LWZvY3VzcmluZyxcclxuICBbdHlwZT1cInJlc2V0XCJdOi1tb3otZm9jdXNyaW5nLFxyXG4gIFt0eXBlPVwic3VibWl0XCJdOi1tb3otZm9jdXNyaW5nIHtcclxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxyXG4gICAqL1xyXG4gIFxyXG4gIGZpZWxkc2V0IHtcclxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cclxuICAgKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXHJcbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxyXG4gICAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxyXG4gICAqL1xyXG4gIFxyXG4gIGxlZ2VuZCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXHJcbiAgICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xyXG4gICAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cclxuICAgIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xyXG4gICAgcGFkZGluZzogMDsgLyogMyAqL1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxyXG4gICAqL1xyXG4gIFxyXG4gIHByb2dyZXNzIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXHJcbiAgICovXHJcbiAgXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxyXG4gICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cclxuICAgKi9cclxuICBcclxuICBbdHlwZT1cImNoZWNrYm94XCJdLFxyXG4gIFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xyXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXHJcbiAgICovXHJcbiAgXHJcbiAgW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbiAgW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cclxuICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cclxuICAgKi9cclxuICBcclxuICBbdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxyXG4gICAqL1xyXG4gIFxyXG4gIFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cclxuICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXHJcbiAgICovXHJcbiAgXHJcbiAgOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xyXG4gICAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xyXG4gIH1cclxuICBcclxuICAvKiBJbnRlcmFjdGl2ZVxyXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgXHJcbiAgLypcclxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxyXG4gICAqL1xyXG4gIFxyXG4gIGRldGFpbHMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC8qXHJcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxyXG4gICAqL1xyXG4gIFxyXG4gIHN1bW1hcnkge1xyXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gIH1cclxuICBcclxuICAvKiBNaXNjXHJcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICBcclxuICAvKipcclxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXHJcbiAgICovXHJcbiAgXHJcbiAgdGVtcGxhdGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXHJcbiAgICovXHJcbiAgXHJcbiAgW2hpZGRlbl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgIiwiQGltcG9ydCB1cmwoJy4vVmVuZG9ycy9HcmlkLmNzcycpO1xyXG5AaW1wb3J0IHVybCgnLi9WZW5kb3JzL25vcm1hbGl6ZS5jc3MnKTtcclxuXHJcbip7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG4gICAgXHJcbn1cclxuaHRtbFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywnQXJpYWwnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxufVxyXG4ucm93XHJcbntcclxuICAgIG1heC13aWR0aDogMTE0MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuaGVhZGVyXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogMTN2aDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBcclxufVxyXG4udG9wLXRleHRcclxue1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIHdpZHRoOiAxMTQwcHg7XHJcbiAgIHRvcDo1MCU7XHJcbiAgIGxlZnQ6NTAlO1xyXG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICBcclxufVxyXG5cclxuLyotLS0tSGVhZGluZ3MtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmgxLGgyLGgzXHJcbntcclxuICAgIFxyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgIFxyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuaDFcclxue1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICB3b3JkLXNwYWNpbmc6IDNweDtcclxuICAgIGZvbnQtZmFtaWx5OkdhZGdldCwgc2Fucy1zZXJpZiAgXHJcbiAgICAgICBcclxufVxyXG5oMlxyXG57XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICB3b3JkLXNwYWNpbmc6IDFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBwYWRkaW5nIDogMTBweDtcclxuICAgIFxyXG59XHJcbmgyOmFmdGVyXHJcbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDM1NDAwO1xyXG4gICAgY29udGVudDpcIiBcIjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBcclxuICAgIFxyXG59XHJcbmgzXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgICAgIC8qLS0tQnV0dG9ucy0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5idG5cclxue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6MjAwcHg7ICBcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyxib3JkZXIgMC4ycztcclxuICAgIFxyXG59XHJcbi5idG4tZnVsbDpsaW5rLFxyXG4uYnRuLWZ1bGw6dmlzaXRlZFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM1NDAwOyBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMzU0MDA7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgXHJcbn1cclxuLmJ0bi1naG9zdDpsaW5rLFxyXG4uYnRuLWdob3N0OnZpc2l0ZWRcclxue1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMzU0MDA7XHJcbiAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4tZnVsbDphY3RpdmUsXHJcbi5idG4tZnVsbDpob3ZlclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2IxNDYwMDsgIFxyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIFxyXG59XHJcbi5idG4tZ2hvc3Q6YWN0aXZlLFxyXG4uYnRuLWdob3N0OmhvdmVyXHJcbntcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2IxNDYwMDsgIFxyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkICNiMTQ2MDA7XHJcbiAgICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tTmF2aWdhdGlvbi0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ubWFpbi1uYXZcclxue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBcclxufVxyXG4ubWFpbi1uYXYgbGlcclxue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICBcclxuICAgIFxyXG59XHJcbi5tYWluLW5hdiBsaSBhOmxpbmssXHJcbi5tYWluLW5hdiBsaSBhOnZpc2l0ZWRcclxue1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjojZmZmOyBcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB3b3JkLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAwLjJzO1xyXG59XHJcbi5tYWluLW5hdiBsaSBhOmhvdmVyLFxyXG4ubWFpbi1uYXYgbGkgYTphY3RpdmVcclxue1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiMTQ2MDA7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4uYm94XHJcbntcclxuICAgIHBhZGRpbmc6IDFweDtcclxufVxyXG5cclxuLmxvZ29cclxue1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOmF1dG87XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDcwcHg7XHJcbiAgIFxyXG4gICBcclxufVxyXG5zZWN0aW9uXHJcbntcclxuICAgIHBhZGRpbmc6IDgwcHg7XHJcblxyXG59XHJcblxyXG5ib2R5IHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjQzKSxcclxuXHRyZ2JhKDAsIDAsIDAsIDAuNDMpKSwgdXJsKFwiL2Fzc2V0cy9tYWlucGdfaGVhZGVyLmpwZ1wiKTtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRoZWlnaHQgOiAxMDB2aDtcclxuXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0XHJcbn1cclxuLmxvbmctY29weVxyXG57XHJcbiAgICBsaW5lLWhlaWdodDogMTQ1JTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5pY29uLWJpZ1xyXG57XHJcbiAgICBmb250LXNpemU6IDMwMCU7XHJcbiAgICBjb2xvcjogI2QzNTQwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'my-app-root',
          templateUrl: './CustomerApp.MasterPageView.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/CustomerApp/Routing/CustomerApp.MainRouting.ts":
  /*!************************************************************!*\
    !*** ./src/CustomerApp/Routing/CustomerApp.MainRouting.ts ***!
    \************************************************************/

  /*! exports provided: MainRoutes */

  /***/
  function srcCustomerAppRoutingCustomerAppMainRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainRoutes", function () {
      return MainRoutes;
    });
    /* harmony import */


    var _SignUpLogin_CustomerApp_SignUpLoginComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../SignUpLogin/CustomerApp.SignUpLoginComponent */
    "./src/CustomerApp/SignUpLogin/CustomerApp.SignUpLoginComponent.ts");

    var MainRoutes = [{
      path: 'signup',
      component: _SignUpLogin_CustomerApp_SignUpLoginComponent__WEBPACK_IMPORTED_MODULE_0__["SignUpLoginComponent"]
    }];
    /***/
  },

  /***/
  "./src/CustomerApp/SignUpLogin/CustomerApp.SignUpLoginComponent.ts":
  /*!*************************************************************************!*\
    !*** ./src/CustomerApp/SignUpLogin/CustomerApp.SignUpLoginComponent.ts ***!
    \*************************************************************************/

  /*! exports provided: SignUpLoginComponent */

  /***/
  function srcCustomerAppSignUpLoginCustomerAppSignUpLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpLoginComponent", function () {
      return SignUpLoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SignUpLoginComponent = /*#__PURE__*/function () {
      function SignUpLoginComponent() {
        _classCallCheck(this, SignUpLoginComponent);
      }

      _createClass(SignUpLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {//  alert('Hi');
        }
      }]);

      return SignUpLoginComponent;
    }();

    SignUpLoginComponent.ɵfac = function SignUpLoginComponent_Factory(t) {
      return new (t || SignUpLoginComponent)();
    };

    SignUpLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignUpLoginComponent,
      selectors: [["ng-component"]],
      decls: 3,
      vars: 0,
      consts: [[1, "section-features"], [1, "row"], [1, "col-md-4"]],
      template: function SignUpLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["p[_ngcontent-%COMP%]{\r\n    color:#fff;  \r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n\tbackground-image: linear-gradient(rgba(0, 0, 0, 0.43),\r\n\trgba(0, 0, 0, 0.43)), url(\"/assets/road.jpg\");\r\n\tbackground-position: center;\r\n\tbackground-size: cover;\r\n\theight : 100vh;\r\n\tbackground-attachment: fixed;\r\n\theight: 100vh;\r\n\t\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DdXN0b21lckFwcC9TaWduVXBMb2dpbi9DdXN0b21lckFwcC5TaWduVXBMb2dpbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7Q0FDQzs4Q0FDNkM7Q0FDN0MsMkJBQTJCO0NBQzNCLHNCQUFzQjtDQUN0QixjQUFjO0NBQ2QsNEJBQTRCO0NBQzVCLGFBQWE7O0FBRWQiLCJmaWxlIjoic3JjL0N1c3RvbWVyQXBwL1NpZ25VcExvZ2luL0N1c3RvbWVyQXBwLlNpZ25VcExvZ2luLmNzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICBjb2xvcjojZmZmOyAgXHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNDMpLFxyXG5cdHJnYmEoMCwgMCwgMCwgMC40MykpLCB1cmwoXCIvYXNzZXRzL3JvYWQuanBnXCIpO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGhlaWdodCA6IDEwMHZoO1xyXG5cdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuXHRcclxufVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './CustomerApp.SignUpLoginView.html',
          styleUrls: ['./CustomerApp.SignUpLogin.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/CustomerApp/app-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/CustomerApp/app-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcCustomerAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _CustomerApp_Home_CustomerApp_MainModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./CustomerApp/Home/CustomerApp.MainModule */
    "./src/CustomerApp/Home/CustomerApp.MainModule.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_CustomerApp_Home_CustomerApp_MainModule__WEBPACK_IMPORTED_MODULE_2__["MainModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\acer\Desktop\MyProject\Refactor\Heilbrom\CustomerApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map