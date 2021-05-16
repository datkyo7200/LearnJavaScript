// //Tham tri - stored as value type
// let a = 5;
// let b = a;
// a = 10;
// // console.log({ a, b });

// //Tham chieu - stored as refrening
// const c = { name: "Hieu" }; //1D2F
// const d = c; //Chỉ lấy address 1D2F
// c.name = "Kha";
// // console.log({ c, d });

// //Truyen tham so tham tri - pass by vallue
// const doMagic = (number) => (number = 10);
// const e = 5;
// doMagic(e);
// // console.log(e);

// //Truyen tham so dang tham chieu - pass by refenrence
// const doMagic1 = (obj) => (obj.name = "Binh An");

// const dm1 = { name: "Viet Nam" };
// // const obj = dm1;
// doMagic1(dm1);
// // console.log(dm1);

// const doMagic2 = (arr) => (arr[0] = 2);
// const dm2 = [1, 2, 3, 4];
// // const arr = dm2;
// doMagic2(dm2);
// // console.log(dm2);

// //Lam sao de khong bi dinh tham chieu
// //->Clone object
// //->Clone Array
// //ES6: Spread operator(..)
// const ten = { name: "Hoang Nguyen" };
// const ten1 = { ...ten };
// ten.name = "Hoang Nguyen 1";
// // console.log({ ten, ten1 });

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];
// arr1.push(4);
// // console.log({ arr1, arr2 });

//Exercise
//1
const doSomeThingCool = (number, obj) => {
  number = 1500;
  obj.vallue = 2500;
};
const a = 1000;
const b = { vallue: 2000 };
doSomeThingCool(a, b);
// console.log({ a, b });
//a = 1000, b = 2500

//2
const doSomeThingGreat = (obj, arr) => {
  obj.vallue = 3500;
  arr.push(obj.vallue);
};
const c = { vallue: 1500 };
const d = [1000];
d.push(c.vallue);
doSomeThingGreat(c, d);
// console.log({ c, d });
// d = [1000]
