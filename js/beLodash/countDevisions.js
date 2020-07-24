function getDivisorsCnt(n, num = n, counter = 0) {
    if (n === 0) return counter
    if (num % n === 0) {
        counter += 1;
    }
    return getDivisorsCnt(n - 1, num, counter)
}

console.log(getDivisorsCnt(1))  // 1
console.log(getDivisorsCnt(10)) // 4
console.log(getDivisorsCnt(11)) // 2
console.log(getDivisorsCnt(54)) // 8
