function compose(...fns) {
  return (...args) => {
    return fns.reduceRight((acc, el) => {
      return el.apply(null, Array.isArray(acc) ? acc : [acc]);
    }, args);
  };
}

function carryng(fn) {
  let args = [];
  let count = fn.length;

  return function carried(ars) {
    args = [...args, ars];
    if (count < 2) return fn.apply(null, args);
    count--;
    return carried;
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
