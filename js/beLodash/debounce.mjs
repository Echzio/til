function debounce(fn, t) {
  let isThrottled = false;
  let args = null;
  let context = null;

  return function throttle() {
    if (isThrottled) {
      args = arguments;
      context = this;
      return;
    }

    fn.apply(this, arguments);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (args !== null) {
        throttle.apply(context, args);
        context = args = null;
      }
    }, t);
  };
}

export { debounce };
