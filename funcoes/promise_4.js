function gerarNumeroEntre(min, max, tempo) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const fator = max - min + 1;
      const aleatorio = parseInt((Math.random() * fator) + min);
  
      resolve(aleatorio);
    }, tempo);
  });
}

function gerarVariosNumeros() {
  return Promise.all([
    gerarNumeroEntre(12, 80, 4000),
    gerarNumeroEntre(12, 80, 1000),
    gerarNumeroEntre(12, 80, 500),
    gerarNumeroEntre(12, 80, 3000),
    gerarNumeroEntre(12, 80, 100),
    gerarNumeroEntre(12, 80, 1500),
  ]);
}

console.time('promise');

gerarVariosNumeros()
  .then(console.log)
  .then(() => {
    console.timeEnd('promise');
  });
