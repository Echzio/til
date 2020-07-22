function dubles(array) {
  const map = new Map();

  array.forEach(item => {
    if (!map.has(item.toString())) {
      map.set(item.toString(), item)
    }
  })

  return Array.from(map.values())
}

console.log(
  dubles([[3, 4], [3, 4], [5, -1], [5, -1]])
)