const elementos = [
    {tag: 'p', texto: 'sla'},
    {tag: 'div', texto: 'sla1'},
    {tag: 'section', texto: 'sla2'},
    {tag: 'footer', texto: 'sla3'},
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);