const mediaSource = new MediaSource();

mediaSource.addEventListener("sourceopen", async () => {
  const sourceBuffer = mediaSource.addSourceBuffer(
    'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
  );
  const res = await fetch(
    "https://nickdesaulniers.github.io/netfix/demo/frag_bunny.mp4"
  ).then((res) => res.body.getReader());

  let length = 0;

  while (true) {
    const { done, value } = await res.read();

    if (done) break;

    length += value.length;

    document.getElementById("text").textContent = `Получено ${(
      length /
      1024 /
      1024
    ).toFixed(2)} мегабайт`;

    await new Promise((resolve) => {
      sourceBuffer.appendBuffer(value);
      sourceBuffer.onupdateend = resolve;
    });
  }
});

document.getElementById("video").src = URL.createObjectURL(mediaSource);
