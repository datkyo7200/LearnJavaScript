const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

// Filter

const filteredItems = items.filter((item) => {
  return item.price > 100;
});
// console.log(filteredItems);

// Map
const mapItemNames = items.map((item) => {
  return item.name;
});
// console.log(mapItemNames);

// Find
const foundItem = items.find((item) => {
  return item.name === "Phone";
});
// console.log(foundItem);

//Phương thức forEach() sẽ thực thi một hàm khi duyệt qua từng phần tử của mảng.
items.forEach((item) => {
  //   console.log(item.name);
});

// Some duyệt qua tất cả các phần tử của mảng, chỉ cần 1 điều kiện thoã là đủ. Trả về true/false
// Ngược lại với every
const hasInExpensiveItem = items.some((item) => {
  return item.price >= 1000;
});
// console.log(hasInExpensiveItem);

// Every duyệt qua tất cả các phần tử của mảng, thoã điều kiện của tất cả phần tử. Trả về true/false
// Ngược lại với some
const hasInExpensiveItem1 = items.every((item) => {
  return item.price <= 1000;
});
// console.log(hasInExpensiveItem1);

//Phương thức reduce()
//dùng để thực thi một hàm lên từng phần tử của mảng (từ trái sang phải) với một biến tích lũy để thu về một giá trị duy nhất.
const total = items.reduce((currentTotal, item) => {
  return (currentTotal += item.price);
  //  or return item.price + currentTotal;
}, 0);
// console.log(total);

//Phương thức includes()
// kiểm tra xem phần tử đã cho có tồn tại trong mảng hay không, trả về kết quả true hoặc false.
const items1 = [1, 2, 3, 4, 5];

const includesTwo = items1.includes(7);
console.log(includesTwo);
