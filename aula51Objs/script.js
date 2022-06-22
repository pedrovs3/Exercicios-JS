const objeto = {
  nome: "Pedro",
  sobrenome: "Henrique",
  idade: 17,
};

//console.log(objeto);

const pessoa1 = new Object();
pessoa1.nome = "Pedro";
pessoa1.sobrenome = "Henrique";
pessoa1.idade = 17;

pessoa1.falarNome = function () {
  console.log(`${this.nome} está falando seu nome`);
};

pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

//console.log(pessoa1);
//pessoa1.falarNome();
//console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1){
    console.log(pessoa1[chave]);
}

// ----Factory Functions------Constructor Functions-----Classes---- \\

function criaPessoa(nome,sobrenome){
    return {
        nome,
        sobrenome,
        get NomeCompleto(){
            return `${this.nome} ${this.sobrenome}` 
        }
    }
};

p1 = criaPessoa('Pedro', 'Henrique');
console.log(p1.NomeCompleto);

// Constructor \\
function Pessoa(nome,sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;  
};

const p2 = new Pessoa('Pedro', 'Henrique');
console.log(p2.nome);