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

}

function loadPrefs() {

}

function save() {

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