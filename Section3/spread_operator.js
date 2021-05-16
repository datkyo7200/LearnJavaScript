const buaAn = {
  buaSang: "xoi",
  buaTrua: "com",
  buaToi: "Pho",
};
const buaAn1 = { ...buaAn, buaDem: "Che" };
// console.log(buaAn1);

const buaAn2 = { ...buaAn, buaSang: "bun", buaToi: "com" };
// console.log(buaAn2);

const tapHopSo = [1, 2, 3, 4];
const tapHopSo1 = [...tapHopSo, 5];
console.log(tapHopSo1);
