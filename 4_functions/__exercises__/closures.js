// 1 Qual a saída dos códigos abaixo?
console.log('Exercicio 1');

// a)
var a = 12;
(function () {
  console.log(a);
})();
// R: 12

// b)
delete a;
var a = 5;
(function () {
  var a = 12;
  console.log(a);
})();

// R: 12

// c)
delete a;
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    console.log(a);
  };
})();
x();
// R: 12

// d)
delete a, x;
var a = 10;
var x = (function () {
  var y = function () {
    var a = 12;
  };
  return function () {
    console.log(a);
  };
})();
x();
// R: 10

// e)
delete a, x;
var a = 10;
var x = (function () {
  (function () {
    a = 12; // <<< look carefully at this line.
  })();
  return function () {
    console.log(a);
  };
})();
x();
// R: 12. Pode ter mais de uma função que acessa a mesma variável no escopo das duas

// f)
delete a, x;
var a = 10;
(function () {
  var a = 15;
  globalThis.x = function () {
    console.log(a);
  };
})();
x();
// R: 15
