function compare(...objs) {
  const mapped = objs.map((obj) => {
    let buffer = {};
    recursion(obj, buffer);
    return buffer;
  });

  const withMaxKeys = mapped.find(
    (item, _, array) =>
      Object.keys(item).length ===
      Math.max(...array.map((item) => Object.keys(item).length))
  );

  return mapped.every((item) => {
    return Object.entries(withMaxKeys).every(
      ([key, value]) => item[key] === value
    );
  });

  function recursion(obj, buffer, path = "") {
    if (
      Object(obj) !== obj ||
      Array.isArray(obj) ||
      obj instanceof Date ||
      obj instanceof Function
    ) {
      buffer[path] = obj.toString();
      return;
    }
    Object.entries(obj).forEach(([key, value]) => {
      recursion(value, buffer, path ? `${path}/${key}` : key);
    });
  }
}

console.log(
  compare(
    { a: 1, b: { c: new Date(), d: () => null } },
    { a: 1, b: { c: new Date(), d: () => null } }
  )
);
