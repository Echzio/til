document.addEventListener("DOMContentLoaded", () => {
  const styles = `
  <style>
  video {
    width: 500px;
    height: 500px;
    object-fit: contain;
  }
  </style>
  `;

  document.head.insertAdjacentHTML("beforeend", styles);
  const path = "/video.mp4";

  fetch(path, {
    method: "GET",
  })
    .then((res) => res.blob())
    .then((file) => {
      const url = URL.createObjectURL(file);

      const video = document.createElement("video");
      video.setAttribute("controls", "");
      video.src = url;
      document
        .getElementById("video-container")
        .insertAdjacentElement("afterbegin", video);
    });
});
