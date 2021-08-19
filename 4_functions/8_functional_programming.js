// 1 - PROCESSANDO ARRAYS COM FUNÇÕES
console.log('1 - PROCESSANDO ARRAYS COM FUNÇÕES');

// podemos processar arrays com funções como reduce, mas ainda restam convenções
//de orientação a objetos, com a invocação de métodos de objetos
const sum = (x, y) => x + y;
const data = [1, 1, 3, 5, 5];
let mean = data.reduce(sum) / data.length; // 3
console.log(mean);

// podemos escrever uma versão totalmente funcional de reduce
const reduce = function (a, ...args) {
  return a.reduce(...args);
};
mean = reduce(data, sum) / data.length; //3
console.log(mean);

// 2 - FUNÇÕES DE ORDEM SUPERIOR
console.log('2 - FUNÇÕES DE ORDEM SUPERIOR');

// é uma função que recebe uma ou mais funções como argumento e retorna uma
// função

// a função not é uma higher order function
function not(f) {
  return function (...args) {
    const result = f.apply(this, args);
    return !result;
  };
}

const isEven = x => x % 2 === 0;
const isOdd = not(isEven);
let result = isOdd(5); // true
console.log(`is 5 an odd number? ${result}`);
