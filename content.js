window.addEventListener("load", () => {
  console.log("this is the content.js file of extension");
});

let stream = null,
  audio = null,
  mixedStream = null,
  chunks = [],
  recorder = null;
(startButton = null),
  (stopButton = null),
  (downloadButton = null),
  (recordedVideo = null);

let isRecordingVideo = false;

let videoDisplay = document.createElement("video");
videoDisplay.classList.add("video-feedback");

var stopButton = document.querySelector(".Gt6sbf");

stopButton.addEventListener("click", stopRecording);

let newButton = document.createElement("button");
newButton.id = "newButton";
newButton.className = "Jyj1Td CkXZgc";
newButton.type = "button";
newButton.innerHTML = "Record";
newButton.style.border = "none";
newButton.style.backgroundColor = "#ea4335";
newButton.style.color = "white";
newButton.style.height = "2.6rem";
newButton.style.width = "4.2rem";
newButton.style.borderRadius = "30px";
if(isRecordingVideo===true){
  newButton.disabled=true
}
function insertButton() {
  try {
    ui_buttons = document.getElementsByClassName("VfPpkd-kBDsod NtU4hc");
    // ui_buttons[1].click();
    // console.log("getting in try block of insert button");
    document.getElementsByClassName("Tmb7Fd")[0].appendChild(newButton);
  } catch (error) {
    // console.log("error coming from error block", error);
  }
}

setInterval(insertButton, 1000);

//   startButton = document.querySelector(".start-recording");
//   stopButton = document.querySelector(".stop-recording");

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

function stopRecording() {
  console.log("recording stopped ");
  recorder.stop();
  //   recorder.onstop = handleStop;
  // console.log(chunks);
}

function setupVideoFeedback() {
  // newButton.style.display = 'none'
  if (stream) {
    // const video = document.querySelector(".video-feedback");
    // video.srcObject = stream;
    // video.play();
    console.log(stream, "This is stream");
  } else {
    console.log("No stream available");
  }
}

async function startRecording() {
  newButton.disabled= true
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

    recorder.onstop = handleStop;
    // setInterval(insertButton, 1000);

    console.log("Recording started");
  } else {
    console.log("No stream available.");
  }
}

console.log(newButton, "this is new Button");

newButton.addEventListener("click", startRecording);

function handleDataAvailable(e) {
  newButton.disabled=true
  console.log(chunks, "this is chunks");
  chunks.push(e.data);
}

function handleStop(e) {
  //   console.log("recording stopped");
  //   const blob = new Blob(chunks, { type: "video/mp4" });
  //   chunks = [];

  //   downloadButton.href = URL.createObjectURL(blob);
  //   downloadButton.download = "video.mp4";
  //   downloadButton.disabled = false;

  //   recordedVideo.src = URL.createObjectURL(blob);
  //   recordedVideo.load();
  //   recordedVideo.onloadeddata = function () {
  //     const rc = document.querySelector(".recorded-video-wrap");
  //     rc.classList.remove("hidden");
  //     rc.scrollIntoView({ behavior: "smooth", block: "start" });

  //     recordedVideo.play();
  //   };

  //   stream.getTracks().forEach((track) => track.stop());
  //   audio.getTracks().forEach((track) => track.stop());
  clearInterval(insertButton);
  console.log("Recording stopped");
  isRecordingVideo = false;
}



// window.addEventListener('load', () => {

// 	downloadButton = document.querySelector('.download-video');
// 	recordedVideo = document.querySelector('.recorded-video');

//   startButton.addEventListener("click", startRecording);
//   stopButton.addEventListener("click", stopRecording);
//   })
// });
// VfPpkd-Bz112c-LgbsSe    yHy1rc

// var recorder = new RecordRTC_Extension();

// recorder.startRecording({
//     enableScreen: true,
//     enableMicrophone: true,
//     enableSpeakers: true
// });

// btnStopRecording.onclick = function() {
//     recorder.stopRecording(function(blob) {
//         console.log(blob.size, blob);
//         var url = URL.createObjectURL(blob);
//         video.src = url;
//     });
// };
