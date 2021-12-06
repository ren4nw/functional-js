const fs = require('fs');
const path = require('path');

const lerArquivo = caminho => {
  return new Promise((resolve) => {
    fs.readFile(caminho, (_, dados) => resolve(dados.toString()));
  });
};

lerArquivo(path.join(__dirname, 'dados.txt'))
  .then(console.log);

