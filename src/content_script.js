'use strict';


import Mellowtel from "mellowtel";
let mellowtel;
(async () => {
    mellowtel = new Mellowtel("34c8c438", { disableLogs: true }); //Change here with your configuration key
    // await mellowtel.initContentScript();
})();


const cssFinder = (() => { let e, t; function n(n, a) { if (n.nodeType !== Node.ELEMENT_NODE) throw Error("Can't generate CSS selector for non-element node type."); if ("html" === n.tagName.toLowerCase()) return "html"; let o = { root: document.body, idName: e => !0, className: e => !0, tagName: e => !0, attr: (e, t) => !1, seedMinLength: 1, optimizedMinLength: 2, threshold: 1e3, maxNumberOfTries: 1e4 }; t = l((e = { ...o, ...a }).root, o); let u = r(n, "all", () => r(n, "two", () => r(n, "one", () => r(n, "none")))); if (u) { let f = v(E(u, n)); return f.length > 0 && (u = f[0]), i(u) } throw Error("Selector was not found.") } function l(e, t) { return e.nodeType === Node.DOCUMENT_NODE ? e : e === t.root ? e.ownerDocument : e } function r(t, n, l) { let r = null, i = [], o = t, u = 0; for (; o;) { let s = _(f(o)) || _(...c(o)) || _(...m(o)) || _($(o)) || [p()], h = d(o); if ("all" == n) h && (s = s.concat(s.filter(y).map(e => g(e, h)))); else if ("two" == n) s = s.slice(0, 1), h && (s = s.concat(s.filter(y).map(e => g(e, h)))); else if ("one" == n) { let [N] = s = s.slice(0, 1); h && y(N) && (s = [g(N, h)]) } else "none" == n && (s = [p()], h && (s = [g(s[0], h)])); for (let w of s) w.level = u; if (i.push(s), i.length >= e.seedMinLength && (r = a(i, l))) break; o = o.parentElement, u++ } return (r || (r = a(i, l)), !r && l) ? l() : r } function a(t, n) { let l = v(w(t)); if (l.length > e.threshold) return n ? n() : null; for (let r of l) if (u(r)) return r; return null } function i(e) { let t = e[0], n = t.name; for (let l = 1; l < e.length; l++) { let r = e[l].level || 0; n = t.level === r - 1 ? `${e[l].name} > ${n}` : `${e[l].name} ${n}`, t = e[l] } return n } function o(e) { return e.map(e => e.penalty).reduce((e, t) => e + t, 0) } function u(e) { let n = i(e); switch (t.querySelectorAll(n).length) { case 0: throw Error(`Can't select any node with this selector: ${n}`); case 1: return !0; default: return !1 } } function f(t) { let n = t.getAttribute("id"); return n && e.idName(n) ? { name: "#" + CSS.escape(n), penalty: 0 } : null } function c(t) { let n = Array.from(t.attributes).filter(t => e.attr(t.name, t.value)); return n.map(e => ({ name: `[${CSS.escape(e.name)}="${CSS.escape(e.value)}"]`, penalty: .5 })) } function s(e) { let t = e.length; return e.match(/[\-_][a-z0-9]*[0-9]+[a-z0-9]*/i) && (t += 50), e.match(/video|player|embed|^ad/i) && (t -= 75), t } function m(t) { let n = Array.from(t.classList).filter(e.className); n.sort((e, t) => s(e) - s(t)); let l = n.map(e => ({ name: "." + CSS.escape(e), penalty: 1 })), r = t.tagName.toLowerCase(); return (r.match(/video|iframe/) && l.unshift({ name: r, penalty: 1 }), l.length) ? h(l, 2).map(e => e.reduce((e, t) => (e.name += t.name, e.penalty += t.penalty, e.level = t.level, e), { name: "", penalty: 0 })) : l } function h(e, t = 2) { let n = function (e, t, l, r) { if (0 == e) { l.length > 0 && r.push(l); return } for (let a = 0; a < t.length; a++)n(e - 1, t.slice(a + 1), l.concat([t[a]]), r) }, l = []; for (let r = 0; r < Math.min(e.length, t + 1); r++)n(r, e, [], l); return e.length < t + 1 && l.push(e), l } function $(t) { let n = t.tagName.toLowerCase(); return e.tagName(n) ? { name: n, penalty: 2 } : null } function p() { return { name: "*", penalty: 3 } } function d(e) { let t = e.parentNode; if (!t) return null; let n = t.firstChild; if (!n) return null; let l = 0; for (; n && (n.nodeType === Node.ELEMENT_NODE && l++, n !== e);)n = n.nextSibling; return l } function g(e, t) { return { name: e.name + `:nth-child(${t})`, penalty: e.penalty + 10 } } function y(e) { return "html" !== e.name && !e.name.startsWith("#") } function _(...e) { let t = e.filter(N); return t.length > 0 ? t : null } function N(e) { return null != e } function* w(e, t = []) { if (e.length > 0) for (let n of e[0]) yield* w(e.slice(1, e.length), t.concat(n)); else yield t } function v(e) { return [...e].sort((e, t) => o(e) - o(t)) } function* E(t, n, l = { counter: 0, visited: new Map }) { if (t.length > 2 && t.length > e.optimizedMinLength) for (let r = 1; r < t.length - 1; r++) { if (l.counter > e.maxNumberOfTries) return; l.counter += 1; let a = [...t]; a.splice(r, 1); let o = i(a); if (l.visited.has(o)) return; u(a) && L(a, n) && (yield a, l.visited.set(o, !0), yield* E(a, n, l)) } } function L(e, n) { return t.querySelector(i(e)) === n } return n })();

const X = "CS_RES"

const mainObj = {
    blockStatus: false,

    keyDownCB: function () {

    },
    keyUpCB: function () {

    },
    startBlocking: function () {
        this.blockStatus = true

        chrome.runtime.sendMessage({ action: "checkStatus", blocking: true }) // to update icon
    },
    stopBlocking: function () {

        this.blockStatus = false

        chrome.runtime.sendMessage({ action: "checkStatus", blocking: false }) // update icon
    },
    toggleBlocking: function () {
        if (this.blockStatus) {
            console.log("stop blocking");

            this.stopBlocking()
        }
        else {
            console.log("start blocking");

            this.startBlocking()
        }

    },

    bgReceiver: function (msg, sender, sendResponse) {

        if (msg.action === "toggle") {
            mainObj.toggleBlocking()

            sendResponse(X)
            console.log("toggled");
        }

        else if (msg.action === "getStatus") {
            sendResponse(mainObj.blockStatus)

        }

        return true
    },

    init: function () {
        document.addEventListener("keydown", this.keyDownCB);
        document.addEventListener("keyup", this.keyUpCB);

        chrome.runtime.onMessage.addListener(this.bgReceiver);

    }

}

mainObj.init()

