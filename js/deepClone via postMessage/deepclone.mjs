const deepClone = (object) => {
  return new Promise((resolve) => {
    window.addEventListener("message", cloneEvent);

    function cloneEvent(e) {
      resolve(e.data);
      window.removeEventListener("message", cloneEvent);
    }

    window.postMessage(object, "*");
  });
};

export { deepClone };
