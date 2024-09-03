/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _this = this;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof2(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof2(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof2(o) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof2(o); }
/*
import Mellowtel from "mellowtel";

let mellowtel;
(async () => {
  mellowtel = new Mellowtel("b408b488", { disableLogs: true });
  await mellowtel.initBackground();
})();

(async () => {
  let settingsLink = await mellowtel.generateSettingsLink()
  chrome.storage.sync.set({ settingsLink: settingsLink });

})();

chrome.runtime.onInstalled.addListener(function (details) {

  if (details.reason === "install" || details.reason === "update") {
    (async () => {
      await mellowtel.generateAndOpenOptInLink();
    })();
  }

});

*/
console.log("bg script loaded");
var allowed = true;
(function () {
  function _slicedToArray(t, n) {
    return _arrayWithHoles(t) || _iterableToArrayLimit(t, n) || _unsupportedIterableToArray(t, n) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(t, n) {
    if (t) {
      if ("string" == typeof t) return _arrayLikeToArray(t, n);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(t, n) : void 0;
    }
  }
  function _arrayLikeToArray(t, n) {
    (null == n || n > t.length) && (n = t.length);
    for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
    return e;
  }
  function _iterableToArrayLimit(t, n) {
    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (null != r) {
      var e,
        o,
        u = [],
        i = !0,
        a = !1;
      try {
        for (r = r.call(t); !(i = (e = r.next()).done) && (u.push(e.value), !n || u.length !== n); i = !0);
      } catch (t) {
        a = !0, o = t;
      } finally {
        try {
          i || null == r["return"] || r["return"]();
        } finally {
          if (a) throw o;
        }
      }
      return u;
    }
  }
  function _arrayWithHoles(t) {
    if (Array.isArray(t)) return t;
  }
  function _typeof(t) {
    return _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
      return _typeof2(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
    }, _typeof(t);
  }
  !function (t, n) {
    "object" === ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? n(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
  }(_this, function (t) {
    "use strict";

    function n(t) {
      return new Promise(function (n, r) {
        t.oncomplete = t.onsuccess = function () {
          return n(t.result);
        }, t.onabort = t.onerror = function () {
          return r(t.error);
        };
      });
    }
    function r(t, r) {
      var e = indexedDB.open(t);
      e.onupgradeneeded = function () {
        return e.result.createObjectStore(r);
      };
      var o = n(e);
      return function (t, n) {
        return o.then(function (e) {
          return n(e.transaction(r, t).objectStore(r));
        });
      };
    }
    var e;
    function o() {
      return e || (e = r("keyval-store", "keyval")), e;
    }
    function u(t, r) {
      return t.openCursor().onsuccess = function () {
        this.result && (r(this.result), this.result["continue"]());
      }, n(t.transaction);
    }
    t.clear = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o();
      return t("readwrite", function (t) {
        return t.clear(), n(t.transaction);
      });
    }, t.createStore = r, t.del = function (t) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o();
      return r("readwrite", function (r) {
        return r["delete"](t), n(r.transaction);
      });
    }, t.delMany = function (t) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o();
      return r("readwrite", function (r) {
        return t.forEach(function (t) {
          return r["delete"](t);
        }), n(r.transaction);
      });
    }, t.entries = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o();
      return t("readonly", function (r) {
        if (r.getAll && r.getAllKeys) return Promise.all([n(r.getAllKeys()), n(r.getAll())]).then(function (t) {
          var n = _slicedToArray(t, 2),
            r = n[0],
            e = n[1];
          return r.map(function (t, n) {
            return [t, e[n]];
          });
        });
        var e = [];
        return t("readonly", function (t) {
          return u(t, function (t) {
            return e.push([t.key, t.value]);
          }).then(function () {
            return e;
          });
        });
      });
    }, t.get = function (t) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o();
      return r("readonly", function (r) {
        return n(r.get(t));
      });
    }, t.getMany = function (t) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o();
      return r("readonly", function (r) {
        return Promise.all(t.map(function (t) {
          return n(r.get(t));
        }));
      });
    }, t.keys = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o();
      return t("readonly", function (t) {
        if (t.getAllKeys) return n(t.getAllKeys());
        var r = [];
        return u(t, function (t) {
          return r.push(t.key);
        }).then(function () {
          return r;
        });
      });
    }, t.promisifyRequest = n, t.set = function (t, r) {
      var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o();
      return e("readwrite", function (e) {
        return e.put(r, t), n(e.transaction);
      });
    }, t.setMany = function (t) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o();
      return r("readwrite", function (r) {
        return t.forEach(function (t) {
          return r.put(t[1], t[0]);
        }), n(r.transaction);
      });
    }, t.update = function (t, r) {
      var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o();
      return e("readwrite", function (e) {
        return new Promise(function (o, u) {
          e.get(t).onsuccess = function () {
            try {
              e.put(r(this.result), t), o(n(e.transaction));
            } catch (t) {
              u(t);
            }
          };
        });
      });
    }, t.values = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o();
      return t("readonly", function (t) {
        if (t.getAll) return n(t.getAll());
        var r = [];
        return u(t, function (t) {
          return r.push(t.value);
        }).then(function () {
          return r;
        });
      });
    }, Object.defineProperty(t, "__esModule", {
      value: !0
    });
  });
})();
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
}
function isSiteViable() {
  return _isSiteViable.apply(this, arguments);
}
function _isSiteViable() {
  _isSiteViable = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var tabs;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return chrome.tabs.query({
            active: true,
            currentWindow: true
          });
        case 2:
          tabs = _context2.sent;
          if (!(!tabs || !tabs.length || tabs[0].id < 0)) {
            _context2.next = 5;
            break;
          }
          return _context2.abrupt("return");
        case 5:
          return _context2.abrupt("return", tabs[0]);
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _isSiteViable.apply(this, arguments);
}
function isBlockingOn() {
  return _isBlockingOn.apply(this, arguments);
}
function _isBlockingOn() {
  _isBlockingOn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var mTab, blockStatus;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return isSiteViable();
        case 3:
          mTab = _context3.sent;
          if (mTab.url.startsWith("http")) {
            _context3.next = 6;
            break;
          }
          return _context3.abrupt("return", noIcon());
        case 6:
          _context3.next = 8;
          return chrome.tabs.sendMessage(mTab.id, {
            action: "getStatus"
          });
        case 8:
          blockStatus = _context3.sent;
          console.log("blocking status: ", blockStatus);
          blockStatus ? onIcon() : offIcon();
          _context3.next = 17;
          break;
        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          console.log("blocking status error");
        case 17:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 13]]);
  }));
  return _isBlockingOn.apply(this, arguments);
}
function toggleBlocker(_x) {
  return _toggleBlocker.apply(this, arguments);
}
function _toggleBlocker() {
  _toggleBlocker = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(mTabID) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return chrome.tabs.sendMessage(mTabID, {
            action: "toggle",
            status: allowed
          });
        case 3:
          return _context4.abrupt("return", _context4.sent);
        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](0);
          console.log("toggle error");
        case 9:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 6]]);
  }));
  return _toggleBlocker.apply(this, arguments);
}
function forceInjectCS(_x2) {
  return _forceInjectCS.apply(this, arguments);
}
function _forceInjectCS() {
  _forceInjectCS = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(mTab) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return chrome.scripting.executeScript({
            files: ["content_script.js"],
            target: {
              tabId: mTab.id
            }
          });
        case 3:
          _context5.next = 9;
          break;
        case 5:
          _context5.prev = 5;
          _context5.t0 = _context5["catch"](0);
          console.log("the webpage is probably forbidding script injection");
          noIcon();
        case 9:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 5]]);
  }));
  return _forceInjectCS.apply(this, arguments);
}
chrome.action.onClicked.addListener( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var mTab, res;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.prev = 0;
        _context.next = 3;
        return isSiteViable();
      case 3:
        mTab = _context.sent;
        _context.next = 6;
        return toggleBlocker(mTab.id);
      case 6:
        res = _context.sent;
        if (res) {
          _context.next = 12;
          break;
        }
        _context.next = 10;
        return forceInjectCS(mTab);
      case 10:
        _context.next = 12;
        return toggleBlocker(mTab.id);
      case 12:
        _context.next = 17;
        break;
      case 14:
        _context.prev = 14;
        _context.t0 = _context["catch"](0);
        console.log("icon click error");
      case 17:
      case "end":
        return _context.stop();
    }
  }, _callee, null, [[0, 14]]);
})));
chrome.tabs.onActivated.addListener(function (tabId, changeInfo, tab) {
  isBlockingOn();
});
chrome.tabs.onUpdated.addListener(function (msg, sender, res) {
  isBlockingOn();
});
chrome.runtime.onMessage.addListener(function (msg, sender, res) {
  if (msg.action == "blockStatusCS") msg.blocking ? onIcon() : offIcon();
});
isBlockingOn();

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/background.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=background.js.map