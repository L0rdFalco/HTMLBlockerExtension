'use strict';

import { merge, clone } from 'lodash';

const cssFinder = (() => { let e, t; function n(n, a) { if (n.nodeType !== Node.ELEMENT_NODE) throw Error("Can't generate CSS selector for non-element node type."); if ("html" === n.tagName.toLowerCase()) return "html"; let o = { root: document.body, idName: e => !0, className: e => !0, tagName: e => !0, attr: (e, t) => !1, seedMinLength: 1, optimizedMinLength: 2, threshold: 1e3, maxNumberOfTries: 1e4 }; t = l((e = { ...o, ...a }).root, o); let u = r(n, "all", () => r(n, "two", () => r(n, "one", () => r(n, "none")))); if (u) { let f = v(E(u, n)); return f.length > 0 && (u = f[0]), i(u) } throw Error("Selector was not found.") } function l(e, t) { return e.nodeType === Node.DOCUMENT_NODE ? e : e === t.root ? e.ownerDocument : e } function r(t, n, l) { let r = null, i = [], o = t, u = 0; for (; o;) { let s = _(f(o)) || _(...c(o)) || _(...m(o)) || _($(o)) || [p()], h = d(o); if ("all" == n) h && (s = s.concat(s.filter(y).map(e => g(e, h)))); else if ("two" == n) s = s.slice(0, 1), h && (s = s.concat(s.filter(y).map(e => g(e, h)))); else if ("one" == n) { let [N] = s = s.slice(0, 1); h && y(N) && (s = [g(N, h)]) } else "none" == n && (s = [p()], h && (s = [g(s[0], h)])); for (let w of s) w.level = u; if (i.push(s), i.length >= e.seedMinLength && (r = a(i, l))) break; o = o.parentElement, u++ } return (r || (r = a(i, l)), !r && l) ? l() : r } function a(t, n) { let l = v(w(t)); if (l.length > e.threshold) return n ? n() : null; for (let r of l) if (u(r)) return r; return null } function i(e) { let t = e[0], n = t.name; for (let l = 1; l < e.length; l++) { let r = e[l].level || 0; n = t.level === r - 1 ? `${e[l].name} > ${n}` : `${e[l].name} ${n}`, t = e[l] } return n } function o(e) { return e.map(e => e.penalty).reduce((e, t) => e + t, 0) } function u(e) { let n = i(e); switch (t.querySelectorAll(n).length) { case 0: throw Error(`Can't select any node with this selector: ${n}`); case 1: return !0; default: return !1 } } function f(t) { let n = t.getAttribute("id"); return n && e.idName(n) ? { name: "#" + CSS.escape(n), penalty: 0 } : null } function c(t) { let n = Array.from(t.attributes).filter(t => e.attr(t.name, t.value)); return n.map(e => ({ name: `[${CSS.escape(e.name)}="${CSS.escape(e.value)}"]`, penalty: .5 })) } function s(e) { let t = e.length; return e.match(/[\-_][a-z0-9]*[0-9]+[a-z0-9]*/i) && (t += 50), e.match(/video|player|embed|^ad/i) && (t -= 75), t } function m(t) { let n = Array.from(t.classList).filter(e.className); n.sort((e, t) => s(e) - s(t)); let l = n.map(e => ({ name: "." + CSS.escape(e), penalty: 1 })), r = t.tagName.toLowerCase(); return (r.match(/video|iframe/) && l.unshift({ name: r, penalty: 1 }), l.length) ? h(l, 2).map(e => e.reduce((e, t) => (e.name += t.name, e.penalty += t.penalty, e.level = t.level, e), { name: "", penalty: 0 })) : l } function h(e, t = 2) { let n = function (e, t, l, r) { if (0 == e) { l.length > 0 && r.push(l); return } for (let a = 0; a < t.length; a++)n(e - 1, t.slice(a + 1), l.concat([t[a]]), r) }, l = []; for (let r = 0; r < Math.min(e.length, t + 1); r++)n(r, e, [], l); return e.length < t + 1 && l.push(e), l } function $(t) { let n = t.tagName.toLowerCase(); return e.tagName(n) ? { name: n, penalty: 2 } : null } function p() { return { name: "*", penalty: 3 } } function d(e) { let t = e.parentNode; if (!t) return null; let n = t.firstChild; if (!n) return null; let l = 0; for (; n && (n.nodeType === Node.ELEMENT_NODE && l++, n !== e);)n = n.nextSibling; return l } function g(e, t) { return { name: e.name + `:nth-child(${t})`, penalty: e.penalty + 10 } } function y(e) { return "html" !== e.name && !e.name.startsWith("#") } function _(...e) { let t = e.filter(N); return t.length > 0 ? t : null } function N(e) { return null != e } function* w(e, t = []) { if (e.length > 0) for (let n of e[0]) yield* w(e.slice(1, e.length), t.concat(n)); else yield t } function v(e) { return [...e].sort((e, t) => o(e) - o(t)) } function* E(t, n, l = { counter: 0, visited: new Map }) { if (t.length > 2 && t.length > e.optimizedMinLength) for (let r = 1; r < t.length - 1; r++) { if (l.counter > e.maxNumberOfTries) return; l.counter += 1; let a = [...t]; a.splice(r, 1); let o = i(a); if (l.visited.has(o)) return; u(a) && L(a, n) && (yield a, l.visited.set(o, !0), yield* E(a, n, l)) } } function L(e, n) { return t.querySelector(i(e)) === n } return n })();

