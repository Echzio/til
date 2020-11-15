function splitted(arr, count) {
  return Object.values(
    arr.reduce((acc, el, index) => {
      let counter = acc.counter || 0;
      if (index % count === 0) counter++;
      acc = {
        ...acc,
        counter,
        [counter]: [...(acc[counter] || []), el],
      };
      return acc;
    }, {})
  ).slice(0, -1);
}

const arr = Array.from({ length: 51 }, (_, index) => ({
  name: index,
}));

function splitted(arr, count) {
  let res = [];
  for (let i = 0; i < arr.length; i += count) {
    res = [...res, arr.slice(i, i + count)];
  }
  return res;
}

console.log(splitted(arr, 4));
