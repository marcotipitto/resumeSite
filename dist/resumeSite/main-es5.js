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


    __webpack_exports__["default"] = "<div id=\"header\">\n    <h1 id=\"nameTitle\">\n        Marco A. Tipitto Cerruti<br />\n    </h1>\n    <h2 id=\"jobDescription\">\n        Full Stack Software Developer\n    </h2>\n</div>\n<ul class=\"navbar\">\n    <li class=\"navbarItem\" (click)=\"downloadResume()\">\n        <i class=\"material-icons\" style=\"vertical-align: middle;\">file_download</i>\n        <p class=\"navbarText\">Download Resume</p>\n    </li>\n    <li class=\"navbarItem\" (click)=\"openLinkedIn()\">\n        <i class=\"material-icons\" style=\"vertical-align: middle;\">open_in_new</i>\n        <p class=\"navbarText\">LinkedIn</p>\n    </li>\n    <!-- <li class=\"navbarItem\" (click)=\"contact = true; contactDialog()\"> -->\n    <li class=\"navbarItem\" (click)=\"contactEmail()\">\n        <i class=\"material-icons\" style=\"vertical-align: middle;\">email</i>\n        <p class=\"navbarText\">Contact</p>\n    </li>\n</ul>\n<div id=\"pageContent\">\n    <div id=\"panels\">\n        <div id=\"aboutMePanel\">\n            <h2 id=\"subTitle\">\n                About Me\n            </h2>\n            <p>\n                My name is Marco and I'm a full stack software developer based in Austin, TX. Creating and maintaining\n                intuitive interfaces and\n                efficient midrange systems that empower businesses and users is my passion.\n                <br /><br />\n                Originally a mechanical engineer, I fell into a software development role by accident; I have not looked\n                back since, although I\n                bring a creative, problem-solving engineer mentality everywhere I go.\n                <br /><br />\n                My hobbies include travelling and riding motorcycles; I cannot afford any other hobbies.\n            </p>\n        </div>\n\n        <div id=\"skillsPanel\">\n            <h2 id=\"subTitle\">\n                Skills and Technologies\n            </h2>\n            <p>\n                As a full stack developer, I am able to create and implement new web-based applications from start to\n                finish, front to back.\n                I am proficient with front-end technologies, including Angular and React, as well as the components of\n                these\n                technologies: ES6, HTML, Typescript, Javascript, node, SCSS/CSS, and more. I also have experience\n                implementing automated testing throughout UIs, using Cypress, Karma, Jasmine and Protractor.\n                <br /><br />\n                I am also proficient with midrange technologies, mainly Springboot and microservices. I have\n                experience creating and implementing authentication systems with Spring and writing database calls and\n                querys and that the users can execute from the UIs.\n                In terms of implementation, I have experience with Pivotal Cloud Foundry, AWS, Jenkins and Cara.\n                Lastly, my back-end skills include Oracle PLSQL and IBM SQL databases, Linux servers, mainframe\n                transactions\n                and FTP softwares like Connect:Direct, Elit, SFTP and more.\n                <br /><br />\n                I am also bilingual: native fluency in both speaking, reading and writing English and Spanish.\n            </p>\n            <div class=\"collapsible\">\n                <button class=\"collapsibleHeader\" (click)=\"collapsible = !collapsible\">{{collapsibleHeader}}</button>\n                <div [ngClass]=\"toggleAccordian()\" class=\"row\">\n                    <div class=\"column\">\n                        <h5>Front end</h5>\n                        <ul>\n                            <li>Angular 7</li>\n                            <li>React 16</li>\n                            <li>TypeScript</li>\n                            <li>JavaScript</li>\n                            <li>HTML 5</li>\n                            <li>CSS 4</li>\n                            <li>SCSS</li>\n                            <li>ES6</li>\n                            <li>node</li>\n                            <li>npm</li>\n                            <li>yarn</li>\n                        </ul>\n                    </div>\n                    <div class=\"column\">\n                        <h5>Back end</h5>\n                        <ul>\n                            <li>SpringBoot 2.1</li>\n                            <li>Java 8</li>\n                            <li>PL/SQL</li>\n                            <li>Oracle DB</li>\n                            <li>Unix</li>\n                            <li>Bash Scripts</li>\n                            <li>Mainframe</li>\n                            <li>IBM DB2</li>\n                            <li>IMS</li>\n                            <li>JCL</li>\n                            <li>PL/1</li>\n                            <li>Connect: Direct</li>\n                            <li>Elit</li>\n                        </ul>\n                    </div>\n                    <div class=\"column\">\n                        <h5>Testing</h5>\n                        <ul>\n                            <li>Protactor</li>\n                            <li>Selenium</li>\n                            <li>Karma</li>\n                            <li>Jasmine</li>\n                            <li>JUnit</li>\n                        </ul>\n                    </div>\n                    <div class=\"column\">\n                        <h5>Miscellaneous</h5>\n                        <ul>\n                            <li>git</li>\n                            <li>Jenkins</li>\n                            <li>CARA</li>\n                            <li>Docker</li>\n                            <li>z/OS Connect</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div id=\"experiencePanel\">\n            <h2 id=\"subTitle\">\n                Experience and Leadership\n            </h2>\n            <div id=\"parent\">\n                <div id=\"companyLogo\">\n                    <img src='../assets/logos/GM_logo.jpg' style=\"width: 150px; padding:12px\">\n                </div>\n                <div id=\"wide\">\n                    <h3>General Motors</h3>\n                    <p>\n                        I am currently employed at General Motors Company in Austin, TX. I am a full-stack developer\n                        leading the development of internal sites that allow users to fine tune the logistics and\n                        complex supply chain that allows GM to run a profitable business in both North and South\n                        America.\n                        <br /><br />\n                        Using React, Angular, SpringBoot, REST, GraphQL and more, these new applications are projected\n                        to save GM $10 million over the next 5 years. I have also been committed to minimizing defects\n                        across these applications by creating hundreds of automated tests using Cypress and Protractor\n                        in order to create the most reliable applications possible.\n                        <br /><br />\n                        These new applications have replaced dated mainframe and oracle systems; these big changes could\n                        potentially be disruptive to the users day-to-day usage, so I routinely meet with these users to\n                        demo the new applications and functionalities, as well extract feedback and additional\n                        requirements in order to maximize the added efficiency these application provide.\n                    </p>\n                </div>\n            </div>\n            <div id=\"parent\">\n                <div id=\"companyLogo\">\n                    <img src='../assets/logos/microsoft-80660_960_720.png' style=\"width: 150px; padding:12px\">\n                </div>\n                <div id=\"wide\">\n                    <h3>Microsoft</h3>\n                    <p>\n                        During my time at the University of Arizona, I led a team that designed and created a fully\n                        automated datacenter model for Microsoft.\n                        <br /><br />\n                        This model made use of multiple algorithms and equations that calculated the cost and\n                        viability of constructing a new datacenter based user inputs, like desired zip code and\n                        datacenter size measured in megawatts.\n                        The model factored in capital expenditures like cost of land, construction and distance to\n                        national internet backbone. The operational costs factored included power usage, cost and\n                        cooling based on climate data, as well as labor costs.\n                        <br /><br />\n                        After all costs were calculated the model determined how much the datacenter would cost,\n                        what type of cooling system would be most efficient, how many floors the datacenter would\n                        need to be cheapest, and whether proposed automation systems (robots that would perform the\n                        server maintenance) made financial sense.\n                    </p>\n                </div>\n            </div>\n\n            <div id=\"parent\">\n                <div id=\"companyLogo\">\n                    <img src='../assets/logos/rehrig_10288349.jpg' style=\"width: 150px; padding:12px\">\n                    <img src='../assets/logos/image.png' style=\"width: 150px; padding:12px\">\n                </div>\n                <div id=\"wide\">\n                    <h3>Other Engineering Experience</h3>\n                    <p>\n                        I had two internships while in college, most recently at a plastics manufacturing company called\n                        Rehrig Pacific and previously at an automotive concept and prototype company called GFMI.\n                        <br /><br />\n                        While at Rehrig I worked with a team of interns to design and build multiple automated\n                        systems, assembly jigs and safety covers that increased the manufacturing plant's output and\n                        improved safety by minimizing other workers exposure to pinch points and moving parts. I also\n                        reduced machinery repair costs by 50% by optimizing system pressures and speeds, developing a\n                        preventative maintenance schedule, and renegotiating terms with the maintenance contractors.\n                        <br /><br />\n                        At GFMI, I worked with a team of engineers to produce and assemble new concept cars by\n                        utilizing computer aided design to create and modify vehicle components. I also bridged the gap\n                        between the engineers and the assembly line workers by communicating the design specifications\n                        through assembly instructions, cross sections and other various measurements.\n                    </p>\n                </div>\n            </div>\n\n        </div>\n\n        <div id=\"educationPanel\">\n            <h2 id=\"subTitle\">\n                Education\n            </h2>\n            <div id=\"parent\">\n                <div id=\"companyLogo\">\n                    <img src=\"../assets/logos/university_of_arizona.png\" style=\"width: 150px; padding:12px\">\n                </div>\n                <div id=\"wide\">\n                    <h3>\n                        The University of Arizona\n                    </h3>\n                    <p>\n                        I graduated with a bachelors degree in Mechanical Engineering from the University of Arizona\n                        in Tucson. While there I received the Arizona Excellence Scholarship, multiple deans list\n                        recognitions and a cum laude distiction upon graduation.\n                        <br /><br />\n                        While my degree may seem unrelated to my current career, I believe my engineering background\n                        has given me the problem-solving skills and adaptability needed to excel in the technology\n                        industry.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

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

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
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

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#panel {\n  padding: 15px;\n}\n\n#header {\n  background-image: url('HeaderPicture.jpg');\n  background-attachment: fixed;\n  background-size: cover;\n}\n\n#pageContent {\n  font-family: \"Montserrat\", sans-serif;\n  padding: 0 0.5rem 0.5rem 0.5rem;\n  background-color: #a8a8a8;\n}\n\n.navbar {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: black;\n  position: -webkit-sticky;\n  /* Safari */\n  position: sticky;\n  top: 0;\n  font-family: \"Montserrat\", sans-serif;\n  justify-content: left;\n}\n\n.navbarItem {\n  float: left;\n  cursor: pointer;\n  color: white;\n  padding: 14px 16px;\n  text-align: center;\n}\n\n.navbarItem:hover {\n  transition-duration: 0.4s;\n  background-color: #787878;\n}\n\n.navbarText {\n  display: inline;\n  padding-left: 5px;\n  vertical-align: middle;\n}\n\n#aboutMePanel {\n  background-color: white;\n  padding: 15px;\n}\n\n#skillsPanel {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n\n#experiencePanel {\n  background-color: white;\n  padding: 15px;\n}\n\n#educationPanel {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n\n#nameTitle {\n  padding-top: 650px;\n  font-size: 5.5rem;\n  color: white;\n  font-family: \"Montserrat\", sans-serif;\n  text-shadow: 0 0 20px black;\n}\n\n#jobDescription {\n  font-size: 4rem;\n  color: white;\n  font-family: \"Montserrat\", sans-serif;\n  margin: 0px;\n  text-shadow: 0 0 10px black;\n}\n\n#subTitle {\n  text-align: center;\n}\n\n#panels {\n  margin: auto;\n  max-width: 1000px;\n}\n\n@media screen and (max-width: 700px) {\n  #companyLogo {\n    display: none;\n  }\n\n  #subTitle {\n    text-align: left;\n  }\n}\n\n@media screen and (max-width: 450px) {\n  #header {\n    background-image: url('HeaderPicture.jpg');\n    background-size: cover;\n  }\n}\n\n#companyLogo {\n  width: 200px;\n}\n\n#parent {\n  display: flex;\n}\n\n#narrow {\n  width: 200px;\n}\n\n#wide {\n  flex: 1;\n}\n\n.collapsible {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.collapsibleHeader {\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  text-align: left;\n  border: 0px solid #c9c9c9;\n  outline: none;\n  background-color: white;\n}\n\n.collapsibleHeader:hover {\n  transition-duration: 0.4s;\n  background-color: #c9c9c9;\n}\n\n.collapsibleActive {\n  transition: max-height 1s ease-out;\n  margin: auto;\n  height: auto;\n  max-height: 600px;\n  background-color: white;\n  padding: 18px;\n  width: 100%;\n  overflow: hidden;\n}\n\n.collapsibleInactive {\n  max-height: 0px;\n  overflow: hidden;\n}\n\nul {\n  list-style-type: square;\n}\n\n.column {\n  float: left;\n  width: 25%;\n  padding: 0px 10px;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\n\n@media screen and (max-width: 700px) {\n  .column {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjb3RpcGl0dG8vRGVza3RvcC9HaXRIdWIvbXlQcm9qZWN0cy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksMENBQUE7RUFHQSw0QkFBQTtFQUNBLHNCQUFBO0FDREo7O0FESUE7RUFDSSxxQ0FBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7QUNESjs7QURJQTtFQUNJLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFBMEIsV0FBQTtFQUMxQixnQkFBQTtFQUNBLE1BQUE7RUFDQSxxQ0FBQTtFQUNBLHFCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ0FKOztBREdBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLGFBQUE7QUNBSjs7QURHQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJO0lBQ0ksYUFBQTtFQ0FOOztFREVFO0lBQ0ksZ0JBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0k7SUFDSSwwQ0FBQTtJQUdBLHNCQUFBO0VDRk47QUFDRjs7QURLQTtFQUNJLFlBQUE7QUNISjs7QURNQTtFQUNJLGFBQUE7QUNISjs7QURNQTtFQUNJLFlBQUE7QUNISjs7QURNQTtFQUNJLE9BQUE7QUNISjs7QURNQTtFQUNJLDRFQUFBO0FDSEo7O0FET0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDSko7O0FET0E7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FDSko7O0FET0E7RUFDSSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNKSjs7QURPQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0pKOztBRE9BO0VBQ0ksdUJBQUE7QUNKSjs7QURPQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNKSjs7QURPRSxtQ0FBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0pKOztBRE9FLHVHQUFBOztBQUNBO0VBQ0U7SUFDRSxVQUFBO0VDSko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYW5lbHtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4jaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvSGVhZGVyUGljdHVyZS5qcGdcIik7XG4gICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgLy8gaGVpZ2h0OiAxMTAwcHg7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDsgXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI3BhZ2VDb250ZW50IHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIHBhZGRpbmc6IDAgMC41cmVtIDAuNXJlbSAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E4YThhODtcbn1cblxuLm5hdmJhciB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBTYWZhcmkgKi9cbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbn1cblxuLm5hdmJhckl0ZW0ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5hdmJhckl0ZW06aG92ZXIge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4Nzg3ODtcbn1cblxuLm5hdmJhclRleHQge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4jYWJvdXRNZVBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4jc2tpbGxzUGFuZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuI2V4cGVyaWVuY2VQYW5lbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuI2VkdWNhdGlvblBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbiNuYW1lVGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiA2NTBweDtcbiAgICBmb250LXNpemU6IDUuNXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDIwcHggYmxhY2s7XG59XG5cbiNqb2JEZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCBibGFjaztcbn1cblxuI3N1YlRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNwYW5lbHMge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAjY29tcGFueUxvZ28ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAjc3ViVGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAjaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL0hlYWRlclBpY3R1cmUuanBnXCIpO1xuICAgICAgICAvLyB3aWR0aDogMTAwJTtcbiAgICAgICAgLy8gaGVpZ2h0OiAxMTAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxufVxuXG4jY29tcGFueUxvZ28ge1xuICAgIHdpZHRoOiAyMDBweDtcbn1cblxuI3BhcmVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuI25hcnJvdyB7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuXG4jd2lkZSB7XG4gICAgZmxleDogMTtcbn1cblxuLmNvbGxhcHNpYmxlIHtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG5cbi5jb2xsYXBzaWJsZUhlYWRlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjYzljOWM5O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jb2xsYXBzaWJsZUhlYWRlcjpob3ZlciB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzljOWM5O1xufVxuXG4uY29sbGFwc2libGVBY3RpdmUge1xuICAgIHRyYW5zaXRpb246bWF4LWhlaWdodCAxcyBlYXNlLW91dDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6NjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMThweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29sbGFwc2libGVJbmFjdGl2ZSB7XG4gICAgbWF4LWhlaWdodDogMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IHNxdWFyZTtcbn1cblxuLmNvbHVtbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgfVxuICBcbiAgLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4gIC5yb3c6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbiAgXG4gIC8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gbWFrZXMgdGhlIHR3byBjb2x1bW5zIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyIGluc3RlYWQgb2YgbmV4dCB0byBlYWNoIG90aGVyICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgLmNvbHVtbiB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgfVxuXG4vLyAgIC5tb2RhbEFjdGl2ZSB7XG4vLyAgICAgZGlzcGxheTogYmxvY2s7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4vLyAgICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4vLyAgICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuLy8gICAgIGxlZnQ6IDA7XG4vLyAgICAgdG9wOiAwO1xuLy8gICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4vLyAgICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuLy8gICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG4vLyAgIH1cblxuLy8gICAubW9kZWFsSW5hY3RpdmUge1xuLy8gICAgICAgZGlzcGxheTogbm9uZTtcbi8vICAgfVxuICBcbi8vICAgLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cbi8vICAgLm1vZGFsLWNvbnRlbnQge1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4vLyAgICAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cbi8vICAgICBwYWRkaW5nOiAyMHB4O1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4vLyAgICAgd2lkdGg6IDgwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cbi8vICAgfVxuICBcbi8vICAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xuLy8gICAuY2xvc2Uge1xuLy8gICAgIGNvbG9yOiAjYWFhO1xuLy8gICAgIGZsb2F0OiByaWdodDtcbi8vICAgICBmb250LXNpemU6IDI4cHg7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgIH1cbiAgXG4vLyAgIC5jbG9zZTpob3Zlcixcbi8vICAgLmNsb3NlOmZvY3VzIHtcbi8vICAgICBjb2xvcjogYmxhY2s7XG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgfSIsIiNwYW5lbCB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbiNoZWFkZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvSGVhZGVyUGljdHVyZS5qcGdcIik7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbiNwYWdlQ29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMCAwLjVyZW0gMC41cmVtIDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4YThhODtcbn1cblxuLm5hdmJhciB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAvKiBTYWZhcmkgKi9cbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbn1cblxuLm5hdmJhckl0ZW0ge1xuICBmbG9hdDogbGVmdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmF2YmFySXRlbTpob3ZlciB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODc4Nzg7XG59XG5cbi5uYXZiYXJUZXh0IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuI2Fib3V0TWVQYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4jc2tpbGxzUGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4jZXhwZXJpZW5jZVBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbiNlZHVjYXRpb25QYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbiNuYW1lVGl0bGUge1xuICBwYWRkaW5nLXRvcDogNjUwcHg7XG4gIGZvbnQtc2l6ZTogNS41cmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAyMHB4IGJsYWNrO1xufVxuXG4jam9iRGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDRyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDBweDtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IGJsYWNrO1xufVxuXG4jc3ViVGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNwYW5lbHMge1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMTAwMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAjY29tcGFueUxvZ28ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjc3ViVGl0bGUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICNoZWFkZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9IZWFkZXJQaWN0dXJlLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG59XG4jY29tcGFueUxvZ28ge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbiNwYXJlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jbmFycm93IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4jd2lkZSB7XG4gIGZsZXg6IDE7XG59XG5cbi5jb2xsYXBzaWJsZSB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5jb2xsYXBzaWJsZUhlYWRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMThweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlcjogMHB4IHNvbGlkICNjOWM5Yzk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY29sbGFwc2libGVIZWFkZXI6aG92ZXIge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzljOWM5O1xufVxuXG4uY29sbGFwc2libGVBY3RpdmUge1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzIGVhc2Utb3V0O1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogNjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbGxhcHNpYmxlSW5hY3RpdmUge1xuICBtYXgtaGVpZ2h0OiAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBzcXVhcmU7XG59XG5cbi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDI1JTtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG59XG5cbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlcyB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5jb2x1bW4ge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn0iXX0= */";
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

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = "Marco Tipitto";
        this.collapsibleHeader = "+\tList of Skills and Technologies";
      }

      _createClass(AppComponent, [{
        key: "downloadResume",
        value: function downloadResume() {
          window.open('../assets/Resume2020.pdf', '_blank');
        }
      }, {
        key: "openLinkedIn",
        value: function openLinkedIn() {
          window.open('https://www.linkedin.com/in/marco-tipitto-cerruti-4a8ab643/', '_blank');
        }
      }, {
        key: "contactEmail",
        value: function contactEmail() {
          window.location.href = "mailto:marco_tipitto@hotmail.com?subject=Subject&body=Type%20your%20message";
        }
      }, {
        key: "toggleAccordian",
        value: function toggleAccordian() {
          if (this.collapsible) {
            this.collapsibleHeader = "-\tList of Skills and Technologies";
            return {
              'collapsibleActive': true
            };
          } else {
            this.collapsibleHeader = "+\tList of Skills and Technologies";
            return {
              'collapsibleInactive': true
            };
          }
        }
      }, {
        key: "contactDialog",
        value: function contactDialog() {
          console.log('click');

          if (this.contact) {
            return {
              'modalActive': true
            };
          } else {
            return {
              'modalInactive': true
            };
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
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


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
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
    /*! /Users/marcotipitto/Desktop/GitHub/myProjects/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map