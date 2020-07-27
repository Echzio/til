function moneybox(step = 10) {
  let box = 0;
  let currentNumber = 0;

  return {
    calculate: sum => {
      currentNumber = Math.ceil(sum);
      function recursion(num) {
        return num % step !== 0 ? recursion(num + 1) : num
      }

      currentNumber = recursion(currentNumber)

      box += currentNumber - sum;
      console.log(Math.ceil(box))
    }
  }
}

const box = moneybox(50);

box.calculate(99)
box.calculate(249.99)
box.calculate(111.50)