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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/css-loader/dist/cjs.js):\nModuleBuildError: Module build failed (from ../node_modules/sass-loader/dist/cjs.js):\nError: Missing binding C:\\Home Projects\\ReactMentoringProgramm\\home-work-app\\node_modules\\node-sass\\vendor\\win32-x64-72\\binding.node\nNode Sass could not find a binding for your current environment: Windows 64-bit with Node.js 12.x\n\nFound bindings for the following environments:\n  - Windows 64-bit with Node.js 8.x\n\nThis usually happens because your environment has changed since running `npm install`.\nRun `npm rebuild node-sass` to download the binding for your current environment.\n    at module.exports (C:\\Home Projects\\ReactMentoringProgramm\\home-work-app\\node_modules\\node-sass\\lib\\binding.js:15:13)\n    at Object.<anonymous> (C:\\Home Projects\\ReactMentoringProgramm\\home-work-app\\node_modules\\node-sass\\lib\\index.js:14:35)\n    at Module._compile (C:\\Home Projects\\ReactMentoringProgramm\\home-work-app\\node_modules\\v8-compile-cache\\v8-compile-cache.js:194:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1157:10)\n    at Module.load (internal/modules/cjs/loader.js:985:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:878:14)\n    at Module.require (internal/modules/cjs/loader.js:1025:19)\n    at require (C:\\Home Projects\\ReactMentoringProgramm\\home-work-app\\node_modules\\v8-compile-cache\\v8-compile-cache.js:161:20)\n    at getDefaultSassImplementation (C:\\Home Projects\\ReactMentoringProgramm\\home-work-app\\node_modules\\sass-loader\\dist\\getDefaultSassImplementation.js:24:10)\n    at getSassImplementation (C:\\Home Projects\\ReactMentoringProgramm\\home-work-app\\node_modules\\sass-loader\\dist\\getSassImplementation.js:19:72)\n    at Object.loader (C:\\Home Projects\\ReactMentoringProgramm\\home-work-app\\node_modules\\sass-loader\\dist\\index.js:40:61)\n    at C:\\Home Projects\\ReactMentoringProgramm\\home-work-app\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at C:\\Home Projects\\ReactMentoringProgramm\\home-work-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\Home Projects\\ReactMentoringProgramm\\home-work-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at runSyncOrAsync (C:\\Home Projects\\ReactMentoringProgramm\\home-work-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:143:3)\n    at iterateNormalLoaders (C:\\Home Projects\\ReactMentoringProgramm\\home-work-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:2)\n    at C:\\Home Projects\\ReactMentoringProgramm\\home-work-app\\node_modules\\loader-runner\\lib\\LoaderRunner.js:205:4\n    at C:\\Home Projects\\ReactMentoringProgramm\\home-work-app\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:85:15\n    at processTicksAndRejections (internal/process/task_queues.js:79:11)");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

document.getElementById('root').innerHTML = 'Hello World';


/***/ })

/******/ });
//# sourceMappingURL=scripts.js.map