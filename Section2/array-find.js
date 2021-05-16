const employees = [
  { name: "Emp A", age: 25 },
  { name: "Emp B", age: 28 },
  { name: "Emp C", age: 35 },
];
const name = "Emp B";

// function findEmp(name) {
//   for (let i = 0; i < employees.length; ++i) {
//     if (employees[i].name === name) {
//       return employees[i];
//     }
//   }
// }
// emp = findEmp(name);

emp = employees.find((item) => item.name === name);
console.log(emp);
