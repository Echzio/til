function sum(a) {
  let res = a;
  const f = b => {
    res += b;
    return f;
  };

  f.toString = () => res;

  return f;
}

console.log(sum(1)(2)(5)(10) == 18);
