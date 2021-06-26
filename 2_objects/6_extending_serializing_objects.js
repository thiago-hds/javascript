// externder propriedades de um objeto

let person = { firstName: "John", lastName: "Adams", age: 32 };
let copy1 = {};

//COPIAR PROPRIEDADES DE UM OBJETO PARA OUTRO MANUALMENTE
for (let key of Object.keys(person)) {
    copy1[key] = person[key];
}
console.log(copy1);

//Object.assign(target, source)
let copy2 = {}
Object.assign(copy2, person);
console.log(copy2);


// serializar um objeto
let obj = {
    name: "Bob",
    age: 32,
    undef: undefined,
    nan: NaN,
    inf: Infinity,
    nested: { name: "Little Bob" }
}

objStr = JSON.stringify(obj) //serialize
console.log(objStr)
//{"name":"Bob","age":32,"nan":null,"inf":null,"nested":{"name":"Little Bob"}}

newObj = JSON.parse(objStr)
console.log("parsed obj: ", newObj)


