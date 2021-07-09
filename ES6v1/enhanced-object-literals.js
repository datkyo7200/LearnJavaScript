let name = "JavaScript";
let price = 1000;

const course = {
    name,
    price,
    getName() {
        return name;
    },
};

console.log(course.getName());
