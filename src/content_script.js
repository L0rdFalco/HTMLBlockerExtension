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
    mBlockerDiv: null,
    mazZ: 2147483647,
    hiddenElements: [],
    previewedHiddenSelector: null,
    settings: {
        remember: false
    },
    activeDialog: null, //dialog box to edit element settings
    hoveredElement: null,
    markedElement: null,
    transpose: 0, //how far up the parent hierachy to go


    getSingleEl: function (q) {

        if (!this.mBlockerDiv) return null;
        return this.mBlockerDiv.shadowRoot.querySelector(q)
    },
    getAllEls: function (q) {
        if (!this.mBlockerDiv) return null;
        return this.mBlockerDiv.shadowRoot.querySelectorAll(q)

    },
    mouseOverCB: function (e) {
        if (mainObj.activeDialog) return; //if dialog box is showing on top of window
        if (mainObj.isChildOfBlkrWind(e.target)) {
            //dont do any highlighting over the drawn blocker window
            mainObj.unHighlightElement()
            return // 2 avoid going to the next if statement

        }
        if (mainObj.hoveredElement != e.target) {
            mainObj.transpose = 0;
            mainObj.hoveredElement = e.target;
            mainObj.highlightElement()

        }


    },
    highlightElement: function () {
        if (!mainObj.hoveredElement) return;

        let markedEl = mainObj.hoveredElement;

        if (markedEl.className === "blkr_overlay") {
            markedEl = markedEl.relatedElement; // the underlying iframe/embed

        }

        let i = 0;

        for (i = 0; i < mainObj.transpose; i++) { // what is this loop for exactly?

            if (markedEl.parentNode !== window.document) {
                markedEl = markedEl.parentNode;
            }

            else {
                break
            }
        }

        // console.log("transpose value: ", i);

        mainObj.transpose = i

        if (markedEl === mainObj.markedElement) return;

        mainObj.markedElement = markedEl;
        // console.log("marked element: ", mainObj.markedElement);

        let highlighterEl = document.querySelector("#blkr_highlighter");

        if (!highlighterEl) {
            highlighterEl = document.createElement("div");
            highlighterEl.id = "blkr_highlighter";
            highlighterEl.style.pointerEvents = "none";
            highlighterEl.style.position = "fixed";
            highlighterEl.style.background = 'rgba(255,128,128,0.4)';


            highlighterEl.style.zIndex = mainObj.mazZ - 1;
            document.body.appendChild(highlighterEl);

        }

        mainObj.updateHighlighterPosition();


        mainObj.getSingleEl("#blkr_current_elm").innerHTML = mainObj.getPathHTML(mainObj.hoveredElement, mainObj.transpose)
        mainObj.getSingleEl("#blkr_current_elm .pathNode.active").scrollIntoView({ block: "center" })

    },

    getPathHTML: function (element, transpose) {

        function getElmName(elm) {
            if (elm.id) {
                return "#" + elm.id
            } else if (typeof elm.className == "string" && elm.className.trim().length) {
                return elm.tagName.toLowerCase() + "." + elm.className.trim().split(" ").join(".")
            } else {
                return elm.tagName.toLowerCase()
            }
        }

        let path = []
        let currentElm = element

        if (currentElm.className == "blkr_overlay") { // this is just a proxy for an iframe
            currentElm = currentElm.relatedElement
        }

        while (currentElm) {
            path.push(currentElm)
            currentElm = currentElm.parentElement
        }

        path = path.reverse()

        let html = []
        for (let i = 0; i < path.length; i++) {
            html.push(`<span class="pathNode${path.length - 1 - i == transpose ? " active" : ""}">${getElmName(path[i])}</span>`)
        }

        let editedHTML = html.join('<span class="pathSeparator">&gt;</span>')
        return editedHTML

    },

    updateHighlighterPosition: function () {
        let rect = mainObj.markedElement?.getBoundingClientRect();


        if (!rect) return;
        let highlighterEl = document.querySelector("#blkr_highlighter");
        if (!highlighterEl) return;

        highlighterEl.style.left = rect.x + "px";
        highlighterEl.style.top = rect.y + "px";
        highlighterEl.style.width = rect.width + "px";
        highlighterEl.style.height = rect.height + "px";


    },
    unHighlightElement: function () {
        console.log(document.querySelector("#blkr_highlighter"));
        document.querySelector("#blkr_highlighter")?.remove();
        mainObj.markedElement = null;
        mainObj.hoveredElement = null;
        mainObj.getSingleEl("#blkr_current_elm").innerHTML = "Move mouse pointer to the unwanted element. Click it to remove!"

    },
    hideSelectedEl: function (e) {

        if (mainObj.markedElement) return;

        if (e && mainObj.isChildOfBlkrWind(e.target)) return;

        let selector = mainObj.getSelector(mainObj.markedElement);
        console.log("selector: ", selector, e.button);
        if (!selector) return;


        if (!selector || (e && e.button !== 0)) {
            e?.preventDefault();
            e?.stopPropagation();

            return;
        }

        mainObj.unHighlightElement()

        mainObj.hiddenElements.push({
            selector: selector,
            permanent: mainObj.settings.remember // to avoid undefined as a value
        });


        mainObj.injectCSS2Head() // to include hidden elements
        mainObj.updateElementsList()// add hidden element to mblocker window with options
        mainObj.triggerResize()//?
        mainObj.refreshOverlays()
        mainObj.setSavedElements()//save to storage

        e?.preventDefault()
        e?.stopPropagation()

    },
    refreshOverlays: function () {

    },

    getSelector: function (element) {
        if (!element) return null;
        else if (elem.tagName === "BODY") return "body";
        else if (elem.tagName === "HTML") return "html";

        return cssFinder(element, { optimizedMinLength: 1 })


    },
    setSavedElements: function () {

    },

    triggerResize: function () {

    },

    preventEvent: function (e) {

    },
    isChildOfBlkrWind: function (sentEl) {
        for (let i = 0; i < 8; i++) {
            if (sentEl == mainObj.mBlockerDiv) return true;
            sentEl = sentEl.parentNode;
            if (!sentEl) break;


        }

        return false

    },
    updateElementsList: function () {
        if (!this.mBlockerDiv) return; // if window is not showing

        let elmentList = this.getSingleEl("#blkr_elm_list");
        let lines = [];

        if (this.hiddenElements.length) {
            /*
            TODO: FILL THIS OUT AFTER ADDING HIDDEN ELEMENT LOGIC
            */


        }

        else {
            //TODO: FILL THIS OUT AFTER ADDING HIDDEN ELEMENT LOGIC

        }

        elmentList.innerHTML = lines.join("\n");

        function onChangePermanent(e) {

        }

        function onDeleteClick(e) {

        }

        function onPreviewHoverOn(e) {

        }

        function onPreviewHoverOff(e) {

        }

        function onEditSelector(e) {

        }


        let i = -1 // dont know exactly what this is for...

        for (let tr of this.getAllEls("#blkr_elm_list table tr")) {
            console.log(tr);

            tr.selector = this.hiddenElements[i].selector

            tr.querySelector("input").add("change", onChangePermanent, false);
            tr.querySelector("a.ct_delete").add("click", onDeleteClick, false);
            tr.querySelector(".ct_preview").add("mouseenter", onPreviewHoverOn, false);
            tr.querySelector(".ct_preview").add("mouseleave", onPreviewHoverOff, false);
            tr.querySelector("a.ct_edit_selector").add("click", onEditSelector, false);

            i++
        }

    },
    updateSettingsUI: function () {

        this.getSingleEl("#rmbr_checkbox").innerHTML = this.settings.remember ? "<input type='checkbox' checked>" : "<input type='checkbox' unchecked>"
    },
    injectCSS2Head: function () {
        let cssArr = [
            `
            #blkr_wind {
				position: fixed; bottom: 0; right: 10px;
				background: #fff; box-shadow: 0px 0px 40px rgba(0,0,0,0.15);
				border-radius: 3px 3px 0 0;
				z-index: ${this.maxZ};
            }
            @media (prefers-color-scheme: dark){
                #blkr_wind {background: #2b3754; box-shadow: 0px 0px 40px rgba(255,255,255,0.15); }
            }
            `
        ]

        for (let i in this.hiddenElements) {
            let selector = mainObj.hiddenElements[i].selector;

            if (selector === mainObj.previewedHiddenSelector) {
                //TODO: fill this out after adding the associated logic

            }

            else if (selector === "body" || selector === "html") {
                cssArr.push(selector + '{background: transparent !important; }')

            }

            else {
                cssArr.push(selector + '{ display: none !important;}')

            }


        }

        if (this.hiddenElements.length) {
            cssArr.push(`
            html, html body, html body > #ctre_wnd { /* safeguard against "*" rules */
            display: block !important;
        }
            `)


        }

        let stylesElement = document.getElementById("blkr_styles")

        if (!stylesElement) {
            stylesElement = document.createElement("style");
            stylesElement.id = "blkr_styles"
            stylesElement.type = "text/css";
            document.head.appendChild(stylesElement)
        }

        console.log("styles element first child: ", stylesElement.firstChild);
        while (stylesElement.firstChild) { // to make sure its empty?
            stylesElement.removeChild(stylesElement.firstChild)
        }


        stylesElement.appendChild(document.createTextNode(cssArr.join('\n')));

    },

    //what are these overlays  for?
    injectOverlays: function () {
        for (let e of document.querySelectorAll("iframe", "embed")) {
            let rect = e.getBoundingClientRect()

            let overlayEl = document.createElement("div");
            overlayEl.className = "blkr_overlay";
            overlayEl.style.position = "absolute";
            overlayEl.style.left = rect.left + window.scrollX + "px";
            overlayEl.style.top = rect.top + window.scrollY + "px";
            overlayEl.style.width = rect.width + "px";
            overlayEl.style.height = rect.height + "px";
            overlayEl.style.background = 'rgba(128,128,128,1)';
            overlayEl.style.zIndex = this.mazZ - 2;
            overlayEl.relatedElement = e;

            document.body.appendChild(overlayEl)
            console.log("iframe or embed overmaid with something");


        }

    },
    getSavedElements: function () {

    },
    startBlocking: function () {

        try {

            if (!this.mBlockerDiv) this.injectCSS2Head() //blocker  window isn't already drawn and showing

            let shadowElement = document.createElement("div");
            shadowElement.setAttribute("id", "blkr_wind");
            shadowElement.attachShadow({ mode: "open" });
            shadowElement.style.visibility = "hidden";
            document.body.appendChild(shadowElement);
            this.mBlockerDiv = shadowElement; // save the reference to shadow el to be used elsewhere

            shadowElement.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="${chrome.runtime.getURL('content.css')}">
            <div class="mainWindow">
                <div class="header">
                    <span class="header__logo">Point and Click To Block HTML Element
                    </span>
                    <span class="header__logo header__logo_small"> HML Element Blocker</span>
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
                    <label>
                        Remember by default: <span id="rmbr_checkbox">?</span>
                    </label>
                </div>
                <div id="blkr_current_elm">Use the mouse to select an element to remove.</div>
                <div id="blkr_elm_list"></div>
            </div>
            `

            //to only show shadowEl after styling has been injected
            this.getSingleEl("link").addEventListener("load", () => {
                shadowElement.style.visibility = "visible"
            })

            this.getSingleEl(".topButton_close").addEventListener("click", function (e) {
                e.preventDefault()

            });
            this.getSingleEl(".topButton_minimize").addEventListener("click", function (e) {
                e.preventDefault()

            });
            this.getSingleEl(".topButton_settings").addEventListener("click", function (e) {
                e.preventDefault()

            });
            this.getSingleEl("#rmbr_checkbox").addEventListener("click", function (e) {
                e.preventDefault()

            });


            document.addEventListener("mouseover", mainObj.mouseOverCB, true)
            document.addEventListener("mousedown", mainObj.hideSelectedEl, true)
            document.addEventListener("mouseup", mainObj.preventEvent, true)
            document.addEventListener("click", mainObj.preventEvent, true)
            document.addEventListener("scroll", mainObj.updateHighlighterPosition, true)

            this.updateSettingsUI();
            this.injectOverlays()
            this.updateElementsList();


            this.blockStatus = true;

            chrome.runtime.sendMessage({ action: "checkStatus", blocking: true }) // to update icon
        } catch (error) {
            console.log(error);

        }
        //add start blocking logic here
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

        chrome.runtime.onMessage.addListener(this.bgReceiver);

        this.getSavedElements()// to block previously selected elements immediately webpage is loaded
    }

}

mainObj.init()

