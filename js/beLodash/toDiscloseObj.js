const obj = {
  a: 1,
  "b/c": 2,
  "d/e/f": 3,
  "d/j": 4,
  "d/h": 5,
  "i/j/k": ["hello"],
};

const toDiscloseObj = (obj) => {
  res = {};

  function recursion(res, paths, value) {
    if (paths?.length === 1) {
      res[paths[0]] = value;

      return;
    }

    if (paths[0] in res) {
      recursion(res[paths[0]], paths.slice(1), value);
    } else {
      res[paths[0]] = {};
      recursion(res[paths[0]], paths.slice(1), value);
    }
  }

  Object.entries(obj).forEach(([key, value]) => {
    const paths = key.split("/");
    recursion(res, paths, value);
  });

  return res;
};

console.log(toDiscloseObj(obj));
