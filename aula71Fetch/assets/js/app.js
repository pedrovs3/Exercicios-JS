document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPag(el);
  }
});

async function carregaPag(el) {
  try{
    const href = el.getAttribute("href");

    const response = await fetch(href);
  
    if (response.status !== 200) throw new Error('Erro 404');
  
    const html = await response.text();
    carregaResult(html);
  } catch (e) {
    console.error(e)
  }
  

//   fetch(href)
//     .then(response => {
//       if (response.status !== 200) throw new Error('Erro 404');
//       return response.text();
//     })
//     .then(html => carregaResult(html))
//     .catch(e => console.error(e));
}

function carregaResult(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}

// fetch API

// fetch('pagina1.html')
//   .then(response => {
//     if (response.status !== 200) throw new Error('Erro 404 Nosso')
//     return response.text();
//   })
//   .then(html => console.log(html))
//   .catch(e => console.error(e));
