const shape = {
  a: 1,
  b: {
    a: 2,
    b: 6,
  },
  c: {
    d: Array.from({ length: 7 }, (_, index) => index + 1),
    a: {
      b: {
        c: 5,
      },
    },
  },
};

function flatKeys(data) {
  let res = {};

  function recusrion(obj, path = "") {
    if (Object(obj) !== obj || Array.isArray(obj)) {
      res[path] = obj;
      return;
    }

    Object.entries(obj).forEach(([key, value]) => {
      recusrion(value, path ? `${path}/${key}` : key);
    });
  }

  recusrion(data);

  return res;
}

console.log(flatKeys(shape));
