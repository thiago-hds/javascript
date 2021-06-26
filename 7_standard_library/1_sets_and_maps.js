// 1 - SETS

// criamos um set vazio
let s = new Set();

// criamos um set a partir de um iterável (incluíndo outros sets)
let t = new Set('Missisipi');
let result = t.size; // 4 (M,i,s,p)
console.log(result);

// adicionando e removendo elementos
t.add('t'); // adiciona elemento 't'
console.log(result);
result = t.size; // 5
t.delete('M'); // remove elemento 'M'
result = t.size; // 4
console.log(result);
t.clear();
result = t.size; // 0
console.log(result);

// testando se um valor pertence ao set
const nums = new Set([1, 3, 5, 7, 9]);
result = nums.has(3); // true
console.log(result);

// Set é iterável e pode ser usada com for/of
for (let n of nums) {
  console.log(n);
}

// também podem ser convertidos para arrays com o spread operator
console.log([...nums]);

// a classe Set também implementa um método forEach
nums.forEach(n => console.log(n * 2));

// 2 - MAP
console.log('2 - MAP');

// construtor um iterável com arrays de dois elementos [chave,valor]
const m = new Map([
  ['one', 1],
  ['two', 2],
  ['three', 3],
]);

// podemos criar um map a partir de um objeto usando Object.entries()
const person = {
  name: 'John',
  age: '34',
};
const personMap = new Map(Object.entries(person));
console.log(personMap);

// setando e obtendo valores de um Map
result = m.size; // 3
console.log(result);
m.set('four', 4);
result = m.size; // 4
console.log(result);
m.delete('one');
result = m.size; // 3
console.log(result);

// testando se uma chave existe
result = m.has('two'); // true
console.log(result);

// for/of com Maps
for ([key, value] of m) {
  console.log(key, value);
}

// spread com Maps
console.log([...m]); // [ [ 'two', 2 ], [ 'three', 3 ], [ 'four', 4 ] ]

m.forEach((value, key) => console.log(`${key} squared is ${value * value}`));

// 3 - WEAKSET E WEAKMAP
console.log('3 - WEAKSET E WEAKMAP');

// um weak map é semelhante ao map mas armazena referencias fracas para suas chaves
// isso permite que suas chaves sejam reclamadas pelo garbage collector
const wMap = new WeakMap();

console.log(wMap.size); // undefined - não possuem propriedade size pois o tamanho
// pode mudar a qualquer momento dependendo do GC

// não são iteráveis e não permitem valores primitivos como chaves.
const wSet = new WeakSet();
