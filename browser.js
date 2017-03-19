/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.jasmine = jasmine;\nfunction getSetupFunction(_ref) {\n  var pending = _ref.pending,\n      only = _ref.only;\n\n  if (pending) {\n    return xdescribe;\n  } else if (only) {\n    return fdescribe;\n  }\n  return describe;\n}\n\nfunction getTestFunction(_ref2) {\n  var pending = _ref2.pending,\n      only = _ref2.only;\n\n  if (pending) {\n    return xit;\n  } else if (only) {\n    return fit;\n  }\n  return it;\n}\n\nfunction setup(_ref3, callback) {\n  var description = _ref3.description,\n      beforeEachCallback = _ref3.beforeEach,\n      afterEachCallback = _ref3.afterEach,\n      pending = _ref3.pending,\n      only = _ref3.only;\n\n  getSetupFunction({ pending: pending, only: only })(description, function () {\n    if (beforeEachCallback) {\n      beforeEach(beforeEachCallback);\n    }\n    if (afterEachCallback) {\n      afterEach(afterEachCallback);\n    }\n    callback(setup, test);\n  });\n}\n\nfunction test(_ref4) {\n  var description = _ref4.description,\n      test = _ref4.test,\n      pending = _ref4.pending,\n      only = _ref4.only;\n\n  getTestFunction({ pending: pending, only: only })(description, test);\n}\n\nfunction jasmine(params, callback) {\n  return function () {\n    setup(params, callback);\n  };\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJqYXNtaW5lIiwiZ2V0U2V0dXBGdW5jdGlvbiIsInBlbmRpbmciLCJvbmx5IiwieGRlc2NyaWJlIiwiZmRlc2NyaWJlIiwiZGVzY3JpYmUiLCJnZXRUZXN0RnVuY3Rpb24iLCJ4aXQiLCJmaXQiLCJpdCIsInNldHVwIiwiY2FsbGJhY2siLCJkZXNjcmlwdGlvbiIsImJlZm9yZUVhY2hDYWxsYmFjayIsImJlZm9yZUVhY2giLCJhZnRlckVhY2hDYWxsYmFjayIsImFmdGVyRWFjaCIsInRlc3QiLCJwYXJhbXMiXSwibWFwcGluZ3MiOiI7Ozs7O1FBMkNnQkEsTyxHQUFBQSxPO0FBM0NoQixTQUFTQyxnQkFBVCxPQUEyQztBQUFBLE1BQWhCQyxPQUFnQixRQUFoQkEsT0FBZ0I7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87O0FBQ3pDLE1BQUlELE9BQUosRUFBYTtBQUNYLFdBQU9FLFNBQVA7QUFDRCxHQUZELE1BRU8sSUFBSUQsSUFBSixFQUFVO0FBQ2YsV0FBT0UsU0FBUDtBQUNEO0FBQ0QsU0FBT0MsUUFBUDtBQUNEOztBQUVELFNBQVNDLGVBQVQsUUFBMEM7QUFBQSxNQUFoQkwsT0FBZ0IsU0FBaEJBLE9BQWdCO0FBQUEsTUFBUEMsSUFBTyxTQUFQQSxJQUFPOztBQUN4QyxNQUFJRCxPQUFKLEVBQWE7QUFDWCxXQUFPTSxHQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUlMLElBQUosRUFBVTtBQUNmLFdBQU9NLEdBQVA7QUFDRDtBQUNELFNBQU9DLEVBQVA7QUFDRDs7QUFFRCxTQUFTQyxLQUFULFFBTUdDLFFBTkgsRUFNYTtBQUFBLE1BTFhDLFdBS1csU0FMWEEsV0FLVztBQUFBLE1BSkNDLGtCQUlELFNBSlhDLFVBSVc7QUFBQSxNQUhBQyxpQkFHQSxTQUhYQyxTQUdXO0FBQUEsTUFGWGYsT0FFVyxTQUZYQSxPQUVXO0FBQUEsTUFEWEMsSUFDVyxTQURYQSxJQUNXOztBQUNYRixtQkFBaUIsRUFBQ0MsZ0JBQUQsRUFBVUMsVUFBVixFQUFqQixFQUFrQ1UsV0FBbEMsRUFBK0MsWUFBTTtBQUNuRCxRQUFJQyxrQkFBSixFQUF3QjtBQUN0QkMsaUJBQVdELGtCQUFYO0FBQ0Q7QUFDRCxRQUFJRSxpQkFBSixFQUF1QjtBQUNyQkMsZ0JBQVVELGlCQUFWO0FBQ0Q7QUFDREosYUFDRUQsS0FERixFQUVFTyxJQUZGO0FBSUQsR0FYRDtBQVlEOztBQUVELFNBQVNBLElBQVQsUUFBa0Q7QUFBQSxNQUFuQ0wsV0FBbUMsU0FBbkNBLFdBQW1DO0FBQUEsTUFBdEJLLElBQXNCLFNBQXRCQSxJQUFzQjtBQUFBLE1BQWhCaEIsT0FBZ0IsU0FBaEJBLE9BQWdCO0FBQUEsTUFBUEMsSUFBTyxTQUFQQSxJQUFPOztBQUNoREksa0JBQWdCLEVBQUNMLGdCQUFELEVBQVVDLFVBQVYsRUFBaEIsRUFBaUNVLFdBQWpDLEVBQThDSyxJQUE5QztBQUNEOztBQUVNLFNBQVNsQixPQUFULENBQWlCbUIsTUFBakIsRUFBeUJQLFFBQXpCLEVBQW1DO0FBQ3hDLFNBQU8sWUFBTTtBQUNYRCxVQUFNUSxNQUFOLEVBQWNQLFFBQWQ7QUFDRCxHQUZEO0FBR0QiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldFNldHVwRnVuY3Rpb24oe3BlbmRpbmcsIG9ubHl9KSB7XG4gIGlmIChwZW5kaW5nKSB7XG4gICAgcmV0dXJuIHhkZXNjcmliZTtcbiAgfSBlbHNlIGlmIChvbmx5KSB7XG4gICAgcmV0dXJuIGZkZXNjcmliZTtcbiAgfVxuICByZXR1cm4gZGVzY3JpYmU7XG59XG5cbmZ1bmN0aW9uIGdldFRlc3RGdW5jdGlvbih7cGVuZGluZywgb25seX0pIHtcbiAgaWYgKHBlbmRpbmcpIHtcbiAgICByZXR1cm4geGl0O1xuICB9IGVsc2UgaWYgKG9ubHkpIHtcbiAgICByZXR1cm4gZml0O1xuICB9XG4gIHJldHVybiBpdDtcbn1cblxuZnVuY3Rpb24gc2V0dXAoe1xuICBkZXNjcmlwdGlvbixcbiAgYmVmb3JlRWFjaDogYmVmb3JlRWFjaENhbGxiYWNrLFxuICBhZnRlckVhY2g6IGFmdGVyRWFjaENhbGxiYWNrLFxuICBwZW5kaW5nLFxuICBvbmx5LFxufSwgY2FsbGJhY2spIHtcbiAgZ2V0U2V0dXBGdW5jdGlvbih7cGVuZGluZywgb25seX0pKGRlc2NyaXB0aW9uLCAoKSA9PiB7XG4gICAgaWYgKGJlZm9yZUVhY2hDYWxsYmFjaykge1xuICAgICAgYmVmb3JlRWFjaChiZWZvcmVFYWNoQ2FsbGJhY2spO1xuICAgIH1cbiAgICBpZiAoYWZ0ZXJFYWNoQ2FsbGJhY2spIHtcbiAgICAgIGFmdGVyRWFjaChhZnRlckVhY2hDYWxsYmFjayk7XG4gICAgfVxuICAgIGNhbGxiYWNrKFxuICAgICAgc2V0dXAsXG4gICAgICB0ZXN0LFxuICAgICk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0ZXN0KHtkZXNjcmlwdGlvbiwgdGVzdCwgcGVuZGluZywgb25seX0pIHtcbiAgZ2V0VGVzdEZ1bmN0aW9uKHtwZW5kaW5nLCBvbmx5fSkoZGVzY3JpcHRpb24sIHRlc3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gamFzbWluZShwYXJhbXMsIGNhbGxiYWNrKSB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgc2V0dXAocGFyYW1zLCBjYWxsYmFjayk7XG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1,eval)(\"this\");\r\n} catch(e) {\r\n\t// This works if the window reference is available\r\n\tif(typeof window === \"object\")\r\n\t\tg = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzPzM2OTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar _src = __webpack_require__(0);\n\nglobal.forgiven.ui.jasmine = _src.jasmine;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8yNjQ1Il0sIm5hbWVzIjpbImdsb2JhbCIsImZvcmdpdmVuIiwidWkiLCJqYXNtaW5lIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUdBQSxPQUFPQyxRQUFQLENBQWdCQyxFQUFoQixDQUFtQkMsT0FBbkIsZ0IiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGphc21pbmUsXG59IGZyb20gJy4vc3JjJztcbmdsb2JhbC5mb3JnaXZlbi51aS5qYXNtaW5lID0gamFzbWluZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);