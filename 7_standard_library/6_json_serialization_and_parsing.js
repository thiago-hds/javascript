// JSON SERIALIZATION AND PARSING

const person = {
  fullName: 'John Wayne',
  birthday: new Date(1987, 4, 15), // para serializar Date é chamado o método toJSON()
  pets: ['Melissa', 'Todd'],
};
const str = JSON.stringify(person, null, 2); // indentação com dois espaços

console.log(str);
/*
{
  "fullName": "John Wayne",
  "birthday": "1987-05-15T03:00:00.000Z",
  "pets": [
    "Melissa",
    "Todd"
  ]
}
*/

// podemos passar uma função reviver para JSON.parse para restaurar objetos não nativos

const obj = {
  date: new Date(),
};
const strObj = JSON.stringify(obj);

const restoredObj = JSON.parse(strObj, (key, value) => {
  if (key == 'date') {
    return new Date(value);
  }
  return value;
});

// é possível especificar as propriedades que queremos na saída passando um array
// de strings para JSON.stringify()

const jane = {
  firstName: 'Jane',
  lastName: 'Waters',
  age: 56,
};
const strJane = JSON.stringify(jane, ['firstName', 'age']); // {"firstName":"Jane","age":56}
console.log(strJane);

// uma função replacer também pode ser especificada como segundo argumento de
// JSON.stringify()

const strJaneReplaced = JSON.stringify(jane, (k, v) => (k === 'age' ? 25 : v)); // {"firstName":"Jane","lastName":"Waters","age":25}
console.log(strJaneReplaced);
