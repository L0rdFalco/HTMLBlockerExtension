/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/comm_cs.js ***!
  \************************/
// Listen for messages from the webpage
window.addEventListener("message", function (event) {
  // Verify the source of the message for security
  if (event.origin !== "http://127.0.0.1:3000") return;
  console.log("message listener hit!", event.origin);
  console.log("event ", event);

  // Forward the message to the extension's background script
  chrome.runtime.sendMessage(event.data, function (response) {
    console.log("Response: ", response);
    // Send the response back to the webpage
    window.postMessage({
      response: response
    }, event.origin);
  });
});
console.log("comm cs loadeed");
/******/ })()
;
//# sourceMappingURL=comm_cs.js.map