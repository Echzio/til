const One = async () => {
  const url = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const result = await url.json()
  return console.log(result)
}

const Two = async () => {
  const url = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const result = await url.json()
  return console.log(result)
}

(async () => {
  await Promise.all([
    One(),
    Two()
  ])
})();