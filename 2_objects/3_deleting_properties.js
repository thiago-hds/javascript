// deletando propriedades de um objeto
let point = { x: 4, y: 4 }
delete point.x; //retorna true, delete retorna false apenas quando o configurable = false (na propriedade removida)
delete point.z; // retorna true
console.log(point)

//obs: remover a propriedade afeta todos na prototype chain
let dog = { name: "Dog", breed: "Corgi" }
let myCorgi = Object.create(dog);
delete dog.name;
console.log("My dog's name: " + myCorgi.name); //undefined