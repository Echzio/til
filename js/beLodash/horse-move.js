const moves = (item) => {
  const [x, y] = item.split("|").map(Number);

  return [
    `${x - 2}|${y + 1}`,
    `${x - 2}|${y - 1}`,
    `${x - 1}|${y + 2}`,
    `${x - 1}|${y - 2}`,
    `${x + 1}|${y + 2}`,
    `${x + 1}|${y - 2}`,
    `${x + 2}|${y + 1}`,
    `${x + 2}|${y - 1}`,
  ];
};

const horseMove = (x, y) => {
  let currentStep = 0;
  let [prevLayer, currentLayer] = [new Set([]), new Set(["0|0"])];

  while (!currentLayer.has(`${x}|${y}`)) {
    const nextLayer = new Set([]);

    currentLayer.forEach((item) => {
      for (nextCoords of moves(item)) {
        // if (prevLayer.toString() !== nextCoords.toString()) {
        //   nextLayer.push(nextCoords);
        // }
        nextLayer.add(nextCoords);
      }
    });
    [prevLayer, currentLayer] = [currentLayer, nextLayer];
    currentStep++;
  }

  return currentStep;
};

console.log(horseMove(-2, 1));
