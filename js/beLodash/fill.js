function fill(array, filled, start = null, end = null) {
  if (!!start && !!end) {
    return [...array.slice(0, start), ...array.slice(start, end).fill(filled), ...array.slice(end)]
  } else {
    return array.fill(filled)
  }
}

console.log(
  fill([4, 6, 8, 10], '*')
)