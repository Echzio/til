const company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 600,
    },
  ],
  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],
    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
};

const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 2,
          next: {
            value: 3,
            next: {
              value: 4,
              next: {
                value: 2,
                next: {
                  value: 3,
                  next: {
                    value: 4,
                    next: {
                      value: 2,
                      next: {
                        value: 3,
                        next: {
                          value: 4,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

function calculateSalary(data) {
  if (Array.isArray(data)) {
    return data.reduce((acc, { salary }) => acc + salary, 0);
  } else {
    return Object.values(data).reduce((acc, el) => acc + calculateSalary(el), 0)
  }
}

function calculateSum(value) {
  return value > 1 ? value + calculateSum(value - 1) : value;
}

function factorial(value) {
  return value > 1 ? value * factorial(value - 1) : value;
}

function fibonachi(value) {
  return value >= 1 ? fibonachi(value - 1) + fibonachi(value - 2) : 1;
}

function writeList(data) {
  return Object.values(data).reduce((acc, el) => {
    const res = Object(el) === el ? writeList(el) : el;
    return acc + res;
  }, 0);
}

console.log(calculateSalary(company));
