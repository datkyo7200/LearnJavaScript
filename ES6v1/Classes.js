//Constructor function
function course(name, price) {
    this.name = name;
    this.price = price;
}
//Class constructor
class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
}
const jsCourse = new Course("Js", 1000);
console.log(jsCourse.getName());
