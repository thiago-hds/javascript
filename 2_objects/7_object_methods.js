//metodos buit-in em Object

let person = {
    name: "Ellie",
    age: 16,

}

// 1 - toString()
console.log(person.toString()); //[object Object]

//definir propria toString
person.toString = function () { return `(${this.name}, ${this.age})` }

console.log(person.toString()); //(Ellie, 16)

//2 toLocaleString() - representação do objeto como uma sting localizada
console.log(person.toLocaleString());

//
