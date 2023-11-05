const resolvedModules = (obj) => {
  const res = new Set();

  function recursion(key) {
    const deps = obj[key];

    deps.forEach((dep) => recursion(dep));

    res.add(key);
  }

  Object.keys(obj).forEach((key) => recursion(+key));

  return res;
};

const obj = {
  1: [2, 3],
  2: [3],
  3: [],
  4: [1, 5, 8],
  5: [3],
  6: [9, 1],
  7: [5, 4],
  8: [9],
  9: [1],
};

console.log(resolvedModules(obj));
