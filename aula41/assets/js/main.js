function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.cliqueBtn();
            this.pressEnter();
        },

        pressEnter(){
            document.addEventListener('keyup', e =>{
                if(e.key === 'Enter'){
                    this.result();
                }
            })
        },

        result() {
            let conta = this.display.value;
            
            try {
                conta = eval(conta);

                if(!conta){
                    alert('Conta Inválida!');
                    return;
                }

                this.display.value = conta;
            } catch (e) {
                alert('Conta Inválida!');
                return;
            }
        },

        cliqueBtn() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.delNum();
                }

                if (el.classList.contains('btn-eq')) {
                    this.result();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        clearDisplay() {
            this.display.value = '';
        },

        delNum() {
            this.display.value = this.display.value.slice(0, -1);
        },
    }
};

const calc = criaCalculadora();
calc.inicia();