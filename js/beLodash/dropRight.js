function dropRight(array, number = 0) {
  return array.slice(0, -number)
}

console.log(
  dropRight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)
)