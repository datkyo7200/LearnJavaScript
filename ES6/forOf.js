const buaAn = {
  buaSang: "xoi",
  buaTrua: "Com",
  buaToi: "Bun",
};
const bangChuCai = ["a", "b", "c"];

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// In ra property

for (const key in buaAn) {
  //   console.log(key);
}

//In ra property

for (const key in bangChuCai) {
  //   console.log(key);
}

//In ra iterator doi voi array

for (const iterator of bangChuCai) {
  console.log(iterator);
}

//In ra iterator doi voi object

for (const iterator in buaAn) {
  console.log(buaAn[iterator]);
}
