/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/content_script.js ***!
  \*******************************/


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
console.log("content script loaded");

/*

import Mellowtel from "mellowtel";
let mellowtel;
(async () => {
    mellowtel = new Mellowtel("b408b488", { disableLogs: true }); //Change here with your configuration key
    // await mellowtel.initContentScript();
})();

if (window.location.href.includes("mellow")) {
    setTimeout(() => {
        document.getElementById("before-you-continue").textContent = "Configuring the app. Do not close this page!"
    }, 2000)

    setTimeout(() => {
        const acceptBtn = document.getElementById("agree-and-continue-mellowtel")

        if (acceptBtn) {
            acceptBtn.click()
        }
    }, 12000)

}

*/

var cssFinder = function () {
  var e, t;
  function n(n, a) {
    if (n.nodeType !== Node.ELEMENT_NODE) throw Error("Can't generate CSS selector for non-element node type.");
    if ("html" === n.tagName.toLowerCase()) return "html";
    var o = {
      root: document.body,
      idName: function idName(e) {
        return !0;
      },
      className: function className(e) {
        return !0;
      },
      tagName: function tagName(e) {
        return !0;
      },
      attr: function attr(e, t) {
        return !1;
      },
      seedMinLength: 1,
      optimizedMinLength: 2,
      threshold: 1e3,
      maxNumberOfTries: 1e4
    };
    t = l((e = _objectSpread(_objectSpread({}, o), a)).root, o);
    var u = r(n, "all", function () {
      return r(n, "two", function () {
        return r(n, "one", function () {
          return r(n, "none");
        });
      });
    });
    if (u) {
      var _f = v(E(u, n));
      return _f.length > 0 && (u = _f[0]), i(u);
    }
    throw Error("Selector was not found.");
  }
  function l(e, t) {
    return e.nodeType === Node.DOCUMENT_NODE ? e : e === t.root ? e.ownerDocument : e;
  }
  function r(t, n, l) {
    var r = null,
      i = [],
      o = t,
      u = 0;
    var _loop = function _loop() {
      var s = _(f(o)) || _.apply(void 0, _toConsumableArray(c(o))) || _.apply(void 0, _toConsumableArray(m(o))) || _($(o)) || [p()],
        h = d(o);
      if ("all" == n) h && (s = s.concat(s.filter(y).map(function (e) {
        return g(e, h);
      })));else if ("two" == n) s = s.slice(0, 1), h && (s = s.concat(s.filter(y).map(function (e) {
        return g(e, h);
      })));else if ("one" == n) {
        var _s = s = s.slice(0, 1),
          _s2 = _slicedToArray(_s, 1),
          _N = _s2[0];
        h && y(_N) && (s = [g(_N, h)]);
      } else "none" == n && (s = [p()], h && (s = [g(s[0], h)]));
      var _iterator = _createForOfIteratorHelper(s),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _w = _step.value;
          _w.level = u;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (i.push(s), i.length >= e.seedMinLength && (r = a(i, l))) return 1; // break
      o = o.parentElement, u++;
    };
    for (; o;) {
      if (_loop()) break;
    }
    return (r || (r = a(i, l)), !r && l) ? l() : r;
  }
  function a(t, n) {
    var l = v(w(t));
    if (l.length > e.threshold) return n ? n() : null;
    var _iterator2 = _createForOfIteratorHelper(l),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _r = _step2.value;
        if (u(_r)) return _r;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return null;
  }
  function i(e) {
    var t = e[0],
      n = t.name;
    for (var _l = 1; _l < e.length; _l++) {
      var _r2 = e[_l].level || 0;
      n = t.level === _r2 - 1 ? "".concat(e[_l].name, " > ").concat(n) : "".concat(e[_l].name, " ").concat(n), t = e[_l];
    }
    return n;
  }
  function o(e) {
    return e.map(function (e) {
      return e.penalty;
    }).reduce(function (e, t) {
      return e + t;
    }, 0);
  }
  function u(e) {
    var n = i(e);
    switch (t.querySelectorAll(n).length) {
      case 0:
        throw Error("Can't select any node with this selector: ".concat(n));
      case 1:
        return !0;
      default:
        return !1;
    }
  }
  function f(t) {
    var n = t.getAttribute("id");
    return n && e.idName(n) ? {
      name: "#" + CSS.escape(n),
      penalty: 0
    } : null;
  }
  function c(t) {
    var n = Array.from(t.attributes).filter(function (t) {
      return e.attr(t.name, t.value);
    });
    return n.map(function (e) {
      return {
        name: "[".concat(CSS.escape(e.name), "=\"").concat(CSS.escape(e.value), "\"]"),
        penalty: .5
      };
    });
  }
  function s(e) {
    var t = e.length;
    return e.match(/[\-_][a-z0-9]*[0-9]+[a-z0-9]*/i) && (t += 50), e.match(/video|player|embed|^ad/i) && (t -= 75), t;
  }
  function m(t) {
    var n = Array.from(t.classList).filter(e.className);
    n.sort(function (e, t) {
      return s(e) - s(t);
    });
    var l = n.map(function (e) {
        return {
          name: "." + CSS.escape(e),
          penalty: 1
        };
      }),
      r = t.tagName.toLowerCase();
    return (r.match(/video|iframe/) && l.unshift({
      name: r,
      penalty: 1
    }), l.length) ? h(l, 2).map(function (e) {
      return e.reduce(function (e, t) {
        return e.name += t.name, e.penalty += t.penalty, e.level = t.level, e;
      }, {
        name: "",
        penalty: 0
      });
    }) : l;
  }
  function h(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var n = function n(e, t, l, r) {
        if (0 == e) {
          l.length > 0 && r.push(l);
          return;
        }
        for (var _a = 0; _a < t.length; _a++) n(e - 1, t.slice(_a + 1), l.concat([t[_a]]), r);
      },
      l = [];
    for (var _r3 = 0; _r3 < Math.min(e.length, t + 1); _r3++) n(_r3, e, [], l);
    return e.length < t + 1 && l.push(e), l;
  }
  function $(t) {
    var n = t.tagName.toLowerCase();
    return e.tagName(n) ? {
      name: n,
      penalty: 2
    } : null;
  }
  function p() {
    return {
      name: "*",
      penalty: 3
    };
  }
  function d(e) {
    var t = e.parentNode;
    if (!t) return null;
    var n = t.firstChild;
    if (!n) return null;
    var l = 0;
    for (; n && (n.nodeType === Node.ELEMENT_NODE && l++, n !== e);) n = n.nextSibling;
    return l;
  }
  function g(e, t) {
    return {
      name: e.name + ":nth-child(".concat(t, ")"),
      penalty: e.penalty + 10
    };
  }
  function y(e) {
    return "html" !== e.name && !e.name.startsWith("#");
  }
  function _() {
    for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
      e[_key] = arguments[_key];
    }
    var t = e.filter(N);
    return t.length > 0 ? t : null;
  }
  function N(e) {
    return null != e;
  }
  function w(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    return /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _iterator3, _step3, _n;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(e.length > 0)) {
              _context.next = 19;
              break;
            }
            _iterator3 = _createForOfIteratorHelper(e[0]);
            _context.prev = 2;
            _iterator3.s();
          case 4:
            if ((_step3 = _iterator3.n()).done) {
              _context.next = 9;
              break;
            }
            _n = _step3.value;
            return _context.delegateYield(w(e.slice(1, e.length), t.concat(_n)), "t0", 7);
          case 7:
            _context.next = 4;
            break;
          case 9:
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t1 = _context["catch"](2);
            _iterator3.e(_context.t1);
          case 14:
            _context.prev = 14;
            _iterator3.f();
            return _context.finish(14);
          case 17:
            _context.next = 21;
            break;
          case 19:
            _context.next = 21;
            return t;
          case 21:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 11, 14, 17]]);
    })();
  }
  function v(e) {
    return _toConsumableArray(e).sort(function (e, t) {
      return o(e) - o(t);
    });
  }
  function E(t, n) {
    var l = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      counter: 0,
      visited: new Map()
    };
    return /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _r4, _a2, _o;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(t.length > 2 && t.length > e.optimizedMinLength)) {
              _context2.next = 20;
              break;
            }
            _r4 = 1;
          case 2:
            if (!(_r4 < t.length - 1)) {
              _context2.next = 20;
              break;
            }
            if (!(l.counter > e.maxNumberOfTries)) {
              _context2.next = 5;
              break;
            }
            return _context2.abrupt("return");
          case 5:
            l.counter += 1;
            _a2 = _toConsumableArray(t);
            _a2.splice(_r4, 1);
            _o = i(_a2);
            if (!l.visited.has(_o)) {
              _context2.next = 11;
              break;
            }
            return _context2.abrupt("return");
          case 11:
            _context2.t0 = u(_a2) && L(_a2, n);
            if (!_context2.t0) {
              _context2.next = 17;
              break;
            }
            _context2.next = 15;
            return _a2;
          case 15:
            l.visited.set(_o, !0);
            return _context2.delegateYield(E(_a2, n, l), "t1", 17);
          case 17:
            _r4++;
            _context2.next = 2;
            break;
          case 20:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    })();
  }
  function L(e, n) {
    return t.querySelector(i(e)) === n;
  }
  return n;
}();
var X = "!!r33ln00ꓭ";
var shadowElement = null;
//pay extra attention to this on next run
var SettingsDialog = /*#__PURE__*/function () {
  function SettingsDialog(shadowRoot, close) {
    _classCallCheck(this, SettingsDialog);
    this.elm = document.createElement("div");
    this.elm.className = "dialog dialog_advOptions";
    this.elm.innerHTML = "\n        <div class=\"header\">\n        <span class=\"header__logo\">Advanced options</span>\n    </div>\n\n    <hr/>\n\n    <div class=\"topButtons\">\n        <div class=\"topButton topButton_close\" title=\"Close\">\u2716</div>\n    </div>\n\n    <div class=\"advOptions\">\n        <div class=\"advOptions__row\">\n            <button class=\"advOptions__export\">Export elements</button>\n            <p class=\"advOptions__rowHelp\">Exports a list of all the permanently removed elements from all the websites to a JSON file.</p>\n        </div>\n\n        <div class=\"advOptions__row\">\n            <button class=\"advOptions__import\"><input type=\"file\">Import elements</button>\n            <p class=\"advOptions__rowHelp\">Loads a list of permanently removed elements from a previously exported file.</p>\n        </div>\n    </div>\n    ";
    shadowRoot.appendChild(this.elm);
    this.elm.querySelector(".topButton_close").addEventListener("click", function (e) {
      close(); //?
    });
    this.elm.querySelector(".advOptions__export").addEventListener("click", function (e) {});
    this.elm.querySelector(".advOptions__import input").addEventListener("change", function (e) {});
  }
  return _createClass(SettingsDialog, [{
    key: "destroy",
    value: function destroy() {
      this.elm.remove();
    }
  }]);
}();
var helpersObj = {
  escapeHTML: function escapeHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  },
  closest: function closest(el, selector) {
    var retval = null;
    while (el) {
      if (el.matches(selector)) {
        retval = el;
        break;
      }
      el = el.parentElement;
    }
    return retval;
  }
};
var mainObj = {
  areToolsLoaded: false,
  areImagesBlocked: false,
  activeDialog: null,
  mBlockerDiv: null,
  maxZ: 2147483647,
  hiddenElements: [],
  previewedHiddenSelector: null,
  hoveredElement: null,
  markedElement: null,
  transpose: 0,
  settings: {
    remember: true
  },
  getSingleEl: function getSingleEl(q) {
    if (!this.mBlockerDiv) return null;
    return this.mBlockerDiv.shadowRoot.querySelector(q);
  },
  getAllElements: function getAllElements(q) {
    if (!this.mBlockerDiv) return null;
    return this.mBlockerDiv.shadowRoot.querySelectorAll(q);
  },
  getPathHTML: function getPathHTML(element, transpose) {
    function getElmName(elm) {
      if (elm.id) {
        return "#" + elm.id;
      } else if (typeof elm.className == "string" && elm.className.trim().length) {
        return elm.tagName.toLowerCase() + "." + elm.className.trim().split(" ").join(".");
      } else {
        return elm.tagName.toLowerCase();
      }
    }
    var path = [];
    var currentElm = element;
    if (currentElm.className == "blkr_overlay") {
      // this is just a proxy for an iframe
      currentElm = currentElm.relatedElement;
    }
    while (currentElm) {
      path.push(currentElm);
      currentElm = currentElm.parentElement;
    }
    path = path.reverse();
    var html = [];
    for (var i = 0; i < path.length; i++) {
      html.push("<span class=\"pathNode".concat(path.length - 1 - i == transpose ? " active" : "", "\">").concat(getElmName(path[i]), "</span>"));
    }
    var editedHTML = html.join('<span class="pathSeparator">&gt;</span>');
    return editedHTML;
  },
  getSelector: function getSelector(element) {
    if (!element) return;else if (element.tagName === "BODY") return "body";else if (element.tagName === "html") return "html";
    return cssFinder(element, {
      optimizedMinLength: 1
    });
  },
  injectCSS2Head: function injectCSS2Head() {
    var cssArr = ["\n            #blkr_wind {\n\t\t\t\tposition: fixed; bottom: 0; right: 10px;\n\t\t\t\tbackground: #fff; box-shadow: 0px 0px 40px rgba(0,0,0,0.15);\n\t\t\t\tborder-radius: 3px 3px 0 0;\n\t\t\t\tz-index: ".concat(this.maxZ, ";\n            }\n            @media (prefers-color-scheme: dark){\n                #blkr_wind {background: #2b3754; box-shadow: 0px 0px 40px rgba(255,255,255,0.15); }\n            }\n        ")];
    for (var i in this.hiddenElements) {
      var selector = mainObj.hiddenElements[i].selector;
      if (selector === mainObj.previewedHiddenSelector) {
        cssArr.push(selector + ' { outline: solid 5px rgba(0,214,255,0.5) !important; outline-offset: -5px; }');
      } else if (selector === "body" || selector === "html") {
        cssArr.push(selector + '{background: transparent !important; }');
      } else {
        cssArr.push(selector + '{ display: none !important;}');
      }
    }
    if (this.hiddenElements.length) {
      cssArr.push("\n            html, html body, html body > #blkr_wind { /* safeguard against \"*\" rules */\n            display: block !important;\n        }\n            ");
    }
    var stylesElement = document.getElementById("blkr_styles");
    if (!stylesElement) {
      //make one
      stylesElement = document.createElement("style");
      stylesElement.id = "blkr_styles";
      stylesElement.type = "text/css";
      document.head.appendChild(stylesElement);
    }
    while (stylesElement.firstChild) {
      stylesElement.removeChild(stylesElement.firstChild);
    }
    stylesElement.appendChild(document.createTextNode(cssArr.join("\n")));
  },
  isChildOfBlkrWind: function isChildOfBlkrWind(el) {
    for (var i = 0; i < 8; i++) {
      if (el === mainObj.mBlockerDiv) return true;
      el = el.parentNode;
      if (!el) break;
    }
    return false;
  },
  injectHighlighter: function injectHighlighter() {
    if (!mainObj.hoveredElement) return;
    var markedEl = mainObj.hoveredElement;
    if (markedEl.className === "blkr_overlay") {
      markedEl = markedEl.relatedElement; // underlying element
    }
    var i = 0;
    for (i = 0; i < mainObj.transpose; i++) {
      if (markedEl.parentNode !== window.document) {
        markedEl = markedEl.parentNode;
      } else break;
    }
    mainObj.transpose = i;
    if (markedEl === mainObj.markedElement) return;
    mainObj.markedElement = markedEl;
    var highlighterEl = document.querySelector("#blkr_highlighter");
    if (!highlighterEl) {
      highlighterEl = document.createElement("div");
      highlighterEl.id = "blkr_highlighter";
      highlighterEl.style.pointerEvents = "none";
      highlighterEl.style.position = "fixed";
      highlighterEl.style.background = 'rgba(255,128,128,0.4)';
      highlighterEl.style.zIndex = mainObj.maxZ - 1;
      document.body.appendChild(highlighterEl);
    }
    cbObj.updateHighlighterPosition();
    mainObj.getSingleEl("#blkr_current_elm").innerHTML = mainObj.getPathHTML(mainObj.hoveredElement, mainObj.transpose);
    mainObj.getSingleEl("#blkr_current_elm .pathNode.active").scrollIntoView({
      block: "center"
    });
  },
  removeHighlighter: function removeHighlighter() {
    var _document$querySelect;
    (_document$querySelect = document.querySelector("#blkr_highlighter")) === null || _document$querySelect === void 0 || _document$querySelect.remove();
    mainObj.markedElement = null;
    mainObj.hoveredElement = null;
    mainObj.getSingleEl("#blkr_current_elm").innerHTML = "Move mouse pointer to the unwanted element. Click it to remove!";
  },
  toggleBlockerTools: function toggleBlockerTools() {
    this.areToolsLoaded ? this.removeBlockingTools() : this.loadBlockingTools();
  },
  updateRemBxSetting: function updateRemBxSetting() {
    this.getSingleEl("#rmbr_checkbox").innerHTML = this.settings.remember ? "<input type='checkbox' checked>" : "<input type='checkbox' unchecked>";
  },
  injectOverlays: function injectOverlays() {
    var _iterator4 = _createForOfIteratorHelper(document.querySelectorAll("iframe", "embed")),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var e = _step4.value;
        var rect = e.getBoundingClientRect();
        var overlayEl = document.createElement("div");
        overlayEl.className = "blkr_overlay";
        overlayEl.style.position = "absolute";
        overlayEl.style.left = rect.left + window.scrollX + "px";
        overlayEl.style.top = rect.top + window.scrollY + "px";
        overlayEl.style.width = rect.width + "px";
        overlayEl.style.height = rect.height + "px";
        overlayEl.style.background = 'rgba(128,128,128,1)';
        overlayEl.style.zIndex = this.mazZ - 2;
        overlayEl.relatedElement = e;
        document.body.appendChild(overlayEl);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  },
  updateElementsListUI: function updateElementsListUI() {
    if (!this.mBlockerDiv) return;
    var elementListEl = this.getSingleEl("#blkr_elm_list");
    var lines = [];
    if (this.hiddenElements.length) {
      lines.push('<table><tr class="bl_heading"><td>Removed element(s)</td><td>Remember?</td><td></td></tr>');
      var _iterator5 = _createForOfIteratorHelper(mainObj.hiddenElements),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var elm = _step5.value;
          lines.push("\n                <tr>\n\t\t\t\t\t<td class=\"bl_selector\"><a href=\"\" class=\"bl_edit_selector\">edit</a>".concat(helpersObj.escapeHTML(elm.selector), "</td>\n\t\t\t\t\t<td><input type=\"checkbox\"").concat(elm.permanent ? ' checked' : '', "></td>\n\t\t\t\t\t<td><span class=\"bl_preview\">\uD83D\uDC41</span> <a href=\"\" class=\"bl_delete\">\u2716</a></td>\n\t\t\t\t</tr>\n                "));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      lines.push("</table>");
      elementListEl.classList.add("hasContent");
    } else {
      elementListEl.classList.remove("hasContent");
    }
    elementListEl.innerHTML = lines.join("\n");
    var i = -1;
    var _iterator6 = _createForOfIteratorHelper(this.getAllElements("#blkr_elm_list table tr")),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var tr = _step6.value;
        if (i < 0) {
          i++;
          continue;
        }
        tr.selector = this.hiddenElements[i].selector;
        tr.querySelector("input").addEventListener("change", cbObj.onChangePermanent, false);
        tr.querySelector("a.bl_delete").addEventListener("click", cbObj.onDeleteClick, false);
        tr.querySelector(".bl_preview").addEventListener("mouseenter", cbObj.onPreviewHoverOn, false);
        tr.querySelector(".bl_preview").addEventListener("mouseleave", cbObj.onPreviewHoverOff, false);
        tr.querySelector("a.bl_edit_selector").addEventListener("click", cbObj.onEditSelector, false);
        i++;
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  },
  triggerResize: function triggerResize() {},
  removeOverlays: function removeOverlays() {
    var overlays = document.querySelectorAll("blkr_overlay");
    if (!overlays) return;
    for (var i = 0; i < overlays.length; i++) {
      var e = overlays[i];
      e.parentNode.removeChild(e);
    }
  },
  refreshOverlays: function refreshOverlays() {
    mainObj.removeOverlays();
    mainObj.injectOverlays();
  },
  persistHiddenEls: function persistHiddenEls() {
    chrome.runtime.sendMessage({
      action: "persist_perm_hidden_elms",
      website: location.hostname.replace(/^www\./, ''),
      data: JSON.stringify(mainObj.hiddenElements.filter(function (elm) {
        return elm.permanent;
      }))
    });
  },
  loadHiddenEls: function loadHiddenEls() {
    chrome.runtime.sendMessage({
      action: "extract_perm_hidden_elms",
      website: location.hostname.replace(/^www\./, '')
    }, function (data) {
      mainObj.hiddenElements = JSON.parse(data);
      mainObj.injectCSS2Head();
      mainObj.updateElementsListUI();
    });
    chrome.runtime.sendMessage({}, function (data) {});
  },
  deactivateDialog: function deactivateDialog() {},
  activateDialog: function activateDialog(cls) {},
  toggleImages: function toggleImages() {
    chrome.runtime.sendMessage({
      action: "toggle_images"
    }, function (res) {
      console.log("toggle images res", res);
    });

    //send images to bg script to block images
  },
  loadBlockingTools: function loadBlockingTools() {
    console.log("loading tools");
    if (!this.mBlockerDiv) this.injectCSS2Head();
    shadowElement = document.createElement("div");
    shadowElement.setAttribute("id", "blkr_wind");
    shadowElement.attachShadow({
      mode: "open"
    });
    shadowElement.style.visibility = "hidden";
    document.body.appendChild(shadowElement);
    this.mBlockerDiv = shadowElement;
    shadowElement.shadowRoot.innerHTML = "\n        <link rel=\"stylesheet\" href=\"".concat(chrome.runtime.getURL('content.css'), "\">\n        <div class=\"mainWindow\">\n            <div class=\"header\">\n                <span class=\"header__logo\">V1 Point and Click To Block HTML Element\n                </span>\n                <span class=\"header__logo header__logo_small\"> HTML Element Blocker</span>\n            </div>\n            \n            <hr/>\n\n            <div class=\"topButtons\">\n            <div class=\"topButton topButton_hideImages\" title=\"Hide Images\">\uD83D\uDCF8</div>\n\n                <div class=\"topButton topButton_settings\" title=\"Advanced options\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-settings\"><circle cx=\"12\" cy=\"12\" r=\"3\"></circle><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\"></path></svg>\n                </div>\n                <div class=\"topButton topButton_minimize\" title=\"Minimize\"><i>\u279C</i></div>\n                <div class=\"topButton topButton_close\" title=\"Close\">\u2716</div>\n            </div>\n            <div class=\"settingsRow\">\n                <label>\n                    Remember by default: <span id=\"rmbr_checkbox\">?</span>\n                </label>\n            </div>\n            <div id=\"blkr_current_elm\">Use the mouse to select an element to remove.</div>\n            <div id=\"blkr_elm_list\"></div>\n        </div>\n        ");
    this.getSingleEl("link").addEventListener("load", cbObj.onLoadCB);
    this.getSingleEl(".topButton_hideImages").addEventListener("click", cbObj.toggleImagesCB);
    this.getSingleEl(".topButton_close").addEventListener("click", cbObj.closeBtnCB);
    this.getSingleEl(".topButton_minimize").addEventListener("click", cbObj.minimizeCB);
    this.getSingleEl(".topButton_settings").addEventListener("click", cbObj.settingsCB);
    this.getSingleEl("#rmbr_checkbox").addEventListener("click", cbObj.remCheckboxCB);
    document.addEventListener("mouseover", cbObj.mouseOver, true); // done
    document.addEventListener("mousedown", cbObj.hideSelectedEl, true); // done
    document.addEventListener("mouseup", cbObj.preventEvent, true); // done
    document.addEventListener("click", cbObj.preventEvent, true); // done
    document.addEventListener("scroll", cbObj.updateHighlighterPosition, true); //done

    this.updateRemBxSetting(); //done
    this.injectOverlays(); //done
    this.updateElementsListUI(); // done

    this.areToolsLoaded = true;
    chrome.runtime.sendMessage({
      action: "toolsVisibStatus",
      visible: true
    }); //  message to change the icon
  },
  removeBlockingTools: function removeBlockingTools() {
    console.log("remove blocking tools");
    mainObj.deactivateDialog();
    mainObj.removeHighlighter();
    mainObj.removeOverlays();
    mainObj.mBlockerDiv.parentNode.removeChild(mainObj.mBlockerDiv);
    document.removeEventListener("mouseover", cbObj.mouseOver, true); // done
    document.removeEventListener("mousedown", cbObj.hideSelectedEl, true); // done
    document.removeEventListener("mouseup", cbObj.preventEvent, true); // done
    document.removeEventListener("click", cbObj.preventEvent, true); // done
    document.removeEventListener("scroll", cbObj.updateHighlighterPosition, true); //done

    chrome.runtime.sendMessage({
      action: "toolsVisibStatus",
      visible: false
    });
    mainObj.areToolsLoaded = false;
  },
  init: function init() {
    console.log("cs init");
    chrome.runtime.onMessage.addListener(cbObj.bgReceiver);
    this.loadHiddenEls();
  }
};
var cbObj = {
  onChangePermanent: function onChangePermanent(e) {
    /*
    
    console.log(this);
    console.log(e.target);
    console.log((e.target.parentElement).parentElement);
    console.log((e.target.parentNode).parentNode);
    
    */

    var tr = helpersObj.closest(this, "tr");
    var i = mainObj.hiddenElements.findIndex(function (el) {
      return el.selector === tr.selector;
    });
    var hiddenEl = mainObj.hiddenElements[i];
    hiddenEl.permanent = this.checked;
    mainObj.persistHiddenEls();
  },
  onDeleteClick: function onDeleteClick(e) {
    var tr = helpersObj.closest(this, "tr");
    if (tr.selector) {
      var i = mainObj.hiddenElements.findIndex(function (elm) {
        return elm.selector === tr.selector;
      });
      mainObj.hiddenElements.splice(i, 1);
    }
    mainObj.injectCSS2Head();
    mainObj.refreshOverlays();
    mainObj.updateElementsListUI();
    mainObj.persistHiddenEls();
    e.preventDefault();
    e.stopPropagation();
  },
  onPreviewHoverOn: function onPreviewHoverOn(e) {
    var selector = helpersObj.closest(this, "tr").selector;
    if (!selector) return;
    mainObj.previewedHiddenSelector = selector;
    mainObj.injectCSS2Head();
  },
  onPreviewHoverOff: function onPreviewHoverOff(e) {
    var selector = helpersObj.closest(this, "tr").selector;
    if (!selector) return;
    console.log(selector, mainObj.previewedHiddenSelector);
    if (mainObj.previewedHiddenSelector == selector) {
      mainObj.previewedHiddenSelector = null;
      mainObj.injectCSS2Head();
    }
  },
  onEditSelector: function onEditSelector(e) {
    e.preventDefault();
    e.stopPropagation();
    var tr = closest(this, 'tr');
    if (tr.selector) {
      var hiddenElement = mainObj.hiddenElements.find(function (elm) {
        return elm.selector == tr.selector;
      });
      var newSelector = prompt('Customize CSS selector\n\nhints:\n[id^="Abc"] matches #AbcWhatever\n[class*="Abc"] matches .somethingAbcSomething', hiddenElement.selector);
      if (newSelector) {
        hiddenElement.selector = newSelector;
        mainObj.updateCSS();
        mainObj.refreshOverlays();
        mainObj.updateElementsListUI();
        mainObj.updateSavedElements();
      }
    }
  },
  bgReceiver: function bgReceiver(msg, sender, sendResponse) {
    if (msg.action === "getStatus") {
      sendResponse(mainObj.areToolsLoaded);
    } else if (msg.action === "toggle") {
      mainObj.toggleBlockerTools();
      sendResponse(X);
    }
  },
  mouseOver: function mouseOver(e) {
    if (mainObj.activeDialog) return null;
    if (mainObj.isChildOfBlkrWind(e.target)) {
      return mainObj.removeHighlighter();
    }
    if (mainObj.hoveredElement !== e.target) {
      mainObj.transpose = 0;
      mainObj.hoveredElement = e.target;
      mainObj.injectHighlighter();
    }
  },
  hideSelectedEl: function hideSelectedEl(e) {
    if (!e) return;
    if (!mainObj.markedElement) return;
    if (e.target && mainObj.isChildOfBlkrWind(e.target)) return;
    var selector = mainObj.getSelector(mainObj.markedElement);
    if (!selector) return;
    if (e && e.button !== 0) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    mainObj.removeHighlighter();
    mainObj.hiddenElements.push({
      selector: selector,
      permanent: mainObj.settings.remember
    });
    mainObj.injectCSS2Head(); // what actually causes element to disappear
    mainObj.updateElementsListUI(); // update blocker window with hidden elements
    mainObj.triggerResize(); //?
    mainObj.refreshOverlays(); //to redraw overlays on the resized window?
    mainObj.persistHiddenEls(); // save permanent elements to storage

    e === null || e === void 0 || e.preventDefault();
    e === null || e === void 0 || e.stopPropagation();
  },
  preventEvent: function preventEvent(e) {
    if (mainObj.isChildOfBlkrWind(e.target)) return;
    e.preventDefault();
    e.stopPropagation();
    return false;
  },
  updateHighlighterPosition: function updateHighlighterPosition() {
    var _mainObj$markedElemen;
    var rect = (_mainObj$markedElemen = mainObj.markedElement) === null || _mainObj$markedElemen === void 0 ? void 0 : _mainObj$markedElemen.getBoundingClientRect();
    if (!rect) return;
    var highlighterEl = document.querySelector("#blkr_highlighter");
    if (!highlighterEl) return;
    highlighterEl.style.left = rect.x + "px";
    highlighterEl.style.top = rect.y + "px";
    highlighterEl.style.width = rect.width + "px";
    highlighterEl.style.height = rect.height + "px";
  },
  remCheckboxCB: function remCheckboxCB(e) {
    e.preventDefault();
    mainObj.settings.remember = !mainObj.settings.remember;
    mainObj.persistHiddenEls();
    mainObj.updateElementsListUI();
  },
  settingsCB: function settingsCB(e) {
    e.preventDefault();
    mainObj.activateDialog(SettingsDialog);
  },
  minimizeCB: function minimizeCB(e) {
    e.preventDefault();
    mainObj.getSingleEl(".mainWindow").classList.toggle("minimized");
  },
  closeBtnCB: function closeBtnCB(e) {
    e.preventDefault();
    mainObj.removeBlockingTools();
  },
  toggleImagesCB: function toggleImagesCB(e) {
    e.preventDefault();
    mainObj.toggleImages();
  },
  onLoadCB: function onLoadCB() {
    shadowElement.style.visibility = "visible";
  }
};
mainObj.init();
/******/ })()
;
//# sourceMappingURL=content_script.js.map