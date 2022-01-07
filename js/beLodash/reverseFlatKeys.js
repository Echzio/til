const shape = {
  a: 1,
  "b/a": 2,
  "b/b": 6,
  "c/d": [1, 2, 3, 4, 5, 6, 7],
  "c/a/b/c": 5,
};

function reverseFlatKeys(data) {
  let res = {};

  Object.entries(data).forEach(([key, value]) => {
    const keyList = key.split("/");
    const lastKey = keyList.pop();

    const buffer = keyList.reduce((acc, el) => {
      if (!acc[el]) acc[el] = {};
      return acc[el];
    }, res);

    buffer[lastKey] = value;
  });

  return res;
}

console.log(reverseFlatKeys(shape));
