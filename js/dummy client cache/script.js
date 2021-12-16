const worker = new Worker(new URL("worker.js", window.location.origin));
worker.postMessage({
  action: "open",
  payload: window.cacheVersion,
});

window.addEventListener("beforeunload", () => {
  const entities = collectBlobs().filter(({ value }) => value !== null);

  worker.postMessage({
    action: "save",
    payload: entities,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  worker.postMessage({
    action: "check",
    payload: collectBlobs().map(({ key }) => ({ key })),
  });

  worker.addEventListener("message", ({ data }) => {
    data.forEach(({ key, value }) => {
      const transfer = new DataTransfer();
      transfer.items.add(value);

      document.querySelector(`[data-cache-key=${key}]`).files = transfer.files;
    });
  });
});

function collectBlobs() {
  return [...document.querySelectorAll('[data-cache="true"]')].map((item) => ({
    key: item.dataset.cacheKey ? item.dataset.cacheKey : null,
    value: item.files[0] ? item.files[0] : null,
  }));
}
