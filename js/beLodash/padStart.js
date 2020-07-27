function padStart(words, num, payload) {
    const count = num - words.length;
    if (count < 1) return words
    const currentPad = payload.repeat(count).slice(0, count)
    return currentPad + words
}

console.log(
    padStart('world', 10, 'hello') === 'world'.padStart(10, 'hello')
)
