let mydata = '';

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(`Message received: ${message}`);
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'createTab') {
    chrome.tabs.create({ url: request.url });
  }
});

