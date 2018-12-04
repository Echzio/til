/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ES6/index.js":
/*!**************************!*\
  !*** ./src/ES6/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nfunction ready(e) {\r\n\r\n\r\n    const test = 50;\r\n    // object\r\n    const settings = {\r\n        a: 10,\r\n        b: 20,\r\n        c: 30\r\n    }\r\n    // console.log(settings);\r\n\r\n\r\n    /**********************************/\r\n    timer2(5);\r\n    timer2();\r\n    timer2(0);\r\n\r\n    function timer(t) {\r\n        // старая универсальная проверка \r\n        let time = (typeof t === 'undefined') ? 60 : t;\r\n        // console.log(time);\r\n    }\r\n    // новая универсальная проверка\r\n    function timer2(time = 60) {\r\n        // console.log(time);\r\n    }\r\n    /************************************/\r\n\r\n\r\n\r\n    // let str = some('test', 'nz', 7, 3, 4);\r\n    // document.querySelector('body').innerHTML = str;\r\n\r\n\r\n    //spread-оператор\r\n    /*\r\n    function some(name, lastname, ...marks) {\r\n\r\n\r\n        let sum = 0;\r\n\r\n        for (let m of marks) {\r\n            sum += m;\r\n        };\r\n\r\n        let avg = sum / marks.length;\r\n        // интерполяция из предпроцессоров\r\n        let res = `<div>${name} ${lastname}<strong> ${avg}</strong></div>`;\r\n\r\n        return res;\r\n    };\r\n    */\r\n\r\n    let t1 = new ConsoleTimer(180);\r\n    t1.run();\r\n};\r\n\r\n\r\n/*************************/\r\n// ООП\r\nclass MyTimer {\r\n    constructor(t = 100) {\r\n        this.time = t;\r\n    }\r\n    tick() {\r\n        this.time--;\r\n    }\r\n    run() {\r\n        // стрелочные функции сохряняют контекст\r\n        setInterval(() => {\r\n            this.tick();\r\n        }, 1000);\r\n    }\r\n}\r\n\r\nclass ReverseTimer extends MyTimer {\r\n    tick() {\r\n        this.time++;\r\n    }\r\n\r\n}\r\n\r\nclass ConsoleTimer extends ReverseTimer {\r\n    tick() {\r\n        super.tick();\r\n        console.log(this.time);\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n// document.addEventListener('DOMContentLoaded', ready);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (es6);\n\n//# sourceURL=webpack:///./src/ES6/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ES6_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ES6/index */ \"./src/ES6/index.js\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });