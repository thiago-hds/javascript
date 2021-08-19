// 1 - CONSTRUCTOR FUNCTIONS
console.log(`1 - CONSTRUCTOR FUNCTIONS`);

function Range(from, to) {
  this.from = from;
  this.to = to;
}
Range.prototype = {
  includes: function (x) {
    return this.from <= x && x <= this.to;
  },
  toString: function () {
    return `[${this.from},${this.to}]`;
  },
};

const r = new Range(2, 3);
let result = r.includes(2); //true
console.log(`Does ${r} includes 2? ${result}`);

// 2 - NEW.TARGET
// é possivel saber dentro do corpo de uma função se ela foi invocada como
// construtor com new.target

function C() {
  if (!new.target) return new C();
}

// 3 - INSTANCEOF
console.log('3 - INSTANCEOF');

// testa se objeto é instancia de uma classe, ou seja, se herda de seu prototype
result = r instanceof Range; //true : r herda de Range.prototype
console.log(`is r an instance of Range? ${result}`);

// insntanceof não testa se o objeto foi de fato criado pelo construtor, e sim,
// se herda de seu prototype
function Strange() {}
Strange.prototype = Range.prototype;
result = new Strange() instanceof Range; //true
console.log(result);

// instanceof não funciona com factory functions, mas é possível testar se um
// prototype de uma classe está na chain de um objeto
result = Range.prototype.isPrototypeOf(r);
console.log(result);

// 4 - PROPRIEDADE CONSTRUCTOR
console.log(`4 - PROPRIEDADE CONSTRUCTOR`);
// o objeto prototype de uma função contém uma referencia para a própria função
// na propriedade constructor
const F = function () {};
const p = F.prototype;
const c = p.constructor;
result = c === F; // true
console.log(result);

let o = new F();
o.constructor === F; // true
console.log(result);

// ao substituir completamente o valor da propriedade prototype de uma constructor
// function, podemos inserir o link para ela manualmente
const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};
Person.prototype = {
  constructor: Person,
  fullName() {
    return `${this.firstName} ${$this.lastName}`;
  },
};

// a forma mais comum no entanto é usar o objeto original e apenas adicionar
// propriedades a ele
Person.prototype.fullName = function () {
  return `${this.firstName} ${$this.lastName}`;
};
