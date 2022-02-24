const num = Number(prompt("Digite um numero"));
    const numTitle = document.getElementById('numTitle');
    const texto = document.getElementById('texto');

    numTitle.innerHTML = num;
    texto.innerHTML = `<p>A raiz quadrada do seu numero é: ${Math.sqrt(num)}</p>` //${num ** 0.5}
    texto.innerHTML += `<p>${num} é inteiro? R: ${Number.isInteger(num)}</p>`
    texto.innerHTML += `<p>O número é NaN? R: ${Number.isNaN(num)}</p>`
    texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(num)}</p>`
    texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(num)}</p>`
    texto.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}.</p>`
