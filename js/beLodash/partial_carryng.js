function sum(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}

const partial = (fn, ...args) => {
  if (fn.length === args.length) return fn.apply(null, args);

  return (...arg) => {
    return partial(fn, ...args, ...arg);
  };
};

const carryng0 = partial(sum);
const carryng1 = carryng0(1);
const carryng2 = carryng1(2, 3);
const carryng3 = carryng2(4, 5, 6);

console.log(
  carryng3,
  [1, 2, 3, 4, 5, 6].reduce((acc, el) => acc + el, 0)
);
