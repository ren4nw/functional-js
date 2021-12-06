function exec(fn, x, y) {
  return fn(x, y);
}

const somarNoTerminal = (x, y) => console.log(x + y);

const subtrairNoTerminal = (x, y) => console.log(x - y);

exec(somarNoTerminal, 24, 82);
exec(subtrairNoTerminal, 2, 1);

setInterval(function () {
  console.log('exec');
}, 1000);
