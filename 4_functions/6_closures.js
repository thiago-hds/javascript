// escopo léxico - se o escopo de uma variável é uma função, então
// dentro do texto dessa função a variável existe

function first() {
  //console.log(name); // name is not defined
}

function second() {
  const name = 'John';
  first(); // apesar de chamada dentro de second, first não tem acesso a name
}
second();

function outer() {
  const name = 'John';
  function inner() {
    console.log(name); // inner tem acesso a name pois está definida dentro do texto de outer
  }
  inner();
}
outer();

// função que retorna outra função
const scope = 'global';
function checkScope() {
  const scope = 'local';
  function func() {
    return scope;
  }
  return func; // a própria função é retornada
}

// apesar de executada apos o retorno de checkScope(), ao ser executada
// a função interna func() acessa o escopo local;
const ret = checkScope()();
console.log(ret); // local

// unique integer com namespace e closure
const uniqueInteger = (function () {
  // namespace
  let counter = 0;
  return function () {
    return counter++;
  };
})();
console.log(uniqueInteger()); // 0
console.log(uniqueInteger()); // 1
console.log(uniqueInteger()); // 2

console.log('COUNTER');
// mais de uma função interna podem ter acesso ao mesmo escopo
const counter = function () {
  let num = 0;
  return {
    reset() {
      num = 0;
    },
    count() {
      return num++;
    },
  };
};

const c1 = counter(); // c1 e c2 contam independentemente um do outro
const c2 = counter();
console.log(c1.count()); // 0
console.log(c1.count()); // 1
console.log(c2.count()); // 0

console.log('COUNTER 2');
// técnica de closures combinada com setter e getter
const counter2 = function (n) {
  return {
    get count() {
      return n++;
    },
    set count(value) {
      n = value;
    },
  };
};

const c3 = counter2(10);
console.log(c3.count); // 10
console.log(c3.count); // 11

// funcao que adiciona setter e getter para propriedade em um objeto
// a propriedade fica na própria função e não no objeto

function addProperty(obj, name) {
  let value;

  obj[`set${name}`] = function (v) {
    value = v;
  };

  obj[`get${name}`] = function () {
    return value;
  };
}

const o = {};
addProperty(o, 'Name');
o.setName('John');
console.log(o.getName()); // John

// é preciso tomar cuidado porque o funcionamento da closure pode não
// ser como aparenta

// retorna um array de funções constantes
function constFuncs() {
  let funcs = [];
  for (var i = 0; i < 10; i++) {
    funcs[i] = () => i;
  }
  return funcs;
}

let funcs = constFuncs();
console.log(funcs[5]()); // 10
