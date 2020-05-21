const fib = (num) => {
    //if num is 0 or 1 return 1
    if( num === 1 || num === 0) return 1

    //return the sum of the previous 2 fib calculations
    return fib(num - 1) + fib(num - 2)
}

console.log(fib(6))