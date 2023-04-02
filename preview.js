let base64String = "data:video/mp4;base64,[base64 string]";

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
   
    if(request.type == "base64Data"){
        
    //     fetch("data:video/mp4;base64," + base64Data)
    // .then(res => res.blob())
    // .then(blob => {
    //   console.log(blob);
    //   var url = window.URL.createObjectURL(blob);
    // });


      let videoData = window.atob(request.data);
      console.log(videoData);

      base64String = `data:video/mp4;base64,[${videoData}]`;
      var blob = base64StringToBlob(base64String);
      var url = URL.createObjectURL(blob);
      
      var video = document.createElement("video");
      video.autoplay = true;
      document.body.appendChild(video);
      
      var mediaSource = new MediaSource();
      mediaSource.addEventListener("sourceopen", function() {
        var sourceBuffer = mediaSource.addSourceBuffer("video/mp4; codecs=avc1.42E01E,mp4a.40.2");
        fetch(url)
          .then(response => response.arrayBuffer())
          .then(arrayBuffer => sourceBuffer.appendBuffer(arrayBuffer));
      });
      
      video.srcObject = mediaSource;
      
      function base64StringToBlob(base64String) {
        var byteCharacters = atob(base64String.split(",")[1]);
        var byteNumbers = new Array(byteCharacters.length);
        for (var i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], {type: "video/mp4"});
      }
    }
    
  })


  