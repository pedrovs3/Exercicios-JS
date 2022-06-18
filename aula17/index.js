/* const pessoa1 = {
    nome: 'Pedro',
    sobrenome: 'Henrique',
    idade: 17
};

console.log(pessoa1) */

/* function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Pedro', 'Henrique', 17);
const pessoa2 = criaPessoa('Carlos', 'miguel', 17);
const pessoa3 = criaPessoa('Joao', 'oliveira', 17);
const pessoa4 = criaPessoa('Gabriel', 'silva', 17);
const pessoa5 = criaPessoa('Maria', 'vazquez', 17);

console.log(pessoa1)
console.log(pessoa2) */

const pessoa1 = {
    nome: 'Pedro',
    sobrenome: 'Henrique',
    idade: 17,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi!`)
    }
}

const array = [pessoa1]

console.log(array);