function dropRight(array, number = 0) {
  return array.reverse().slice(number).reverse()
}

console.log(
  dropRight([1, 2, 3], 2)
)