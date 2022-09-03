const maxProfit = (prices) => {
  let min = prices[0];
  let res = 0;

  for (let index = 1; index < prices.length; index++) {
    if (min > prices[index]) {
      min = prices[index];
    }

    const currentRes = prices[index] - min;

    if (currentRes > res) {
      res = currentRes;
    }
  }

  return res;
};
