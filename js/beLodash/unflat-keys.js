const unflatKeys = (obj) => {
  const res = {};

  function recursion(deepKeys, value, res) {
    if (deepKeys.length === 1) {
      res[deepKeys[0]] = value;
      return;
    }

    if (deepKeys[0] in res) {
      recursion(deepKeys.slice(1), value, res[deepKeys[0]]);
    } else {
      res[deepKeys[0]] = {};

      recursion(deepKeys.slice(1), value, res[deepKeys[0]]);
    }
  }

  Object.entries(obj).forEach(([key, value]) => {
    const deepKeys = key.split("/");

    recursion(deepKeys, value, res);
  });

  return res;
};

const obj = {
  a: 1,
  "b/a": 2,
  "b/c": [1, 2, 3],
  "c/d": [{ a: 1, b: 2, c: 3 }],
  d: [1, 2, 3],
};

console.log(unflatKeys(obj));
