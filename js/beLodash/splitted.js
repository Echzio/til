function splitted(arr, count) {
    return Object.values(arr.reduce((acc, el, index) => {
        let counter = (acc.counter || 0);
        if (index % count === 0) counter++;
        acc = {
            ...acc,
            counter,
            [counter]: [...(acc[counter] || []), el]
        }
        return acc
    }, {})).slice(0, -1)
}

const arr = Array.from({ length: 51 }, (_, index) => ({
    name: index,
}))

console.log(
    splitted(arr, 4)
)