import { shuffle } from "./shuffle.mjs";

const arr = Array.from({ length: 100 }, (_, index) => index + 1);

const createTree = (arr) => {
  const tree = {
    value: arr[0],
    left: null,
    right: null,
  };

  const createNode = (tree, value) => {
    if (value < tree.value) {
      if (tree.left === null) {
        tree.left = {
          value,
          left: null,
          right: null,
        };
      } else {
        createNode(tree.left, value);
      }
    } else {
      if (tree.right === null) {
        tree.right = {
          value,
          left: null,
          right: null,
        };
      } else {
        createNode(tree.right, value);
      }
    }
  };

  arr.slice(1).forEach((item) => {
    createNode(tree, item);
  });

  return tree;
};

console.log(JSON.stringify(createTree(shuffle(arr)), null, " "));
