/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./worker/test.worker.js":
/*!*******************************!*\
  !*** ./worker/test.worker.js ***!
  \*******************************/
/***/ (function() {

eval("/*\n * @Author: 小石头\n * @Date: 2022-10-26 11:37:10\n * @LastEditors: 小石头\n * @LastEditTime: 2022-10-28 16:30:06\n * @Description:\n */\n\n// console.log('worker');\n\nthis.onmessage = function (evt) {\n    // 工作线程收到主线程的消息\n};\n\nthis.postMessage({\n    value: \"工作线程向主线程发送消息\",\n});\n\n\n//# sourceURL=webpack://testWebWoker/./worker/test.worker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./worker/test.worker.js"]();
/******/ 	
/******/ })()
;