// 1 - PARÂMETROS OPCIONAIS E DEFAULTS
console.log('1 - PARAMETROS OPCINAIS E DEFAULTS');

// uma função invocada com menos argumentos do que parâmetros
// os parâmetros não passados ficam com o valor default (ou undefined)

function optionalParams(first, second = 2, third) {
	console.log(first, second, third);
}
optionalParams(1); // 1 2 undefined

// outra forma de definir um valor default é com o operador ||
function optionalParams2(first, second, third) {
	second = second || 2;
	console.log(first, second, third);
}
optionalParams2(1); //

// usando um argumento como valor dafault de outro
const rectangle = (width, heigth = width * 2) => ({ width, heigth });

const r1 = rectangle(10, 600);
const r2 = rectangle(30);

console.log(r1); // { width: 10, heigth: 600 }
console.log(r2); // { width: 30, heigth: 60 }

// 2 - PARÂMETRO REST
console.log('2 - PARÂMETRO REST');

// parâmetro rest
function func(first, ...rest) {
	console.log(`First is ${first}`);
	console.log('Rest:');
	for (const arg of rest) {
		console.log(arg);
	}
}
func(5, 3, 8, 2);

// 3 - OBJETO ARGUMENTS
console.log('3 - OBJETO ARGUMENTS');

// objeto arguments (deve ser evitado)
function func2(x) {
	for (let i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
	}
}
func2(1, 2, 3); // 1, 2, 3

// 4 - SPREAD OPERATOR NA INVOCAÇÃO DE FUNÇÕES
console.log('4 - SPREAD OPERATOR NA INVOCAÇÃO DE FUNÇÕES');

// spread operator ao passar argumento
const numbers = [1, 4, 6, 7, 8, 9];
const min = Math.min(...numbers);
console.log(`min is ${min}`); // 1

// 5 - DESESTRUTURANDO ARGUMENTOS DE FUNÇÕES
console.log('5 - DESESTRUTURANDO ARGUMENTOS DE FUNÇÕES');

// desestruturação de argumento
function vectorAdd([x1, y1], [x2, y2]) {
	return [x1 + x2, y1 + y2];
}

function vectorMultiply({ x, y }, scalar) {
	return { x: x * scalar, y: y * scalar };
}

const v1 = [4, 8];
const v2 = [1, 9];
const vObj = { x: 5, y: 2 };

console.log(vectorAdd(v1, v2));
console.log(vectorMultiply(vObj, 10));

// spread operator e rest parameter com objetos
function vectorMultiply2({ x, y, z = 0, ...props }, scalar) {
	return {
		x: x * scalar,
		y: y * scalar,
		z: z * scalar,
		...props, // spread
	};
}

const vector = { x: 10, y: 2, z: 93, another: 'to sobrando' };
const result = vectorMultiply2(vector, 5);
console.log(result); // { x: 50, y: 10, z: 465, another: 'to sobrando' }

// 6 - VERIFICANDO O TIPO DE ARGUMENTOS
console.log('6 - VERIFICANDO O TIPO DE ARGUMENTOS');

// retorna soma dos elementos de um objeto iteravel a
function sum(a) {
	let total = 0;
	for (let element of a) {
		if (typeof element !== 'number') {
			throw new TypeError('sum(): elements  must be numbers');
		}
		total += element;
	}
	return total;
}
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 'x', 4]; // vai lançar TypeError

// console.log(sum(arr1));
// console.log(sum(arr2));
