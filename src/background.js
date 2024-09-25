import { get, set, update } from 'idb-keyval';

import Mellowtel from "mellowtel";

let mellowtel;
(async () => {
  mellowtel = new Mellowtel("b408b488", { disableLogs: true });
  // await mellowtel.initBackground();
})();

(async () => {
  // let settingsLink = await mellowtel.generateSettingsLink()
  // chrome.storage.sync.set({ settingsLink: settingsLink });

})();

let allowed = true;

let prefs = {
  showContextMenu: false,
  autoRefresh: true,
  allProtocols: false,
  allSubdomains: false,
  allPorts: false,
  lightIcon: false,
  darkIcon: false,
  defaultIcon: true
}

let forbiddenOrigin = /(chrome\:\/\/)/g;
let rules = [];
let contextMenuId = null;
let incognito;
let url;
let tabId;


function onIcon() {
  chrome.action.setIcon({ path: "./icons/icon16_on.png" });
  chrome.action.setTitle({ title: "ON" })

}

function offIcon() {
  chrome.action.setIcon({ path: "./icons/icon16_off.png" });
  chrome.action.setTitle({ title: "OFF" });

}

function noIcon() {

  chrome.action.setIcon({ path: "./icons/icon16_no.png" });
  chrome.action.setTitle({ title: "NO!" })

  return
}

async function isSiteViable() {
  let tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tabs || !tabs.length || tabs[0].id < 0) return;

  return tabs[0];

}

async function areToolsLoaded() {

  try {
    let mTab = await isSiteViable(); // execution stops if there's no tab object

    if (!mTab.url.startsWith("http")) return noIcon(); // execution stops after icon is set

    let visibStatus = await chrome.tabs.sendMessage(mTab.id, { action: "getStatus" });


    visibStatus ? onIcon() : offIcon();

  } catch (error) {
    console.log("blocking status error");

    noIcon()

  }

}


async function toggleTools(mTabID) {

  try {
    return await chrome.tabs.sendMessage(mTabID, { action: "toggle", status: allowed })

  } catch (error) {
    console.log("toggle error");

    noIcon()

  }


}

async function forceInjectCS(mTab) {

  try {

    return await chrome.scripting.executeScript({ files: ["content_script.js"], target: { tabId: mTab.id } });
  } catch (error) {
    console.log("the webpage is probably forbidding script injection");
    noIcon()

  }


}

chrome.runtime.onInstalled.addListener(function (details) {
  areToolsLoaded()

  imgBlockingInit()

  if (details.reason === "install" || details.reason === "update") {
    (async () => {
      // await mellowtel.generateAndOpenOptInLink();
    })();
  }

  if (details.reason === "install") {
    setContentRules()
  }

  if (details.reason === "update") {
    setContentRules()
  }

});

chrome.runtime.onStartup.addListener(() => {
  areToolsLoaded()

  imgBlockingInit()
})

chrome.windows.onFocusChanged.addListener(() => {
  areToolsLoaded()

  getTabData()

})

chrome.action.onClicked.addListener(async function () {
  try {
    const mTab = await isSiteViable();

    const res = await toggleTools(mTab.id)

    if (!res) { // in the event the browser didn't inject the CS from the jump
      let res = await forceInjectCS(mTab)

      if (!res) return
      await toggleTools(mTab.id)

    }

  } catch (error) {

    console.log("icon click error");

  }


})

chrome.tabs.onActivated.addListener((tabId, changeInfo, tab) => {
  areToolsLoaded()
  getTabData()

})

chrome.tabs.onUpdated.addListener((msg, sender, res) => {

  areToolsLoaded()

  getTabData()

})

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {

  if (msg.action === "toolsVisibStatus") msg.visible ? onIcon() : offIcon()

  else if (msg.action === "persist_perm_hidden_elms") {
    set(`web:${msg.website}`, msg.data);

  }

  else if (msg.action === "extract_perm_hidden_elms") {
    get(`web:${msg.website}`).then(data => {
      sendResponse(data || "[]")
    })
  }

  else if (msg.action === "toggle_images") {
    console.log("toggle images");

    (async function () {
      await toggleImageBlocking()

    })()

  }
  else if (msg.action === "toggleContextMenu") {
    toggleContextMenu()

  }
  else if (msg.action === "openImgPanel") {
    openImgPanel()

  }
  else if (msg.action === "clearRules") {
    clearRules(msg.scope)


  }
  else if (msg.action === "setContentRules") {
    setContentRules(msg.rules)

  }



  return true
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "imgContextMenu") openImgPanel()
})

