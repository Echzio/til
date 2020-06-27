function flatten(array) {
  return array.flat()
}

function recursiveFlatten(array) {
  if (!Array.isArray(array)) {
    return array
  } else {
    let currentArray = [];
    array.forEach(item => {
      const result = Array.isArray(recursiveFlatten(item)) ? recursiveFlatten(item) : [recursiveFlatten(item)]
      currentArray = [...currentArray, ...result]
    });
    return currentArray
  }
}

console.log(
  recursiveFlatten([1, [2, [3, [[[[[[[[[4]]]]]]]]]], 5]])
)