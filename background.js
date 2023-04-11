let myArray = [];

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "createTab") {
    myArray.map((chunk, index) => {
      const key = `data_chunk_${index}`;
      const chunkData = { chunk, index, totalChunks: myArray.length };
      chrome.storage.local.set({ [key]: chunkData }, () => {
        console.log(`Chunk ${index + 1} of ${myArray.length} stored`);
      });
    });
    chrome.tabs.create({ url: request.url });
  } else if (request.type == "base64Data") {
    myArray.push(request.data);
  } else if (request.type === "attendance") {
    // console.log(request.meetRecord)
    let attendanceRecord = request.meetRecord;
    chrome.storage.local.set({ attendanceRecord }, () => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else {
        console.log("Object has been stored in chrome.storage.local");
      }
    });
  }
});
