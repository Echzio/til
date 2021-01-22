function hexToRGB(hex) {
  if (hex.length !== 4 && hex.length !== 7)
    throw new Error("enter correct value");
  const value = [
    ...hex
      .slice(1)
      .padEnd(6, hex[1])
      .match(/[a-zA-Z0-9]{2}/g),
  ];

  return value.map((item) => parseInt(item, 16));
}

console.log(hexToRGB("#d31414"));
