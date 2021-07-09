//Spread in Array
const array1 = ["JavaScript", "Java", "PHP", "Ruby"];
const array2 = ["React", "Vue", "Angular"];

const array3 = [...array2, ...array1];

// console.log(array3);

//Spread in Object
const Object1 = {
    name: "JavaScript",
};
const Object2 = {
    price: 1000,
};

const Object3 = {
    ...Object1,
    ...Object2,
};

// console.log(Object3);

const defaultConfig = {
    api: "https://domain-primary",
    apiVersion: "v1",
    other: "other",
};
const exerciseConfig = {
    ...defaultConfig,
    api: "https://domain-exercise",
};
// console.log(exerciseConfig);

const logger = (...rest) => {
    for (let i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
};
logger(...array3);
