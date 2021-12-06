// arrow function
const bomDia = () => console.log('Bom dia!');
bomDia();

const saudacao = nome => `Olá, ${nome}, tudo bem?`;
console.log(saudacao('js'));

const somar = (...numeros) => {
  let soma = 0;

  for (let n of numeros) {
    soma += n;
  }

  return soma;
}

console.log(somar(2, 4, 6));

const pontencia = base => exp => Math.pow(base, exp);
console.log(pontencia(2)(8));

// this

Array.prototype.ultimo = function() {
  console.log(this[this.length - 1]);
}

Array.prototype.primeiro = () => {
  console.log(this[0]);
};

const numeros = [1, 2, 3];
numeros.ultimo();
numeros.primeiro();
