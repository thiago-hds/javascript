// verificando se uma propriedade existe em um objeto

let cat = { name: "Thompson", age: 4 };

// 1 - OPERADOR IN - testa propriedades próprias e herdadas
console.log("name" in cat); //true
console.log("job" in cat); //false
console.log("toString" in cat); //true - propriedade herdada

// 2 - MÉTODO hasOwnProperty() - retorna false propriedades herdadas
console.log(cat.hasOwnProperty("name")); //true
console.log(cat.hasOwnProperty("toString")); //false

// 3 - MÉTODO propertyIsEnumerable()
//retorna true apenas para propriedades proprias e enumeraveis
console.log(cat.propertyIsEnumerable("name")) //true