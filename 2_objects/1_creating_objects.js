//Objetos podem ser criados de diferentes maneiras

//1 - leterais
let empty = {};
let book = {
    "main title": "The Hunger Games", //nome da propriedade ter espaço (com aspas)
    isbn: 23928333, //pode ter virgula apos ultima propriedades
}
console.log(book);

// 2 - palavra chave new
//com new o objeto é criado com base em uma constructor function
let obj = new Object(); //equivalente a {}
let arr = new Array();  // equivalente a []
let map = new Map();
console.log(arr);

//3 - Object.create()
//Cria um novo objeto com o primeiro argumento como prototype
let o1 = Object.create(Object.prototype); //equivalete a {}
let o2 = Object.create(null); //não herda nada
let o3 = Object.create({ x: 1, y: 2 });
console.dir(o1);

// se usar Object.create() para passar um objeto para uma biblioteca externa
// alterações que ela fizer não mudarão o objeto original
//let o = { x: "não mude" };
//library.function(Object.create(o));



