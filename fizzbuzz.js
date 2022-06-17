function fizzBuzz(n) {
    for(let i = 1; i <= n; i++) {
        console.log(i);
        checkDivisibility(i);
    }

};

// divisibility test for 3 and 5

function checkDivisibility(n) {
    if(n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    }else if(n % 3 === 0) {
        return "Fizz";
    }else if(n % 5 === 0) {
        return "Buzz";
    }else {
        return n;
    }
}

console.log(fizzBuzz(3));