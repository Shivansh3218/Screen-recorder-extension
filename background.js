chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(`Message received: ${message}`);
});


async function setupStream() {
  try {
    stream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
    });

    audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    setupVideoFeedback();
  } catch (err) {
    console.log(err);
  }
}

function setupVideoFeedback() {
  if (stream) {
    console.log(stream, "This is stream");
  } else {
    console.log("No stream available");
  }
}

async function startRecording() {
  await setupStream();
  console.log("Recorder function is running");
  if (stream && audio) {
    mixedStream = new MediaStream([
      ...stream.getTracks(),
      ...audio.getTracks(),
    ]);

    recorder = new MediaRecorder(mixedStream);

    recorder.ondataavailable = handleDataAvailable;
    recorder.start(1000);
    recorder.onstop = stopRecording;
    console.log("Recording started");
  } else {
    console.log("No stream available.");
  }
}

function handleDataAvailable(e) {
  console.log(chunks, "this is chunks");

  if (e.data) {
    chunks.push(e.data);
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "createTab") {
    chrome.tabs.create({ url: request.url });

    sendResponse("message from background");
  }

  if(request.action == "startRec"){
    startRecording()
  }
});
