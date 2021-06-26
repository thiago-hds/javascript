//non strict code
let person = { name: "John", age: 35 }

//with funciona
with (person) {
    console.log(`Hi's name is ${name}. He is ${age} years old.`)
}

//variavel nao declarada é adicionada ao objeto global
year = 2021;
console.log(globalThis.year);

//this dentro da função é o objeto global
let func = function () {
    console.log(this); //global object
}
func();

function strictCode() {
    "use strict"
    //with não funciona
    // with (person) {
    //     console.log(`Hi's name is ${name}. He is ${age} years old.`)
    // }

    //variavel nao declarada lanca ReferenceError
    // newYear = 2021;
    // console.log(newYear);

    //o valor de this dentro da função é undefined
    let func2 = function () {
        console.log(this); //undefined
    }
    func2();
}
strictCode();
