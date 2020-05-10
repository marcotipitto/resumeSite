(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"header\">\n    <h1 id=\"nameTitle\">\n        Marco Tipitto Cerruti<br />\n    </h1>\n    <h2 id=\"jobDescription\">\n        Full Stack Software Developer\n    </h2>\n</div>\n<ul class=\"navbar\">\n    <li class=\"navbarItem\" (click)=\"downloadResume()\">\n        <i class=\"material-icons\" style=\"vertical-align: middle;\">file_download</i>\n        <p class=\"navbarText\">Download Resume</p>\n    </li>\n    <li class=\"navbarItem\" (click)=\"openLinkedIn()\">\n        <i class=\"material-icons\" style=\"vertical-align: middle;\">open_in_new</i>\n        <p class=\"navbarText\">LinkedIn</p>\n    </li>\n    <!-- <li class=\"navbarItem\" (click)=\"contact = true; contactDialog()\"> -->\n    <li class=\"navbarItem\" (click)=\"contactEmail()\">\n        <i class=\"material-icons\" style=\"vertical-align: middle;\">email</i>\n        <p class=\"navbarText\">Contact</p>\n    </li>\n</ul>\n<div id=\"pageContent\">\n    <div id=\"panels\">\n        <div id=\"aboutMePanel\">\n            <h2 id=\"subTitle\">\n                About Me\n            </h2>\n            <p>\n                My name is Marco and I'm a full stack software developer based in Austin, TX. Creating and maintaining\n                intuitive interfaces and\n                efficient midrange systems that empower businesses and users is my passion.\n                <br /><br />\n                Originally a mechanical engineer, I fell into a software development role by accident; I have not looked\n                back since, although I\n                bring a creative, problem-solving engineer mentality everywhere I go.\n                <br /><br />\n                My hobbies include travelling and riding motorcycles; I cannot afford any other hobbies.\n            </p>\n        </div>\n\n        <div id=\"skillsPanel\">\n            <h2 id=\"subTitle\">\n                Skills and Technologies\n            </h2>\n            <p>\n                As a full stack developer, I am able to create and implement new web-based applications from start to\n                finish, front to back.\n                I am proficient with front-end technologies, including Angular and React, as well as the components of\n                these\n                technologies: ES6, HTML, Typescript, Javascript, node, SCSS/CSS, and more. I also have experience\n                implementing automated testing throughout UIs, like Karma, Jasmine and Protractor.\n                <br /><br />\n                I am also proficient with midrange technologies, mainly Springboot and microservices. I have\n                experience creating and implementing authentication systems with Spring and writing database calls and\n                querys and that the users can execute from the UIs.\n                In terms of implementation, I have experience with Pivotal Cloud Foundry, AWS, Jenkins and Cara.\n                Lastly, my back-end skills include Oracle PLSQL and IBM SQL databases, Linux servers, mainframe\n                transactions\n                and FTP softwares like Connect:Direct, Elit, SFTP and more.\n                <br /><br />\n                I am also bilingual: native fluency in both speaking, reading and writing English and Spanish.\n            </p>\n            <div class=\"collapsible\">\n                <button class=\"collapsibleHeader\" (click)=\"collapsible = !collapsible\">{{collapsibleHeader}}</button>\n                <div [ngClass]=\"toggleAccordian()\" class=\"row\">\n                    <div class=\"column\">\n                        <h5>Front end</h5>\n                        <ul>\n                            <li>Angular 7</li>\n                            <li>React 16</li>\n                            <li>TypeScript</li>\n                            <li>JavaScript</li>\n                            <li>HTML 5</li>\n                            <li>CSS 4</li>\n                            <li>SCSS</li>\n                            <li>ES6</li>\n                            <li>node</li>\n                            <li>npm</li>\n                            <li>yarn</li>\n                        </ul>\n                    </div>\n                    <div class=\"column\">\n                        <h5>Back end</h5>\n                        <ul>\n                            <li>SpringBoot 2.1</li>\n                            <li>Java 8</li>\n                            <li>PL/SQL</li>\n                            <li>Oracle DB</li>\n                            <li>Unix</li>\n                            <li>Bash Scripts</li>\n                            <li>Mainframe</li>\n                            <li>IBM DB2</li>\n                            <li>IMS</li>\n                            <li>JCL</li>\n                            <li>PL/1</li>\n                            <li>Connect: Direct</li>\n                            <li>Elit</li>\n                        </ul>\n                    </div>\n                    <div class=\"column\">\n                        <h5>Testing</h5>\n                        <ul>\n                            <li>Protactor</li>\n                            <li>Selenium</li>\n                            <li>Karma</li>\n                            <li>Jasmine</li>\n                            <li>JUnit</li>\n                        </ul>\n                    </div>\n                    <div class=\"column\">\n                        <h5>Miscellaneous</h5>\n                        <ul>\n                            <li>git</li>\n                            <li>Jenkins</li>\n                            <li>CARA</li>\n                            <li>Docker</li>\n                            <li>z/OS Connect</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div id=\"experiencePanel\">\n            <h2 id=\"subTitle\">\n                Experience and Leadership\n            </h2>\n            <div id=\"parent\">\n                <div id=\"companyLogo\">\n                    <img src='../assets/logos/GM_logo.jpg' style=\"width: 150px; padding:12px\">\n                </div>\n                <div id=\"wide\">\n                    <h3>General Motors</h3>\n                    <p>\n                        I am currently employed at General Motors Company in Austin, TX. I am a full-stack developer\n                        working\n                        on the GM Mercosur (South America) sales order management systems. The databases and\n                        mainframes\n                        behind these systems do not have easy to use interfaces for business users, if any at all. I\n                        spend\n                        time meeting with users across Brazil and Argentina (inside GM corporate and the dealer\n                        network)\n                        and\n                        determine which new functionalities can be opened up to users or created.\n                        <br /><br />\n                        After gathering the requirements from the users directly, I will code the Angular UI and\n                        java\n                        SpringBoot and make DB changes if necessary.\n                        I will then demo the new functionality with the same users and deploy the application\n                        following\n                        CI/CD\n                        concepts.\n                        <br /><br />\n                        The work I do empowers users to be more productive and also reduces the amount of manual IT\n                        requests\n                        made, thereby allowing the rest of the IT team to do more innovation work.\n                    </p>\n                </div>\n            </div>\n            <div id=\"parent\">\n                <div id=\"companyLogo\">\n                    <img src='../assets/logos/microsoft-80660_960_720.png' style=\"width: 150px; padding:12px\">\n                </div>\n                <div id=\"wide\">\n                    <h3>Microsoft</h3>\n                    <p>\n                        During my time at the University of Arizona, I led a team that designed and created a fully\n                        automated\n                        datacenter model for Microsoft.\n                        <br /><br />\n                        This model made use of multiple algorithms and equations that calculated the cost and\n                        viability\n                        of\n                        constructing a new datacenter based user inputs, like desired zip code and datacenter size\n                        in\n                        megawatts.\n                        The model factored in capital expenditures like cost of land, construction and distance to\n                        internet\n                        backbone. The operational costs factored included power usage and cooling based on climate\n                        data\n                        and\n                        cost of\n                        labor.\n                        <br /><br />\n                        After all costs were calculated the model determined how much the datacenter would cost,\n                        what\n                        type of\n                        cooling system would be most efficient, how many floors the datacenter would need to be\n                        cheapest,\n                        and\n                        whether proposed automation systems (robots that would perform the server maintenance) made\n                        financial sense.\n                    </p>\n                </div>\n            </div>\n\n            <div id=\"parent\">\n                <div id=\"companyLogo\">\n                    <img src='../assets/logos/rehrig_10288349.jpg' style=\"width: 150px; padding:12px\">\n                    <img src='../assets/logos/image.png' style=\"width: 150px; padding:12px\">\n                </div>\n                <div id=\"wide\">\n                    <h3>Other Engineering Experience</h3>\n                    <p>\n                        I had two internships while in college, at a plastics manufacturing company called Rehrig\n                        Pacific\n                        and an\n                        automotive concept and prototype company called GFMI.\n                        <br /><br />\n                        While at Rehrig I worked with a team of interns to design and build multiple automated\n                        systems,\n                        assembly\n                        jigs and safety covers that increased the\n                        manufacturing plant's output and improved safety. I also reduced forklift repair costs by\n                        50% by\n                        optimizing\n                        system pressures and speeds, developing a preventative\n                        maintenance schedule, and renegotiating terms with the forklift maintenance contractor.\n                        <br /><br />\n                        At GFMI, I worked with a team of engineers to produce and assemble new concept cars by\n                        utilizing\n                        CAD\n                        to\n                        create and modify vehicle components. I also bridged the gap between the engineers and the\n                        builders\n                        by\n                        communicating the design specifications through assembly instructions, cross sections and\n                        measurements.\n                    </p>\n                </div>\n            </div>\n\n        </div>\n\n        <div id=\"educationPanel\">\n            <h2 id=\"subTitle\">\n                Education\n            </h2>\n            <div id=\"parent\">\n                <div id=\"companyLogo\">\n                    <img src=\"../assets/logos/university_of_arizona.png\" style=\"width: 150px; padding:12px\">\n                </div>\n                <div id=\"wide\">\n                    <h3>\n                        The University of Arizona\n                    </h3>\n                    <p>\n                        I graduated with a bachelors degree in Mechanical Engineering from the University of Arizona\n                        in\n                        Tucson.\n                        While there I received the Arizona Excellence Scholarship, multiple deans list recognitions\n                        and\n                        a\n                        cum laude\n                        distiction upon graduation.\n                        <br />\n                        While my degree may seem unrelated to my current career, I believe my engineering background\n                        has\n                        given me\n                        the problem-solving skills and adaptability needed to excel in the technology industry.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- <div [ngClass]=\"contactDialog()\">\n    <div class=\"modal-content\">\n        <span class=\"close\" (click)=\"contact = false\">&times;</span>\n        <p>Some text in the Modal..</p>\n    </div>\n</div> -->");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
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


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#panel {\n  padding: 15px;\n}\n\n#header {\n  background-image: url('HeaderPicture.jpg');\n  background-attachment: fixed;\n  background-size: cover;\n}\n\n#pageContent {\n  font-family: \"Montserrat\", sans-serif;\n  padding: 0 0.5rem 0.5rem 0.5rem;\n  background-color: #a8a8a8;\n}\n\n.navbar {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: black;\n  position: -webkit-sticky;\n  /* Safari */\n  position: sticky;\n  top: 0;\n  font-family: \"Montserrat\", sans-serif;\n  justify-content: left;\n}\n\n.navbarItem {\n  float: left;\n  cursor: pointer;\n  color: white;\n  padding: 14px 16px;\n  text-align: center;\n}\n\n.navbarItem:hover {\n  transition-duration: 0.4s;\n  background-color: #787878;\n}\n\n.navbarText {\n  display: inline;\n  padding-left: 5px;\n  vertical-align: middle;\n}\n\n#aboutMePanel {\n  background-color: white;\n  padding: 15px;\n}\n\n#skillsPanel {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n\n#experiencePanel {\n  background-color: white;\n  padding: 15px;\n}\n\n#educationPanel {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n\n#nameTitle {\n  padding-top: 650px;\n  font-size: 5.5rem;\n  color: white;\n  font-family: \"Times New Roman\", Times, serif;\n  text-shadow: 0 0 20px black;\n}\n\n#jobDescription {\n  font-size: 4rem;\n  color: white;\n  font-family: \"Times New Roman\", Times, serif;\n  margin: 0px;\n  text-shadow: 0 0 10px black;\n}\n\n#subTitle {\n  text-align: center;\n}\n\n#panels {\n  margin: auto;\n  max-width: 1000px;\n}\n\n@media screen and (max-width: 700px) {\n  #companyLogo {\n    display: none;\n  }\n\n  #subTitle {\n    text-align: left;\n  }\n}\n\n@media screen and (max-width: 450px) {\n  #header {\n    background-image: url('HeaderPicture.jpg');\n    background-size: cover;\n  }\n}\n\n#companyLogo {\n  width: 200px;\n}\n\n#parent {\n  display: flex;\n}\n\n#narrow {\n  width: 200px;\n}\n\n#wide {\n  flex: 1;\n}\n\n.collapsible {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.collapsibleHeader {\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  text-align: left;\n  border: 0px solid #c9c9c9;\n  outline: none;\n  background-color: white;\n}\n\n.collapsibleHeader:hover {\n  transition-duration: 0.4s;\n  background-color: #c9c9c9;\n}\n\n.collapsibleActive {\n  transition: max-height 1s ease-out;\n  margin: auto;\n  height: auto;\n  max-height: 600px;\n  background-color: white;\n  padding: 18px;\n  width: 100%;\n  overflow: hidden;\n}\n\n.collapsibleInactive {\n  max-height: 0px;\n  overflow: hidden;\n}\n\nul {\n  list-style-type: square;\n}\n\n.column {\n  float: left;\n  width: 25%;\n  padding: 0px 10px;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\n\n@media screen and (max-width: 700px) {\n  .column {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjb3RpcGl0dG8vRGVza3RvcC9HaXRIdWIvbXlQcm9qZWN0cy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksMENBQUE7RUFHQSw0QkFBQTtFQUNBLHNCQUFBO0FDREo7O0FESUE7RUFDSSxxQ0FBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7QUNESjs7QURJQTtFQUNJLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFBMEIsV0FBQTtFQUMxQixnQkFBQTtFQUNBLE1BQUE7RUFDQSxxQ0FBQTtFQUNBLHFCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ0FKOztBREdBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLGFBQUE7QUNBSjs7QURHQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0EsMkJBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJO0lBQ0ksYUFBQTtFQ0FOOztFREVFO0lBQ0ksZ0JBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0k7SUFDSSwwQ0FBQTtJQUdBLHNCQUFBO0VDRk47QUFDRjs7QURLQTtFQUNJLFlBQUE7QUNISjs7QURNQTtFQUNJLGFBQUE7QUNISjs7QURNQTtFQUNJLFlBQUE7QUNISjs7QURNQTtFQUNJLE9BQUE7QUNISjs7QURNQTtFQUNJLDRFQUFBO0FDSEo7O0FET0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDSko7O0FET0E7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FDSko7O0FET0E7RUFDSSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNKSjs7QURPQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0pKOztBRE9BO0VBQ0ksdUJBQUE7QUNKSjs7QURPQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNKSjs7QURPRSxtQ0FBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0pKOztBRE9FLHVHQUFBOztBQUNBO0VBQ0U7SUFDRSxVQUFBO0VDSko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYW5lbHtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4jaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvSGVhZGVyUGljdHVyZS5qcGdcIik7XG4gICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgLy8gaGVpZ2h0OiAxMTAwcHg7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDsgXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI3BhZ2VDb250ZW50IHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIHBhZGRpbmc6IDAgMC41cmVtIDAuNXJlbSAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E4YThhODtcbn1cblxuLm5hdmJhciB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBTYWZhcmkgKi9cbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbn1cblxuLm5hdmJhckl0ZW0ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5hdmJhckl0ZW06aG92ZXIge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4Nzg3ODtcbn1cblxuLm5hdmJhclRleHQge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4jYWJvdXRNZVBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4jc2tpbGxzUGFuZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuI2V4cGVyaWVuY2VQYW5lbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuI2VkdWNhdGlvblBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbiNuYW1lVGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiA2NTBweDtcbiAgICBmb250LXNpemU6IDUuNXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAyMHB4IGJsYWNrO1xufVxuXG4jam9iRGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IGJsYWNrO1xufVxuXG4jc3ViVGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3BhbmVscyB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICNjb21wYW55TG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICNzdWJUaXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgICNoZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvSGVhZGVyUGljdHVyZS5qcGdcIik7XG4gICAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgICAvLyBoZWlnaHQ6IDExMDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG59XG5cbiNjb21wYW55TG9nbyB7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuXG4jcGFyZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jbmFycm93IHtcbiAgICB3aWR0aDogMjAwcHg7XG59XG5cbiN3aWRlIHtcbiAgICBmbGV4OiAxO1xufVxuXG4uY29sbGFwc2libGUge1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cblxuLmNvbGxhcHNpYmxlSGVhZGVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMThweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJvcmRlcjogMHB4IHNvbGlkICNjOWM5Yzk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbGxhcHNpYmxlSGVhZGVyOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOWM5Yzk7XG59XG5cbi5jb2xsYXBzaWJsZUFjdGl2ZSB7XG4gICAgdHJhbnNpdGlvbjptYXgtaGVpZ2h0IDFzIGVhc2Utb3V0O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LWhlaWdodDo2MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb2xsYXBzaWJsZUluYWN0aXZlIHtcbiAgICBtYXgtaGVpZ2h0OiAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xufVxuXG4uY29sdW1uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMjUlO1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICB9XG4gIFxuICAvKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cbiAgLnJvdzphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxuICBcbiAgLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlcyB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAuY29sdW1uIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICB9XG5cbi8vICAgLm1vZGFsQWN0aXZlIHtcbi8vICAgICBkaXNwbGF5OiBibG9jazsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbi8vICAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbi8vICAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXG4vLyAgICAgbGVmdDogMDtcbi8vICAgICB0b3A6IDA7XG4vLyAgICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cbi8vICAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXG4vLyAgICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbi8vICAgfVxuXG4vLyAgIC5tb2RlYWxJbmFjdGl2ZSB7XG4vLyAgICAgICBkaXNwbGF5OiBub25lO1xuLy8gICB9XG4gIFxuLy8gICAvKiBNb2RhbCBDb250ZW50L0JveCAqL1xuLy8gICAubW9kYWwtY29udGVudCB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbi8vICAgICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xuLy8gICAgIHBhZGRpbmc6IDIwcHg7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbi8vICAgICB3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xuLy8gICB9XG4gIFxuLy8gICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXG4vLyAgIC5jbG9zZSB7XG4vLyAgICAgY29sb3I6ICNhYWE7XG4vLyAgICAgZmxvYXQ6IHJpZ2h0O1xuLy8gICAgIGZvbnQtc2l6ZTogMjhweDtcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgfVxuICBcbi8vICAgLmNsb3NlOmhvdmVyLFxuLy8gICAuY2xvc2U6Zm9jdXMge1xuLy8gICAgIGNvbG9yOiBibGFjaztcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICB9IiwiI3BhbmVsIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuI2hlYWRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9IZWFkZXJQaWN0dXJlLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI3BhZ2VDb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAwIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThhOGE4O1xufVxuXG4ubmF2YmFyIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIC8qIFNhZmFyaSAqL1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xufVxuXG4ubmF2YmFySXRlbSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uYXZiYXJJdGVtOmhvdmVyIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4Nzg3ODtcbn1cblxuLm5hdmJhclRleHQge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4jYWJvdXRNZVBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbiNza2lsbHNQYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbiNleHBlcmllbmNlUGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuI2VkdWNhdGlvblBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuI25hbWVUaXRsZSB7XG4gIHBhZGRpbmctdG9wOiA2NTBweDtcbiAgZm9udC1zaXplOiA1LjVyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAyMHB4IGJsYWNrO1xufVxuXG4jam9iRGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDRyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCBibGFjaztcbn1cblxuI3N1YlRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcGFuZWxzIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgI2NvbXBhbnlMb2dvIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI3N1YlRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAjaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvSGVhZGVyUGljdHVyZS5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxufVxuI2NvbXBhbnlMb2dvIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4jcGFyZW50IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI25hcnJvdyB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuI3dpZGUge1xuICBmbGV4OiAxO1xufVxuXG4uY29sbGFwc2libGUge1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uY29sbGFwc2libGVIZWFkZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXI6IDBweCBzb2xpZCAjYzljOWM5O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbGxhcHNpYmxlSGVhZGVyOmhvdmVyIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5YzljOTtcbn1cblxuLmNvbGxhcHNpYmxlQWN0aXZlIHtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcyBlYXNlLW91dDtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMThweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb2xsYXBzaWJsZUluYWN0aXZlIHtcbiAgbWF4LWhlaWdodDogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xufVxuXG4uY29sdW1uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyNSU7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cbi5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gbWFrZXMgdGhlIHR3byBjb2x1bW5zIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyIGluc3RlYWQgb2YgbmV4dCB0byBlYWNoIG90aGVyICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuY29sdW1uIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59Il19 */");

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = "Marco Tipitto";
        this.collapsibleHeader = "+\tList of Skills and Technologies";
    }
    downloadResume() {
        window.open('../assets/Resume_2019.pdf', '_blank');
    }
    openLinkedIn() {
        window.open('https://www.linkedin.com/in/marco-tipitto-cerruti-4a8ab643/', '_blank');
    }
    contactEmail() {
        window.location.href = "mailto:marco_tipitto@hotmail.com?subject=Subject&body=Type%20your%20message";
    }
    toggleAccordian() {
        if (this.collapsible) {
            this.collapsibleHeader = "-\tList of Skills and Technologies";
            return {
                'collapsibleActive': true
            };
        }
        else {
            this.collapsibleHeader = "+\tList of Skills and Technologies";
            return {
                'collapsibleInactive': true
            };
        }
    }
    contactDialog() {
        console.log('click');
        if (this.contact) {
            return {
                'modalActive': true
            };
        }
        else {
            return {
                'modalInactive': true
            };
        }
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/marcotipitto/Desktop/GitHub/myProjects/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map