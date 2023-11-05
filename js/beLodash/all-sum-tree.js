const allSumTree = (tree) => {
  if (Object(tree) !== tree) {
    return tree;
  }

  return Object.values(tree).reduce((acc, el) => {
    return acc + allSumTree(el);
  }, 0);
};

const tree = {
  value: 1,
  left: {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 1,
      },
      right: {
        value: 6,
      },
    },
    right: {
      value: 10,
    },
  },
  right: {
    value: 21,
    left: {
      value: 1,
    },
    right: {
      value: 5,
    },
  },
};

console.log(allSumTree(tree));
