function getPrimes(n) {
  const list = Array.from({ length: n }, (_, index) => index + 1).slice(1);
  return list.filter((item, _, array) => {
    return array.filter(el => el !== item).every(el => item % el !== 0)
  });
}

console.log(getPrimes(100));
