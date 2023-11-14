/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factories/time/Long.ts":
/*!************************************!*\
  !*** ./src/factories/time/Long.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Long() {\n    var longTime = {\n        minute: 10,\n        second: 0,\n    };\n    function getTime() {\n        return longTime;\n    }\n    return { getTime: getTime };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Long);\n\n\n//# sourceURL=webpack://Pomodoro/./src/factories/time/Long.ts?");

/***/ }),

/***/ "./src/factories/time/Pomodoro.ts":
/*!****************************************!*\
  !*** ./src/factories/time/Pomodoro.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Pomodoro() {\n    var pomodoroTime = {\n        minute: 25,\n        second: 0,\n    };\n    function getTime() {\n        return pomodoroTime;\n    }\n    return { getTime: getTime };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pomodoro);\n\n\n//# sourceURL=webpack://Pomodoro/./src/factories/time/Pomodoro.ts?");

/***/ }),

/***/ "./src/factories/time/Short.ts":
/*!*************************************!*\
  !*** ./src/factories/time/Short.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Short() {\n    var shortTime = {\n        minute: 5,\n        second: 0,\n    };\n    function getTime() {\n        return shortTime;\n    }\n    return { getTime: getTime };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Short);\n\n\n//# sourceURL=webpack://Pomodoro/./src/factories/time/Short.ts?");

/***/ }),

/***/ "./src/factories/timer.ts":
/*!********************************!*\
  !*** ./src/factories/timer.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nfunction Timer(arg) {\n    // private datas;\n    // Make a shallow copy cause if we give time=arg then time references the same value in memory as arg thus causing changes in time to reflect in arg thus #shallow copy\n    var time = __assign({}, arg);\n    var interval = null;\n    var active = false;\n    function logic() {\n        if (time.minute > 0 || time.second > 0) {\n            if (time.second === 0) {\n                time.minute -= 1;\n                time.second = 60;\n            }\n            time.second--;\n        }\n        else if (time.minute === 0 && time.second === 0) {\n            stop();\n        }\n    }\n    function start() {\n        // active true so it won't work if you click start again ,if it is active\n        if (!active) {\n            interval = setInterval(function () {\n                logic();\n                render();\n            }, 1000);\n            active = true;\n            return true;\n        }\n        return false;\n    }\n    function stop() {\n        if (interval) {\n            clearInterval(interval);\n            interval = null;\n            active = false;\n            return true;\n        }\n        return false;\n    }\n    function reset() {\n        time = __assign({}, arg);\n        render();\n        stop();\n        return true;\n    }\n    function getTime() {\n        return time;\n    }\n    function timesUp() {\n        if (time.minute === 0 && time.second === 0)\n            return true;\n        else\n            return false;\n    }\n    function getState() {\n        return active;\n    }\n    function isSingleDigit(num) {\n        return num >= 0 && num <= 9 ? true : false;\n    }\n    function render() {\n        var timer = document.querySelector(\".timer\");\n        if (timer) {\n            timer.textContent =\n                isSingleDigit(time.minute) && isSingleDigit(time.second)\n                    ? \"0\".concat(time.minute, \":0\").concat(time.second)\n                    : isSingleDigit(time.minute)\n                        ? \"0\".concat(time.minute, \":\").concat(time.second)\n                        : isSingleDigit(time.second)\n                            ? \"\".concat(time.minute, \":0\").concat(time.second)\n                            : \"\".concat(time.minute, \":\").concat(time.second);\n        }\n    }\n    return { start: start, stop: stop, reset: reset, getTime: getTime, timesUp: timesUp, getState: getState };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timer);\n\n\n//# sourceURL=webpack://Pomodoro/./src/factories/timer.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _factories_time_Long__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/time/Long */ \"./src/factories/time/Long.ts\");\n/* harmony import */ var _factories_time_Pomodoro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/time/Pomodoro */ \"./src/factories/time/Pomodoro.ts\");\n/* harmony import */ var _factories_time_Short__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/time/Short */ \"./src/factories/time/Short.ts\");\n/* harmony import */ var _factories_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factories/timer */ \"./src/factories/timer.ts\");\n\n\n\n\n// DOM elements selected\nvar timer = document.querySelector(\".timer\");\nvar start = document.querySelector(\".start\");\nvar reset = document.querySelector(\".reset\");\nvar pomodoro_btn = document.querySelector(\".pomodoro\");\nvar short_btn = document.querySelector(\".short\");\nvar long_btn = document.querySelector(\".long\");\nvar nav_btns = document.querySelectorAll(\".nav\");\n// Different timers\nvar pomodoro = (0,_factories_time_Pomodoro__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nvar pomodoroTimer = (0,_factories_timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(pomodoro.getTime());\nvar short = (0,_factories_time_Short__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nvar shortTimer = (0,_factories_timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(short.getTime());\nvar long = (0,_factories_time_Long__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nvar longTimer = (0,_factories_timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(long.getTime());\nvar active = \"pomodoro\";\n// Main Functions\nfunction initialRender() {\n    if (timer) {\n        active === \"pomodoro\"\n            ? (timer.textContent = \"\".concat(pomodoro.getTime().minute, \":0\").concat(pomodoro.getTime().second))\n            : active === \"short\"\n                ? (timer.textContent = \"0\".concat(short.getTime().minute, \":0\").concat(short.getTime().second))\n                : (timer.textContent = \"\".concat(long.getTime().minute, \":0\").concat(long.getTime().second));\n    }\n}\npomodoro_btn === null || pomodoro_btn === void 0 ? void 0 : pomodoro_btn.addEventListener(\"click\", function () {\n    active = \"pomodoro\";\n    // all async tiimers should be stopped as async action takes place in background and mounts the DOM every sec\n    pomodoroTimer.stop();\n    shortTimer.stop();\n    longTimer.stop();\n    initialRender();\n});\nshort_btn === null || short_btn === void 0 ? void 0 : short_btn.addEventListener(\"click\", function () {\n    active = \"short\";\n    pomodoroTimer.stop();\n    shortTimer.stop();\n    longTimer.stop();\n    initialRender();\n});\nlong_btn === null || long_btn === void 0 ? void 0 : long_btn.addEventListener(\"click\", function () {\n    active = \"long\";\n    pomodoroTimer.stop();\n    shortTimer.stop();\n    longTimer.stop();\n    initialRender();\n});\nstart === null || start === void 0 ? void 0 : start.addEventListener(\"click\", function () {\n    active === \"pomodoro\"\n        ? pomodoroTimer.start()\n        : active === \"long\"\n            ? longTimer.start()\n            : shortTimer.start();\n});\nreset === null || reset === void 0 ? void 0 : reset.addEventListener(\"click\", function () {\n    active === \"pomodoro\"\n        ? pomodoroTimer.reset()\n        : active === \"long\"\n            ? longTimer.reset()\n            : shortTimer.reset();\n});\n// Adding active classes to the navigation buttons\nnav_btns.forEach(function (element) {\n    element.addEventListener(\"click\", function () {\n        var current = document.querySelector(\".active\");\n        current === null || current === void 0 ? void 0 : current.classList.remove(\"active\");\n        element.classList.add(\"active\");\n    });\n});\ninitialRender();\n\n\n//# sourceURL=webpack://Pomodoro/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;