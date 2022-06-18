const nome = 'Pedro Henrique';
const sobrenome = 'Vieira';
const idade = 16;
const peso = 62;
const alturaEmM = 1.72;
let indiceMassaCorporal ;
let anoNascimento;

indiceMassaCorporal =  peso / (alturaEmM * alturaEmM)
anoNascimento = 2021 - idade 

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg tem ${alturaEmM}m de altura e seu IMC é ${indiceMassaCorporal}`)
console.log(`${nome} nasceu em ${anoNascimento}`)