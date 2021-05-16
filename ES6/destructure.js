const buaAn = {
  buaSang: "xoi",
  buaTrua: "com",
  buaToi: "pho",
};

const traiCay = ["cam", "chuoi", "vu sua"];

/* console.log(`Sang nay toi an ${buaAn.buaSang}`);
console.log(`Trua nay toi an ${buaAn.buaTrua}`);
console.log(`Toi nay toi an ${buaAn.buaToi}`);

console.log(`Qua so 0 la: ${traiCay[0]}`);
console.log(`Qua so 1 la: ${traiCay[1]}`);
console.log(`Qua so 2 la: ${traiCay[2]}`);
 */

const { buaSang, buaTrua, buaToi } = buaAn;

console.log(`Sang nay toi an ${buaSang}`);
console.log(`Trua nay toi an ${buaTrua}`);
console.log(`Toi nay toi an ${buaToi}`);

const [cam, chuoi, vuSua] = traiCay;

console.log(`Qua so 0 la: ${cam}`);
console.log(`Qua so 1 la: ${chuoi}`);
console.log(`Qua so 2 la: ${vuSua}`);

const Student = {
  name: "Nguyen Hoang Tri",
  age: 24,
};

const { name, age } = Student;
console.log(`Name: ${name}, Age: ${age}`);
