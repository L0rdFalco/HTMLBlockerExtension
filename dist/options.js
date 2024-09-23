'use strict';
/*

const meltelConfigBtn = document.getElementById("meltel_config");

meltelConfigBtn.addEventListener("click", function (e) {

    chrome.storage.sync.get({
        settingsLink: ""
    }, function (data) {
        let settingsLink = data.settingsLink
        window.open(settingsLink, "_blank")

    });

});

*/

function showRules() {

    chrome.storage.local.get("imgTF_rules", (data) => {

        const rules = data.imgTF_rules || [];
        document.getElementById("imgTF_rules").value = JSON.stringify(rules)

    })

}

function loadPrefs() {
    chrome.storage.local.get("img_on_off_prefs", (data) => {
        let prefs = data.img_on_off_prefs

        if (!prefs) {
            // Default preferences
            prefs = {
                showContextMenu: false,
                autoRefresh: true,
                allProtocols: false,
                allSubdomains: false,
                allPorts: false,
                lightIcon: false,
                defaultIcon: true,
                darkIcon: false
            };
            chrome.storage.local.set({ img_on_off_prefs: prefs });
        }
        console.log("Loaded preferences:", prefs);

        document.getElementById("contextMenu").checked = prefs.showContextMenu;
        document.getElementById("autoRefresh").checked = prefs.autoRefresh;
        // document.getElementById("allProtocols").checked = prefs.allProtocols;
        document.getElementById("allSubdomains").checked = prefs.allSubdomains;
        document.getElementById("allPorts").checked = prefs.allPorts;

        document.getElementById("lightIcon").checked = prefs.lightIcon;
        document.getElementById("defaultIcon").checked = prefs.defaultIcon;
        document.getElementById("darkIcon").checked = prefs.darkIcon;


    })

}

function save() {
    chrome.storage.local.get('img_on_off_prefs', (data) => {
        let prefs = data.img_on_off_prefs || {};
        prefs.showContextMenu = document.getElementById("contextMenu").checked;
        prefs.autoRefresh = document.getElementById("autoRefresh").checked;

        prefs.allProtocols = false;//document.getElementById("allProtocols").checked;
        prefs.allSubdomains = document.getElementById("allSubdomains").checked;
        prefs.allPorts = document.getElementById("allPorts").checked;

        prefs.lightIcon = document.getElementById("lightIcon").checked;
        prefs.defaultIcon = document.getElementById("defaultIcon").checked;
        prefs.darkIcon = document.getElementById("darkIcon").checked;

        chrome.storage.local.set({ img_on_off_prefs: prefs }, () => {
            chrome.runtime.sendMessage({ action: 'getLocalStoragePrefs' }, () => {
                chrome.runtime.sendMessage({ action: 'toggleContextMenu' });
            });
        });
    });
}

document.addEventListener("visibilitychange", showRules, false)

window.onload = function () {
    loadPrefs()
    showRules()

    document.getElementById("contextMenu").onclick = save
    document.getElementById("autoRefresh").onclick = save
    document.getElementById("allSubdomains").onclick = save
    document.getElementById("allPorts").onclick = save
    document.getElementById("lightIcon").onclick = save
    document.getElementById("defaultIcon").onclick = save
    document.getElementById("darkIcon").onclick = save

    document.getElementById("openImageSettings").onclick = () => {

    }
    document.getElementById("clearImageSettings").onclick = () => {

    }
    document.getElementById("importRules").onclick = () => {

    }
    document.getElementById("clearLocalStorageRules").onclick = () => {

    }



}