const X = "!!r33ln00ꓭ"
let shadowElement = null;
class ActivationDialog {
    constructor(shadowRoot, close) {
        this.elm = document.createElement("div");
        this.elm.className = "dialog dialog_advOptions"
        this.elm.innerHTML = `
        <span class="header__logo">Advanced options</span>
        </div>

        <hr/>

        <div class="topButtons">
            <div class="topButton topButton_close" title="Close">✖</div>
        </div>

        <div class="advOptions">
            <div class="advOptions__row">
                <button class="advOptions__export">Activate</button>
                <p class="advOptions__rowHelp">make a small donation to activate extension</p>
            </div>

            <div class="advOptions__row">
                <button class="advOptions__import">No thanks</button>
                <p class="advOptions__rowHelp">id rather not</p>
            </div>
        </div>
    `
        shadowRoot.appendChild(this.elm)

        this.elm.querySelector(".topButton_close").addEventListener("click", (e) => {
            close() //how does this work?

        })
        this.elm.querySelector(".advOptions__export").addEventListener("click", (e) => {
            // e.preventDefault()
            window.open(`https://puzzle-generator-online-r906.onrender.com/donate/${chrome.runtime.id}`)

            close()
        })
        this.elm.querySelector(".advOptions__import").addEventListener("click", (e) => {

            // run blocked code

            close()
        })

    }

    destroy() {
        this.elm.remove()

    }

}
const helpersObj = {
    escapeHTML: function (str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

    },

    closest: function (el, selector) {

        var retval = null
        while (el) {
            if (el.matches(selector)) {
                retval = el
                break
            }
            el = el.parentElement
        }
        return retval

    },

    getActivationStatus: async function (mainFunc, dialogFunc) {

        const data = merge(clone(await chrome.storage.local.get("dId")))

        console.log("extracted data");

        if (!data || Object.keys(data).length === 0) {
            //show dialog

            dialogFunc(ActivationDialog)
            return
        }

        try {

            const res1 = await fetch(`https://puzzle-generator-online-r906.onrender.com/buck/status/${data.dId}`)

            const res2 = merge(clone(await res1.json()))

            if (res2.status) {
                mainFunc()
            }
            else {
                //show dialog
                dialogFunc(ActivationDialog)
            }
        } catch (error) {

            console.log("somethng went wrong. Try later");

        }
    },

}

