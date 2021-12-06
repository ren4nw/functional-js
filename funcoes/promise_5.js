function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      if (Math.random() < chanceErro) {
        return reject('Ocorreu um erro!');
      }
  
      return resolve(valor);
    } catch (e) {
      reject(e);
    }
  });
}

funcionarOuNao('texto', 0.5)
  .then(valor => `Valor: ${valor}`)
  .then(
    console.log,
    erro => console.log(`Erro esp: ${erro}`)
  )
  .catch(erro => console.log(`Erro Geral: ${erro}`));
