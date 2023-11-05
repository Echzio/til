const treeMaxSum = (tree) => {
  function recursion(tree) {
    if (!tree?.value) {
      return 0;
    }

    const toLeft = recursion(tree.left);
    const toRight = recursion(tree.right);

    return Math.max(toLeft, toRight) + tree.value;
  }

  return recursion(tree);
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

console.log(treeMaxSum(tree));
