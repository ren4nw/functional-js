function esperarPor(tempo = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), tempo);
  });
}

// esperarPor()
//   .then(() => console.log('Executando promise #1'))
//   .then(esperarPor)
//   .then(() => console.log('Executando promise #2'))
//   .then(esperarPor)
//   .then(() => console.log('Executando promise #3'))
//   .then(esperarPor);

function retornarValor() {
  return new Promise(resolve => {
    setTimeout(() => resolve(20), 5000);
  });
}

async function retornarValorRapido() {
  return 20;
}

async function executar() {
  let valor = await retornarValorRapido();

  await esperarPor(1000);
  console.log(`Async/Await ${valor}...`);
  
  await esperarPor(1000);
  console.log(`Async/Await ${valor + 1}...`);

  await esperarPor(1000);
  console.log(`Async/Await ${valor + 2}...`);

  return valor + 3;
}

async function executarDeVerdade() {
  const valor = await executar();

  console.log(valor);
}

executarDeVerdade();
