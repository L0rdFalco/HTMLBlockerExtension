// Listen for messages from the webpage
window.addEventListener("message", (event) => {


    // Verify the source of the message for security
    if (event.origin !== "http://127.0.0.1:3000") return;

    // Forward the message to the extension's background script
    chrome.runtime.sendMessage(event.data, (response) => {
        // Send the response back to the webpage
        window.postMessage({ type: "FROM_EXTENSION", response }, event.origin);
    });
});
