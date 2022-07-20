const trampoline = (fn) => {
  return (...props) => {
    let res = fn(...props);

    while (typeof res === "function") {
      res = res();
    }

    return res;
  };
};

function sum(number, res = 0) {
  if (number <= 0) return res;

  return () => sum(number - 1, res + number);
}

const getSum = trampoline(sum);

console.log(getSum(9999999));
