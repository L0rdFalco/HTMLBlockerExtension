import { get, set } from 'idb-keyval';

import Mellowtel from "mellowtel";

// let mellowtel;
// (async () => {
//   mellowtel = new Mellowtel("b408b488", { disableLogs: true });
//   await mellowtel.initBackground();
// })();

// (async () => {
//   let settingsLink = await mellowtel.generateSettingsLink()
//   chrome.storage.sync.set({ settingsLink: settingsLink });

// })();

// chrome.runtime.onInstalled.addListener(function (details) {

//   if (details.reason === "install" || details.reason === "update") {
//     (async () => {
//       await mellowtel.generateAndOpenOptInLink();
//     })();
//   }

// });

let allowed = true;

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

})

chrome.tabs.onUpdated.addListener((msg, sender, res) => {

  areToolsLoaded()

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


function getSettings() {

}

function toggleContextMenu() {

}

function getLocalStoragePrefs(callback) {

}



function imgBlockingInit() {

  getLocalStoragePrefs(() => {
    getSettings();
    toggleContextMenu();
  })

}




areToolsLoaded()
