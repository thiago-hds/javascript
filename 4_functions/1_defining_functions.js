// 1 - FUNCTION DECLARATION

const a = 5;
const b = 2;

function sum(n1, n2) {
	return n1 + n2;
}
console.log(sum(a, b));

// hoisting -declaracao da variável representante da função é 'puxada' para o topo do bloco
// e por isso pode ser chamada antes de ser declarada

console.log(sub(a, b));

function sub(n1, n2) {
	return n1 - n2;
}

// 2 - FUNCTION EXPRESSION

const prod = function (n1, n2) {
	return n1 * n2;
};
console.log(prod(a, b));

// expressões também podem incluir nomes (util para recursão)
// o nome é valido apenas dentro da função, como uma referencia para ela mesma
const f = function factorial(n) {
	if (n <= 1) return 1;
	return n * factorial(n - 1);
};
console.log(f(5));

// 3 - ARROW FUNCTION
const greet = () => console.log('Hello!');
greet();

// 4 - NESTED FUNCTION
function plays(person) {
	console.log(`${person} plays`);
	function sport(sport) {
		console.log(`${person} plays ${sport}`); // person existe dentro de sport()
	}
	sport('soccer');
}
plays('John');
