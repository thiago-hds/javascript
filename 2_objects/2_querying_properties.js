//acessando e alterando propriedades de objetos

// DUAS FORMAS DE ACESSO A PROPRIEDADES
let person = { name: "Peter", age: 40 };
console.log(person.name)
console.log(person["age"]);

// OBJETOS COMO HASHMAPS
//objetos podem ser usados como arrays associativos(hash, map, dicionario)
let customer = { name: "John" };
for (let i = 0; i < 4; i++) {
    customer[`address${i}`] = `Rua das Flores, ${300 + i}`;
}
console.log(`First address: ${customer["address1"]}`)
// Em ES6 a classe Map é mais indicada para arrays associativos

// ESCONDENDO PROPRIEDADES DA PROTOTYPE CHAIN
//ao adicionar um propriedade ja existente na prototype chain ela esconde a existente
let dog = { name: "Dog", breed: "Corgi" }
let myCorgi = Object.create(dog);
myCorgi.name = "Jerry";
console.log("My dog's name: " + myCorgi.name);
console.log("Standard dog name: " + myCorgi.__proto__.name);