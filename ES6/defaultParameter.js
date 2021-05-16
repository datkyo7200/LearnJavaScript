/* const congHaiSo = (x, y) => {
  if (y === undefined) {
    y = 2;
  }
  return x + y;
}; */
//or
const congHaiSo = (x, y = 7) => x + y;
console.log(congHaiSo(2));
