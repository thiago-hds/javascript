function* oneDigitPrimes() {
  yield 2;
  yield 3;
  yield 5;
  yield 7;
}

let primes = oneDigitPrimes(); // primes é um objeto gerador (e um iterador)
let p = primes.next();
while (!p.done) {
  console.log(p.value);
  p = primes.next();
}

// em um literal de objeto um gerador pode ser definido sem a keyword function
let obj = {
  x: 1,
  y: 2,
  z: 3,
  *g() {
    for (let key of Object.keys(this)) {
      yield key;
    }
  },
};
let r = [...obj.g()]; // [ 'x', 'y', 'z', 'g' ]
console.log(r);

// EXEMPLOS DE GERADORES
console.log('EXEMPLOS DE GERADORES');
console.log('fibonacci');
function* fibonacciSequence() {
  let x = 0,
    y = 1;
  for (;;) {
    yield y;
    [x, y] = [y, x + y];
  }
}

function fibo(n) {
  let i = 1;
  for (f of fibonacciSequence()) {
    if (i >= n) return f;
    i++;
  }
}
console.log('fibo(5)=', fibo(5));
console.log('fibo(6)=', fibo(6));
console.log('fibo(10)=', fibo(10));
console.log('fibo(50)=', fibo(50));

// uma função geradora take() retorna os primeiros n elementos de um iterável
// são úteis para usar em conjunto com funções geradoras infinitas como a acima

function* take(n, iterable) {
  let iterator = iterable[Symbol.iterator]();
  while (n-- > 0) {
    let next = iterator.next();
    if (next.done) return;
    else yield next.value;
  }
}

const fibo10 = [...take(10, fibonacciSequence())];
console.log('first 10 fibo', fibo10);

// yield* : essa keyword é semelhante ao yield comum mas ela itera todos os elementos
// de um iterável e retorna cada um deles

function* sequence(...iterables) {
  for (let iterable of iterables) {
    yield* iterable;
  }
}
const arr = [...sequence('abc', [1, 2, 3])]; // [ 'a', 'b', 'c', 1, 2, 3 ]
console.log(arr);

// funções geradoras com return: funções geradoras também podem retornar valores
// com a keyword return. Isso significa que na última chamada para next() o valor
// do return é retornado, quando a propriedade done já está setada com true

function* oneAndDone() {
  yield 1;
  return 'done';
}
// return de funções geradoras são ignorados por spread e for/of
const a = [...oneAndDone()]; // [1]
console.log(a);

// mas podem ser acessados manualmente
let it = oneAndDone();
console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 'done', done: true }
console.log(it.next()); // { value: undefined, done: true }

// a expressão yield dentro de uma função geradora assume como valor o argumento
// passado para o método next() do iterador

function* smallNumbers() {
  console.log('next() invocado a primeira vez. Argumento descartado');
  let y1 = yield 1;
  console.log(`next() invocado a segunda vez. Argumento: ${y1}`);
  let y2 = yield 2;
  console.log(`next() invocado a terceira vez. Argumento: ${y2}`);
  let y3 = yield 3;
  console.log(`next() invocado a quarta vez. Argumento: ${y3}`);
}

let g = smallNumbers();
g.next('a'); // next() invocado a primeira vez. Argumento descartado
g.next('b'); // next() invocado a segunda vez. Argumento: b
g.next('c'); // next() invocado a terceira vez. Argumento: c

// método return() de uma função geradora: a invocação do método return em uma
// função geradora faz com que o gerador termine a execução

function* gen1() {
  yield 1;
  yield 2;
  yield 3;
}

const g1 = gen1();
console.log(g1.next()); // { value: 1, done: false }
console.log(g1.return('fim')); // { value: 'fim', done: true }

// método throw(): lança uma exceção dentro do gerador
function* gen2() {
  try {
    yield 10;
  } catch (error) {
    console.log('Erro');
  }
}

const g2 = gen2();
console.log(g2.next()); // { value: 10, done: false }
console.log(g2.throw(new Error('Deu errado'))); // { value: undefined, done: true }
