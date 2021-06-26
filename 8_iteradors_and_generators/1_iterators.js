// ITERATORES

// podemos iterar um objeto iterável com um for/of
// também podemos fazer o processo manualmente:

const iterable = [1, 2, 3, 4, 5];

const iterator = iterable[Symbol.iterator]();
for (let result = iterator.next(); !result.done; result = iterator.next()) {
  console.log(result.value);
}

// definindo uma classe iterável
class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  has(x) {
    return typeof x === number && this.from <= x && this.to >= x;
  }

  toString() {
    return `{x | ${this.from} <= x <= ${this.to}}`;
  }

  [Symbol.iterator]() {
    let next = Math.ceil(this.from);
    let last = this.to;
    return {
      next() {
        return next <= last ? { value: next++ } : { done: true };
      },
      return() {
        console.log('Iteração, Interrompida');
        return { done: true };
      },
    };
  }
}

const range = new Range(0, 27);

// exemplo de iteração completa
console.log(range);
for (let val of range) {
  console.log(val);
}

// exemplo de iteração interrompida
console.log(range);
for (let val of range) {
  console.log(val);
  if (val === 10) break;
}
