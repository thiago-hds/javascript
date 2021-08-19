// em ES6 foi introduzida uma nova sintaxe para classes
class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  includes(x) {
    return this.from <= x && x <= this.to;
  }
}

let r = new Range(1, 3);
let result = r.includes(2); // true
console.log(result);

// classes ES6 também podem ser declaradas como expressões
const Square = class {
  constructor(x) {
    this.area = x ** 2;
  }
};
result = new Square(3).area; // 9
console.log(result);

// 1 - METODOS ESTÁTICOS
console.log('1 - METODOS ESTÁTICOS');

// métodos estáticos podem ser declarados com a keyword static
// eles são definidos como propriedades da constructor function
class Pet {
  constructor(name) {
    this.name = name;
  }

  static eat() {
    return 'All pets eat';
  }
}
result = Pet.eat();
console.log(result);

// para definir campos estáticos é preciso definí-los fora da classe
Pet.adjective = 'nice';

// uma proposta de padronização de definição de campos que já está disponível em
// alguns navegadores

class Buffer {
  size = 0; // campos podem ser declarados sem this e fora do construtor
  #capacity = 4096; // # campo privado
  buffer = new Uint8Array(this.capacity); // do lado direito da atribuição ainda é preciso usar this
  static name = 'Buffer'; // campo estático

  get capacity() {
    return this.#capacity;
  }
}
const b = new Buffer();
console.log(Buffer.name);
