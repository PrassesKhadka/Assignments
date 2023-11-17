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

/***/ "./src/factories/customise-theme.ts":
/*!******************************************!*\
  !*** ./src/factories/customise-theme.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Customise_Theme() {\n    var current = \"\";\n    function setTheme(theme) {\n        current = \"./public/assets/images/\".concat(theme, \".png\");\n        render();\n    }\n    function render() {\n        var bg_screen = document.querySelector(\".bg-screen\");\n        if (bg_screen) {\n            bg_screen.style.backgroundImage = \"url(\".concat(current, \")\");\n        }\n    }\n    return { setTheme: setTheme };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Customise_Theme);\n\n\n//# sourceURL=webpack://pomodoro/./src/factories/customise-theme.ts?");

/***/ }),

/***/ "./src/factories/time.ts":
/*!*******************************!*\
  !*** ./src/factories/time.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// default value of second set as 0\nfunction Time(minute, second) {\n    if (minute === void 0) { minute = 0; }\n    if (second === void 0) { second = 0; }\n    var time = {\n        minute: minute,\n        second: second,\n    };\n    function getTime() {\n        return time;\n    }\n    return { getTime: getTime };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Time);\n\n\n//# sourceURL=webpack://pomodoro/./src/factories/time.ts?");

/***/ }),

