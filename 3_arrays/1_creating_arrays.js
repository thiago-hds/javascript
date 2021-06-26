//formas de criar arrays

// 1 - LITERAIS
let a = [];
let b = [1, 2, 3, 4];
let sparse = [, , ,]; //arrays esparso de tamanho 3 (ultima virgula é trailing)    
console.log(sparse, sparse.length)

// 2 - OPERADOR SPREAD
let c = [3, 4, 5];
let d = [1, 2, ...c, 6, 7];
console.log(d) // [1,2,3,4,5,6,7]

let original = [1, 3, 5, 7];
let shallowCopy = [...original];
console.log(shallowCopy);

let str = "Welcome!";
let arrStr = [...str];
console.log(arrStr); // ['W', 'e', 'l','c', 'o', 'm','e', '!']

// 3 - Construtor Array()
let arr1 = new Array(); //sem argumentos - equivalente a []
let arr2 = new Array(10); //1 argumento - declara um array de tamanho 10
let arr3 = new Array(1, 2, 3, 4, 5, "oi", "ola") // 2 ou mais argumentos - especifica elementos
console.log(arr3[6])

// 4 - Array.of()
let arr4 = Array.of(2, 4, true, "hey"); //[1,4,true,"hey"]
let arr5 = Array.of(1) //[1]
console.log(arr4)

// 5 - Array.from()
let arr6 = Array.from([1, 49, 43, 24, 67, 21]);
let arr7 = Array.from("OLAR");
console.log(arr6, arr7);

let numbers = [1, 2, 3, 4, 5];
let evens = Array.from(numbers, (n) => (n * 2));
console.log("evens:", evens); // evens: [ 2, 4, 6, 8, 10 ]

// acessando elementos
let array = [];
array[0] = 1;
array["1"] = 2;
array["-234.53"] = 500; //não pode ser convertido em um indice valido, é tratado como string mesmo
console.log(array); //[ 1, 2, '-234.53': 500 ]
