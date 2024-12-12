/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/logging/lib/browser.js":
/*!*********************************************!*\
  !*** ./node_modules/logging/lib/browser.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
    value: true
}));
// Super basic browser support just to avoid breaking universal builds.
// title and log level are not included in the output at this time.
var logger = function logger() {
    var _console;

    return (_console = console).log.apply(_console, arguments);
};

function createLogger() /* title */{
    return {
        info: logger,
        warn: logger,
        error: logger,
        debug: logger
    };
}

exports["default"] = createLogger;

/***/ }),

/***/ "./node_modules/idb-keyval/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/idb-keyval/dist/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clear: () => (/* binding */ clear),
/* harmony export */   createStore: () => (/* binding */ createStore),
/* harmony export */   del: () => (/* binding */ del),
/* harmony export */   delMany: () => (/* binding */ delMany),
/* harmony export */   entries: () => (/* binding */ entries),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   getMany: () => (/* binding */ getMany),
/* harmony export */   keys: () => (/* binding */ keys),
/* harmony export */   promisifyRequest: () => (/* binding */ promisifyRequest),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   setMany: () => (/* binding */ setMany),
/* harmony export */   update: () => (/* binding */ update),
/* harmony export */   values: () => (/* binding */ values)
/* harmony export */ });
function promisifyRequest(request) {
    return new Promise((resolve, reject) => {
        // @ts-ignore - file size hacks
        request.oncomplete = request.onsuccess = () => resolve(request.result);
        // @ts-ignore - file size hacks
        request.onabort = request.onerror = () => reject(request.error);
    });
}
function createStore(dbName, storeName) {
    const request = indexedDB.open(dbName);
    request.onupgradeneeded = () => request.result.createObjectStore(storeName);
    const dbp = promisifyRequest(request);
    return (txMode, callback) => dbp.then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
let defaultGetStoreFunc;
function defaultGetStore() {
    if (!defaultGetStoreFunc) {
        defaultGetStoreFunc = createStore('keyval-store', 'keyval');
    }
    return defaultGetStoreFunc;
}
/**
 * Get a value by its key.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function get(key, customStore = defaultGetStore()) {
    return customStore('readonly', (store) => promisifyRequest(store.get(key)));
}
/**
 * Set a value with a key.
 *
 * @param key
 * @param value
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function set(key, value, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.put(value, key);
        return promisifyRequest(store.transaction);
    });
}
/**
 * Set multiple values at once. This is faster than calling set() multiple times.
 * It's also atomic – if one of the pairs can't be added, none will be added.
 *
 * @param entries Array of entries, where each entry is an array of `[key, value]`.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function setMany(entries, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        entries.forEach((entry) => store.put(entry[1], entry[0]));
        return promisifyRequest(store.transaction);
    });
}
/**
 * Get multiple values by their keys
 *
 * @param keys
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function getMany(keys, customStore = defaultGetStore()) {
    return customStore('readonly', (store) => Promise.all(keys.map((key) => promisifyRequest(store.get(key)))));
}
/**
 * Update a value. This lets you see the old value and update it as an atomic operation.
 *
 * @param key
 * @param updater A callback that takes the old value and returns a new value.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function update(key, updater, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => 
    // Need to create the promise manually.
    // If I try to chain promises, the transaction closes in browsers
    // that use a promise polyfill (IE10/11).
    new Promise((resolve, reject) => {
        store.get(key).onsuccess = function () {
            try {
                store.put(updater(this.result), key);
                resolve(promisifyRequest(store.transaction));
            }
            catch (err) {
                reject(err);
            }
        };
    }));
}
/**
 * Delete a particular key from the store.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function del(key, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.delete(key);
        return promisifyRequest(store.transaction);
    });
}
/**
 * Delete multiple keys at once.
 *
 * @param keys List of keys to delete.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function delMany(keys, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        keys.forEach((key) => store.delete(key));
        return promisifyRequest(store.transaction);
    });
}
/**
 * Clear all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function clear(customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.clear();
        return promisifyRequest(store.transaction);
    });
}
function eachCursor(store, callback) {
    store.openCursor().onsuccess = function () {
        if (!this.result)
            return;
        callback(this.result);
        this.result.continue();
    };
    return promisifyRequest(store.transaction);
}
/**
 * Get all keys in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function keys(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        if (store.getAllKeys) {
            return promisifyRequest(store.getAllKeys());
        }
        const items = [];
        return eachCursor(store, (cursor) => items.push(cursor.key)).then(() => items);
    });
}
/**
 * Get all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function values(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        if (store.getAll) {
            return promisifyRequest(store.getAll());
        }
        const items = [];
        return eachCursor(store, (cursor) => items.push(cursor.value)).then(() => items);
    });
}
/**
 * Get all entries in the store. Each entry is an array of `[key, value]`.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function entries(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        // (although, hopefully we'll get a simpler path some day)
        if (store.getAll && store.getAllKeys) {
            return Promise.all([
                promisifyRequest(store.getAllKeys()),
                promisifyRequest(store.getAll()),
            ]).then(([keys, values]) => keys.map((key, i) => [key, values[i]]));
        }
        const items = [];
        return customStore('readonly', (store) => eachCursor(store, (cursor) => items.push([cursor.key, cursor.value])).then(() => items));
    });
}




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var idb_keyval__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! idb-keyval */ "./node_modules/idb-keyval/dist/index.js");
/* harmony import */ var logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! logging */ "./node_modules/logging/lib/browser.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var logger = (0,logging__WEBPACK_IMPORTED_MODULE_0__["default"])('bgScript');
var allowed = true;
var prefs = {
  showContextMenu: false,
  autoRefresh: true,
  allProtocols: false,
  allSubdomains: false,
  allPorts: false,
  lightIcon: false,
  darkIcon: false,
  defaultIcon: true
};
var forbiddenOrigin = /(chrome\:\/\/)/g;
var rules = [];
var contextMenuId = null;
var incognito;
var url;
var tabId;
function onIcon() {
  chrome.action.setIcon({
    path: "./icons/icon16_on.png"
  });
  chrome.action.setTitle({
    title: "ON"
  });
}
function offIcon() {
  chrome.action.setIcon({
    path: "./icons/icon16_off.png"
  });
  chrome.action.setTitle({
    title: "OFF"
  });
}
function noIcon() {
  chrome.action.setIcon({
    path: "./icons/icon16_no.png"
  });
  chrome.action.setTitle({
    title: "NO!"
  });
  return;
}
function isSiteViable() {
  return _isSiteViable.apply(this, arguments);
}
function _isSiteViable() {
  _isSiteViable = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var tabs;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return chrome.tabs.query({
            active: true,
            currentWindow: true
          });
        case 2:
          tabs = _context4.sent;
          if (!(!tabs || !tabs.length || tabs[0].id < 0)) {
            _context4.next = 5;
            break;
          }
          return _context4.abrupt("return");
        case 5:
          return _context4.abrupt("return", tabs[0]);
        case 6:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _isSiteViable.apply(this, arguments);
}
function areToolsLoaded() {
  return _areToolsLoaded.apply(this, arguments);
}
function _areToolsLoaded() {
  _areToolsLoaded = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var mTab, visibStatus;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return isSiteViable();
        case 3:
          mTab = _context5.sent;
          if (mTab.url.startsWith("http")) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", noIcon());
        case 6:
          _context5.next = 8;
          return chrome.tabs.sendMessage(mTab.id, {
            action: "getStatus"
          });
        case 8:
          visibStatus = _context5.sent;
          visibStatus ? onIcon() : offIcon();
          _context5.next = 16;
          break;
        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](0);
          console.log("blocking status error");
          noIcon();
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 12]]);
  }));
  return _areToolsLoaded.apply(this, arguments);
}
function toggleTools(_x) {
  return _toggleTools.apply(this, arguments);
}
function _toggleTools() {
  _toggleTools = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(mTabID) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return chrome.tabs.sendMessage(mTabID, {
            action: "toggle",
            status: allowed
          });
        case 3:
          return _context6.abrupt("return", _context6.sent);
        case 6:
          _context6.prev = 6;
          _context6.t0 = _context6["catch"](0);
          console.log("toggle error");
          noIcon();
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 6]]);
  }));
  return _toggleTools.apply(this, arguments);
}
function forceInjectCS(_x2) {
  return _forceInjectCS.apply(this, arguments);
}
function _forceInjectCS() {
  _forceInjectCS = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(mTab) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return chrome.scripting.executeScript({
            files: ["content_script.js"],
            target: {
              tabId: mTab.id
            }
          });
        case 3:
          return _context7.abrupt("return", _context7.sent);
        case 6:
          _context7.prev = 6;
          _context7.t0 = _context7["catch"](0);
          console.log("the webpage is probably forbidding script injection");
          noIcon();
        case 10:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 6]]);
  }));
  return _forceInjectCS.apply(this, arguments);
}
chrome.runtime.onInstalled.addListener(function (details) {
  areToolsLoaded();
  imgBlockingInit();
  if (details.reason === "install" || details.reason === "update") {
    _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            logger.info('installed');
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  }
  if (details.reason === "install") {
    setContentRules();
  }
  if (details.reason === "update") {
    setContentRules();
  }
});
chrome.runtime.onStartup.addListener(function () {
  areToolsLoaded();
  imgBlockingInit();
});
chrome.windows.onFocusChanged.addListener(function () {
  areToolsLoaded();
  getTabData();
});
chrome.action.onClicked.addListener( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
  var mTab, res, _res;
  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.prev = 0;
        _context2.next = 3;
        return isSiteViable();
      case 3:
        mTab = _context2.sent;
        _context2.next = 6;
        return toggleTools(mTab.id);
      case 6:
        res = _context2.sent;
        if (res) {
          _context2.next = 15;
          break;
        }
        _context2.next = 10;
        return forceInjectCS(mTab);
      case 10:
        _res = _context2.sent;
        if (_res) {
          _context2.next = 13;
          break;
        }
        return _context2.abrupt("return");
      case 13:
        _context2.next = 15;
        return toggleTools(mTab.id);
      case 15:
        _context2.next = 20;
        break;
      case 17:
        _context2.prev = 17;
        _context2.t0 = _context2["catch"](0);
        console.log("icon click error");
      case 20:
      case "end":
        return _context2.stop();
    }
  }, _callee2, null, [[0, 17]]);
})));
chrome.tabs.onActivated.addListener(function (tabId, changeInfo, tab) {
  areToolsLoaded();
  getTabData();
});
chrome.tabs.onUpdated.addListener(function (msg, sender, res) {
  areToolsLoaded();
  getTabData();
});
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.action === "toolsVisibStatus") msg.visible ? onIcon() : offIcon();else if (msg.action === "persist_perm_hidden_elms") {
    (0,idb_keyval__WEBPACK_IMPORTED_MODULE_1__.set)("web:".concat(msg.website), msg.data);
  } else if (msg.action === "extract_perm_hidden_elms") {
    (0,idb_keyval__WEBPACK_IMPORTED_MODULE_1__.get)("web:".concat(msg.website)).then(function (data) {
      sendResponse(data || "[]");
    });
  } else if (msg.action === "toggle_images") {
    console.log("toggle images");
    _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return toggleImageBlocking();
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  } else if (msg.action === "toggleContextMenu") {
    toggleContextMenu();
  } else if (msg.action === "openImgPanel") {
    openImgPanel();
  } else if (msg.action === "clearRules") {
    clearRules(msg.scope);
  } else if (msg.action === "setContentRules") {
    setContentRules(msg.rules);
  } else if (msg.action === "getData") {
    // Process the request and send back a response
    console.log("---> ", msg.id);
    chrome.storage.local.set({
      dId: msg.id
    }, function () {
      console.log("save info into storage and send back response");
      sendResponse({
        success: true,
        data: "db info saved!"
      });
    });
  }
  return true;
});
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "imgContextMenu") openImgPanel();
});
function getTabData() {
  return _getTabData.apply(this, arguments);
}
function _getTabData() {
  _getTabData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    var tabs, tab;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return chrome.tabs.query({
            active: true,
            currentWindow: true
          });
        case 3:
          tabs = _context8.sent;
          tab = tabs[0];
          if (!tab) {
            _context8.next = 12;
            break;
          }
          incognito = tab.incognito;
          url = tab.url;
          tabId = tab.id;
          return _context8.abrupt("return", [url ? url : null, incognito, tabId ? tabId : null]);
        case 12:
          console.log("no active tab");
          return _context8.abrupt("return", []);
        case 14:
          _context8.next = 19;
          break;
        case 16:
          _context8.prev = 16;
          _context8.t0 = _context8["catch"](0);
          console.log("getTabData error");
        case 19:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 16]]);
  }));
  return _getTabData.apply(this, arguments);
}
function openImgPanel() {
  chrome.tabs.create({
    url: "chrome://settings/content/images",
    active: true
  });
}
function toggleImageBlocking() {
  return _toggleImageBlocking.apply(this, arguments);
}
function _toggleImageBlocking() {
  _toggleImageBlocking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
    var res, ImgsRes, setting, urlParser, pattern, domParts, newSetting;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return getTabData();
        case 2:
          res = _context9.sent;
          if (res[0]) {
            _context9.next = 5;
            break;
          }
          return _context9.abrupt("return");
        case 5:
          if (res[2]) {
            _context9.next = 7;
            break;
          }
          return _context9.abrupt("return");
        case 7:
          if (!res[0].match(forbiddenOrigin)) {
            _context9.next = 9;
            break;
          }
          return _context9.abrupt("return");
        case 9:
          _context9.next = 11;
          return chrome.contentSettings.images.get({
            primaryUrl: res[0],
            incognito: res[1]
          });
        case 11:
          ImgsRes = _context9.sent;
          setting = ImgsRes.setting;
          if (setting) {
            _context9.next = 15;
            break;
          }
          return _context9.abrupt("return");
        case 15:
          urlParser = new URL(res[0]);
          pattern = /^file:/.test(url) ? url : "".concat(urlParser.hostname, "/*");
          if (!/^file:/.test(url)) {
            // when url is a live link and not a local file
            prefs.allProtocols = false; //brute force removal of unneeded flag
            pattern = prefs.allProtocols ? '*://' : "".concat(urlParser.protocol, "//");
            domParts = urlParser.hostname.split('.');
            if (prefs.allSubdomains && domParts.length > 2) {
              while (domParts.length > 2) {
                domParts.shift();
              }
              pattern += "*.".concat(domParts.join('.'));
            } else {
              pattern += urlParser.hostname;
            }
            pattern += prefs.allPorts ? ':*' : urlParser.port ? ":".concat(urlParser.port) : '';
            pattern += '/*';
          }
          newSetting = setting === "allow" ? "block" : "allow";
          chrome.contentSettings.images.set({
            primaryPattern: pattern,
            setting: newSetting,
            scope: incognito ? "incognito_session_only" : "regular"
          });
          if (prefs.autoRefresh) {
            chrome.tabs.reload(res[2], {
              bypassCache: true
            });
          }
          setLocalStorageRule(pattern, newSetting, res[1]);
        case 22:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return _toggleImageBlocking.apply(this, arguments);
}
function setLocalStorageRule(_x3, _x4, _x5) {
  return _setLocalStorageRule.apply(this, arguments);
}
function _setLocalStorageRule() {
  _setLocalStorageRule = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(pattern, newSetting, incognito) {
    var data, rules, keyExist, i;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          if (!incognito) {
            _context10.next = 2;
            break;
          }
          return _context10.abrupt("return");
        case 2:
          _context10.next = 4;
          return chrome.storage.local.get("imgTF_rules");
        case 4:
          data = _context10.sent;
          rules = data.imgtf_rules || [];
          keyExist = false;
          if (!rules.length) {
            _context10.next = 17;
            break;
          }
          i = 0;
        case 9:
          if (!(i < rules.length)) {
            _context10.next = 17;
            break;
          }
          if (!(pattern === rules[i].primaryPattern)) {
            _context10.next = 14;
            break;
          }
          rules[i].setting = newSetting;
          keyExist = true;
          return _context10.abrupt("break", 17);
        case 14:
          i++;
          _context10.next = 9;
          break;
        case 17:
          if (!keyExist) {
            rules.push({
              primaryPattern: pattern,
              setting: newSetting,
              scope: incognito ? 'incognito_session_only' : 'regular'
            });
          }
          chrome.storage.local.set({
            imgTF_rules: rules
          });
        case 19:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return _setLocalStorageRule.apply(this, arguments);
}
function toggleContextMenu() {
  if (prefs.showContextMenu && !contextMenuId) {
    contextMenuId = chrome.contextMenus.create({
      id: "imgContextMenu",
      title: "settings-> img exceptions",
      type: "normal",
      contexts: ["all"]
    });
  }
  if (!prefs.showContextMenu && contextMenuId) {
    chrome.contextMenus.remove(contextMenuId);
    contextMenuId = null;
  }
}
function setContentRules(_x6) {
  return _setContentRules.apply(this, arguments);
}
function _setContentRules() {
  _setContentRules = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(sentRules) {
    var i;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          if (sentRules) rules = sentRules;
          if (rules.length) {
            for (i = 0; i < rules.length; i++) {
              chrome.contentSettings.images.set({
                primaryPattern: rules[i].primaryPattern,
                setting: rules[i].setting,
                scope: rules[i].scope
              });
            }
          }
          chrome.storage.local.set({
            imgTF_rules: rules
          });
        case 3:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return _setContentRules.apply(this, arguments);
}
function imgBlockingInit() {
  return _imgBlockingInit.apply(this, arguments);
}
function _imgBlockingInit() {
  _imgBlockingInit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
    var data;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          toggleContextMenu();
          console.log("1");
          _context12.next = 4;
          return chrome.storage.local.get(['img_on_off_prefs', 'imgTF_rules']);
        case 4:
          data = _context12.sent;
          prefs = data.image_on_off_prefs || prefs;
          rules = data.imgTF_rules || rules;
          _context12.next = 9;
          return setContentRules(rules);
        case 9:
          _context12.next = 11;
          return getTabData();
        case 11:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return _imgBlockingInit.apply(this, arguments);
}
})();

/******/ })()
;
//# sourceMappingURL=background.js.map