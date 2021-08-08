globalThis.addEventListener("message", (e) => {
  postMessage(e.data);
});
