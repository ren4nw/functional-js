const carrinho = [
  { nome: 'Caneta', qtde: 2, preco: 8.5 },
  { nome: 'Impressora', qtde: 0, preco: 640.5 },
  { nome: 'Caderno', qtde: 4, preco: 27.12 },
  { nome: 'Lápis', qtde: 3, preco: 5.82 },
];

const getNome = item => item.nome;
const qtdeMaiorQue0 = item => item.qtde > 0;

const nomeItensValidos = carrinho.filter(qtdeMaiorQue0).map(getNome);
console.log(nomeItensValidos);

Array.prototype.meuFilter = function(fn) {
  let novoArray = [];

  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      novoArray.push(this[i]);
    }
  }

  return novoArray;
}

console.log(carrinho.meuFilter(item => item.qtde > 0));