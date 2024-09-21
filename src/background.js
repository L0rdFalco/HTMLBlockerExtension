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

let icon = "defaultIcon";
let forbiddenOrigin = /(chrome\:\/\/)/g;
let rules = [];
let contextMenuId = null;
let incognito;
let url;
let tabId;
let matchForbiddenOrigin;


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
}

function updateIcon(msg) {
  chrome.action.setBadgeText({ text: msg })

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

    await chrome.scripting.executeScript({ files: ["content_script.js"], target: { tabId: mTab.id } });
  } catch (error) {
    console.log("the webpage is probably forbidding script injection");
    noIcon()

  }


}

chrome.runtime.onInstalled.addListener(function (details) {
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
  imgBlockingInit()
})

chrome.windows.onFocusChanged.addListener(() => {
  getTabData()

})

chrome.action.onClicked.addListener(async function () {
  try {
    const mTab = await isSiteViable();

    const res = await toggleTools(mTab.id)

    if (!res) { // in the event the browser didn't inject the CS from the jump
      await forceInjectCS(mTab)

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


chrome.runtime.onMessage.addListener((msg, sender, res) => {

  if (msg.action === "toolsVisibStatus") msg.visible ? onIcon() : offIcon()

  else if (msg.action === "persist_perm_hidden_elms") {
    //save to indexDB

    set(`web:${msg.website}`, msg.data);

  }

  else if (msg.action === "extract_perm_hidden_elms") {
    get(`web:${msg.website}`).then(data => {
      res(data || "[]")
    })
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

      return [incognito, url, tabId]
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
  chrome.tabs.create({ url: "chrome://settings/content/images", active: true })

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

function setContentRules() {

  if (rules.length) {

  }

}

function imgBlockingInit() {
  chrome.storage.local.get(['img_on_off_prefs', 'imgTF_rules'], (data) => {
    prefs = data.image_on_off_prefs || prefs;
    rules = data.imgTF_rules || rules;


    setContentRules(rules)//importRules

    getTabData();//getSettings

    toggleContextMenu();
  })

}




areToolsLoaded()
