

// Function declaration
function calcAge1(birthYeah) {
    return 2021 - birthYeah;
}
const age1 = calcAge1(1998);
console.log(age1);

// Function expression
const calcAge2 = function (birthYeah){
    return 2021 - birthYeah;
}
const age2 = calcAge2(1998);
console.log(age2);
