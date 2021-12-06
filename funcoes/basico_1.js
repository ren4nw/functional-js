// Function declaration
function bomDia() {
  console.log('Bom dia!');
}

bomDia();

// Function expression
const boaTarde = function() {
  console.log('Boa tarde!');
};

boaTarde();

function somar(a, b) {
  return a + b;
}

let resultado = somar(4, 5);
console.log(resultado);

resultado = somar(4, 5, 6, 8);
console.log(resultado);

resultado = somar(3)
console.log(resultado)
