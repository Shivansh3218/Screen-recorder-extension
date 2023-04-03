chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  var url;
  if (request.type == "base64Data") {
    fetch("data:video/mp4;base64," + request.data)
      .then((res) => res.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onload = function (event) {
          const dataUrl = event.target.result;
          const videoElement = document.createElement("video");
          videoElement.src = dataUrl;
          document.body.appendChild(videoElement);
          videoElement.classList.add("video-preview");
          videoElement.setAttribute("controls", ""); // Add controls to the video element
          const downloadLink = document.createElement("a");
          downloadLink.href = dataUrl;
          downloadLink.download = "my-video.mp4";
          document.body.appendChild(downloadLink);
          let downloadBtn =  document.querySelector("#download-video")
          downloadBtn.addEventListener("click",()=>downloadLink.click());

        };
        reader.readAsDataURL(blob);
      });
  }
});

// let tokenClient;
// let gapiInited;
// let gisInited;
// let uploadBtn = document.getElementById("upload-video");
// uploadBtn.addEventListener("click", () => showEvents());
// function checkBeforeStart() {
//   if (gapiInited && gisInited) {
//     // Start only when both gapi and gis are initialized.
//   }
// }

// function gapiInit() {
//   gapi.client
//     .init({
//       // NOTE: OAuth2 'scope' and 'client_id' parameters have moved to initTokenClient().
//     })
//     .then(function () {
//       // Load the Calendar API discovery document.
//       gapi.client.load(
//         "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"
//       );
//       gapiInited = true;
//       checkBeforeStart();
//     });
// }

// function gapiLoad() {
//   gapi.load("client", gapiInit);
// }

// function gisInit() {
//   tokenClient = google.accounts.oauth2.initTokenClient({
//     client_id:
//       "1011062865006-mrmheoehvr93civ2l4ijf58g517lge3s.apps.googleusercontent.com",
//     scope: "https://www.googleapis.com/auth/youtube.upload",
//     callback: "", // defined at request time
//   });
//   gisInited = true;
//   checkBeforeStart();
// }

// function showEvents() {
//   tokenClient.callback = (resp) => {
//     if (resp.error !== undefined) {
//       throw resp;
//     }
//     // GIS has automatically updated gapi.client with the newly issued access token.

//     console.log(
//       "gapi.client access token: " + JSON.stringify(gapi.client.getToken())
//     );
//     var client = gapi.client.youtube;
//     const videoFile = document.getElementById("video-file").files[0];

//     // const reader = new FileReader();
//     // let videoData;
//     // reader.onload = function (event) {
//     //   videoData = reader.result
//     // };
//     // reader.readAsArrayBuffer(videoFile);

//     //   const mediaFile = new File(videoFile, "Video.mp4", {
//     //     type: "application/octet-stream",
//     //   });
//     const mediaContent = new Blob([videoFile], {
//       type: "application/octet-stream",
//     });
//     //   mediaContent.set("Content-Length", mediaFile.size.toString());

//     var request = client.videos.insert({
//       // auth:gapi.client.getToken(),
//       part: "snippet,status,contentDetails",
//       resource: {
//         snippet: {
//           title: "My Awesome Video",
//           description: "This is my awesome video",
//           tags: ["awesome", "video", "fun"],
//           categoryId: "22",
//         },
//         status: {
//           privacyStatus: "private",
//         },
//       },
//       media: {
//         body: mediaContent,
//       },
//     });
//     request.execute(function (response) {
//       console.log(response);
//     });

//     //   gapi.client.calendar.events
//     //     .list({ calendarId: "primary" })
//     //     .then((calendarAPIResponse) =>
//     //       console.log(JSON.stringify(calendarAPIResponse))
//     //     )
//     //     .catch((err) => console.log(err));

//     //   document.getElementById("showEventsBtn").innerText =
//     //     "Refresh Calendar";
//   };

//   // Conditionally ask users to select the Google Account they'd like to use,
//   // and explicitly obtain their consent to fetch their Calendar.
//   // NOTE: To request an access token a user gesture is necessary.
//   if (gapi.client.getToken() === null) {
//     // Prompt the user to select a Google Account and asked for consent to share their data
//     // when establishing a new session.
//     tokenClient.requestAccessToken({ prompt: "consent" });
//   } else {
//     // Skip display of account chooser and consent dialog for an existing session.
//     tokenClient.requestAccessToken({ prompt: "" });
//   }
// }

// function revokeToken() {
//   let cred = gapi.client.getToken();
//   if (cred !== null) {
//     google.accounts.oauth2.revoke(cred.access_token, () => {
//       console.log("Revoked: " + cred.access_token);
//     });
//     gapi.client.setToken("");
//     document.getElementById("showEventsBtn").innerText = "Show Calendar";
//   }
// }
