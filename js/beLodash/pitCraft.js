const pitCraft = (mountain) => {
  const maxEdge = Math.max(...mountain);
  const maxEdgeIndex = mountain.indexOf(maxEdge);

  const [start, end] = [
    mountain.slice(0, maxEdgeIndex),
    mountain.slice(maxEdgeIndex),
  ];

  function recursion(section, maxSectionEdge = section[0], waterCount = 0) {
    if (section.length === 0) return waterCount;

    if (maxSectionEdge >= section[0])
      return recursion(
        section.slice(1),
        maxSectionEdge,
        waterCount + (maxSectionEdge - section[0])
      );

    return recursion(section.slice(1), section[0], waterCount);
  }

  return recursion(start) + recursion(end.reverse());
};

console.log(pitCraft([1, 2, 3, 2, 1]));
