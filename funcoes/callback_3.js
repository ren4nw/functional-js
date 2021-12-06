const nums = [1, 2, 3, 4];
const dobro = (n, i, a) => n * 2 + i + a.length;

console.log(nums.map(dobro));

const carrinho = [
  { nome: 'Caneta', qtde: 2, preco: 8.5 },
  { nome: 'Impressora', qtde: 0, preco: 640.5 },
  { nome: 'Caderno', qtde: 4, preco: 27.12 },
  { nome: 'Lápis', qtde: 3, preco: 5.82 },
];

const getNome = item => item.nome;
console.log(carrinho.map(getNome));

const getPreco = item => item.qtde * item.preco;
const totais = carrinho.map(getPreco);
console.log(totais);

Array.prototype.meuMap = function(fn) {
  const array = [];

  for (let i = 0; i < this.length; i++) {
    array.push(fn(this[i], i, this));
  }

  return array;
}

console.log(carrinho.meuMap(getNome));