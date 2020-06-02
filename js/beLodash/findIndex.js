function findIndex(array, callback, indexStart = 0) {
  switch (typeof callback) {
    case 'string':
      return array.slice(indexStart).findIndex(item => {
        return !!item[callback]
      })
    case 'function':
      return array.slice(indexStart).findIndex(callback)
    case 'object':
      if (Array.isArray(callback)) {
        const [key, value] = callback;
        return array.slice(indexStart).findIndex(item => {
          return item[key] == value
        })
      } else {
        return array.slice(indexStart).findIndex(item => {
          return JSON.stringify(item) === JSON.stringify(callback)
        })
      }
  }
}

const users = [
  { 'user': 'barney', 'active': false },
  { 'user': 'fred', 'active': false },
  { 'user': 'pebbles', 'active': true }
];

console.log(
  findIndex(users, function (o) { return o.user == 'barney'; })
)

console.log(
  findIndex(users, { 'user': 'fred', 'active': false })
)

console.log(
  findIndex(users, ['active', false], 1)
)

console.log(
  findIndex(users, 'active')
)
