const input = "MDXXXXXIIIIIIIII";

function toNumber(value) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return [...value].reduce((acc, item, index, array) => {
    const current = map[item.toUpperCase()];
    const next = map[array[index + 1]?.toUpperCase()];

    return acc + (current < next ? -current : current);
  }, 0);
}

function toShortRome(number) {
  const map = [
    ["M", 1000],
    ["D", 500],
    ["C", 100],
    ["L", 50],
    ["IC", 49],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  function recursion(number, res = "") {
    if (number < 1) return res;

    const upper = map.find(([, num]) => number >= num);

    return recursion(number - upper[1], res + upper[0]);
  }

  return recursion(number);
}

console.log(toShortRome(toNumber(input)));
