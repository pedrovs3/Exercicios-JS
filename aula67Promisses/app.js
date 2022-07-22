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

esperaAi("frase 1", randomNum(1, 4))
  .then((msg) => {
    console.log(msg);
    return esperaAi('frase 2', randomNum(1, 4));
  })
  .then((msg) => {
    console.log(msg);
    return esperaAi("frase 3", randomNum(1, 4));
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((e) => {
    console.log("erro:", e);
  });

