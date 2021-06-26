// funções são valores e podem ser atribuídas a variáveis, objetos e arrays

// funcao atribuida a variavel f1
function f1() {
  console.log('oi');
}

// funcao atribuida a variavel f2
const f2 = function () {
  console.log('como vai?');
};

// funcao atribuida a propriedade de objeto
const obj = {
  f3: function () {
    console.log(':D');
  },
};

// funcao atribuida a posicao de array
const arr = [(x) => x * x];
const r = arr[0](2);
console.log(r);

// setar variavel em função
uniqueInteger.counter = 0;
function uniqueInteger() {
  return uniqueInteger.counter++;
}
console.log(uniqueInteger()); // 0
console.log(uniqueInteger()); // 1
console.log(uniqueInteger()); // 2
