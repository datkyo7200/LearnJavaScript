const toppings_choice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Which topping would you love?"));
        }, 3000);
    });
};
const kitchen = async () => {
    console.log("A");
    console.log("B");
    console.log("C");
    await toppings_choice();
    console.log("D");
    console.log("E");
    console.log("F");
};

kitchen();
