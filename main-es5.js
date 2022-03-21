function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"flight-search\" class=\"parentDiv\">\r\n\r\n\r\n<div id=\"container\" class=\"box\">\r\n  <div>\r\n    <app-dropdown-search \r\n        placeholder=\"Leaving from\" \r\n        [airportList]=\"airportList\"\r\n        (selectedAirport) = \"setLeavingFrom($event)\">\r\n    </app-dropdown-search>\r\n  </div>\r\n\r\n  <div>\r\n    <app-dropdown-search \r\n        placeholder=\"Going To\" \r\n        [airportList]=\"airportList\"\r\n        (selectedAirport) = \"setGoingTo($event)\">\r\n    </app-dropdown-search>\r\n  </div>\r\n\r\n  <div>    \r\n    <app-date-picker (selectedDate) = \"setDate($event)\"></app-date-picker>\r\n  </div>\r\n\r\n  <div>\r\n    <input type=\"button\" (click)=\"showFlights()\" value=\"View details\" class=\"buttonCls\">\r\n  </div>\r\n</div>\r\n\r\n<div  *ngIf=\"showFlightList\">\r\n    <div *ngFor=\"let flight of flightList; let i=index;\">\r\n      <app-flight-detail \r\n          [flightData]=\"flightList[i]\"\r\n          [origin]=\"leavingCityName\"\r\n          [destination]=\"goingToCityName\"\r\n          [searchDate]=\"searchDate\">\r\n    </app-flight-detail>\r\n    <div> </div>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n<app-loading-indicator [show]=\"showloadingIndicator\">\r\n</app-loading-indicator>\r\n\r\n<app-validation-message *ngIf=\"showValidationMsg\" [message]=\"validationMsg\"></app-validation-message>\r\n\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/date-picker/date-picker.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/date-picker/date-picker.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDatePickerDatePickerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"row row-cols-sm-auto\">\r\n    <div class=\"col-12\">\r\n      <div class=\"input-group\">\r\n        <input class=\"form-control\"\r\n               placeholder=\"yyyy-mm-dd\"\r\n               name=\"dp\" [(ngModel)]=\"model\" \r\n               ngbDatepicker #d=\"ngbDatepicker\" \r\n               (dateSelect)=\"selectDate($event)\">\r\n        <button class=\"btn btn-outline-secondary calendar\" \r\n                (click)=\"d.toggle()\" \r\n                type=\"button\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/flight-detail/flight-detail.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/flight-detail/flight-detail.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFlightDetailFlightDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div id=\"container1\" class=\"box1\">\r\n    <span id=\"details\">\r\n        <div id=\"source-dest\">\r\n            <span class=\"source\">{{origin}}</span>\r\n            <span class=\"destination\">{{destination}}</span>            \r\n        </div>\r\n        <div id=\"dep-arrival\">\r\n            <span class=\"source\">Departed:</span>\r\n            <span class=\"destination\">Arrived</span>\r\n        </div>\r\n        <div id=\"Time\">\r\n            <span class=\"source\">Time::{{flightData.flightRoute[0].departureTime.actual}}</span>\r\n            <span class=\"destination\">Time::{{flightData.flightRoute[0].arrivalTime.actual}}</span>\r\n        </div>\r\n        <div id=\"Date\">\r\n            <span class=\"source\">Date::{{flightData.flightRoute[0].departureTime.actual}}</span>\r\n            <span class=\"destination\">Date::{{flightData.flightRoute[0].arrivalTime.actual}}</span>\r\n        </div>\r\n        <div id=\"scheduled\">\r\n            <span class=\"source\">Scheduled Departure:{{flightData.flightRoute[0].departureTime.schedule}}</span>\r\n            <span class=\"destination\">Scheduled Arrival:{{flightData.flightRoute[0].arrivalTime.schedule}}</span>\r\n        </div>\r\n    </span>\r\n    \r\n    <span class=\"vertical_dotted_line\" ></span>\r\n\r\n    <span id=\"status\" >\r\n    </span>\r\n</div>\r\n\r\n\r\n -->\r\n <div style=\"width:100%;background-color:whitesmoke;\">   \r\n\r\n    <div id = \"boxes\">\r\n        <h1 style=\"background-color:whitesmoke;\">-</h1>\r\n          \r\n        <div id = \"leftbox\">           \r\n            <div class=\"source\">{{origin}}</div>\r\n            <div class=\"source departed\">Departed:</div>\r\n            <div class=\"source time\">{{originTime}}</div>\r\n            <div class=\"source sched_date\">{{originDate}}</div>\r\n            <div class=\"source sched_date\">Scheduled Departure: {{originSchDepTime}}</div>\r\n        </div> \r\n\r\n        <div id=\"imgbox\">\r\n            <div >\r\n                <img src=\"assets/flight101.png\" alt=\"flight\" width=\"40px\" height=\"40px\">\r\n            </div>           \r\n        </div>\r\n        \r\n        <div id = \"middlebox\">\r\n            <div class=\"source\">{{destination}}</div>\r\n            <div class=\"source departed\">Arrived:</div>\r\n            <div class=\"source time\">{{arrTime}}</div>\r\n            <div class=\"source sched_date\">{{arrDate}}</div>\r\n            <div class=\"source sched_date\">Scheduled Arrival: {{arrSchDepTime}}</div>     \r\n        </div>\r\n          \r\n        <div id = \"rightbox\">\r\n            <div style=\"float:right\">\r\n                <button [class]=\"statusColor\">{{statusText}}</button>\r\n            </div>\r\n            <div style=\"float:center; padding-top:80px;padding-left:50px;font-size: large;\">{{flightData.airlineDesignator}} {{flightData.flightNumber}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/loading-indicator/loading-indicator.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loading-indicator/loading-indicator.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoadingIndicatorLoadingIndicatorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id='busy-overlay' tabindex='-1' *ngIf=\"show\">\r\n    <div id='busy-indicator'  role='alert' aria-live='assertive' tabindex='-1'>\r\n            <img src=\"assets/spinner.gif\" class='icon-ui-loading mg-btm-10'>\r\n            <p>\r\n                    please wait..\r\n            </p>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search-bar/search-bar.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-bar/search-bar.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchBarSearchBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span class =\"dropdown_search\">\r\n    <select (change)=\"SelectItem($event.target.value)\" class =\"dropdown_select\">\r\n      <option [value]=\"defaultInput_code\">{{defaultInput_city}} ({{defaultInput_code}})</option>\r\n      <option *ngFor=\"let airport of airportList\" value=\"{{airport.iataCode}}\">\r\n        {{airport.shortName}} ({{airport.iataCode}}) \r\n      </option>\r\n    </select>\r\n</span>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/validation-message/validation-message.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/validation-message/validation-message.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppValidationMessageValidationMessageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"message !== ''\">\r\n    <div class=\"dds__alert dds__alert-dismissible\">\r\n        <i class=\"dds__icons dds__alert-info-cir dds__icon-h4\" aria-hidden=\"true\"></i><strong>Info</strong>\r\n        <div class = \"dds_txt_align\">{{message}}</div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".parentDiv {\r\n    padding-left:50px;\r\n    padding-right:50px;\r\n    padding-top: 50px;\r\n}\r\n\r\n.leaving_From{\r\n    width:70%;\r\n}\r\n\r\n#wrapper {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n\r\n#container {\r\n    text-align: justify;\r\n    -ms-text-justify: distribute-all-lines;\r\n    text-justify: distribute-all-lines;\r\n    width:100%;\r\n    float: center;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    padding-bottom: 30px;\r\n}\r\n\r\n#container>div {\r\n    /* width: 50px; */\r\n    height: 100px;\r\n    display: inline-block;\r\n    padding-top: 50px;\r\n    /* *display: inline; */\r\n    /* zoom: 1;\r\n    background:red; */\r\n}\r\n\r\n.buttonCls{\r\n   \r\n    margin-left: 100px;\r\n    background-color: #c60c30;\r\n    width:200px;\r\n    color:white;\r\n}\r\n\r\n.box {\r\n    width: 100px;\r\n   \r\n    padding-left: 50px;\r\n    padding-right:50px;\r\n    margin-right:100px;    \r\n    box-sizing: border-box;\r\n  }\r\n\r\ninput {\r\n    /* //display: flex; */\r\n    height: 50px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7RUFDaEM7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLGtDQUFrQztJQUNsQyxVQUFVO0lBQ1YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QjtxQkFDaUI7QUFDckI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTs7SUFFWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyZW50RGl2IHtcclxuICAgIHBhZGRpbmctbGVmdDo1MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDo1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5sZWF2aW5nX0Zyb217XHJcbiAgICB3aWR0aDo3MCU7XHJcbn1cclxuXHJcbiN3cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAjY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAtbXMtdGV4dC1qdXN0aWZ5OiBkaXN0cmlidXRlLWFsbC1saW5lcztcclxuICAgIHRleHQtanVzdGlmeTogZGlzdHJpYnV0ZS1hbGwtbGluZXM7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgZmxvYXQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG4jY29udGFpbmVyPmRpdiB7XHJcbiAgICAvKiB3aWR0aDogNTBweDsgKi9cclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIC8qICpkaXNwbGF5OiBpbmxpbmU7ICovXHJcbiAgICAvKiB6b29tOiAxO1xyXG4gICAgYmFja2dyb3VuZDpyZWQ7ICovXHJcbn1cclxuXHJcbi5idXR0b25DbHN7XHJcbiAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M2MGMzMDtcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICBcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6NTBweDtcclxuICAgIG1hcmdpbi1yaWdodDoxMDBweDsgICAgXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgLyogLy9kaXNwbGF5OiBmbGV4OyAqL1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _appconstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./appconstant */
    "./src/app/appconstant.ts");
    /* harmony import */


    var _models_airport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./models/airport */
    "./src/app/models/airport.ts");
    /* harmony import */


    var _service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./service/common_service */
    "./src/app/service/common_service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(commonService) {
        _classCallCheck(this, AppComponent);

        this.commonService = commonService;
        this.title = 'flight-status';
        this.airportList = [];
        this.airports = [];
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadAirportList();
          this.showloadingIndicator = false;
          this.showValidationMsg = false;
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.loadAirportList();
          this.showloadingIndicator = false;
          this.showValidationMsg = false;
        }
      }, {
        key: "setLeavingFrom",
        value: function setLeavingFrom(event) {
          this.leavingFrom = event;
        }
      }, {
        key: "setGoingTo",
        value: function setGoingTo(event) {
          this.goingTo = event;
        }
      }, {
        key: "setDate",
        value: function setDate(date) {
          this.searchDate = date;
        }
      }, {
        key: "showFlights",
        value: function showFlights() {
          var _this = this;

          this.showValidationMsg = false;
          this.validationMsg = null;
          this.showloadingIndicator = true;
          this.validate();
          this.getFlightStatus();
          this.leavingCityName = this.airportList.filter(function (t) {
            return t.iataCode === _this.leavingFrom;
          })[0].shortName;
          this.goingToCityName = this.airportList.filter(function (t) {
            return t.iataCode === _this.goingTo;
          })[0].shortName;
          this.leavingCityName = this.leavingCityName + " (" + this.leavingFrom + ")";
          this.goingToCityName = this.goingToCityName + " (" + this.goingTo + ")";
        }
      }, {
        key: "validate",
        value: function validate() {
          this.validationMsg = !this.searchDate ? "Please select a date!" : null;

          if (this.validationMsg) {
            this.showloadingIndicator = false;
            this.showValidationMsg = true;
          }
        }
      }, {
        key: "loadAirportList",
        value: function loadAirportList() {
          var _this2 = this;

          this.airportSubscription = this.commonService.getAirportList(_appconstant__WEBPACK_IMPORTED_MODULE_2__["AppConstant"].language).subscribe(function (response) {
            var temp;
            Object.keys(response.results).forEach(function (key) {
              var airport = new _models_airport__WEBPACK_IMPORTED_MODULE_3__["Airport"]();
              airport.iataCode = [response.results[key].iataCode].toString();
              airport.shortName = [response.results[key].shortName].toString();

              _this2.airportList.push(airport);

              _this2.airportList.sort(function (a, b) {
                return a.shortName.localeCompare(b.shortName);
              }); //remove duplicates


              var uniqueObjectArray = _toConsumableArray(new Map(_this2.airportList.map(function (item) {
                return [item[key], item];
              })).values());
            });
          }, function (error) {
            //set flag for error page
            _this2.airportList = [];
          });
        }
      }, {
        key: "getFlightStatus",
        value: function getFlightStatus() {
          var _this3 = this;

          if (this.leavingFrom && this.goingTo && this.searchDate) {
            this.flightStatusSubscription = this.commonService.getFlightStatus(this.leavingFrom, this.goingTo, this.searchDate) //make it dynamic
            .subscribe(function (response) {
              _this3.flightList = response ? response.results : [];
              _this3.showFlightList = true;
              _this3.showloadingIndicator = false;

              if (!_this3.flightList) {
                _this3.showValidationMsg = true;
                _this3.validationMsg = "Sorry, No data found !";
              }
            }, function (error) {
              _this3.flightList = [];
              _this3.showloadingIndicator = false;
              _this3.showValidationMsg = true;
              _this3.validationMsg = "Sorry, Error in service call !";
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.airportSubscription.unsubscribe();
          this.flightStatusSubscription.unsubscribe();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./search-bar/search-bar.component */
    "./src/app/search-bar/search-bar.component.ts");
    /* harmony import */


    var _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./date-picker/date-picker.component */
    "./src/app/date-picker/date-picker.component.ts");
    /* harmony import */


    var _flight_detail_flight_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./flight-detail/flight-detail.component */
    "./src/app/flight-detail/flight-detail.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./loading-indicator/loading-indicator.component */
    "./src/app/loading-indicator/loading-indicator.component.ts");
    /* harmony import */


    var _validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./validation-message/validation-message.component */
    "./src/app/validation-message/validation-message.component.ts"); //import { NgbModule } 


    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__["SearchBarComponent"], _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_7__["DatePickerComponent"], _flight_detail_flight_detail_component__WEBPACK_IMPORTED_MODULE_8__["FlightDetailComponent"], _loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_11__["LoadingIndicatorComponent"], _validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_12__["ValidationMessageComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/appconstant.ts":
  /*!********************************!*\
    !*** ./src/app/appconstant.ts ***!
    \********************************/

  /*! exports provided: AppConstant */

  /***/
  function srcAppAppconstantTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppConstant", function () {
      return AppConstant;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AppConstant = /*#__PURE__*/_createClass(function AppConstant() {
      _classCallCheck(this, AppConstant);
    });

    AppConstant.leavingFrom = 'Leaving from';
    AppConstant.goingTo = 'Going to';
    AppConstant.get_airportList_Api = 'https://www.emirates.com/service/airports?';
    AppConstant.get_flightStatus_Api = 'http://localhost:4200/api/flight-status?';
    AppConstant.language = "en";
    /***/
  },

  /***/
  "./src/app/date-picker/date-picker.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/date-picker/date-picker.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDatePickerDatePickerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\ninput{\r\n    height: 50px;\r\n}\r\n\r\nbutton.calendar, button.calendar:active {\r\n    width: 2.75rem;\r\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEUSURBVEiJ7ZQxToVAEIY/YCHGxN6XGOIpnpaEsBSeQC9ArZbm9TZ6ADyBNzAhQGGl8Riv4BLAWAgmkpBYkH1b8FWT2WK/zJ8ZJ4qiI6XUI3ANnGKWBnht2/ZBDRK3hgVGNsCd7/ui+JkEIrKtqurLpEWaphd933+IyI3LEIdpCYCiKD6HcuOa/nwOa0ScJEnk0BJg0UTUWJRl6RxCYEzEmomsIlPU3IPW+grIAbquy+q6fluy/28RIBeRMwDXdXMgXLj/B2uimRXpui4D9sBeRLKl+1N+L+t6RwbWrZliTTTr1oxYtzVWiTQAcRxvTX+eJMnlUDaO1vpZRO5NS0x48sIwfPc87xg4B04MCzQi8hIEwe4bl1DnFMCN2zsAAAAASUVORK5CYII=') !important;\r\n    background-repeat: no-repeat;\r\n    background-size: 23px;\r\n    background-position: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDBsQkFBMGxCO0lBQzFsQiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLDJCQUEyQjtFQUM3QiIsImZpbGUiOiJzcmMvYXBwL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5jYWxlbmRhciwgYnV0dG9uLmNhbGVuZGFyOmFjdGl2ZSB7XHJcbiAgICB3aWR0aDogMi43NXJlbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDSUFBQUFjQ0FZQUFBQUVOMjBmQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFPeEFBQURzUUJsU3NPR3dBQUFCbDBSVmgwVTI5bWRIZGhjbVVBZDNkM0xtbHVhM05qWVhCbExtOXlaNXZ1UEJvQUFBRVVTVVJCVkVpSjdaUXhUb1ZBRUlZL1lDSEd4TjZYR09JcG5wYUVzQlNlUUM5QXJaYm05VFo2QUR5Qk56QWhRR0dsOFJpdjRCTEFXQWdta3BCWWtIMWI4RldUMldLL3pKOFpKNHFpSTZYVUkzQU5uR0tXQm5odDIvWkJEUkszaGdWR05zQ2Q3L3VpK0prRUlyS3RxdXJMcEVXYXBoZDkzMytJeUkzTEVJZHBDWUNpS0Q2SGN1T2EvbndPYTBTY0pFbmswQkpnMFVUVVdKUmw2UnhDWUV6RW1vbXNJbFBVM0lQVytncklBYnF1eStxNmZsdXkvMjhSSUJlUk13RFhkWE1nWExqL0IydWltUlhwdWk0RDlzQmVSTEtsKzFOK0wrdDZSd2JXclpsaVRUVHIxb3hZdHpWV2lUUUFjUnh2VFgrZUpNbmxVRGFPMXZwWlJPNU5TMHg0OHNJd2ZQYzg3eGc0QjA0TUN6UWk4aElFd2U0YmwxRG5GTUNOMnpzQUFBQUFTVVZPUks1Q1lJST0nKSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjNweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/date-picker/date-picker.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/date-picker/date-picker.component.ts ***!
    \******************************************************/

  /*! exports provided: DatePickerComponent */

  /***/
  function srcAppDatePickerDatePickerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function () {
      return DatePickerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DatePickerComponent = /*#__PURE__*/function () {
      function DatePickerComponent() {
        _classCallCheck(this, DatePickerComponent);

        this.selectedDate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(DatePickerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectDate",
        value: function selectDate(event) {
          var year = event.year;
          var month = event.month <= 9 ? '0' + event.month : event.month;
          var day = event.day <= 9 ? '0' + event.day : event.day;
          var finalDate = year + "-" + month + "-" + day;
          this.selectedDate.emit(finalDate);
        }
      }]);

      return DatePickerComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DatePickerComponent.prototype, "selectedDate", void 0);
    DatePickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-date-picker',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./date-picker.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/date-picker/date-picker.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./date-picker.component.css */
      "./src/app/date-picker/date-picker.component.css"))["default"]]
    })], DatePickerComponent);
    /***/
  },

  /***/
  "./src/app/flight-detail/flight-detail.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/flight-detail/flight-detail.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFlightDetailFlightDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".vertical_dotted_line\r\n{\r\n    border-left: 1px dotted black;\r\n    height: 400px;\r\n} \r\n\r\n.source{\r\n    padding-left: 30px;\r\n} \r\n\r\n.destination{\r\n    margin-left: 40px;\r\n} \r\n\r\n.time{\r\n    font-size: xx-large;\r\n    font-style: bold;\r\n} \r\n\r\n.departed{\r\n    font-size: small;\r\n    padding-top: 4px;\r\n} \r\n\r\n.date{\r\n    font-size: small;\r\n} \r\n\r\n.sched_date{\r\n    font-size: small;\r\n} \r\n\r\n.float-right{\r\n    float: right;\r\n} \r\n\r\n#leftbox {\r\n    float:left; \r\n    width:25%;\r\n    height:140px;\r\n    padding-top:20px;\r\n} \r\n\r\n#imgbox{\r\n    float:left; \r\n    width:20%;\r\n    height:20px;\r\n    padding-top:80px;\r\n} \r\n\r\n#middlebox{\r\n    float:left; \r\n    width:25%;\r\n    height:140px;\r\n    padding-top:20px;\r\n} \r\n\r\n#rightbox{\r\n    float:right;\r\n    width:30%;\r\n    height:140px;\r\n} \r\n\r\nh1{\r\n    color:white;\r\n    text-align:center;\r\n    background-color:whitesmoke;\r\n} \r\n\r\n.buttonCls{   \r\n    margin-left: 100px;\r\n    width:150px;\r\n    height: 30px;;\r\n    padding-top:20px;\r\n    margin-top: 20px;\r\n    margin-right:10px;\r\n} \r\n\r\n.buttonBgColorGreen {\r\n    /* margin-left: 100px; */\r\n    width:150px;\r\n    height: 30px;;\r\n    /* padding-top:20px;\r\n    margin-top: 20px;\r\n    margin-right:10px; */\r\n    background-color: green;\r\n    color: white;\r\n} \r\n\r\n.buttonBgColorBlue {\r\n    width:150px;\r\n    height: 30px;;\r\n    background-color: blue;\r\n    color: white;\r\n} \r\n\r\n.buttonBgColorAmber {\r\n    width:150px;\r\n    height: 30px;;\r\n    background-color: #FFBF00;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmxpZ2h0LWRldGFpbC9mbGlnaHQtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksNkJBQTZCO0lBQzdCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDJCQUEyQjtBQUMvQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxZQUFZO0lBQ1o7O3dCQUVvQjtJQUNwQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0LWRldGFpbC9mbGlnaHQtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVydGljYWxfZG90dGVkX2xpbmVcclxue1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkb3R0ZWQgYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59IFxyXG5cclxuLnNvdXJjZXtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG4uZGVzdGluYXRpb257XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxufVxyXG5cclxuLnRpbWV7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgZm9udC1zdHlsZTogYm9sZDtcclxufVxyXG5cclxuLmRlcGFydGVke1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbn1cclxuXHJcbi5kYXRle1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG4uc2NoZWRfZGF0ZXtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbi5mbG9hdC1yaWdodHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4jbGVmdGJveCB7XHJcbiAgICBmbG9hdDpsZWZ0OyBcclxuICAgIHdpZHRoOjI1JTtcclxuICAgIGhlaWdodDoxNDBweDtcclxuICAgIHBhZGRpbmctdG9wOjIwcHg7XHJcbn1cclxuI2ltZ2JveHtcclxuICAgIGZsb2F0OmxlZnQ7IFxyXG4gICAgd2lkdGg6MjAlO1xyXG4gICAgaGVpZ2h0OjIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDo4MHB4O1xyXG59XHJcbiNtaWRkbGVib3h7XHJcbiAgICBmbG9hdDpsZWZ0OyBcclxuICAgIHdpZHRoOjI1JTtcclxuICAgIGhlaWdodDoxNDBweDtcclxuICAgIHBhZGRpbmctdG9wOjIwcHg7XHJcbn1cclxuI3JpZ2h0Ym94e1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICB3aWR0aDozMCU7XHJcbiAgICBoZWlnaHQ6MTQwcHg7XHJcbn1cclxuaDF7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlO1xyXG59XHJcbi5idXR0b25DbHN7ICAgXHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgICB3aWR0aDoxNTBweDtcclxuICAgIGhlaWdodDogMzBweDs7XHJcbiAgICBwYWRkaW5nLXRvcDoyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDoxMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uQmdDb2xvckdyZWVuIHtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiAxMDBweDsgKi9cclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4OztcclxuICAgIC8qIHBhZGRpbmctdG9wOjIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjEwcHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYnV0dG9uQmdDb2xvckJsdWUge1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYnV0dG9uQmdDb2xvckFtYmVyIHtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4OztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkJGMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/flight-detail/flight-detail.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/flight-detail/flight-detail.component.ts ***!
    \**********************************************************/

  /*! exports provided: FlightDetailComponent */

  /***/
  function srcAppFlightDetailFlightDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlightDetailComponent", function () {
      return FlightDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FlightDetailComponent = /*#__PURE__*/function () {
      function FlightDetailComponent() {
        _classCallCheck(this, FlightDetailComponent);
      }

      _createClass(FlightDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.originTime = '---';
          this.originDate = 'NA';
          this.arrTime = '---';
          this.arrDate = 'NA';
          this.arrSchDepTime = 'NA';
          this.originSchDepTime = 'NA';
          var week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
          var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          var dpTimeActual = new Date(this.flightData.flightRoute[0].departureTime.actual);
          var dpTimeSched = new Date(this.flightData.flightRoute[0].departureTime.schedule);
          var arrTimeActual = new Date(this.flightData.flightRoute[0].arrivalTime.actual);
          var arrTimeSched = new Date(this.flightData.flightRoute[0].arrivalTime.schedule);

          if (!isNaN(dpTimeActual.getTime())) {
            var depDay = week[dpTimeActual.getDay()].slice(0, 3);
            var depMonth = months[dpTimeActual.getMonth()].slice(0, 3);
            this.originTime = this.Format(dpTimeActual.getUTCHours()) + ':' + this.Format(dpTimeActual.getUTCMinutes());
            this.originDate = depDay + ' ' + dpTimeActual.getDate() + ' ' + depMonth;
          }

          if (!isNaN(dpTimeSched.getTime())) {
            this.originSchDepTime = this.Format(dpTimeSched.getUTCHours()) + ':' + this.Format(dpTimeSched.getUTCMinutes());
          }

          if (!isNaN(arrTimeActual.getTime())) {
            var arrDay = week[arrTimeActual.getDay()].slice(0, 3);
            var arrMonth = months[arrTimeActual.getMonth()].slice(0, 3);
            this.arrTime = this.Format(arrTimeActual.getUTCHours()) + ':' + this.Format(arrTimeActual.getUTCMinutes());
            this.arrDate = arrDay + ' ' + arrTimeActual.getDate() + ' ' + arrMonth;
          }

          if (!isNaN(arrTimeSched.getTime())) {
            this.arrSchDepTime = this.Format(arrTimeSched.getUTCHours()) + ':' + this.Format(arrTimeSched.getUTCMinutes());
          }

          if (this.flightData.flightRoute[0].statusCode == "ARVD") {
            this.statusColor = "buttonBgColorGreen";
            this.statusText = "Arrived";
          } else if (this.flightData.flightRoute[0].statusCode == "PDEP") {
            this.statusColor = "buttonBgColorBlue";
            this.statusText = "Not yet arrived";
          } else {
            this.statusColor = "buttonBgColorAmber";
            this.statusText = "Not yet arrived";
          }
        }
      }, {
        key: "Format",
        value: function Format(data) {
          if (data) {
            var newData = +data;
            return newData <= 9 ? '0' + newData.toString() : newData.toString();
          }
        }
      }]);

      return FlightDetailComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FlightDetailComponent.prototype, "flightData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FlightDetailComponent.prototype, "origin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FlightDetailComponent.prototype, "destination", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FlightDetailComponent.prototype, "searchDate", void 0);
    FlightDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-flight-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./flight-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/flight-detail/flight-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./flight-detail.component.css */
      "./src/app/flight-detail/flight-detail.component.css"))["default"]]
    })], FlightDetailComponent);
    /***/
  },

  /***/
  "./src/app/loading-indicator/loading-indicator.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/loading-indicator/loading-indicator.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoadingIndicatorLoadingIndicatorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".icon-ui-loading {\r\n    height: 21px;\r\n    width: 21px;\r\n    /* background: url(\"./loading-animation-square.gif\") no-repeat; */\r\n    margin-top: -2px;\r\n    margin-right: 2px;\r\n  }\r\n  .icon-ui-loading {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n  }\r\n  .mg-btm-10 {\r\n    margin-bottom: 10px;\r\n  }\r\n  #busy-indicator {\r\n    text-align: center;\r\n    background-color: #ffffff;   \r\n    border: solid 1px #cccccc;\r\n    padding-top: 25px;\r\n    z-index: 100000;\r\n    width: 400px;\r\n    height: 100px;\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;    \r\n    right: 0;\r\n    margin: auto;\r\n    border-radius: 5px;\r\n  }\r\n  #busy-overlay {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(179, 178, 180, 0.3);    \r\n    z-index: 90000;\r\n  }\r\n  .header-loader {\r\n    position: absolute;\r\n    top: 60%;\r\n    left: 30%;\r\n    transform: translate(-60%, -30%);\r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy1pbmRpY2F0b3IvbG9hZGluZy1pbmRpY2F0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUVBQWlFO0lBQ2pFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUdaLGtCQUFrQjtFQUNwQjtFQUVBO0lBQ0UsZUFBZTtJQUNmLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWiwwQ0FBMEM7SUFDMUMsY0FBYztFQUNoQjtFQUNDO0lBQ0Msa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0dBQ2pDIiwiZmlsZSI6InNyYy9hcHAvbG9hZGluZy1pbmRpY2F0b3IvbG9hZGluZy1pbmRpY2F0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLXVpLWxvYWRpbmcge1xyXG4gICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgd2lkdGg6IDIxcHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoXCIuL2xvYWRpbmctYW5pbWF0aW9uLXNxdWFyZS5naWZcIikgbm8tcmVwZWF0OyAqL1xyXG4gICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gIH1cclxuICAuaWNvbi11aS1sb2FkaW5nIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIC5tZy1idG0tMTAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gICNidXN5LWluZGljYXRvciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyAgIFxyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgei1pbmRleDogMTAwMDAwO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7ICAgIFxyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuXHJcbiAgI2J1c3ktb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3OSwgMTc4LCAxODAsIDAuMyk7ICAgIFxyXG4gICAgei1pbmRleDogOTAwMDA7XHJcbiAgfVxyXG4gICAuaGVhZGVyLWxvYWRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYwJTtcclxuICAgIGxlZnQ6IDMwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC02MCUsIC0zMCUpO1xyXG4gICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/loading-indicator/loading-indicator.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/loading-indicator/loading-indicator.component.ts ***!
    \******************************************************************/

  /*! exports provided: LoadingIndicatorComponent */

  /***/
  function srcAppLoadingIndicatorLoadingIndicatorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingIndicatorComponent", function () {
      return LoadingIndicatorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoadingIndicatorComponent = /*#__PURE__*/function () {
      function LoadingIndicatorComponent() {
        _classCallCheck(this, LoadingIndicatorComponent);
      }

      _createClass(LoadingIndicatorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoadingIndicatorComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LoadingIndicatorComponent.prototype, "show", void 0);
    LoadingIndicatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loading-indicator',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loading-indicator.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/loading-indicator/loading-indicator.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loading-indicator.component.css */
      "./src/app/loading-indicator/loading-indicator.component.css"))["default"]]
    })], LoadingIndicatorComponent);
    /***/
  },

  /***/
  "./src/app/models/airport.ts":
  /*!***********************************!*\
    !*** ./src/app/models/airport.ts ***!
    \***********************************/

  /*! exports provided: Airport, City */

  /***/
  function srcAppModelsAirportTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Airport", function () {
      return Airport;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "City", function () {
      return City;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Airport = /*#__PURE__*/_createClass(function Airport() {
      _classCallCheck(this, Airport);
    });

    var City = /*#__PURE__*/_createClass(function City() {
      _classCallCheck(this, City);
    });
    /***/

  },

  /***/
  "./src/app/search-bar/search-bar.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/search-bar/search-bar.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchBarSearchBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".dropdown_search{\r\n    width:100%;\r\n    display: inline;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n.dropdown_select{\r\n    height: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bl9zZWFyY2h7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG4uZHJvcGRvd25fc2VsZWN0e1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/search-bar/search-bar.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/search-bar/search-bar.component.ts ***!
    \****************************************************/

  /*! exports provided: SearchBarComponent */

  /***/
  function srcAppSearchBarSearchBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function () {
      return SearchBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SearchBarComponent = /*#__PURE__*/function () {
      function SearchBarComponent() {
        _classCallCheck(this, SearchBarComponent);

        this.selectedAirport = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(SearchBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.defaultInput_code = this.placeholder == "Leaving from" ? "DXB" : "LHR";
          this.defaultInput_city = this.placeholder == "Leaving from" ? "Dubai" : "London";
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.defaultInput_code = this.placeholder == "Leaving from" ? "DXB" : "LHR";
          this.defaultInput_city = this.placeholder == "Leaving from" ? "Dubai" : "London";
          this.placeholder == "Leaving from" ? this.selectedAirport.emit("DXB") : this.selectedAirport.emit("LHR");
        }
      }, {
        key: "SelectItem",
        value: function SelectItem(event) {
          console.info(event);
          this.selectedAirport.emit(event);
        }
      }]);

      return SearchBarComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SearchBarComponent.prototype, "airportList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SearchBarComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SearchBarComponent.prototype, "selectedAirport", void 0);
    SearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dropdown-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search-bar/search-bar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search-bar.component.css */
      "./src/app/search-bar/search-bar.component.css"))["default"]]
    })], SearchBarComponent);
    /***/
  },

  /***/
  "./src/app/service/common_service.ts":
  /*!*******************************************!*\
    !*** ./src/app/service/common_service.ts ***!
    \*******************************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppServiceCommon_serviceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _appconstant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../appconstant */
    "./src/app/appconstant.ts");

    var CommonService = /*#__PURE__*/function () {
      function CommonService(httpService) {
        _classCallCheck(this, CommonService);

        this.httpService = httpService;
      }

      _createClass(CommonService, [{
        key: "getAirportList",
        value: function getAirportList(language) {
          return this.httpService.get("".concat(_appconstant__WEBPACK_IMPORTED_MODULE_3__["AppConstant"].get_airportList_Api, "lang=").concat(language)); //ToDo :map the required fields only
        }
      }, {
        key: "getFlightStatus",
        value: function getFlightStatus(origin, destination, date) {
          return this.httpService.get("".concat(_appconstant__WEBPACK_IMPORTED_MODULE_3__["AppConstant"].get_flightStatus_Api, "departureDate=").concat(date, "&origin=").concat(origin, "&destination=").concat(destination), {
            withCredentials: true
          });
        }
      }]);

      return CommonService;
    }();

    CommonService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CommonService);
    /***/
  },

  /***/
  "./src/app/validation-message/validation-message.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/validation-message/validation-message.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppValidationMessageValidationMessageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n   .dds__alert{\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    margin-right: 70px;\r\n    margin-left:70px;\r\n    background: #ffffc9!important;\r\n    border: .0625rem solid #eee !important;\r\n  } \r\n\r\n  i.dds__icons.dds__icon-h4 {\r\n    font-size: 1.5rem;\r\n} \r\n\r\n  .dds__alert-info-cir{\r\n    padding: 0rem 0.625rem;\r\n    vertical-align: middle;\r\n    color: #007db8 !important;\r\n} \r\n\r\n  .dds_txt_align {\r\nmargin-left: 44px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFsaWRhdGlvbi1tZXNzYWdlL3ZhbGlkYXRpb24tbWVzc2FnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7R0FDRztJQUNDLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0Isc0NBQXNDO0VBQ3hDOztFQUVBO0lBQ0UsaUJBQWlCO0FBQ3JCOztFQUVFO0lBQ0Usc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7O0VBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNyYy9hcHAvdmFsaWRhdGlvbi1tZXNzYWdlL3ZhbGlkYXRpb24tbWVzc2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgIC5kZHNfX2FsZXJ0e1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDo3MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZjOSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IC4wNjI1cmVtIHNvbGlkICNlZWUgIWltcG9ydGFudDtcclxuICB9IFxyXG5cclxuICBpLmRkc19faWNvbnMuZGRzX19pY29uLWg0IHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbiAgXHJcbiAgLmRkc19fYWxlcnQtaW5mby1jaXJ7XHJcbiAgICBwYWRkaW5nOiAwcmVtIDAuNjI1cmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGNvbG9yOiAjMDA3ZGI4ICFpbXBvcnRhbnQ7XHJcbn0gXHJcbi5kZHNfdHh0X2FsaWduIHtcclxubWFyZ2luLWxlZnQ6IDQ0cHhcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/validation-message/validation-message.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/validation-message/validation-message.component.ts ***!
    \********************************************************************/

  /*! exports provided: ValidationMessageComponent */

  /***/
  function srcAppValidationMessageValidationMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidationMessageComponent", function () {
      return ValidationMessageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ValidationMessageComponent = /*#__PURE__*/function () {
      function ValidationMessageComponent() {
        _classCallCheck(this, ValidationMessageComponent);
      }

      _createClass(ValidationMessageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ValidationMessageComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ValidationMessageComponent.prototype, "message", void 0);
    ValidationMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-validation-message',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./validation-message.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/validation-message/validation-message.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./validation-message.component.css */
      "./src/app/validation-message/validation-message.component.css"))["default"]]
    })], ValidationMessageComponent);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
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
    /*! C:\TestProjects\flight-status\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map