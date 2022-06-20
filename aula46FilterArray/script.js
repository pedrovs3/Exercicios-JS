// retornar maiores que 10
const valores = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const nums2 = valores.filter((valor) => valor >= 10);

console.log(nums2);

//Retorne as pessoas com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const nomes = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const nomeGrande = nomes.filter((obj) => obj.nome.length >= 5);
const pessoasIdosas = nomes.filter((obj) => obj.idade > 50);
const nomeComA = nomes.filter((obj) => obj.nome.toLowerCase.endsWith("a"));

console.log(nomeGrande);
console.log(nomeComA);
console.log(pessoasIdosas);
