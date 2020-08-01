function shuffle(array) {
    let newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr
}

console.log(
    shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 20])
)