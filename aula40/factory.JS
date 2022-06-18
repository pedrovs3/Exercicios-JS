// Factory Functions //

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        //getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
        },

        fala(assunto){
            return `${this.nome} está ${assunto}`
        },

        altura,
        peso,
        
        get imc(){
            const ind =  this.peso / (this.altura ** 2);
            return ind.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Pedro', 'Henrique', 1.7, 64);
console.log(p1.fala('falando de JS'));
console.log(p1.imc);
p1.nomeCompleto = 'Claudiao';
console.log(p1.nomeCompleto);