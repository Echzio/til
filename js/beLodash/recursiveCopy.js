const recursiveCopy = (obj) => {
  if (Object(obj) !== obj || Array.isArray(obj)) {
    if (Array.isArray(obj)) {
      return [...obj].map((item) => recursiveCopy(item));
    }
    return obj;
  }
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[key] = recursiveCopy(value);

    return acc;
  }, {});
};

const obj = {
  a: 1,
  b: {
    a: 2,
    c: [1, 2, 3],
  },
  c: {
    d: [{ a: 1, b: 2, c: 3 }],
  },
  d: [1, 2, 3],
};

const copiedObj = recursiveCopy(obj);

console.log(copiedObj.a === obj.a);
console.log(copiedObj.b === obj.b);
console.log(copiedObj.b.c === obj.b.c);
console.log(copiedObj.c.d[0] === obj.c.d[0]);
