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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_staticgraphics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/staticgraphics */ \"./src/scripts/staticgraphics.js\");\n/* harmony import */ var _scripts_apple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/apple */ \"./src/scripts/apple.js\");\n/* harmony import */ var _scripts_gameplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/gameplay */ \"./src/scripts/gameplay.js\");\n/* harmony import */ var _scripts_direction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/direction */ \"./src/scripts/direction.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n$(document).ready(() => {\r\n\r\n    _scripts_staticgraphics__WEBPACK_IMPORTED_MODULE_0__.initBoard();\r\n\r\n    _scripts_staticgraphics__WEBPACK_IMPORTED_MODULE_0__.initSnake();\r\n\r\n    const fields = Array.from(document.querySelectorAll('.board_field'));\r\n\r\n    let snakeElems = Array.from(document.querySelectorAll('.snake_elem')).reverse();\r\n\r\n\r\n    $('#start_button').click(() => {\r\n\r\n        snakeElems.forEach(item => {\r\n            item.parentNode.classList.add('right');\r\n        });\r\n\r\n        setInterval(() => {\r\n            snakeElems  = (0,_scripts_gameplay__WEBPACK_IMPORTED_MODULE_2__.default)(snakeElems,fields);\r\n        }, 200);\r\n        \r\n        (0,_scripts_apple__WEBPACK_IMPORTED_MODULE_1__.addApple)(1);\r\n\r\n        $('#start_button').prop('disabled', true);\r\n    })\r\n\r\n    $(window).keypress( e => {\r\n\r\n        switch (e.which) { \r\n            case 119:\r\n                _scripts_direction__WEBPACK_IMPORTED_MODULE_3__.addUpDirection();\r\n            break;\r\n            case 100:\r\n                _scripts_direction__WEBPACK_IMPORTED_MODULE_3__.addRightDirection();\r\n            break;\r\n            case 115:\r\n                _scripts_direction__WEBPACK_IMPORTED_MODULE_3__.addDownDirection();\r\n            break;\r\n            case 97:\r\n                _scripts_direction__WEBPACK_IMPORTED_MODULE_3__.addLeftDirection();\r\n            break;\r\n            \r\n        }\r\n\r\n    })\r\n})\n\n//# sourceURL=webpack://snake/./src/index.js?");

/***/ }),

/***/ "./src/scripts/apple.js":
/*!******************************!*\
  !*** ./src/scripts/apple.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addApple\": () => (/* binding */ addApple),\n/* harmony export */   \"checkIfApple\": () => (/* binding */ checkIfApple)\n/* harmony export */ });\n/* harmony import */ var _improveSnake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./improveSnake */ \"./src/scripts/improveSnake.js\");\n\r\n\r\nfunction addApple(snakeIndex) {\r\n\r\n    snakeIndex++;\r\n\r\n    const color = generateAppleColor(),\r\n        index = generateFreeFieldIndex(snakeIndex);\r\n\r\n\r\n    $(`.board_field:nth-child(${index})`).append($(`<div id=\"apple\" style=\"background-color:#${color};\"></div>`));\r\n}\r\n\r\nfunction generateFreeFieldIndex(snakeIndex) {\r\n\r\n    const index = Math.floor(Math.random()*447);\r\n\r\n    return snakeIndex == index ? generateFreeFieldIndex(snakeIndex) : index;\r\n}\r\n\r\nfunction generateAppleColor() {\r\n    const color  = Math.floor(Math.random()*16777215);\r\n\r\n    return color > 1777215 ? color.toString(16) : generateAppleColor();\r\n}\r\n\r\nfunction checkIfApple() {\r\n    if ($('#apple').parent().children().length == 2) {\r\n        _improveSnake__WEBPACK_IMPORTED_MODULE_0__.increaseScore();\r\n\r\n        $('#apple').remove();\r\n\r\n        addApple();\r\n\r\n        _improveSnake__WEBPACK_IMPORTED_MODULE_0__.extendSnake();\r\n    }\r\n}\n\n//# sourceURL=webpack://snake/./src/scripts/apple.js?");

/***/ }),

