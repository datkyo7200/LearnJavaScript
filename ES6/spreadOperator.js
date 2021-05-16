const Student = {
  name: "Nguyen Hoang Tri",
  age: 24,
  gender: "male",
  year: 4,
};

const StudentEnd = {
  ...Student,
  year: 5,
  sapTotNghiep: true,
};

console.log("StudentEnd", StudentEnd);
const Student1 = { ...Student, gender: "female" };

console.log("Student1", Student1);

const Student2 = { ...Student, age: 25, gender: "female" };

console.log("Student2", Student2);

const rallyNumber = [1, 2, 3, 4];

const rallyNumber1 = [...rallyNumber, 5];

console.log("rallyNumber1", rallyNumber1);
