let base64String = "data:video/mp4;base64,[base64 string]";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var url;
  if (request.type == "base64Data") {
    console.log("hello the send message is recieved");
    fetch("data:video/mp4;base64," + request.data)
      .then((res) => res.blob())
      .then((blob) => {
        console.log(blob);
        url = window.URL.createObjectURL(blob);
        // Create a new video element
        const videoElement = document.createElement("video");
        videoElement.setAttribute("controls", ""); // Add controls to the video element

        // Set the video source to the URL object
        videoElement.src = url;
        // Add the video element to the page
        document.body.appendChild(videoElement);
      });


      
  }
});
