//destructuring with array
const array = ["Js", "PHP", "Ruby"];

// const [a, , c] = array;
//rest parameters: khi ket hop voi destructuring, lay ra all nhung phan con lai
const [a, ...rest] = array;
console.log(a, rest);

//destructuring with object

// const course = {
//     name: "JavaScript",
//     description: "Value description",
//     children: {
//         name: "React",
//     },
//     price: 1000,
//     img: "js.jpg",
// };
// const {
//     name: parentName,
//     description = "Default description",
//     children: { name: childrenName },
//     ...rest1
// } = course;
// console.log(parentName, description, childrenName, rest1);

//Neu su dung rest thi no la mang, tra ve mang
//Con arguments thi no tra ve doi tuong arguments, gan giong voi rest
function logger({ name, ...rest }) {
    return rest;
}
function logger1([a, b, , d, ...rest]) {
    return d;
}
// console.log(logger(1, 2, 3, 4));
console.log(
    logger({
        name: "JavaScript",
        description: "Value description",
        price: 1000,
    })
);
console.log(logger1([1, 2, 3, 4, 5, 6, 7]));
