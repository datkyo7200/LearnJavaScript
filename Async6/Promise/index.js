//Callback Hell
/*
setTimeout(() => {
    console.log("viec 1");
    setTimeout(() => {
        console.log("viec 2");
        setTimeout(() => {
            console.log("viec 3");
            setTimeout(() => {
                console.log("viec 4");
                setTimeout(() => {
                    console.log("viec 5");
                    setTimeout(() => {
                        console.log("viec 6");
                        setTimeout(() => {
                            console.log("viec 7");
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
*/

/*
Promise
    Status of Promise:
    1. Pending
    2. Fulfilled -> success
    3. Reject -> failure

const promise = new Promise((resolve, reject) => {
    //Fake call API
    const data = [{ id: 1, name: "JavaScript" }];
    resolve(data);
    // reject("Failure");
});

promise
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([1, 2, 3]);
                // reject("error");
            }, 3000);
        });
    })
    .then((data) => {
        console.log(data);
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
*/

/*
function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}
sleep(1000)
    .then(() => {
        console.log(1);
        return sleep(1000);
    })
    .then(() => {
        console.log(2);
        return sleep(1000);
    })
    .then(() => {
        console.log(3);
        return new Promise((resolve, reject) => {
            reject("Fail");
        });
    })
    .then(() => console.log(4))
    .catch((e) => console.error(e));
*/

//---------------------
/*
const promise = new Promise((resolve, reject) => {
    // resolve("Success!");
    reject("Fail!");
});

promise
    .then((result) => console.log(result))
    .catch((err) => console.error(err));
*/

//Promise.resolve()
/*
const promiseResolve = Promise.resolve("Successfully!");
promiseResolve
    .then((result) => console.log(result))
    .catch((err) => console.error(err))
    .finally(() => console.log("Done!"));
*/
//Promise.reject()
/*
const promiseReject = Promise.reject("Error!");
promiseReject
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("Done!"));
*/
//Promise.all()
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve([1]);
    }, 1000);
});
const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve([2, 3]);
    }, 2000);
});
const promise3 = Promise.reject("Error!!!");
// promise1.then((r) => console.log(r));
// promise2.then((r) => console.log(r));

Promise.all([promise1, promise2, promise3])
    .then(([res1, res2]) => {
        // let res1 = res[0];
        // let res2 = res[1];
        //concat dung de noi mang
        console.log(res1.concat(res2));
    })
    .catch((e) => console.error(e));
