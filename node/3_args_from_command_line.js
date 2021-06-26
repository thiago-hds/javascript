// Argumentos podem ser passados para um programa node via linha de comando

// node app.js joe -> argumento standalone
// node app.js name=joe -> argumento chave-valor

// o objeto process tem uma propriedade argv que é um array que contém todos os
// argumentos de linha de comando

const args = process.argv;
console.log(args);

// para obter os argumentos adicionais basta ignorar os dois primeiros argumentos
const additionalArgs = args.slice(2);
console.log(additionalArgs[3]);

// para usar um argumento do tipo chave-valor é preciso fazer o parsing dele
// para isso a melhor forma é usar a lib minimist

const args = require('minimist')(process.argv.slice(2));
console.log(argv);
