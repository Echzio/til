function compact(array) {
  return array.filter(item => {
    return  Number.parseInt(item) === item && item !== 0
  })
}

console.log(
  compact([0, 1, false, 2, '', 3, '0'])
)