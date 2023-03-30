{
  /* <script src='https://apis.google.com/js/api.js'></script> */
}

window.addEventListener("load", () => {
  console.log("this is the content.js file of extension");
  let stream = null;
  let audio = null;
  let mixedStream = null;
  let chunks = [];
  let recorder = null;
  let isRecordingVideo = false;

  //attendance tracker variables

  let studentDetails = new Map();
  let studentsNameSet = new Set();
  let ui_buttons;
  let totalClassDuration = 0;
  let goingToStop = 0;
  let isAttendanceWorking = false;
  let buttonClickInd = 0;
  let startTime;
  let flag = true; // make if false to block non-meraki classes
  let meetingDuration;
  const redirectUrl = "http://192.168.101.4:5500/index.html";
  // let newWindow1 = window.open(redirectUrl);

  let meetingCode = window.location.pathname.substring(1);
  let date = new Date();
  let dd = date.getDate();
  let mm = date.toLocaleString("default", { month: "short" });
  let yyyy = date.getFullYear();
  date = dd + "-" + mm + "-" + yyyy;
  let sortedtstudentsNameSet = [];
  let studentsAttendedDuration = [];
  //   let studentsJoiningTime = [];
  let mapKeys = studentDetails.keys();

  // let videoDisplay = document.createElement("video");
  // videoDisplay.classList.add("video-feedback");

  let recButton = document.createElement("button");
  recButton.id = "recButton";
  // recButton.className = "Jyj1Td CkXZgc";
  recButton.type = "button";
  recButton.innerHTML = "Rec";
  recButton.style.border = "none";
  recButton.style.backgroundColor = "#ea4335";
  recButton.style.color = "white";
  recButton.style.height = "2.6rem";
  recButton.style.width = "2.5rem";
  recButton.style.borderRadius = "50%";
  recButton.style.cursor = "pointer";

  // Adding Recording button to meet ui
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

  // Define the callback function to execute when the Google API client library is loaded
  function init() {
    // Your code that uses the Google API client library here
  }

  // Create a script tag and set its source to the Google API client library

  // var script = document.createElement('script');
  // script.setAttribute('unsafe-inline',"") ;
  // script.setAttribute('self',"") ;
  // script.setAttribute('unsafe-eval',"")
  // script.src = 'https://apis.google.com/js/api.js';

  // Set the callback function to execute when the script has finished loading
  // script.onload = function() {
  //   gapi.load('client', init);
  // };

  // Add the script tag to the document
  // document.head.innerHTML +=  "<script src='https://apis.google.com/js/api.js' 'unsafe-eval' 'self' 'unsafe-inline'></script>"

  // if ("function"  === typeof importScripts) {
  //   console.log("we are coming inside if bracket in gapi windowwwww")
  //   importScripts("https://apis.google.com/js/api.js");
  //   gapi.load("client", init);
  // }

  // const script = document.createElement('script');
  // script.setAttribute("type", "module");
  // script.setAttribute("src", "https://apis.google.com/js/api.js");
  // const head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
  // head.insertBefore(script, head.lastChild);

  // script.load(()=>{
  // gapi.load("client", init)
  // })

  recButton.addEventListener("click", () => {
    if (recButton.innerHTML == "Rec") {
      isRecordingVideo = true;
      recButton.innerHTML = "Stop";
    } else if (recButton.innerHTML == "Stop") {
      isRecordingVideo = false;
      recButton.innerHTML = "Rec";
    }

    if (isRecordingVideo) {
      startRecording();
    } else {
      stopRecording();
    }
  });

  function insertRecButton() {
    // console.log(document.getElementsByClassName("VfPpkd-kBDsod NtU4hc").length>0)
    try {
      // console.log(chrome.runtime.getURL('popup.html'))
      if (document.getElementsByClassName("VfPpkd-kBDsod NtU4hc").length > 0) {
        ui_buttons = document.getElementsByClassName("VfPpkd-kBDsod NtU4hc");
        document.getElementsByClassName("jsNRx")[0].appendChild(recButton);
      }
    } catch (error) {
      console.log(error);
    }
  }

  let insertBtnInterval = setInterval(() => {
    insertRecButton();
  }, 1000);

  // if(document.getElementsByClassName("VfPpkd-kBDsod NtU4hc")){
  //   setTimeout(insertRecButton(),1000)
  // }

  function insertButton() {
    try {
      ui_buttons = document.getElementsByClassName("VfPpkd-kBDsod NtU4hc");
      // ui_buttons[1].click();
      document.getElementsByClassName("Tmb7Fd")[0].appendChild(newButton);
      if (!isAttendanceWorking) {
        isAttendanceWorking = true;
        newButton.style.backgroundColor = "#00796b";
        StartTime = new Date().toLocaleTimeString();
        studentDetails.clear();
        studentsNameSet.clear();
        totalClassDuration = 0;
        start();
      }

      document
        .getElementsByClassName("Gt6sbf QQrMi")
        .addEventListener("click", function () {
          if (isAttendanceWorking) {
            stop();
          }
        });
      clearInterval(tryInsertingButton);
    } catch (error) {}
  }

  async function merakiClassChecker(url) {
    const API_URL = "https://dev-api.navgurukul.org/classes";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM5Nzc2IiwiZW1haWwiOiJzaGl2YW5zaEBuYXZndXJ1a3VsLm9yZyIsImlhdCI6MTY3OTAzNTE4OCwiZXhwIjoxNzEwNTkyNzg4fQ.Ayzgfkk9k6PE_kaybCAznNeEXmF01zp7pLa5zOQ0f4k";

    const data = await fetch(API_URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "version-code": 99,
      },
    });
    const parsed_data = await data.json();
    for (let ind = 0; ind < parsed_data.length; ind++) {
      if (parsed_data[ind].meet_link === url) {
        flag = true;
        break;
      }
    }
    return flag;
  }

  let meet_url = window.location.href;
  const checked_url = merakiClassChecker(meet_url);
  checked_url.then((result) => {
    if (result) {
      setInterval(insertButton, 1000);
    }
  });

  async function start() {
    startTime = new Date();
    startAttendanceTracker = setInterval(attendanceTracker, 1000);
  }

  // to get the meeting name/title
  const getMeetingName = () => {
    const elm = document.querySelector("[data-meeting-title]");
    if (elm && elm.dataset.meetingTitle) {
      return elm.dataset.meetingTitle;
    }
    return document.title;
  };

  let stop = (STOP = () => {
    // let newWindow1 = window.open(redirectUrl);

    clearInterval(startAttendanceTracker);

    //   let studentsJoiningTime = [];
    let mapKeys = studentDetails.keys();
    for (i = 0; i < studentDetails.size; i++) {
      let studentName = mapKeys.next().value;
      sortedtstudentsNameSet.push(studentName);
    }
    sortedtstudentsNameSet.sort();
    for (studentName of sortedtstudentsNameSet) {
      let data = studentDetails.get(studentName);
      studentsAttendedDuration.push(data[0].toString());
      // studentsJoiningTime.push(data[1]);
    }
    const end_time = new Date();

    var record = {
      attendee_names: JSON.stringify(sortedtstudentsNameSet),
      attendedDurationInSec: JSON.stringify(studentsAttendedDuration),
      meet_code: meetingCode,
      meeting_title: getMeetingName().replace("Meet - ", ""),
      meeting_time: startTime.toISOString(),
    };

    setTimeout(() => {
      const api = "https://192.168.101.4:5500/index.html"; // endpoint where this data will go
      fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(record),
      })
        .then((response) => response.json())
        .then((string) => {
          console.log(`Title of our response :  ${string.title}`);
          // window.open("http://192.168.101.4:5500/index.html");
          // runtime.openOptionsPage()
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);

    record.meet_duration = meetingDuration;
    console.log(record, "Attendance Record");

    let newRecord;

    const oldRecord = chrome.storage.sync.get(
      "Meraki_Attendance_Record",
      (data) => {
        const oldData = data.Meraki_Attendance_Record;

        if (!oldData) {
          const setData = chrome.storage.sync.set({
            Meraki_Attendance_Record: [record],
          });
        } else {
          oldData.push(record);
          chrome.storage.sync.set({
            Meraki_Attendance_Record: oldData,
          });
        }
      }
    );

    setTimeout(function () {
      // newWindow1.postMessage(JSON.stringify(record), redirectUrl);
    }, 10000);
  });

  function attendanceTracker() {
    let currentlyPresentStudents = document.getElementsByClassName("zWGUib");
    if (currentlyPresentStudents.length > 0) {
      studentsNameSet.clear();
      let numberOfjoinedStudents = -1;
      try {
        numberOfjoinedStudents = Number(
          document.getElementsByClassName("uGOf1d")[1].innerHTML
        );
        numberOfjoinedStudents =
          Number.isInteger(numberOfjoinedStudents) &&
          numberOfjoinedStudents > 0 &&
          numberOfjoinedStudents != -1
            ? numberOfjoinedStudents
            : currentlyPresentStudents.length;
      } catch (e) {
        numberOfjoinedStudents = currentlyPresentStudents.length;
      }
      for (i = 0; i < numberOfjoinedStudents; i++) {
        try {
          studentsNameSet.add(
            currentlyPresentStudents[i].innerHTML.toUpperCase()
          );
        } catch (exception) {}
      }
      for (studentName of studentsNameSet) {
        if (studentDetails.has(studentName)) {
          let data = studentDetails.get(studentName);
          data[0] += 1;
          studentDetails.set(studentName, data);
        } else {
          let joiningTime = new Date().toLocaleTimeString();
          let currStatus = 1;
          let data = [];
          data.push(currStatus);
          data.push(joiningTime);
          studentDetails.set(studentName, data);
        }
      }
      if (studentsNameSet.size - 1 == -1) {
        goingToStop += 1;
      } else {
        meetingDuration = toTimeFormat(totalClassDuration);
        newButton.innerHTML = toTimeFormat(totalClassDuration);
        totalClassDuration += 1;
        goingToStop = 0;
      }
      if (goingToStop == 2) {
        isAttendanceWorking = false;
        newButton.innerHTML = "Track Attendance";
        newButton.style.border = "2px solid #C5221F";
        goingToStop = 0;
        stop();
      }
    } else {
      try {
        // ui_buttons[buttonClickInd % ui_buttons.length].click();
        ui_buttons[1].click();
        buttonClickInd += 1;
        goingToStop = 0;
      } catch (error) {
        goingToStop += 1;
        if (goingToStop == 2) {
          isAttendanceWorking = false;
          newButton.innerHTML = "Track Attendance";
          newButton.style.border = "2px solid #C5221F";
          goingToStop = 0;
          stop();
        }
      }
    }
  }
  function toTimeFormat(time) {
    const SECONDS_IN_HOUR = 3600;
    const SECONDS_IN_MINUTE = 60;

    let hours = Math.floor(time / SECONDS_IN_HOUR);
    let minutes = Math.floor((time % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
    let seconds = time % SECONDS_IN_MINUTE;

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    return hours === "00"
      ? `${minutes}:${seconds}`
      : `${hours}:${minutes}:${seconds}`;
  }

  //Recorder functions

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

  async function stopRecording() {
    //creating a database named as myDatabaseBlob
    const dbPromise = window.indexedDB.open("myDatabaseBlob", 1);

    dbPromise.onsuccess = (event) => {
      console.log(
        "Going inside the dbpromise function --------------------------"
      );

      const db = event.target.result;

      // Create a transaction to access the object store
      const transaction = db.transaction("myObjectStore", "readwrite");
      const objectStore = transaction.objectStore("myObjectStore");

      // blob file to be uploaded
      const blob = new Blob(chunks, { type: "video/mp4" });

      // Add the Blob to the object store
      const request = objectStore.add(blob);

      request.onerror = (e) => {
        console.error("Error adding Blob to object store:", e.target.error);
      };

      request.onsuccess = () => {
        console.log("Blob added to object store:", request.result);
      };
    };

    dbPromise.onupgradeneeded = (e) => {
      const db = e.target.result;

      // Create a new object store in the database
      const objectStore = db.createObjectStore("myObjectStore", {
        keyPath: "id",
        autoIncrement: true,
      });
    };

    recorder.stop();
    recorder.onstop = handleStop;

    // gapi.load('client', function() {
    //   // Initialize the client with the API key and desired API discovery document
    //   gapi.client.init({
    //     apiKey: 'YOUR_API_KEY',
    //     discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
    //   }).then(function() {
    //     // The client is now ready to use
    //     console.log('YouTube Data API client loaded');
    //   }, function(error) {
    //     console.error('Error loading YouTube Data API client', error);
    //   });
    // });

    // let url = chrome.runtime.getURL("preview.html");

    // console.log(chrome.tabs, "Chrome tabs are available");

    // // location.href = await url
    //  console.log(url,"current location url")
    // //  await chrome.tabs.update({url:url});
    // window.open(url);

    // window.location.href = "chrome-extension://jepmjliklolcbelfdolpkahhlccblcdk/preview.html";

    // chrome.tabs.create({ url: "chrome-extension://jepmjliklolcbelfdolpkahhlccblcdk/preview.html" })

    // chrome.runtime.sendMessage('jepmjliklolcbelfdolpkahhlccblcdk',{
    //   action: "openNewTab",
    //   url: "chrome-extension://jepmjliklolcbelfdolpkahhlccblcdk/preview.html",
    // });

    // (async () => {
    //   const response = await chrome.runtime.sendMessage({greeting: "hello"});
    //   console.log(response,"response of message to background.js");
    // })();

    // const openTab = (url, newTab = true) => {
    //   let tabType = newTab ? "_blank" : "_self";
    //   window.open(url, tabType);
    // };
    // openTab("chrome-extension://jepmjliklolcbelfdolpkahhlccblcdk/preview.html");

    // let video = document.createElement("video");
    // document.body.appendChild(video);
    // document.body.innerText = "iashdoasbundoasndojlsankdolashin";

    // chrome.runtime.sendMessage("Hello from content.js to backGround.js!");

    chrome.runtime.sendMessage({ action: 'createTab', url: 'chrome-extension://jepmjliklolcbelfdolpkahhlccblcdk/preview.html' });

    // console.log("windoooooooooooooooooooooooooooooooooooooooooow is loadded");

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

  function handleStop(e) {
    clearInterval(insertBtnInterval);
    console.log("Recording stopped handleStop function");
  }
});