const mainObj = {
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
    settings: { remember: true },


    getSingleEl: function (q) {
        if (!this.mBlockerDiv) return null;

        return this.mBlockerDiv.shadowRoot.querySelector(q)

    },
    getAllElements: function (q) {
        if (!this.mBlockerDiv) return null;
        return this.mBlockerDiv.shadowRoot.querySelectorAll(q)
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
    getSelector: function (element) {
        if (!element) return;
        else if (element.tagName === "BODY") return "body"
        else if (element.tagName === "HTML") return "html"

        return cssFinder(element, { optimizedMinLength: 1 })
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
                cssArr.push(selector + ' { outline: solid 5px rgba(0,214,255,0.5) !important; outline-offset: -5px; }')

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
            html, html body, html body > #blkr_wind { /* safeguard against "*" rules */
            display: block !important;
        }
            `)

        }

        let stylesElement = document.getElementById("blkr_styles");

        if (!stylesElement) { //make one
            stylesElement = document.createElement("style");
            stylesElement.id = "blkr_styles";
            stylesElement.type = "text/css";
            document.head.appendChild(stylesElement)

        }

        while (stylesElement.firstChild) {
            stylesElement.removeChild(stylesElement.firstChild)

        }

        stylesElement.appendChild(document.createTextNode(cssArr.join("\n")))

    },
    isChildOfBlkrWind: function (el) {
        for (let i = 0; i < 8; i++) {
            if (el === mainObj.mBlockerDiv) return true;
            el = el.parentNode;
            if (!el) break;
        }

        return false;

    },
    injectHighlighter: function () {
        if (!mainObj.hoveredElement) return;

        let markedEl = mainObj.hoveredElement;

        if (markedEl.className === "blkr_overlay") {
            markedEl = markedEl.relatedElement; // underlying element
        }

        let i = 0;

        for (i = 0; i < mainObj.transpose; i++) {
            if (markedEl.parentNode !== window.document) {
                markedEl = markedEl.parentNode;
            }
            else break
        }

        mainObj.transpose = i

        if (markedEl === mainObj.markedElement) return;

        mainObj.markedElement = markedEl;

        let highlighterEl = document.querySelector("#blkr_highlighter");

        if (!highlighterEl) {
            highlighterEl = document.createElement("div");
            highlighterEl.id = "blkr_highlighter";
            highlighterEl.style.pointerEvents = "none";
            highlighterEl.style.position = "fixed";
            highlighterEl.style.background = 'rgba(255,128,128,0.4)'
            highlighterEl.style.border = "3px solid black";
            highlighterEl.style.zIndex = mainObj.maxZ - 1;

            document.body.appendChild(highlighterEl);

        }

        cbObj.updateHighlighterPosition()

        mainObj.getSingleEl("#blkr_current_elm").innerHTML = mainObj.getPathHTML(mainObj.hoveredElement, mainObj.transpose)
        mainObj.getSingleEl("#blkr_current_elm .pathNode.active").scrollIntoView({ block: "center" })


    },
    removeHighlighter: function () {
        document.querySelector("#blkr_highlighter")?.remove();
        mainObj.markedElement = null;
        mainObj.hoveredElement = null;
        mainObj.getSingleEl("#blkr_current_elm").innerHTML = "Move mouse pointer to the unwanted element. Click it to remove!"

    },
    toggleBlockerTools: function () {

        this.areToolsLoaded ? this.removeBlockingTools() : this.loadBlockingTools()
    },
    updateRemBxSetting: function () {
        this.getSingleEl("#rmbr_checkbox").innerHTML = this.settings.remember ? "<input type='checkbox' checked>" : "<input type='checkbox' unchecked>"

    },
    injectOverlays: function () {

        for (let e of document.querySelectorAll("iframe", "embed")) {
            let rect = e.getBoundingClientRect();

            let overlayEl = document.createElement("div");
            overlayEl.className = "blkr_overlay";
            overlayEl.style.position = "absolute";
            overlayEl.style.left = rect.left + window.scrollX + "px";
            overlayEl.style.top = rect.top + window.scrollY + "px";
            overlayEl.style.width = rect.width + "px";
            overlayEl.style.height = rect.height + "px";
            overlayEl.style.background = 'rgb(163, 163, 163)';
            overlayEl.style.zIndex = this.mazZ - 2;
            overlayEl.relatedElement = e;

            document.body.appendChild(overlayEl)
        }

    },
    updateElementsListUI: function () {
        if (!this.mBlockerDiv) return;

        let elementListEl = this.getSingleEl("#blkr_elm_list");
        let lines = [];
        if (this.hiddenElements.length) {
            lines.push('<table><tr class="bl_heading"><td>Removed element(s)</td><td>Remember?</td><td></td></tr>');
            for (let elm of mainObj.hiddenElements) {
                lines.push(`
                <tr>
					<td class="bl_selector"><a href="" class="bl_edit_selector">edit</a>${helpersObj.escapeHTML(elm.selector)}</td>
					<td><input type="checkbox"${elm.permanent ? ' checked' : ''}></td>
					<td><span class="bl_preview">👁</span> <a href="" class="bl_delete">✖</a></td>
				</tr>
                `)
            }

            lines.push("</table>")
            elementListEl.classList.add("hasContent")

        }

        else {
            elementListEl.classList.remove("hasContent")

        }

        elementListEl.innerHTML = lines.join("\n")


        let i = -1;

        for (let tr of this.getAllElements("#blkr_elm_list table tr")) {
            if (i < 0) {
                i++;
                continue;
            }

            tr.selector = this.hiddenElements[i].selector;

            tr.querySelector("input").addEventListener("change", cbObj.onChangePermanent, false);
            tr.querySelector("a.bl_delete").addEventListener("click", cbObj.onDeleteClick, false); //block
            tr.querySelector(".bl_preview").addEventListener("mouseenter", cbObj.onPreviewHoverOn, false);
            tr.querySelector(".bl_preview").addEventListener("mouseleave", cbObj.onPreviewHoverOff, false);
            tr.querySelector("a.bl_edit_selector").addEventListener("click", cbObj.onEditSelector, false);

            i++


        }

    },
    triggerResize: function () {

    },
    removeOverlays: function () {
        let overlays = document.querySelectorAll("blkr_overlay")
        if (!overlays) return;
        for (let i = 0; i < overlays.length; i++) {
            let e = overlays[i]
            e.parentNode.removeChild(e)
        }

    },
    refreshOverlays: function () {

        mainObj.removeOverlays()
        mainObj.injectOverlays()

    },


    persistHiddenEls: function () {

        chrome.runtime.sendMessage({
            action: "persist_perm_hidden_elms",
            website: location.hostname.replace(/^www\./, ''),
            data: JSON.stringify(mainObj.hiddenElements.filter(elm => elm.permanent))
        })
    },
    loadHiddenEls: function () {

        chrome.runtime.sendMessage({
            action: "extract_perm_hidden_elms",
            website: location.hostname.replace(/^www\./, '')
        }, function (data) {
            mainObj.hiddenElements = JSON.parse(data)
            mainObj.injectCSS2Head();
            mainObj.updateElementsListUI();

        })

        chrome.runtime.sendMessage({

        }, function (data) {

        })


    },
    deactivateDialog: function () {
        mainObj.activeDialog?.destroy()
        mainObj.activeDialog = null
        mainObj.getSingleEl('.mainWindow').style.removeProperty('display')
    },
    activateDialog: function (cls) {
        console.log("activate dialog called");
        mainObj.activeDialog = new cls(mainObj.mBlockerDiv.shadowRoot, mainObj.deactivateDialog)
        mainObj.getSingleEl('.mainWindow').style.display = 'none'
        mainObj.removeHighlighter()
        console.log("dialog activated");
    },
    toggleImages: function () {

        chrome.runtime.sendMessage({ action: "toggle_images" }, (res) => {
            console.log("toggle images res", res);

        })

        //send images to bg script to block images
    },

    loadBlockingTools: function () {
        console.log("loading tools");

        if (!this.mBlockerDiv) this.injectCSS2Head();

        shadowElement = document.createElement("div");
        shadowElement.setAttribute("id", "blkr_wind");
        shadowElement.attachShadow({ mode: "open" });
        shadowElement.style.visibility = "hidden";
        document.body.appendChild(shadowElement);
        this.mBlockerDiv = shadowElement;

        shadowElement.shadowRoot.innerHTML =
            `
        <link rel="stylesheet" href="${chrome.runtime.getURL('content.css')}">
        <div class="mainWindow">
            <div class="header">
                <span class="header__logo">Point and Click To Block HTML Element
                </span>
                <span class="header__logo header__logo_small"> HTML Element Blocker</span>
            </div>
            
            <hr/>

            <div class="topButtons">
            <div class="topButton topButton_hideImages" title="Hide Images">📸</div>

                <div class="topButton topButton_settings" title="feature blocked!">
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

        this.getSingleEl("link").addEventListener("load", cbObj.onLoadCB)

        this.getSingleEl(".topButton_hideImages").addEventListener("click", cbObj.toggleImagesCB)//block
        this.getSingleEl(".topButton_close").addEventListener("click", cbObj.closeBtnCB)//block
        this.getSingleEl(".topButton_minimize").addEventListener("click", cbObj.minimizeCB)
        this.getSingleEl(".topButton_settings").addEventListener("click", cbObj.settingsCB)
        this.getSingleEl("#rmbr_checkbox").addEventListener("click", cbObj.remCheckboxCB)

        document.addEventListener("mouseover", cbObj.mouseOver, true) // done
        document.addEventListener("mousedown", cbObj.hideSelectedEl, true) // done
        document.addEventListener("mouseup", cbObj.preventEvent, true) // done
        document.addEventListener("click", cbObj.preventEvent, true)// done
        document.addEventListener("scroll", cbObj.updateHighlighterPosition, true) //done

        this.updateRemBxSetting();//done
        this.injectOverlays();//done
        this.updateElementsListUI() // done

        this.areToolsLoaded = true;

        chrome.runtime.sendMessage({ action: "toolsVisibStatus", visible: true }) //  message to change the icon

    },

    removeBlockingTools: function () {

        console.log("remove blocking tools");
        mainObj.deactivateDialog()
        mainObj.removeHighlighter()
        mainObj.removeOverlays()

        mainObj.mBlockerDiv.parentNode.removeChild(mainObj.mBlockerDiv)
        document.removeEventListener("mouseover", cbObj.mouseOver, true) // done
        document.removeEventListener("mousedown", cbObj.hideSelectedEl, true) // done
        document.removeEventListener("mouseup", cbObj.preventEvent, true) // done
        document.removeEventListener("click", cbObj.preventEvent, true)// done
        document.removeEventListener("scroll", cbObj.updateHighlighterPosition, true) //done


        chrome.runtime.sendMessage({ action: "toolsVisibStatus", visible: false })

        mainObj.areToolsLoaded = false;
    },

    init: function () {
        console.log("cs init");
        chrome.runtime.onMessage.addListener(cbObj.bgReceiver)
        this.loadHiddenEls();
    }

}
const cbObj = {
    onChangePermanent: function (e) {
        /*
        
        console.log(this);
        console.log(e.target);
        console.log((e.target.parentElement).parentElement);
        console.log((e.target.parentNode).parentNode);
        
        */

        let tr = helpersObj.closest(this, "tr");
        let i = mainObj.hiddenElements.findIndex((el) => {
            return el.selector === tr.selector
        })

        let hiddenEl = mainObj.hiddenElements[i]

        hiddenEl.permanent = this.checked

        mainObj.persistHiddenEls()

    },



    onPreviewHoverOn: function (e) {
        let selector = helpersObj.closest(this, "tr").selector

        if (!selector) return;
        mainObj.previewedHiddenSelector = selector;
        mainObj.injectCSS2Head();

    },

    onPreviewHoverOff: function (e) {
        let selector = helpersObj.closest(this, "tr").selector;
        if (!selector) return;

        console.log(selector, mainObj.previewedHiddenSelector);

        if (mainObj.previewedHiddenSelector == selector) {
            mainObj.previewedHiddenSelector = null;
            mainObj.injectCSS2Head()
        }

    },

    onEditSelector: function (e) {
        e.preventDefault();
        e.stopPropagation();

        let tr = closest(this, 'tr')

        if (tr.selector) {
            let hiddenElement = mainObj.hiddenElements.find(elm => elm.selector == tr.selector)
            let newSelector = prompt('Customize CSS selector\n\nhints:\n[id^="Abc"] matches #AbcWhatever\n[class*="Abc"] matches .somethingAbcSomething', hiddenElement.selector)
            if (newSelector) {
                hiddenElement.selector = newSelector

                mainObj.updateCSS()
                mainObj.refreshOverlays()
                mainObj.updateElementsListUI()
                mainObj.updateSavedElements()
            }
        }

    },

    bgReceiver: function (msg, sender, sendResponse) {
        if (msg.action === "getStatus") {

            sendResponse(mainObj.areToolsLoaded)

        }

        else if (msg.action === "toggle") {
            mainObj.toggleBlockerTools()

            sendResponse(X)

        }

    },
    mouseOver: function (e) {
        if (mainObj.activeDialog) return null;
        if (mainObj.isChildOfBlkrWind(e.target)) {
            return mainObj.removeHighlighter()

        }

        if (mainObj.hoveredElement !== e.target) {
            mainObj.transpose = 0;
            mainObj.hoveredElement = e.target;
            mainObj.injectHighlighter()

        }

    },
    hideSelectedEl: function (e) {
        if (!e) return;
        if (!mainObj.markedElement) return;
        if (e.target && mainObj.isChildOfBlkrWind(e.target)) return;

        let selector = mainObj.getSelector(mainObj.markedElement)

        if (!selector) return;

        if (e && (e.button !== 0)) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }

        mainObj.removeHighlighter();

        mainObj.hiddenElements.push({
            selector: selector,
            permanent: mainObj.settings.remember
        })

        mainObj.injectCSS2Head() // what actually causes element to disappear
        mainObj.updateElementsListUI();// update blocker window with hidden elements
        mainObj.triggerResize()//?
        mainObj.refreshOverlays();//to redraw overlays on the resized window?
        mainObj.persistHiddenEls()// save permanent elements to storage

        e?.preventDefault();
        e?.stopPropagation();


    },
    preventEvent: function (e) {
        if (mainObj.isChildOfBlkrWind(e.target)) return;
        e.preventDefault();
        e.stopPropagation();
        return false;

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

    remCheckboxCB: (e) => {
        e.preventDefault()
        mainObj.settings.remember = !mainObj.settings.remember;
        mainObj.persistHiddenEls()
        mainObj.updateElementsListUI()
    },
    settingsCB: (e) => {
        e.preventDefault()
        mainObj.activateDialog(ActivationDialog)

    },
    minimizeCB: (e) => {
        e.preventDefault()

        mainObj.getSingleEl(".mainWindow").classList.toggle("minimized")

    },
    closeBtnCB: (e) => {
        e.preventDefault()

        mainObj.removeBlockingTools()


    },
    toggleImagesCB: (e) => {
        e.preventDefault()

        let func = () => {
            mainObj.toggleImages()
        }

        helpersObj.getActivationStatus(func, mainObj.activateDialog)


    },
    onDeleteClick: function (e) {

        e.preventDefault()

        console.log("delete");

        let func = () => {

            let tr = helpersObj.closest(this, "tr")

            if (tr.selector) {

                let i = mainObj.hiddenElements.findIndex(elm => elm.selector === tr.selector);
                mainObj.hiddenElements.splice(i, 1)
            }

            mainObj.injectCSS2Head()
            mainObj.refreshOverlays()
            mainObj.updateElementsListUI()
            mainObj.persistHiddenEls()

            e.preventDefault();
            e.stopPropagation();
        }

        helpersObj.getActivationStatus(func, mainObj.activateDialog)


    },
    onLoadCB: () => {

        shadowElement.style.visibility = "visible"

    }

}

mainObj.init()


