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

// new
function recursion(...array) {
  return array.reduce((acc, el) => {
    let data = Array.isArray(el) ? recursion(...el) : [el];
    acc = [...acc, ...data]
    return acc
  }, [])
}

console.log(
  recursion([1, [2, [3, [[[[[[[[[4]]]]]]]]]], 5]])
)