// Listen for messages from the webpage
window.addEventListener("message", (event) => {



    // Verify the source of the message for security
    if (event.origin !== "https://puzzle-generator-online-r906.onrender.com") return;
    console.log("message listener hit!", event.origin);
    console.log("event data from webpage ", event);

    // Forward the message to the extension's background script
    chrome.runtime.sendMessage(event.data, (response) => {

        console.log("Response from bg script: ", response);

        // Send the response back to the webpage
        window.postMessage({ response }, event.origin);
    });
});

console.log("comm cs loaded");
