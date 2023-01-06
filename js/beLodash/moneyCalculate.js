function trampolining(fn) {
  let res = fn;

  while (typeof res === "function") {
    res = res();
  }

  return res;
}

function getValueForMinNominal(nominal, value) {
  while (value % nominal !== 0) {
    value -= 1;
  }

  return value;
}

function getMoney(
  value,
  narrowing = {
    5000: +Infinity,
    2000: +Infinity,
    1000: +Infinity,
    500: +Infinity,
    200: +Infinity,
    100: +Infinity,
    50: +Infinity,
  }
) {
  const maxSum = Object.entries(narrowing).reduce((acc, [key, value]) => {
    return acc + key * value;
  }, 0);

  if (maxSum < value) return "no Money";

  const nominals = Object.keys(narrowing).sort((a, b) => b - a);

  const narrow = {
    ...narrowing,
  };

  let res = nominals.reduce(
    (acc, el) => ({
      ...acc,
      [el]: 0,
    }),
    {}
  );

  function recursion(val, index = 0) {
    if (val <= 0) return res;
    if (nominals[index] <= val && narrow[nominals[index]] !== 0) {
      res[nominals[index]] += 1;
      narrow[nominals[index]] -= 1;

      return () => recursion(val - nominals[index], index);
    }

    return () => recursion(val, ++index);
  }

  return trampolining(
    recursion(getValueForMinNominal(Math.min(...nominals), value))
  );
}

console.log(
  getMoney(900070, { 5000: 500, 1000: 400, 500: 10, 100: 10000, 50: 5, 10: 100 })
);
