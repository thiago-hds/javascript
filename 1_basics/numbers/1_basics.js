// NUMBERS

// no javascript tanto inteiros quanto decimais são do tipo Number
console.log(23 === 23.0); // true

/* CONVERSÃO */
// a conversão para o tipo Number pode ser feita das seguintes formas
console.log(Number('23')); // 23
console.log(+'23'); // 23
console.log('23' - 0); // 23

/* PARSING */
// A classe Number inclui métodos para converter para int e float
console.log(Number.parseInt('30px')); // 30
console.log(Number.parseInt('e23')); // NaN - começa com string

// um segundo argumento pode ser passado para parseInt para especificar a base da string
console.log(Number.parseInt('10111', 2)); // 23

console.log(Number.parseFloat(' 2.5rem')); // 2.5

/* Number.isNaN */
// testa se é NaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN(NaN)); // true

/* Number.isFinite */
// testa se é um número finito (não Infinity)
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false (string)
console.log(Number.isFinite(+'20X')); // false (NaN)
console.log(Number.isFinite(23 / 0)); // false (Infinity)

/* Number.isInteger */
// testa se é inteiro
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23.2)); // false
