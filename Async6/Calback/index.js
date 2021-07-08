function myFunc(params) {
    params(121)
}
function myCallback(value) {
    console.log('Value:',value);
}

myFunc(myCallback);