/***/ "./src/factories/timer.ts":
/*!********************************!*\
  !*** ./src/factories/timer.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// A single source of truth for different timers: Pomodoro,short-break and long-break\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nfunction Timer(arg) {\n    // private datas;\n    // Make a shallow copy cause if we give time=arg then time references the same value in memory as arg thus causing changes in time to reflect in arg thus #shallow copy\n    var time = __assign({}, arg);\n    var interval = null;\n    var active = false;\n    function logic() {\n        if (time.minute > 0 || time.second > 0) {\n            if (time.second === 0) {\n                time.minute -= 1;\n                time.second = 60;\n            }\n            time.second--;\n        }\n        else if (time.minute === 0 && time.second === 0) {\n            stop();\n        }\n    }\n    function start() {\n        // active true so it won't work if you click start again ,if it is active\n        if (!active) {\n            interval = setInterval(function () {\n                logic();\n                render();\n                timesUp();\n            }, 1000);\n            active = true;\n            return true;\n        }\n        return false;\n    }\n    function stop() {\n        if (interval) {\n            clearInterval(interval);\n            interval = null;\n            active = false;\n            render();\n            return true;\n        }\n        return false;\n    }\n    function reset() {\n        time = __assign({}, arg);\n        render();\n        stop();\n        return true;\n    }\n    function getCurrentTime() {\n        return time;\n    }\n    function timesUp() {\n        if (time.minute === 0 && time.second === 0) {\n            playAudio();\n            return true;\n        }\n        else\n            return false;\n    }\n    function getState() {\n        return active;\n    }\n    function isSingleDigit(num) {\n        return num >= 0 && num <= 9 ? true : false;\n    }\n    function playAudio() {\n        var audio = new Audio(\"./assets/audio/alert.mp3\");\n        audio.play();\n        setTimeout(function () {\n            audio.pause();\n        }, 10000); // Stop after 10 seconds\n    }\n    function render() {\n        var timer = document.querySelector(\".timer\");\n        var start = document.querySelector(\".start\");\n        timer.textContent =\n            isSingleDigit(time.minute) && isSingleDigit(time.second)\n                ? \"0\".concat(time.minute, \":0\").concat(time.second)\n                : isSingleDigit(time.minute)\n                    ? \"0\".concat(time.minute, \":\").concat(time.second)\n                    : isSingleDigit(time.second)\n                        ? \"\".concat(time.minute, \":0\").concat(time.second)\n                        : \"\".concat(time.minute, \":\").concat(time.second);\n        active ? (start.textContent = \"pause\") : (start.textContent = \"start\");\n    }\n    return { start: start, stop: stop, reset: reset, getCurrentTime: getCurrentTime, timesUp: timesUp, getState: getState, render: render };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timer);\n\n\n//# sourceURL=webpack://pomodoro/./src/factories/timer.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleLongClick: () => (/* binding */ handleLongClick),\n/* harmony export */   handlePomodoroClick: () => (/* binding */ handlePomodoroClick),\n/* harmony export */   handleShortClick: () => (/* binding */ handleShortClick),\n/* harmony export */   handleStartClick: () => (/* binding */ handleStartClick)\n/* harmony export */ });\n/* harmony import */ var _factories_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/time */ \"./src/factories/time.ts\");\n/* harmony import */ var _factories_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/timer */ \"./src/factories/timer.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n/* harmony import */ var _factories_customise_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factories/customise-theme */ \"./src/factories/customise-theme.ts\");\n\n\n\n\n// DOM elements selected\nvar start = document.querySelector(\".start\");\nvar reset = document.querySelector(\".reset\");\nvar pomodoro_btn = document.querySelector(\".pomodoro\");\nvar short_btn = document.querySelector(\".short\");\nvar long_btn = document.querySelector(\".long\");\nvar setting = document.querySelector(\".setting\");\nvar pop_up = document.querySelector(\".pop-up\");\nvar remove_pop_up = document.querySelector(\".rm-pop_up\");\nvar custom_btn = document.querySelector(\".custom-btn\");\nvar cancel_btn = document.querySelector(\".cancel-btn\");\nvar theme_select = document.getElementById(\"theme-select\");\nvar pomodoro_select = document.getElementById(\"pomodoro-select\");\nvar short_select = document.getElementById(\"short-select\");\nvar long_select = document.getElementById(\"long-select\");\n// Different timers: second is set 0 as default\nvar pomodoro = (0,_factories_time__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(25);\nvar pomodoroTimer = (0,_factories_timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pomodoro.getTime());\nvar short = (0,_factories_time__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5);\nvar shortTimer = (0,_factories_timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(short.getTime());\nvar long = (0,_factories_time__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(10);\nvar longTimer = (0,_factories_timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(long.getTime());\nvar active = \"pomodoro\";\n// Main Functions\nfunction initialRender() {\n    active === \"pomodoro\"\n        ? pomodoroTimer.render()\n        : active === \"short\"\n            ? shortTimer.render()\n            : longTimer.render();\n}\nvar handlePomodoroClick = function () {\n    active = \"pomodoro\";\n    // all async timers should be stopped as async action takes place in background and mounts the DOM every sec\n    pomodoroTimer.stop();\n    shortTimer.stop();\n    longTimer.stop();\n    initialRender();\n};\nvar handleShortClick = function () {\n    active = \"short\";\n    pomodoroTimer.stop();\n    shortTimer.stop();\n    longTimer.stop();\n    initialRender();\n};\nvar handleLongClick = function () {\n    active = \"long\";\n    pomodoroTimer.stop();\n    shortTimer.stop();\n    longTimer.stop();\n    initialRender();\n};\nvar handleStartClick = function () {\n    if (active === \"pomodoro\") {\n        if (pomodoroTimer.getState()) {\n            pomodoroTimer.stop();\n        }\n        else {\n            pomodoroTimer.start();\n        }\n    }\n    else if (active === \"long\") {\n        if (longTimer.getState()) {\n            longTimer.stop();\n        }\n        else {\n            longTimer.start();\n        }\n    }\n    else {\n        if (shortTimer.getState()) {\n            shortTimer.stop();\n        }\n        else {\n            shortTimer.start();\n        }\n    }\n};\nvar handleResetClick = function () {\n    active === \"pomodoro\"\n        ? pomodoroTimer.reset()\n        : active === \"long\"\n            ? longTimer.reset()\n            : shortTimer.reset();\n};\nvar handleSettingClick = function () {\n    pop_up.classList.add(\"transform\");\n};\nvar handleRemovePopUp = function () {\n    pop_up.classList.remove(\"transform\");\n};\nvar handleCustomiseTheme = function () {\n    // options returns an array of options\n    var selectedOption = theme_select.options[theme_select.selectedIndex];\n    var selectedValue = selectedOption.value;\n    var theme = (0,_factories_customise_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    theme.setTheme(selectedValue);\n};\nvar handleTimerValueChange = function () {\n    pomodoroTimer.stop();\n    shortTimer.stop();\n    longTimer.stop();\n    pomodoro = (0,_factories_time__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pomodoro_select.valueAsNumber);\n    pomodoroTimer = (0,_factories_timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pomodoro.getTime());\n    short = (0,_factories_time__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(short_select.valueAsNumber);\n    shortTimer = (0,_factories_timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(short.getTime());\n    long = (0,_factories_time__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(long_select.valueAsNumber);\n    longTimer = (0,_factories_timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(long.getTime());\n    initialRender();\n    handleRemovePopUp();\n};\npomodoro_btn.addEventListener(\"click\", handlePomodoroClick);\nshort_btn.addEventListener(\"click\", handleShortClick);\nlong_btn.addEventListener(\"click\", handleLongClick);\nstart.addEventListener(\"click\", handleStartClick);\nreset.addEventListener(\"click\", handleResetClick);\nsetting.addEventListener(\"click\", handleSettingClick);\ntheme_select.addEventListener(\"change\", handleCustomiseTheme);\nremove_pop_up.addEventListener(\"click\", handleRemovePopUp);\ncustom_btn.addEventListener(\"click\", handleTimerValueChange);\ncancel_btn.addEventListener(\"click\", handleRemovePopUp);\ninitialRender();\n(0,_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack://pomodoro/./src/index.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Not related to main logic\nvar nav_btns = document.querySelectorAll(\".nav\");\nvar rm_modal = document.querySelector(\".rm-modal\");\nvar modal = document.querySelector(\".modal\");\nfunction utils() {\n    // Adding active classes to the navigation buttons\n    nav_btns.forEach(function (element) {\n        element.addEventListener(\"click\", function () {\n            var current = document.querySelector(\".active\");\n            current === null || current === void 0 ? void 0 : current.classList.remove(\"active\");\n            element.classList.add(\"active\");\n        });\n    });\n    // removing modal onClick\n    rm_modal === null || rm_modal === void 0 ? void 0 : rm_modal.addEventListener(\"click\", function () {\n        modal === null || modal === void 0 ? void 0 : modal.classList.add(\"hide\");\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utils);\n\n\n//# sourceURL=webpack://pomodoro/./src/utils.ts?");

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