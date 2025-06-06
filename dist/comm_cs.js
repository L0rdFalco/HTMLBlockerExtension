/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/comm_cs.js ***!
  \************************/
// Listen for messages from the webpage
window.addEventListener("message", function (event) {
  // Verify the source of the message for security
  if (event.origin !== "https://puzzle-generator-online-r906.onrender.com") return;
  console.log("message listener hit!", event.origin);
  console.log("event data from webpage ", event);

  // Forward the message to the extension's background script
  chrome.runtime.sendMessage(event.data, function (response) {
    console.log("Response from bg script: ", response);

    // Send the response back to the webpage
    window.postMessage({
      response: response
    }, event.origin);
  });
});
console.log("comm cs loaded");
/******/ })()
;
//# sourceMappingURL=comm_cs.js.map