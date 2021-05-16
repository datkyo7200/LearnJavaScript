const cutPieces = (fruit) => {
  return fruit * 4;
};
const fruitProcessor = (apples, oranges) => {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  return `Apple: ${applePieces} pieces and Orange: ${orangePieces} pieces`;
};

console.log(fruitProcessor(3, 4));
