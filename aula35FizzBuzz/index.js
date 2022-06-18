function fizzBuzz (number){
    if (typeof number !== 'number') return NaN;

    if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
    if (number % 3 === 0 || number % 5 === 0){
        if (number % 5 === 0) return 'Buzz'; 
        else return 'Fizz'
    } 
    return number;
}

for(let i= 0; i<= 100; i++){

    console.log(i, fizzBuzz(i))
}

