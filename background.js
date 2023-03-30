// console.log("background.js file is loaded")
// loadGapi(function() {
//     // Your code that uses the Google API client library here

//   });

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === 'openNewTab') {
//     // Open a new tab with the specified URL
//     chrome.tabs.create({ url: message.url });
//   }
// });

chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
  console.log(sender.tab ?
              "from a content script:" + sender.tab.url :
              "from the extension");
  if (request.greeting === "hello")
    sendResponse({farewell: "goodbye"});
});
