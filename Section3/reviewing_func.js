const calcAge = (birthday) => {
  let currentYear = new Date().getFullYear();
  console.log(currentYear);
  return currentYear - birthday;
};
const yearUntilRetirement = (birthday, fullName) => {
  const age = calcAge(birthday);
  const retirement = 65 - age;
  return `Full name: ${fullName}, Age: ${age} and Retirement:  ${retirement}`;
};
console.log(yearUntilRetirement(1998, "Phan Thanh Dat"));
