const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friend = ["Michael","Steven","Peter"];
// console.log(friend[0]);
// console.log(friend[friend.length - 1]);
friend[2] = "Ann";
// console.log(friend);


//
const years =  new Array(1995,1996,1997,1998,1999);

//them vao phan tu cuoi trong mang
const ph = years.push(2000);
console.log(years);

//them vao phan tu dau trong mang
const un = years.unshift(2001);
console.log(years);

//xoa phan tu cuoi trong mang
const pp = years.pop();
console.log(years);

//xoa phan tu dau trong mang
const sh = years.shift();
console.log(years);

//tim index phan tu trong mang
const ino = years.indexOf(1998);
console.log(ino)
const ino1 = years.indexOf(1994);
console.log(ino1)

//tim gia tri co trong mang hay khong
const inc = years.includes(1998);
console.log(inc)
const inc1 = years.includes('1998');
console.log(inc1)
const inc3 = years.includes(2002);
console.log(inc3)