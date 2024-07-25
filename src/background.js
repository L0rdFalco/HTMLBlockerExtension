import Mellowtel from "mellowtel";

const mellowtel = new Mellowtel("34c8c438");

async function init() {
  await mellowtel.initBackground();

  await mellowtel.optIn()
  await mellowtel.start()

  const hasOptedIn = await mellowtel.getOptInStatus();

  console.log("?", hasOptedIn);


}

// init()


chrome.runtime.onInstalled.addListener(async () => {
  const currentVersion = chrome.runtime.getManifest().version;
  const newVersionKey = 'newVersion';
  const updateShownKey = 'updateShown';

  // Check if this is a new version of the extension
  const previousVersion = await getFromStorage(newVersionKey);
  if (currentVersion !== previousVersion) {
    // Save the new version to local storage
    await setInStorage(newVersionKey, currentVersion);

    // Check if we've already shown the update notification for this version
    const updateShown = await getFromStorage(updateShownKey);
    if (!updateShown) {
      // Open a new tab with the update page
      chrome.tabs.create({ url: "disclaimer.html" });

      // Set the flag so we don't show the update notification again
      await setInStorage(updateShownKey, true);
    }
  }
});

// Helper function to get data from storage
function getFromStorage(key) {
  return new Promise((resolve) => {
    chrome.storage.local.get([key], function (result) {
      resolve(result[key]);
    });
  });
}

// Helper function to set data in storage
function setInStorage(key, value) {
  return new Promise((resolve) => {
    chrome.storage.local.set({ [key]: value }, function () {
      resolve();
    });
  });
}

