function* Generator(start, end) {

  for (i = start; i < end; i++) {
    yield i;
  }
}

let sequence = [...Generator(2, 5)]

console.log(sequence)

function* Generator2() {
  yield 1;
  yield 2;
  return 3;
}

let generator = Generator2();

let one = generator.next();

let two = generator.next();

console.log(two);