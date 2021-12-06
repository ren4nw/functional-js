function gerarNumeroEntre(min, max) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve) => {
    const fator = max - min + 1;
    const aleatorio = parseInt((Math.random() * fator) + min);

    resolve(aleatorio);
  });
}

gerarNumeroEntre(20, 200)
  .then(num => num * 20)
  .then(num =>`O número é ${num}`)
  .then(console.log);