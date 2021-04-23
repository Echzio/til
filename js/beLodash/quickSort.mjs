function quickSort(arr) {
  if (arr.length < 2) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i<= arr.length - 1; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(
  quickSort(
    Array.from({length: 10}, (_, index) => 10 - index)
  )
)