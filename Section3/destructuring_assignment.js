//Destructuring Assignment
let sandwich = {
  bread: "dutch crunch",
  meat: "tuna",
  cheese: "swiss",
  toppings: ["lettuce", "tomato", "mustard"],
};
/*
Dòng lệnh let {bread, meat} = sandwich đã lấy hai trường bread và meat và tạo ra 2 biến cục bộ tương ứng là bread và meat
Các bạn để ý là chúng ta sử dụng từ khóa let để destructuring nên giá trị có thể thay đổi được, nếu chúng ta sử dụng từ khóa const thì hai giá trị của biến cục bộ này sẽ không thể thay đổi. Ví dụ
*/
let { bread, meat } = sandwich;

bread = "garlic";
meat = "turkey";
// console.log(bread, meat);

// let [firstResort, second] = ["Kirkwood", "Squaw", "Alpine"];
let [, , third] = ["Kirkwood", "Squaw", "Alpine"];
// console.log(firstResort, second); // Kirkiwood
// console.log(third); // Kirkiwood

//Object Literal Enhancement
let name = "Tuan";
let age = 25;
let print = function () {
  console.log(`${this.name} is ${this.age} year olds`);
};
let person = { name, age, print };
// person.print(); // Tuan is 25 year olds
// console.log(person); // {name: "Tuan", age: 25}

//The Spread Operator

let peaks = ["Rose", "Ralston", "Tallac"];
let canyons = ["Ward", "Blackwood"];
let arr = [...peaks, ...canyons];

// console.log(arr.join(", ")); // Rose, Ralston, Tallac, Ward, Blackwood
//reverse() là hàm lấy phần tử cuối trong mảng đem lên thành phần tử đầu
let [last] = peaks.reverse();

// console.log(last); // Tallac
// console.log(peaks.join(", ")); // Tallac, Ralston, Rose

//Để lấy ra một hoặc một vài phần tử trong mảng
let lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];
let [first, , ...rest] = lakes;

// console.log(first); // Donner
// console.log(rest.join(", ")); // Fallen Left, Cascade

function show(...args) {
  console.log(args.length);
}

show("Tuan"); // 1
show("Tung", "Tuan"); // 2

let morning = {
  breakfast: "oatmeal",
  lunch: "peanut butter and jelly",
};
let dinner = "mac and cheese";
let backpackingMeals = {
  ...morning,
  dinner,
};
console.log(backpackingMeals); // {breakfast: "oatmeal", lunch: "peanut butter and jelly", dinner: "mac and cheese"}
