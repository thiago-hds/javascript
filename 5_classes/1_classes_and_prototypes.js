// 1 - FACTORY FUNCTION
// é uma função que cria e inicializa objetos
function range(from, to) {
  const r = Object.create(range.methods);

  r.from = from;
  r.to = to;
  return r;
}

range.methods = {
  includes(x) {
    return this.from <= x && x <= this.to;
  },
  toString() {
    return `[${this.from},${this.to}]`;
  },
};

const r = range(1, 3);
const result = r.includes(2); //true
console.log(`Does ${r} includes 2? ${result}`);
