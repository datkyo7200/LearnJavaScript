const buaAn = {
  buaSang: "xoi",
  buaTrua: "com",
  buaToi: "Pho",
};

const bangChuCai = ["a", "b", "c"];

// for in, in ra key
for (const key in buaAn) console.log(key);
for (const key in bangChuCai) console.log(key);

// for of in ra value nhung k co key, khong the chay voi object
for (const iterator of bangChuCai) console.log(iterator);

//cach in ra value cua object voi for in

for (const iterator in buaAn) console.log(buaAn[iterator]);
