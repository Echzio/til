function debounce(func, t) {
  let throttled = false;
  args = null;
  context = null;

  return function debaunced() {
    if (throttled) {
      args = arguments;
      context = this;
      return
    }

    func.apply(context, args);
    throttled = true;
    setTimeout(() => {
      throttled = false;
      if (!!args) {
        debaunced.apply(context, arguments);
        context = args = null;
      }
    }, t)

  }
}

//
const func = debounce(func, 500);