const carrinho = [
  { nome: 'Caneta', qtde: 2, preco: 8.5 },
  { nome: 'Impressora', qtde: 0, preco: 640.5 },
  { nome: 'Caderno', qtde: 4, preco: 27.12 },
  { nome: 'Lápis', qtde: 3, preco: 5.82 },
];

const getTotal = item => item.qtde * item.preco;
const somar = (ac, elemento) => ac + elemento;

const totalGeral = carrinho
  .map(getTotal)
  .reduce(somar);

console.log(totalGeral);

// Array.prototype.meuReduce = function(fn, inicial) {
//   let ac = inicial === undefined ? this[0] : inicial;

//   for (let i = inicial === undefined ? 1 : 0; i < this.length; i++) {
//     ac = fn(ac, this[i], i, this);
//   }

//   return ac;
// }

Array.prototype.meuReduce = function(fn, inicial) {
  let ac = inicial;

  for (let i = 0; i < this.length; i++) {
    if (!ac && i === 0) {
      ac = this[i];
      continue;
    }

    ac = fn(ac, this[i], i, this);
  }

  return ac;
}

const totalGeral2 = carrinho
  .map(getTotal)
  .meuReduce(somar);

console.log(totalGeral2);