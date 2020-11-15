const obj = {
  a: 5,
  b: 10,
  c: 15,
  d: {},

  [Symbol.iterator]() {
    let values = Object.values(this),
      counter = 0;

    return {
      next() {
        if (counter < values.length) {
          return {
            done: false,
            value: values[counter++],
          };
        } else {
          return {
            value: values[counter],
            done: true,
          };
        }
      },
    };
  },
  *[Symbol.iterator]() {
    let counter = 0,
      values = Object.values(this);

    while (counter < values.length) {
      yield values[counter++];
    }
  },
};

for (let i of obj) {
  console.log(i);
}

console.log(...obj);

const oj = {
  from: 1,
  to: 100,

  *[Symbol.iterator]() {
    let counter = this.from;

    while (counter <= this.to) {
      yield counter++;
    }
  },
};

for (let i of oj) {
  console.log(i);
}