async function getTabData() {
  //extracts required tab data

  try {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });

    const tab = tabs[0];

    if (tab) {
      incognito = tab.incognito;
      url = tab.url;
      tabId = tab.id;

      return [url ? url : null, incognito, tabId ? tabId : null]
    }

    else {
      console.log("no active tab");

      return []

    }

  } catch (error) {
    console.log("getTabData error");
  }

}

function openImgPanel() {
  chrome.tabs.create({ url: "chrome://settings/content/images", active: true });

}

async function toggleImageBlocking() {

  const res = await getTabData()

  if (!res[0]) return // when there's no url
  if (!res[2]) return // when theres no tabId
  if (res[0].match(forbiddenOrigin)) return // when its a forbidden page

  const ImgsRes = await chrome.contentSettings.images.get({ primaryUrl: res[0], incognito: res[1] });

  let setting = ImgsRes.setting;
  if (!setting) return;

  const urlParser = new URL(res[0])

  let pattern = /^file:/.test(url) ? url : `${urlParser.hostname}/*`;
  if (!/^file:/.test(url)) { // when url is a live link and not a local file
    prefs.allProtocols = false; //brute force removal of unneeded flag
    pattern = prefs.allProtocols ? '*://' : `${urlParser.protocol}//`;
    const domParts = urlParser.hostname.split('.');
    if (prefs.allSubdomains && domParts.length > 2) {
      while (domParts.length > 2) {
        domParts.shift();
      }
      pattern += `*.${domParts.join('.')}`;
    } else {
      pattern += urlParser.hostname;
    }
    pattern += prefs.allPorts ? ':*' : (urlParser.port ? `:${urlParser.port}` : '');
    pattern += '/*';
  }

  const newSetting = setting === "allow" ? "block" : "allow"

  chrome.contentSettings.images.set({
    primaryPattern: pattern,
    setting: newSetting,
    scope: incognito ? "incognito_session_only" : "regular"
  })

  if (prefs.autoRefresh) {
    chrome.tabs.reload(res[2], { bypassCache: true })
  }

  setLocalStorageRule(pattern, newSetting, res[1])



}

async function setLocalStorageRule(pattern, newSetting, incognito) {

  if (incognito) return

  const data = await chrome.storage.local.get("imgTF_rules")

  let rules = data.imgtf_rules || []
  let keyExist = false;

  if (rules.length) { //check if  current url + blocking status is saved in storage
    for (let i = 0; i < rules.length; i++) {
      if (pattern === rules[i].primaryPattern) {
        rules[i].setting = newSetting;
        keyExist = true;
        break;
      }

    }
  }

  if (!keyExist) {
    rules.push({
      primaryPattern: pattern,
      setting: newSetting,
      scope: incognito ? 'incognito_session_only' : 'regular'
    });
  }

  chrome.storage.local.set({ imgTF_rules: rules })


}

function toggleContextMenu() {
  if (prefs.showContextMenu && !contextMenuId) {
    contextMenuId = chrome.contextMenus.create({
      id: "imgContextMenu",
      title: "settings-> img exceptions",
      type: "normal",
      contexts: ["all"]
    })

  }

  if (!prefs.showContextMenu && contextMenuId) {
    chrome.contextMenus.remove(contextMenuId)
    contextMenuId = null;

  }

}

async function setContentRules(sentRules) {
  if (sentRules) rules = sentRules

  if (rules.length) {
    for (let i = 0; i < rules.length; i++) {

      chrome.contentSettings.images.set({
        primaryPattern: rules[i].primaryPattern,
        setting: rules[i].setting,
        scope: rules[i].scope
      })
    }

  }
  chrome.storage.local.set({ imgTF_rules: rules })

}

async function imgBlockingInit() {

  toggleContextMenu();
  console.log("1");
  let data = await chrome.storage.local.get(['img_on_off_prefs', 'imgTF_rules'])

  prefs = data.image_on_off_prefs || prefs;
  rules = data.imgTF_rules || rules;

  await setContentRules(rules)//importRules

  await getTabData();//getSettings

}

