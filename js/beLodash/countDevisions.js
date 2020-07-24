function getDivisorsCnt(n) {
    let counter = 0;

    function recursion(num) {
        if (num === 0) return null
        if (n % num === 0) {
            counter++;
        }
        recursion(num - 1)
    }

    recursion(n);

    return counter;
}

console.log(getDivisorsCnt(1))  // 1
console.log(getDivisorsCnt(10)) // 4
console.log(getDivisorsCnt(11)) // 2
console.log(getDivisorsCnt(54)) // 8
