function hexGenerator(...colors) {
    return '#' + colors.map(color => {
        if (color >= 255) return 'ff'
        if (color <= 0) return '00'
        return color.toString(16).padStart(2, '0')
    }).join('')
}

function randomHexGenerator() {
    return '#' + Array.from({ length: 3 }, () => Math.ceil(Math.random() * 255).toString(16).padStart(2, '0')).join('')
}

function randomHexGenerator2() {
    return '#' + Math.ceil(Math.random() * (2 ** 24)).toString(16).padStart(6, '0')
}

console.log(randomHexGenerator())
console.log(hexGenerator(10, 215, 300))
console.log(randomHexGenerator2())