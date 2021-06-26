// listar propriedades de um objeto

let person = {
    firstName: "Rachel",
    lastName: "Morgan",
    age: 32,
}
person.birthday = () => {
    this.age++;
}

let student = Object.create(person);
student.gpa = 3.5;

// 1 - FOR/IN - roda 1 vez para cada propriedade enumerável
for (let property in student) {
    console.log(property);
}
console.log("---")

// 2 - Object.keys() - array de propriedades propias enumeráveis
for (let k of Object.keys(student)) {
    console.log(k);
}


//3 - Object.getOwnPropertyNames() - array de propriedades proprias (enumeraveis ou nao)
console.log(Object.getOwnPropertyNames(student));

//4 - Object.getOwnPropertySymbols() - propriedades proprias cujo nome é um Symbol
console.log(Object.getOwnPropertySymbols(student));

//5 - Reflect.ownKeys(); - todas as propriedades proprias (enumeravel + nao enumeravel + symbolss)
console.log(Reflect.ownKeys(student));