/***/ "./src/scripts/direction.js":
/*!**********************************!*\
  !*** ./src/scripts/direction.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addUpDirection\": () => (/* binding */ addUpDirection),\n/* harmony export */   \"addRightDirection\": () => (/* binding */ addRightDirection),\n/* harmony export */   \"addDownDirection\": () => (/* binding */ addDownDirection),\n/* harmony export */   \"addLeftDirection\": () => (/* binding */ addLeftDirection)\n/* harmony export */ });\n\r\n\r\nfunction addUpDirection() {\r\n    $('.head').parent().removeClass('up down left right');\r\n    $('.head').parent().addClass('up');\r\n}\r\n\r\nfunction addRightDirection() {\r\n    // console.log('here');\r\n    $('.head').parent().removeClass('up down left right');\r\n    $('.head').parent().addClass('right');\r\n}\r\n\r\nfunction addDownDirection() {\r\n    $('.head').parent().removeClass('up down left right');\r\n    $('.head').parent().addClass('down');\r\n}\r\n\r\nfunction addLeftDirection() {\r\n    $('.head').parent().removeClass('up down left right');\r\n    $('.head').parent().addClass('left');\r\n}\n\n//# sourceURL=webpack://snake/./src/scripts/direction.js?");

/***/ }),

/***/ "./src/scripts/gameplay.js":
/*!*********************************!*\
  !*** ./src/scripts/gameplay.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ moveSnake)\n/* harmony export */ });\n/* harmony import */ var _moving__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving */ \"./src/scripts/moving.js\");\n/* harmony import */ var _direction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./direction */ \"./src/scripts/direction.js\");\n\r\n\r\n\r\n\r\nfunction moveSnake(snakeElems,fields) {\r\n\r\n    $('.board_field:empty').removeClass('previous');\r\n\r\n    snakeElems.forEach(item => {\r\n\r\n        switch(item.parentNode.className.split(' ')[1]) {\r\n            case 'up':\r\n                _moving__WEBPACK_IMPORTED_MODULE_0__.moveUp(fields.indexOf(item.parentNode) + 1);\r\n                if (item.classList.contains('head')) \r\n                    _direction__WEBPACK_IMPORTED_MODULE_1__.addUpDirection();\r\n            break;\r\n            case 'right':\r\n                _moving__WEBPACK_IMPORTED_MODULE_0__.moveRight(fields.indexOf(item.parentNode) + 1);\r\n                if (item.classList.contains('head')) \r\n                    _direction__WEBPACK_IMPORTED_MODULE_1__.addRightDirection();\r\n            break;\r\n            case 'down':\r\n                _moving__WEBPACK_IMPORTED_MODULE_0__.moveDown(fields.indexOf(item.parentNode) + 1);\r\n                if (item.classList.contains('head')) \r\n                    _direction__WEBPACK_IMPORTED_MODULE_1__.addDownDirection();\r\n            break;\r\n            case 'left':\r\n                _moving__WEBPACK_IMPORTED_MODULE_0__.moveLeft(fields.indexOf(item.parentNode) + 1);\r\n                if (item.classList.contains('head')) \r\n                    _direction__WEBPACK_IMPORTED_MODULE_1__.addLeftDirection();\r\n            break;\r\n        }\r\n    })\r\n\r\n\r\n    const resp = Array.from(document.querySelectorAll('.snake_elem'))\r\n\r\n    return resp;\r\n\r\n}\n\n//# sourceURL=webpack://snake/./src/scripts/gameplay.js?");

/***/ }),

/***/ "./src/scripts/improveSnake.js":
/*!*************************************!*\
  !*** ./src/scripts/improveSnake.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"increaseScore\": () => (/* binding */ increaseScore),\n/* harmony export */   \"extendSnake\": () => (/* binding */ extendSnake)\n/* harmony export */ });\nfunction increaseScore() {\r\n    $('#score_value').text( () => {\r\n        return +$('#score_value').text() +1;\r\n    })\r\n}\r\n\r\nfunction extendSnake() { \r\n    console.log('extended');\r\n    $('.previous:empty').append('<div class=\"snake_elem\"></div>');\r\n    $('.previous').removeClass('previous')\r\n}\n\n//# sourceURL=webpack://snake/./src/scripts/improveSnake.js?");

