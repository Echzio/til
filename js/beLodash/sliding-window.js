const slidingWindow = (string, limit = 0) => {
  let leftPointer = 0;
  let rightPointer = 0;
  let answer = 0;
  const set = new Set();
  while (rightPointer <= string.length) {
    if (!set.has(string[rightPointer])) {
      set.add(string[rightPointer]);
      rightPointer++;
      answer = Math.max(answer, rightPointer - leftPointer);
    } else {
      while (set.has(string[rightPointer])) {
        set.delete(string[leftPointer]);
        leftPointer++;
      }
    }
  }
  return answer;
};

console.log(slidingWindow("akermanigsaddfd"));
