import {bubbleSort} from './bubbleSort.mjs';

function binarySearch(arr, item) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let guess = arr[mid];
        if (guess === item) {
            return mid
        }
        if (guess > item) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
}

const arr = [1, 5, 3, 3, 123, 12, 512, 5, 364, 356, 5346, 4536, 46, 4, 64, 64, 37, 47, 4, 87, 6345, 32, 5432, 53, 25, 36, 36, 47, 54, 32, 567, 8543, 67, 98543, 2, 5697, 8543, 67, 89, 54, 3789, 54, 3, 898, 5874, 689, 65];

console.log(binarySearch(bubbleSort(arr), 5346))
console.log(
    bubbleSort(arr)[binarySearch(bubbleSort(arr), 5346)]
)