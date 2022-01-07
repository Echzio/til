function shortRome(data) {
  const map = [
    [1000, "M"],
    [500, "D"],
    [100, "C"],
    [50, "L"],
    [49, "IL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  function recursion(num, stroke = "") {
    if (num < 1) return stroke;
    const current = map.find(([val]) => num >= val);

    stroke += current[1];
    return recursion(num - current[0], stroke);
  }

  return recursion(data);
}

console.log(shortRome(79));
