const infoRonaldo= {
    "firstName":"Ronaldo",
    "lastName":"Cristiano",
    "birthYear": 1985,
    "country":"Portugal",
    "job":"Football Player",
    "clothersNumber":7,
    "friend": ["Dat","Hoang","Hieu"],
    "married":true,
    calAge: function () {
        return 2021 - this.birthYear;
    },
    calRetirement: function () {
        this.retirement = 2040 - this.birthYear;
        console.log(this.retirement );
        return this.retirement;
    },
    checkSingle:function () {
        return `${this.firstName} ${this.married?'is':'no'} married`;
    }
};
// console.log(infoRonaldo);
// console.log(infoRonaldo.firstName);
// console.log(infoRonaldo["firstName"]);

// const nameKey = "Name";
// console.log(infoRonaldo["first"+ nameKey]);
// console.log(infoRonaldo["last"+ nameKey]);
// // const interestedIn =  prompt("a");
// // console.log(interestedIn);

// console.log(`${infoRonaldo.firstName} has ${infoRonaldo.friend.length} best friend`);

// console.log(infoRonaldo['calAge']());
// console.log(infoRonaldo.calAge());
console.log(infoRonaldo.calRetirement());
console.log(infoRonaldo.checkSingle());