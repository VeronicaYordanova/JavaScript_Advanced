function getFibonator() {
    let f0 = 0, f1 = 1;
    return function() {
        let f2 = f0 + f1;
        f0 = f1;
        f1 = f2;
        return f0
    };
}


let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
