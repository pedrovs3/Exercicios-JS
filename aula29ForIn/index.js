/* const frutas = ['pera', 'maça', 'uva', 'melancia', 'abacaxi']; */

const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Vieira',
    idade: 16
};

for (let i in pessoa) {
    console.log(i, pessoa[i]);
}