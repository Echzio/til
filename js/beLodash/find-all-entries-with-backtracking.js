const findAllEntriesWithBacktracking = (arr, target) => {
  const output = [];
  function recursion(arr, list, index, sum) {
    if (sum > target) {
      return;
    }

    if (sum === target) {
      output.push([...list]);
      return;
    }

    for (let i = index; i < arr.length; i++) {
      if (i > index && arr[i] === arr[i - 1]) continue;

      list.push(arr[i]);
      recursion(arr, list, i + 1, sum + arr[i]);
      list.pop();
    }
  }

  recursion(arr, [], 0, 0);

  return output;
};

const arr = [2, 5, 2, 1, 2];

arr.sort((a, b) => a - b);

console.log(findAllEntriesWithBacktracking(arr, 5)); // [[1,2,2], [5]]
