function recursiveCopy(obj) {
  if (Object(obj) !== obj || Array.isArray(obj)) {
    return obj;
  }

  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[key] = recursiveCopy(value);
    return acc;
  }, {});
}

const shape = {
  a: null,
  b: 1,
  c: 2,
  d: 3,
  e: {
    f: 4,
  },
};

console.log(recursiveCopy(shape).e === shape.e);
