function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("Bad Value");

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

function randomNum(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

// Promisse.all Promisse.race Promisse.resolve Promisse.reject
const promises = [
  //"Primeiro Valor",
  esperaAi("promisse 1", randomNum(1, 5)),
  esperaAi("promisse 2", randomNum(1, 5)),
  esperaAi("promisse 3", randomNum(1, 5)),
  //esperaAi(1000, 1000), // Se alguma promise falhar o Promise.all responde apenas o erro.
  //"Segundo Valor",
  //"Terceiro Valor",
];

//Resolve todas as promisses e devolve em um array.
Promise.all(promises)
  .then((valor) => {
    console.log(valor);
  })
  .catch((e) => {
    console.error(e);
  });

//  Promise.race mostra a primeira promise a ser concluida.

Promise.race(promises)
  .then((valor) => {
    console.log(valor);
  })
  .catch((e) => {
    console.error(e);
  });

//Promise.resolve

function baixaPag() {
  const emCache = false;

  if (emCache) {
    return Promise.resolve("Pagina em cache.");
  } else {
    return esperaAi("Baixei a Pagina", 3000);
  }
}

baixaPag()
  .then((dadosPag) => {
    console.log(dadosPag);
  })
  .catch((e) => {
    console.error(e);
  })

// Promise.reject


function baixaPag() {
  const emCache = true;

  if (emCache) {
    return Promise.reject("Pagina em cache.");
  } else {
    return esperaAi("Baixei a Pagina", 3000);
  }
}

baixaPag()
  .then((dadosPag) => {
    console.log(dadosPag);
  })
  .catch((e) => {
    console.error('ERROR',e);
  })
