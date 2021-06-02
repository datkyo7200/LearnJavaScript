// Giai thua de quy
// n = 0 : 1
// n > 0 : n * factorial(n -1 )
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
const factorial = (n) => {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};
console.log("Factorial:", factorial(4));
