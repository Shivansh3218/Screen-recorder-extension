let videoData = null;
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
          videoElement.setAttribute("controls", ""); 
          const downloadLink = document.createElement("a");
          downloadLink.href = dataUrl;
          downloadLink.download = "my-video.mp4";
          document.body.appendChild(downloadLink);
          let downloadBtn = document.querySelector("#download-video");
          downloadBtn.addEventListener("click", () => downloadLink.click());

          console.log(request.meetRecords);
          let attendeesNames = request.meetRecords.attendee_names;
          let meetingID = request.meetRecords.meet_code;
          let attendedDurationInSec = request.meetRecords.attendedDurationInSec;
          let meetingTime = request.meetRecords.meeting_time;
          let meet_duration = request.meetRecords.meet_duration;

          let data = [
            {
              attendedDurationInSec: JSON.parse(attendedDurationInSec),
              attendee_names: JSON.parse(attendeesNames),
              meet_duration: meet_duration,
              meeting_time: meetingTime,
              meeting_title: meetingID,
            },
          ];

          const table = document.createElement("table");

          const headerRow = document.createElement("tr");

          const nameHeader = document.createElement("th");
          nameHeader.textContent = "Total Meeting duration";
          headerRow.appendChild(nameHeader);

          const idHeader = document.createElement("th");
          idHeader.textContent = "Meeting id";
          headerRow.appendChild(idHeader);

          const attendeeHeader = document.createElement("th");
          attendeeHeader.textContent = "attendee_names";
          headerRow.appendChild(attendeeHeader);

          const meetDurationHeader = document.createElement("th");
          meetDurationHeader.textContent = "attendedDurationInSec";
          headerRow.appendChild(meetDurationHeader);

          table.appendChild(headerRow);

          const dataRow = document.createElement("tr");
          const duration_cell = document.createElement("td");
          duration_cell.textContent = data[0].meet_duration;
          dataRow.appendChild(duration_cell);

          const title_cell = document.createElement("td");
          title_cell.textContent = data[0].meeting_title;
          dataRow.appendChild(title_cell);

          const nameCell = document.createElement("td");
          nameCell.innerHTML = data[0].attendee_names
            .map((skill) => `<li>${skill}</li>`)
            .join("");
          dataRow.appendChild(nameCell);

          const attendanceDurationCell = document.createElement("td");
          attendanceDurationCell.innerHTML = data[0].attendedDurationInSec
            .map((hobby) => `<li>${hobby}</li>`)
            .join("");
          dataRow.appendChild(attendanceDurationCell);

          // Add the data row to the table
          table.appendChild(dataRow);

          document.body.appendChild(table);

          // console.log(
          //   attendeesNames,
          //   meetingID,
          //   attendedDurationInSec,
          //   meetingTime
          // );

          document
            .querySelector("#btnExport")
            .addEventListener("click", attendanceDownload);

          function attendanceDownload() {
            const html = table.outerHTML;
            const Datablob = new Blob([html], { type: "text/html" });
            const url = URL.createObjectURL(Datablob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "Attendance-Table.html";
            document.body.appendChild(link);
            link.click();
          }
        };
        reader.readAsDataURL(blob);
      });
  }
});
