'use strict';
const meltelConfigBtn = document.getElementById("meltel_config");

meltelConfigBtn.addEventListener("click", function (e) {

    chrome.storage.sync.get({
        settingsLink: ""
    }, function (data) {
        let settingsLink = data.settingsLink
        window.open(settingsLink, "_blank")

    });

});