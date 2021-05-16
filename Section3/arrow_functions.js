// Function expression
const calcAge2 = function (birthYeah) {
  return 2021 - birthYeah;
};
// Arrow function
const calcAg3 = (birthYeah) => 2021 - birthYeah;

const calcAge4 = (birthYeah, fullName) => {
  const age = 2021 - birthYeah;
  return `Full name: ${fullName}, Age: ${age}`;
};
console.log(calcAge4(1998, "Phan Thanh Dat"));
