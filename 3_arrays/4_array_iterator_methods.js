//metodos de iteração

//argumento 1: função invocada para cada elemento 
// a funcao é invocada com 3 argumentos: valor do elemento, indice do elemento, array

//argumento 2: (maioria tem) função é invocada como se fosse um metodo do segundo argumento
//isso quer dizer que o segundo argumetno é o valor de this dentro da função

//FOREACH - executa função para cada elemento
let array = ["John", "George", "Eliza", "Alexander", "Peggy", "Angelica"];

array.forEach((value, index, arr) => {
    console.log(`${value} is at index ${index} in array ${arr}`);
})
//OBS: não é possivel sair do loop sem passar por todos os itens

// MAP - passa cada elemento pela função e retorna um array com os valores retornados por ela
let niceArray = array.map(value => `${value} is nice!`);
console.log(niceArray)
//OBS: função deve retornar um valor
//OBS2: não altera o array original
console.log(array);

//FILTER - retorna um subconto dos elementos para os quais o predicado é verdadeiro
//a função deve retornar true ou false
let odds = array.filter((value, index) => index % 2 !== 0);
console.log(odds);

// FIND e FINDINDEX - assim como filter, buscam elemento para o qual o predicado é verdadeiro
// porem param ao encontrar o primeiro
// find retorna o primeiro elemento e findIndex retorna o indice do primeiro elemento

let firstNamesStartWithA = array.find(value => value.startsWith("A"));
let firstIndexStartWithA = array.findIndex(value => value.startsWith("A"));
console.log(firstNamesStartWithA, firstIndexStartWithA)


let nums = [1, 2, 3, 4];
// soma dos elementos
let sum = nums.reduce((partialSum, currentValue, currentIndex, array) => {
    return partialSum + currentValue
}, 0)

let prod = nums.reduce((partialProd, currentValue) => {
    return partialProd * currentValue
}, 1)
console.log(`sum=${sum}, prod=${prod}`); //sum=10, prod=24


let indexFirstMultipleOf5 = nums.findIndex((value, index, number) => {
    return value % 5 === 0;
})
let firstMultipleOf5 = nums.find((value, index, number) => {
    return value % 5 === 0;
})
console.log(indexFirstMultipleOf5, firstMultipleOf5); //4 5

let oddNums = nums.filter((value, index, array) => value % 2 !== 0);
console.log(oddNums); //[ 1, 3, 5, 7, 9 ]

let nums2 = nums.map((value, index, number) => value * 2);
console.log(nums2); //[0,  2,  4,  6,  8,10, 12, 14, 16, 18]


let str = ""
nums.forEach((value, index, array) => str += value);
console.log(str); // 0123456789