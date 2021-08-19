// 1 - SUBCLASSES E PROTOTYPES

// antes das classes ES6 era preciso definir subclasses manipulando o prototype

function Range(from, to) {
  this.from = from;
  this.to = to;
}

function Span(start, span) {
  if (span > 0) {
    this.from = start;
    this.to = start + span;
  } else {
    this.to = start;
    this.from = start + span;
  }
}
// Span herda de Range
Span.prototype = Object.create(Range.prototype);
Span.prototype.constructor = Span;

// 2 - SUBCLASSES COM EXTENDS E SUPER
console.log('2 - SUBCLASSES COM EXTENDS E SUPER');
// a partir de ES6 podemos definir uma subclasses com super
class EZArray extends Array {
  get first() {
    return this[0];
  }
  get last() {
    return this[this.length - 1];
  }
}

const a = new EZArray();
let result = a instanceof EZArray; // true
console.log(result);
result = a instanceof Array; // true
console.log(result);

// até mesmo métodos estáticos são herdados
result = EZArray.isArray(a);
console.log(result); // true

// além de EZArray.prototype herdar de Array.prototype
result = Array.prototype.isPrototypeOf(EZArray.prototype);
console.log(result); // true

// EZArray também herda de Array
result = Array.isPrototypeOf(EZArray); // true
console.log(result);

// exemplo mais complexo de herança com extends
// TypedMap

class TypedMap extends Map {
  constructor(keyType, valueType, entries) {
    if (entries) {
      for (let [key, value] of entries) {
        if (typeof key !== keyType || typeof value !== valueType) {
          throw new TypeError(`Wrong type for entry [${key}, ${value}]`);
        }
      }
    }

    super(entries);

    this.keyType = keyType;
    this.valueType = valueType;
  }

  // sobrescrevendo o método set de Map
  set(key, value) {
    if (this.keyType && typeof key !== this.keyType) {
      throw new TypeError(`${key} is not of type ${keyType}`);
    }
    if (this.valueType && typeof value !== this.valueType) {
      throw new TypeError(`${value} is not of type ${valueType}`);
    }
    super.set(key, value);
  }
}

const tm = new TypedMap('string', 'number', [
  ['john', 35],
  ['mary', 10],
]);
