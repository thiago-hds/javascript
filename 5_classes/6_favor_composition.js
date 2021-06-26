// devemos sempre dar preferência para a composição de classes em vez de
// herança

// exemplo: se precisamos de uma classe histograma que tem o funcionamento
// parecido com um Set mas mantém informações sobre quantas vezes um valor foi
// adicionado.
// podemos pensar incialmente em estender Set, mas podemos compor uma classe
// com uma instancia de Map

class Histogram {
  constructor() {
    this.map = new Map();
  }

  count(key) {
    return this.map.get(key) || 0;
  }

  has(key) {
    return this.count(key) > 0;
  }

  get size() {
    return this.map.size();
  }

  add(key) {
    this.map.set(key, this.count(key) + 1);
  }

  delete(key) {
    const count = this.count(key);
    if (count === 1) {
      this.map.delete(key);
    } else {
      this.map.set(key, count - 1);
    }
  }

  [Symbol.iterator]() {
    return this.map.keys();
  }

  keys() {
    return this.map.keys();
  }

  values() {
    return this.map.values();
  }

  entries() {
    return this.map.entries();
  }
}
