//ES5
// function congHaiSo(x, y) {
//   return x + y;
// }
// console.log("One", congHaiSo(2, 5));

//ES6
//cmt all: alt + shirt + A
const congHaiSo = (x, y) => {
  return x + y;
};
console.log("Two", congHaiSo(2, 5));

const vietTen = (ten) => console.log(ten);
vietTen("Dat");

const nhanDoi1 = (x) => {
  return x * 2;
};
//or
const nhanDoi2 = (x) => x * 2;
console.log("nd2", nhanDoi2(4));

//ex1: ten ham cong hai so, tham so x,y. tra ve x +y

const tongHaiSo = (x, y) => x + y;
console.log("ths1", tongHaiSo(1, 2));
