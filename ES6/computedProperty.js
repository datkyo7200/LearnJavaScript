const computedPropertyName = "buaToi";

const buaAn = {
  buaSang: "xoi",
  buaTrua: "pho",
  [computedPropertyName]: "bun",
};

// console.log(buaAn);

const buaAnKhac = {
  buaSang: "xoi",
  buaTrua: "pho",
  [computedPropertyName + "Phu"]: "bun",
};

// console.log(buaAnKhac);

const ten = "Ten";
const Nguoi = {
  quocTich: "VN",
  [`hoVa${ten}`]: "Nguyen Tri",
};
// console.log(Nguoi);
const NguoiKhac = {
  ...Nguoi,
  hoVaTen: "Hoai Bao",
  tuoi: 25,
};
console.log(NguoiKhac);
