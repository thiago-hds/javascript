// sintaxe estendida para definição de objetos com literais

// 1 atalho para definir propriedades
// nao é precioso definir propriedade:valor quando ja se tem a variavel
let title = "Admirável Mundo Novo", year = 1932;
let book = { title, year }
console.log(book.title, book.year)

// 2 - nomes de propriedades computados
let properties = ["name", "age"];
let person = {
    [properties[0]]: "John",
    [properties[1]]: 20
}
console.log(person.name, person.age)

// 3 - operador spread
let position = { x: 20, y: 59 }
let dimensions = { width: 100, height: 400 }
let rectangle = { ...position, ...dimensions }
console.log(rectangle)

// 4 - atalho para métodos
let guy = {
    name: "Chad",
    age: 23,
    greet() {
        console.log(`I'm ${this.name}! SUP!`)
    }
}
guy.greet();

// 5 - setter e getters 
let girl = {
    name: "Misty", // data property
    _age: 0, // _ indica que a propriedade é apenas para uso interno

    //propriedade read only
    get age() { return this._age },

    // propriedade write only
    set birthdayYear(birthdayYear) { this._age = 2021 - birthdayYear }
}

girl.birthdayYear = 1999;
console.log(girl.name, girl.age)