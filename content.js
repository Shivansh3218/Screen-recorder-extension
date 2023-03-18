window.addEventListener("load", () => {
  console.log("this is the content.js file of extension");
  document.createElement("video").classList.add("video-feedback");
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

MediaRecorder.onstop = handleStop();

function stopRecording() {
  console.log("recording stopped ");
  recorder.stop();
  //   recorder.onstop = handleStop;
  console.log(chunks);
}

function setupVideoFeedback() {
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

    console.log("Recording started");
  } else {
    console.log("No stream available.");
  }
}
startRecording();

function handleDataAvailable(e) {
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

  console.log("Recording stopped");
}

var stopButton = document.querySelector(".yHy1rc");

stopButton.addEventListener("click", stopRecording());

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
