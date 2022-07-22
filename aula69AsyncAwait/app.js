function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Bad Value");
        return;
      }

      resolve(msg);
    }, tempo);
  });
}

function randomNum(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

// Promise Sincrono

// esperaAi("Fase 1", randomNum())
//   .then((valor) => {
//     console.log(valor);
//     return esperaAi("Fase 2", randomNum());
//   })
//   .then((fase) => {
//     console.log(fase);
//     return esperaAi('Fase 3', randomNum());
//   })
//   .then((fase) => {
//     console.log(fase);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

// Async e Await

async function executa() {
  try {
    const fase1 = await esperaAi("Fase 1", randomNum());
    console.log(fase1);

    const fase2 = await esperaAi("Fase 2", randomNum());
    console.log(fase2);

    const fase3 = await esperaAi("Fase 3", randomNum());
    console.log(fase3);

    console.log("Terminamos na fase: ", fase3);
  } catch (e) {
    console.log(e);
  }
}

executa();

// Promises tem 3 estados principais 
// pending -> Pendente
// fullfilled -> Resolvida/sucess
// rejected -> Rejeitada