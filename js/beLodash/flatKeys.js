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

const flatKeys = (obj) => {
  const res = {};

  function recursion(obj, key = "") {
    if (Object(obj) !== obj || Array.isArray(obj)) {
      res[key] = obj;
    } else {
      Object.entries(obj).forEach(([kkey, value]) => {
        recursion(value, key ? `${key}/${kkey}` : kkey);
      });
    }
  }

  recursion(obj);

  return res;
};

console.log(flatKeys(shape));
