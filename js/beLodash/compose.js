function compose(...fns) {
  return (...args) => {
    return fns.reduceRight((acc, el) => {
      return el.apply(null, Array.isArray(acc) ? acc : [acc]);
    }, args);
  };
}

function carryng(fn) {
  return function carried(...args) {
    if (fn.length === args.length) return fn.apply(null, args);
    return function () {
      return carried(...args, ...arguments);
    };
  };
}

function calc(a, b, c) {
  return a + b + c;
}

function pow(a) {
  return a ** 2;
}

const carrCalc = carryng(calc);

const comp = compose(pow, carrCalc(1)(2));

console.log(comp(3));
