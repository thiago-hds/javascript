// 1 - FUNCTION INVOCATION

// em non-strict o valor de this é o global object
function sum(n1, n2) {
	console.log(`in non-strict this is ${this}`); // this = global object
	return n1 + n2;
}
sum(6, 9); // function invocation

// em modo strict o valor de this é undefined
function strictSum(n1, n2) {
	'use strict';
	console.log(`in strict this is ${this}`); // this = undefined
	return n1 + n2;
}
strictSum(8, 2);

// arrow functions sempre herdam o valor de this do contexto em que estão
const arrowSum = (n1, n2) => {
	'use strict';
	console.log(`in arrow function this is ${this}`); // this = {}
	console.dir(this);
	return n1 + n2;
};
arrowSum(9, 2);

// OBS: é possível usar uma função para determinar se está
// rodando no modo strict ou não
const strict = function () {
	return !this;
};

// 2 - METHOD INVOCATION
// um método é uma função armazenada como uma propriedade de um objeto

const ball = {
	type: 'Soccer',
	roll() {
		console.log("🎵 They see me rollin', they hatin' 🎵 ");
		console.log(`in method invocation the value of this is ${this}`);
		return this;
	},
	bounces() {
		console.log('⚽ Pong!');
		return this; //possibilita chaining
	},
	toString() {
		return `[Ball object, type=${this.type}}`;
	},
};
ball.roll(); // invocação do método
ball['roll'](); // invocação do método

// OBS: method chaining
// ao escrever um método sem retorno podemos considerar retornar 'this' para
// possibilitar chaining
ball.roll().bounces();

// OBS: this é uma keyword, não uma variável
// exceto em arrow functions, seu valor não é scoped como variáveis
const obj = {
	method: function () {
		console.log(this === obj); // true -> this é obj

		// nested function declaration
		function nested() {
			console.log(this === obj); // false -> this nao é obj, this é global ou undefined
		}

		// nested arrow function
		const nestedArrow = () => {
			console.log(this === obj); // true -> aqui this é obj
		};

		nested();
		nestedArrow();
	},
};
obj.method();

// 3 - CONSTRUCTOR INVOCATION
const obj2 = new Object();

// constructor function
function Person(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;

	// esse será o objeto retornado pelo construtor
	// se fosse um return sozinho (ou com primitivo) seria ignorado
	return { message: 'wrong obj' };
}

const harry = new Person('Harry', 'Potter', 34);
console.log(harry); //{ message: 'wrong obj' }

// 4 - INDIRECT INVOCATION
const str = 'ola mundo';
const strAllCaps = String.prototype.toUpperCase.call(str);
console.log(strAllCaps); // OLA MUNDO

// 5 -
