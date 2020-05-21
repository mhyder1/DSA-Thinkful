const calc = (base, exp) => {
    //error case
    if (exp < 0) return 'exponent should be >= 0';

    //base case
    if (exp === 0) return 1;

    //recursive case
    return base * calc(base, exp -1)
}

console.log(calc(5,2))