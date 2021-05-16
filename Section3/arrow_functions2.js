//phương thức map
var listData = [
    'Phan Thanh Dat',
    'Ha Tinh',
    22,
    'Độc Thân'
];
listData.map(value => console.log(isNaN(value) === false ? value + 1 : value.toUpperCase()));
console.log(listData);
//phương thức forEach.
var listNums = [1, 2, 4, 5, 99, 55, 7, 66];
var match = [];
listNums.forEach(value => {
    if (value % 2 == 0) {
        match.push(value);
    }
});
console.log(match);
//Arrow function trong object
var obj = {
    name: "Phan Thanh Dat",
    age: 23,
    getName: function (param) {
        console.log(param());
    },
    getAge: function (param) {
        console.log(param());
    },
    showAll : function () {
        //getName
        this.getName(() => {
            return "name: " + this.name;
        });
        //getAge
        this.getAge(() => {
            return "age: " + this.age;
        });
    }
}
obj.showAll();