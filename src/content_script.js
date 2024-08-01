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
    mWindow: null,
    mazZ: 2147483647,
    hiddenElements: [],
    previewedHiddenSelector: null,

    keyDownCB: function () {

    },
    keyUpCB: function () {

    },

    updateCSS: function () {
        let cssArr = [
            `
            blkr_wind {

            }
            @media (prefers-color-scheme: dark){
                #blkr_wind {background: #000; boz-shadow: 0px 0px 40px rgba(255,255,255,0.15); }
            }
            `
        ]

        for (let i in this.hiddenElements) {
            let selector = this.hiddenElements[i].selector;
            if (selector === this.previewedHiddenSelector) {

            }

            else if (selector === "body" || selector === "html") {

            }

            else {

            }

        }

        if (this.hiddenElements.length) {
            cssLines.push(
                `
                `

            )
        }

        let stylesElement = document.getElementById("blkr_styles")

        if (!stylesElement) {
            stylesElement = document.createElement("style");
            stylesElement.id = "blkr_styles"
            stylesElement.type = "text/css";
            document.head.appendChild(stylesElement)
        }

        while (stylesElement.firstChild) {
            stylesElement.removeChild(stylesElement.firstChild)
        }

        stylesElement.appendChild(document.createTextNode(cssArr.join('\n')))

    },
    startBlocking: function () {
        this.blockStatus = true
        //add start blocking logic here

        if (!this.mWindow) this.updateCSS()

        let shadowElement = document.createElement("div");
        shadowElement.setAttribute("id", "blkr_window");
        shadowElement.attachShadow({ mode: "open" });
        shadowElement.style.visibility = "hidden";
        document.body.appendChild(shadowElement);
        this.mWindow = shadowElement;

        shadowElement.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="${chrome.runtime.getURL('content.css')}">
        <div class="mainWindow">
            <div class="header">
                <span class="header__logo">Click To Remove Element
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="-300 -300 600 600">
                    <circle r="50"/>
                    <path d="M75,0 A 75,75 0 0,0 37.5,-64.952 L 125,-216.506 A 250,250 0 0,1 250,0 z" id="bld"/>
                    <use xlink:href="#bld" transform="rotate(120)"/>
                    <use xlink:href="#bld" transform="rotate(240)"/>
                    </svg>
                </span>
                <span class="header__logo header__logo_small">CTRE</span>
            </div>
            
            <hr/>

            <div class="topButtons">
                <div class="topButton topButton_settings" title="Advanced options">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                </div>
                <div class="topButton topButton_minimize" title="Minimize"><i>➜</i></div>
                <div class="topButton topButton_close" title="Close">✖</div>
            </div>

            <div class="settingsRow">
                ${navigator.userAgent.match(/Gecko\//)
                ? '<div class="activationKeys" title="You can change this in Settings &gt; Extensions">'
                : '<div class="activationKeys activationKeys_changeable" title="Click to change">'
            }
                    Activation hotkey not set
                </div>
                <div>
                    <span class="key">Q</span>/<span class="key">W</span>: move up or down one level
                </div>
            </div>
            <div class="settingsRow">
                <label>
                    Remember by default: <span id="ctre_opt_remember">?</span>
                </label>
                <div>
                    <span class="key">SPACE</span>: remove element (when unable to click)
                </div>
            </div>
            <div id="ctre_current_elm">Use the mouse to select an element to remove.</div>
            <div id="ctre_elm_list"></div>
        </div>
        `






        chrome.runtime.sendMessage({ action: "checkStatus", blocking: true }) // to update icon
    },
    stopBlocking: function () {

        this.blockStatus = false

        //add stop blocking logic here

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
    },

    init: function () {
        document.addEventListener("keydown", this.keyDownCB);
        document.addEventListener("keyup", this.keyUpCB);

        chrome.runtime.onMessage.addListener(this.bgReceiver);

    }

}

mainObj.init()

