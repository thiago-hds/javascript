// propriedade length
function f(x, y, ...rest) {
  console.log('hi!');
}
console.log(f.length); // 2

// propriedade name
const g = f;
console.log(g.name); // f: mesmo após atribuir a g o nome permanece

// propriedade prototype
console.log(f.prototype); // {}

// métodos call() e apply()
const sum = function (y, z) {
  return this.x + y + z;
};
const obj = { x: 1 };
console.log(sum.call(obj, 2, 3)); // 6 = 1 + 2 + 3
console.log(sum.apply(obj, [4, 5])); // 10 = 1 + 4 + 5

// call() e apply() não conseguem substituir o contexto de invocação herdado por arrow functions
const sub = y => {
  console.log(this); // {}
  return this.x - y;
};
const obj = { x: 1 };
console.log('calling sub');
const r = sub.call(obj, 3);
console.log(r); // NaN

// antes do spread operador do ES6 apply era usado para passar o conteúdo de um array
// para uma função
const nums = [3, 5, 8, 2, 1];
const max = Math.max.apply(Math, nums);
console.log(max); // 8

/*
EXERCÍCIO: Implemente um método trace, que recebe um objeto e um nome de um
 método desse objeto (string) e substitui o método por outro que loga mensagens 
 antes e após chamar o método original:
 */
function trace(obj, method) {
  return function (...args) {
    console.log(`Chamando o método ${method}`);
    const result = obj[method].apply(obj, args);
    console.log(`Saindo do método ${method}`);
    return result;
  };
}
const o = {
  firstName: 'John',
  lastName: 'Smith',
  showCompleteName(middleName) {
    return `${this.firstName} ${middleName} ${this.lastName}`;
  },
};
const newFunc = trace(o, 'showCompleteName');
console.log(newFunc('Weston'));

// método bind() - liga uma função a um objeto
function sumThisXtoY(y) {
  return this.x + y;
}

let object = { x: 10 };
let bind = sumThisXtoY.bind(object);
console.log(bind(2)); // 12

let p = { x: 20, bind };
console.log(p.bind(2)); // 12 : função ainda está ligada ao objeto "object"

// bind usado para currying: atrelar um valor a um parâmetro de função
const sum2 = (x, y) => x + y;
const succ = sum2.bind(null, 1); // succ é o mesmo que sum2() com x sempre igual a 1
console.log(succ(2)); // 3
console.log(succ.name); // bound sum2

// toString()
console.log(sum2.toString()); // (x, y) => x + y
console.log(Function.prototype.bind.toString()); // function bind() { [native code] }

// construtor Function()
const mult = new Function('x', 'y', 'return x * y');
// equivale a: const mult = function(x,y) {return x * y}
console.log(mult(2, 2)); // 4
