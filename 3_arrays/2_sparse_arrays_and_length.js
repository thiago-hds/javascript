//sparse arrays
let a1 = Array(5); //array esparso de tamanho 5 (nenhum elemento ou indice esta definido)
let a2 = [,]  // array esparso de tamanho 1 (trailing comma)
console.log(0 in a2) // false
let a3 = [undefined] //não é esparso - a[0] = undefined
console.log(0 in a3) //true

//array length
let a4 = [1, 2, 3, 4, 5];
console.log(a4.length); // 5
a4[100] = 3;
console.log(a4.length); //101

let a5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
a5.length = 5; //reduzindo tamanho do array
console.log(a5); //[ 1, 2, 3, 4, 5 ]
a5.length = 10; //aumentando espaço do array (cria uma area esparsa)
console.log(a5); //[ 1, 2, 3, 4, 5, <5 empty items> ]
