const carrinho = [
  { nome: 'Caneta', qtde: 2, preco: 8.5, fragil: false, },
  { nome: 'Impressora', qtde: 1, preco: 640.5, fragil: true, },
  { nome: 'Caderno', qtde: 4, preco: 27.12, fragil: false, },
  { nome: 'Lápis', qtde: 3, preco: 5.82, fragil: true, },
];

// 1. Fragil: true
// 2. qtde: 0, preco: 0 -> total
// 3. media totais

const getFragil = item => item.fragil;
const getTotal = item => item.qtde * item.preco;
// const getMedia = (ac, current) => {
//   const qtde = ac.qtde + 1;
//   const total = ac.total + current;

//   return {
//     qtde,
//     total,
//     media: total / qtde,
//   };
// };

// const media = carrinho
//   .filter(getFragil)
//   .map(getTotal)
//   .reduce(getMedia, { qtde: 0, total: 0, media: 0 })
//   .media;

const getMedia = (ac, current, i, array) => {
  console.log(ac, current);

  const total = ac + current;

  return (array.length - 1) == i ? total / array.length : total;
}

const media = carrinho
  .filter(getFragil)
  .map(getTotal)
  .reduce(getMedia, 0);

console.log(media);