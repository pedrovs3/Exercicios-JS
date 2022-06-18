const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e){
    e.preventDefault()
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido!', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida!', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu imc é ${imc} (${nivelImc})`

    setResultado(msg, true); 
});

function criaP(){
    const p = document.createElement('p');
    return p
}

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9){
        return nivel[5];
    }
    if(imc > 34.9){
        return nivel[4];
    }
    if(imc > 29.9){
        return nivel[3];
    }
    if(imc > 24.9){
        return nivel[2];
    }
    if(imc >= 18.5){
        return nivel[1];
    }
    if(imc < 18.5){
        return nivel[0];
    }
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const p = criaP();
    p.innerHTML = `${msg}`
    resultado.appendChild(p);

    if (isValid){
        p.classList.add('paragrafo-result')
    }
    else{
        p.classList.add('bad')
    }
}

function getImc(peso, altura){
    const imcCalc = peso / (altura ** 2);
    return imcCalc.toFixed(2)
}