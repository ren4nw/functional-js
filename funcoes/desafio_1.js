// Desafio

// somar(2)(4)(8)

function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// fn -> 3 * 6
// fn -> 2 + 4
// fn -> 3 - 1
// calcular(2)(6)(fn)

function calcular(x) {
  return function (y) {
    return function (fn) {
      return fn(x, y);
    }
  }
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

const r1 = calcular(4)(2)(subtrair);
console.log(r1);

const r2 = calcular(2)(2)(multiplicar);
console.log(r2);
