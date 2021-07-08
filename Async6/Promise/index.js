//Callback Hell
// setTimeout(() => {
//     console.log("viec 1");
//     setTimeout(() => {
//         console.log("viec 2");
//         setTimeout(() => {
//             console.log("viec 3");
//             setTimeout(() => {
//                 console.log("viec 4");
//                 setTimeout(() => {
//                     console.log("viec 5");
//                     setTimeout(() => {
//                         console.log("viec 6");
//                         setTimeout(() => {
//                             console.log("viec 7");
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

/*
Promise
    Status of Promise:
    1. Pending
    2. Fulfilled -> success
    3. Reject -> failure
*/
const promise = new Promise((resolve, reject) => {
    //Fake call API
    const data = [{ id: 1, name: "JavaScript" }];
    resolve(data);
    // reject("Failure");
});

promise
    .then((data) => {
        console.log(data);
    })
    .then(() => {
        console.log(1);
    })
    .then(() => {
        console.log(2);
    })
    .then(() => {
        console.log(3);
    })
    .catch((err) => console.log(err))
    .finally(() => {
        console.log("Done");
    });
