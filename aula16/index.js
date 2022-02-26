//declarando por function

/* function soma(x = 1, y = 1) {
    const result = x + y;
    return result
}

console.log(soma(2, 2));
console.log(soma(2, 3));
console.log(soma(45, 2));
 */

//declarando por const

/* const raiz = function(n){
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(12)); */

//declarando por arrow function

const raiz = n => n ** 0.5;
const raiz2 = (n) => {
    return n ** 0.5;
};

console.log(raiz(3));
console.log(raiz2(3));