/***/ }),

/***/ "./src/scripts/moving.js":
/*!*******************************!*\
  !*** ./src/scripts/moving.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"moveUp\": () => (/* binding */ moveUp),\n/* harmony export */   \"moveRight\": () => (/* binding */ moveRight),\n/* harmony export */   \"moveDown\": () => (/* binding */ moveDown),\n/* harmony export */   \"moveLeft\": () => (/* binding */ moveLeft)\n/* harmony export */ });\n/* harmony import */ var _apple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apple */ \"./src/scripts/apple.js\");\n\r\n\r\nfunction moveUp (snakePosition) {\r\n\r\n    const nextInd = snakePosition - 28;\r\n\r\n    $(`.board_field:nth-child(${snakePosition})`).addClass('up previous');\r\n\r\n    if (nextInd > 0) {\r\n\r\n        if ($(`.board_field:nth-child(${snakePosition}) .snake_elem`).first().hasClass('head')){\r\n            $(`.board_field:nth-child(${nextInd})`).append('<div class=\"snake_elem head\"></div>');\r\n        } else {\r\n            $(`.board_field:nth-child(${nextInd})`).append('<div class=\"snake_elem\"></div>');\r\n        }\r\n\r\n        $(`.board_field:nth-child(${snakePosition}) .snake_elem:first`).remove();\r\n\r\n        (0,_apple__WEBPACK_IMPORTED_MODULE_0__.checkIfApple)(nextInd);\r\n\r\n        return nextInd;\r\n    }\r\n    else {\r\n\r\n        if ($(`.board_field:nth-child(${snakePosition}) .snake_elem`).first().hasClass('head')){\r\n            $(`.board_field:nth-child(${nextInd + 448})`).append('<div class=\"snake_elem head\"></div>');\r\n        } else {\r\n            $(`.board_field:nth-child(${nextInd + 448})`).append('<div class=\"snake_elem\"></div>');\r\n        }\r\n\r\n        $(`.board_field:nth-child(${snakePosition}) .snake_elem:first`).remove();\r\n\r\n        (0,_apple__WEBPACK_IMPORTED_MODULE_0__.checkIfApple)(nextInd + 448);\r\n\r\n        return nextInd + 448;\r\n    }\r\n}\r\n\r\nfunction moveRight(snakePosition) {\r\n    const nextInd = snakePosition + 1;\r\n\r\n    $(`.board_field:nth-child(${snakePosition})`).addClass('right previous');\r\n\r\n\r\n    if ( (nextInd - 1) % 28 != 0) {\r\n        if ($(`.board_field:nth-child(${snakePosition}) .snake_elem`).first().hasClass('head')){\r\n\r\n            $(`.board_field:nth-child(${nextInd})`).append('<div class=\"snake_elem head\"></div>');\r\n        } else {\r\n            $(`.board_field:nth-child(${nextInd})`).append('<div class=\"snake_elem\"></div>');\r\n        }\r\n\r\n        $(`.board_field:nth-child(${snakePosition}) .snake_elem:first`).remove();\r\n\r\n        (0,_apple__WEBPACK_IMPORTED_MODULE_0__.checkIfApple)(nextInd);\r\n\r\n        return nextInd;\r\n    }\r\n    else {\r\n\r\n        if ($(`.board_field:nth-child(${snakePosition}) .snake_elem`).first().hasClass('head')){\r\n            $(`.board_field:nth-child(${nextInd - 28})`).append('<div class=\"snake_elem head\"></div>');\r\n        } else {\r\n            $(`.board_field:nth-child(${nextInd - 28})`).append('<div class=\"snake_elem\"></div>');\r\n        }\r\n\r\n        $(`.board_field:nth-child(${snakePosition}) .snake_elem:first`).remove();\r\n\r\n        (0,_apple__WEBPACK_IMPORTED_MODULE_0__.checkIfApple)(nextInd -28);\r\n\r\n        return nextInd - 28;\r\n    }\r\n}\r\n\r\nfunction moveDown(snakePosition) {\r\n    const nextInd = snakePosition + 28;\r\n\r\n    $(`.board_field:nth-child(${snakePosition})`).addClass('down previous');\r\n\r\n    if (nextInd < 448) {\r\n\r\n        if ($(`.board_field:nth-child(${snakePosition}) .snake_elem`).first().hasClass('head')){\r\n            $(`.board_field:nth-child(${nextInd})`).append('<div class=\"snake_elem head\"></div>');\r\n        } else {\r\n            $(`.board_field:nth-child(${nextInd})`).append('<div class=\"snake_elem\"></div>');\r\n        }\r\n\r\n        $(`.board_field:nth-child(${snakePosition}) .snake_elem:first`).remove();\r\n\r\n        (0,_apple__WEBPACK_IMPORTED_MODULE_0__.checkIfApple)(nextInd);\r\n\r\n        return nextInd;\r\n    }\r\n    else {\r\n\r\n        if ($(`.board_field:nth-child(${snakePosition}) .snake_elem`).first().hasClass('head')){\r\n            $(`.board_field:nth-child(${nextInd - 448})`).append('<div class=\"snake_elem head\"></div>');\r\n        } else {\r\n            $(`.board_field:nth-child(${nextInd - 448})`).append('<div class=\"snake_elem\"></div>');\r\n        }\r\n\r\n        $(`.board_field:nth-child(${snakePosition}) .snake_elem:first`).remove();\r\n\r\n        (0,_apple__WEBPACK_IMPORTED_MODULE_0__.checkIfApple)(nextInd -448);\r\n\r\n        return nextInd - 448;\r\n    }\r\n}\r\n\r\nfunction moveLeft(snakePosition) {\r\n    const nextInd = snakePosition - 1;\r\n\r\n    $(`.board_field:nth-child(${snakePosition})`).addClass('left previous');\r\n\r\n\r\n    if (nextInd % 28 != 0) {\r\n\r\n        if ($(`.board_field:nth-child(${snakePosition}) .snake_elem`).first().hasClass('head')){\r\n            $(`.board_field:nth-child(${nextInd})`).append('<div class=\"snake_elem head\"></div>');\r\n        } else {\r\n            $(`.board_field:nth-child(${nextInd})`).append('<div class=\"snake_elem\"></div>');\r\n        }\r\n\r\n        $(`.board_field:nth-child(${snakePosition}) .snake_elem:first`).remove();\r\n        (0,_apple__WEBPACK_IMPORTED_MODULE_0__.checkIfApple)(nextInd);\r\n\r\n        return nextInd;\r\n    }\r\n    else {\r\n\r\n        if ($(`.board_field:nth-child(${snakePosition}) .snake_elem`).first().hasClass('head')){\r\n            $(`.board_field:nth-child(${nextInd + 28})`).append('<div class=\"snake_elem head\"></div>');\r\n        } else {\r\n            $(`.board_field:nth-child(${nextInd + 28})`).append('<div class=\"snake_elem\"></div>');\r\n        }\r\n\r\n        $(`.board_field:nth-child(${snakePosition}) .snake_elem:first`).remove();\r\n\r\n        (0,_apple__WEBPACK_IMPORTED_MODULE_0__.checkIfApple)(nextInd+28)\r\n\r\n        return nextInd + 28;\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://snake/./src/scripts/moving.js?");

/***/ }),

/***/ "./src/scripts/staticgraphics.js":
/*!***************************************!*\
  !*** ./src/scripts/staticgraphics.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initSnake\": () => (/* binding */ initSnake),\n/* harmony export */   \"initBoard\": () => (/* binding */ initBoard)\n/* harmony export */ });\n \r\nfunction initSnake(){\r\n \r\n    for (let i = 1; i <= 2; i++) {\r\n        $(`.board_field:nth-child(${i})`).append('<div class=\"snake_elem \"></div>')\r\n    }\r\n\r\n    $(`.board_field:nth-child(${3})`).append('<div class=\"snake_elem head\"></div>')  \r\n}\r\n\r\nfunction initBoard() {\r\n    for (let i = 0 ; i < 448; i++) {\r\n        $('#board').append('<div class=\"board_field\"></div>');\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://snake/./src/scripts/staticgraphics.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;