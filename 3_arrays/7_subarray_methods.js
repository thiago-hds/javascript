//SLICE - 
console.log("SLICE");

// retorna um subarray do original (shallow copy)
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.slice(1, 5)) //[2,3,4,5]
console.log(arr.slice(3)) //[4,5,6]
console.log(arr.slice(-1)); //[6]
console.log(arr.slice(-2)); //[5,6]
console.log(arr.slice(1, -1)); //[2,3,4,5]
console.log(arr.slice(-1, -2)); //[]
console.log(arr.slice(-2, -1)); //[5]
console.log(arr.slice(5, 2)); //[]

//SPLICE - insere e/ou remove elementos no array (modifica o original)
console.log("SPLICE");

arr = [1, 2, 3, 4, 5, 6];
console.log(arr.splice(2)) //retorna [3,4,5,6] (removidos)
console.log(arr); //[1,2]

arr = [1, 2, 3, 4, 5, 6];
console.log(arr.splice(2, 2)); //remover 2 a partir do indice 2. retorna [3,4]
console.log(arr); // [1,2,5,6]

arr = [1, 2, 3, 4, 5, 6];
console.log(arr.splice(2, 0, "A", "B")); // remove 0 elementos e insere A e B. retorna []
console.log(arr); //[1, 2, "A", "B", 3, 4, 5, 6]

//FILL - seta valor em elementos do array
console.log("FILL");

let a = new Array(5); //Array vazio de tamanho 5
a.fill(0); // seta todos os elementos com 0
console.log(a); // [0,0,0,0,0]
a.fill(1, 3); // seta com 1 a partir do indice 3
console.log(a); // [0,0,0,1,1]
a.fill(2, 1, -1); // seta com 2 a partir do indice 1 até o ultimo elemento (nao incluido)
console.log(a); //[0,2,2,2,1]

//COPYWITHIN - copia parte do array para outra parte dele mesmo
console.log("COPY WITHIN");
arr = [1, 2, 3, 4, 5, 6];
arr.copyWithin(1); // copia array inteiro ([0:length]) para a posicão 1
console.log(arr); //[1,1,2,3,4,5]

arr = [1, 2, 3, 4, 5, 6];
arr.copyWithin(2, 4); // copia subarray ([4:length]) para a posicão 2
console.log(arr); //[1,2,5,6,5,6]

arr = [1, 2, 3, 4, 5, 6];
arr.copyWithin(1, 3, 5); // copia subarray ([3:5]) para a posicão 1
console.log(arr); // [1,4,5,4,5,6]