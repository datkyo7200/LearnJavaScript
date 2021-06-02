//Đệ quy
// Dãy số fibonacci
//1 1 2 3 5 8 13 21 ...
// số đứng sau luôn luôn bằng tổng của 2 số đứng trước nó
// fib(n) = fib(n-1) + fib(n-2)
// vd: fib(2) = fib(1) + fib(0)
// fib(3) = fib(2) + fib(1)
//n < 2 : fib(n) = 1
//n > 2 : fib(n) = fib(n-1) + fib(n-2)

const fib = (n) => {
    if (n < 2) return 1;
    else return fib(n - 1) + fib(n - 2);
};
console.log(fib(5));
