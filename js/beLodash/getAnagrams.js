function getAnagrams(...props) {
  const maped = props.map((item, index) => ({ item, index }));
  const objected = maped.reduce((acc, { item, index }) => {
    const sorted = [...item].sort().join("");
    return {
      ...acc,
      [sorted]: [...(acc[sorted] || []), item],
    };
  }, {});

  return Object.values(objected);
}

console.log(
  getAnagrams("нос", "сон", "снедь", "днесь", "пек", "гегы", "кеп", "ыгег")
);
