const doubleLetters = (letters) => {
  const { globalStack } = [...letters].reduce(
    (acc, el, index, array) => {
      if (el === array[index + 1]) {
        return {
          ...acc,
          letterStack: [...acc.letterStack, el],
        };
      }

      return {
        ...acc,
        globalStack: [...acc.globalStack, [...acc.letterStack, el]],
        letterStack: [],
      };
    },
    {
      letterStack: [],
      globalStack: [],
    }
  );

  return globalStack
    .map((letters) => `${letters[0]}${letters.length}`)
    .join("");
};

console.log(
  doubleLetters("AAABBSSSSJJJDSKKASDJJJDSHSHCUUUSDHHHDASDYSADYSADDDFF")
);
