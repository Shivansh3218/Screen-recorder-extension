// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   console.log(`Message received: ${message}`);
// });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'createTab') {
    chrome.tabs.create({ url: request.url });
  }
});

// chrome.runtime.onMessage.addListener((req,sender,sendResponse)=>{
//   if(req.type=='base64Data'){
//     console.log(req.meetRecords,"meeting records")
//     console.log(req.data)
//   }
// })