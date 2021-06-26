// DATA E HORA

// a classe Date é API para se trabalhar com data e hora em javascript

const now = new Date(); // data e hora atuais
console.log(now); // 2021-05-10T17:17:48.601Z

const epoch = new Date(0); // 1 argumento numérico: milissegundos desde 1970
console.log(epoch); // 1970-01-01T00:00:00.000Z

// podem ser especificados os argumentos na seguinte ordem:
// ano, mes(0 - 11), dia, hora, minuto, segundo, milissegundo
// o horário é definido no fuso horário atual
const date = new Date(2010, 0, 1, 2, 3, 4, 5);
console.log(date); //2010-01-01T04:03:04.005Z (valor é exibido em UTC, por isso são 4h)

// o método estático Date.UTC espcifica uma data/hora em UTC e retorna em milisegundos desde 1970
const msCentury = Date.UTC(2100, 0, 1); //4102444800000
const century = new Date(msCentury); // 2100-01-01T00:00:00.000Z
console.log(msCentury);
console.log(century);

const endOfTheWorld = new Date(2012, 11, 21);
console.log(endOfTheWorld); // 2012-12-21T02:00:00.000Z
console.log(endOfTheWorld.toUTCString()); // Fri, 21 Dec 2012 02:00:00 GMT
console.log(endOfTheWorld.toISOString()); // 2012-12-21T02:00:00.000Z

// o construtor Date() também aceita strings nos formatos produzidos por
// toString(), toUTCString() e toISOString()
const century21 = new Date('2001-01-01T00:00:00.000Z');

// a classe Date tem vários setters e getters que retornam os elementos
// tanto na hora local como em UTC

let d = new Date();
d.setFullYear(d.getFullYear() + 1); // incrementa 1 ano
console.log(d);

// a classe Date representa todas as datas internamente como timestamps
// (milissegundos desde 1/1/1970) em UTC

// os métodos setTime() e getTime() usam valores de timestamp

d.setTime(d.getTime() + 3000); // incremento de 3000 ms
console.log(d);

// O método Date.now() retorna a hora atual em timestamp e pode ser usado para
// determinar quanto tempo passou:
const startTime = Date.now();
// realizar operação demorada
const endTime = Date.now();
console.log(`Se passaram ${endTime - startTime}ms`);

// podemos incrementar dias, horas, etc através dos setters e getters
let day = new Date(2021, 11, 31); // 31/12/2021
day.setDate(day.getDate() + 3); // incrementando 3 dias
console.log(day.toLocaleString()); // 2022-01-03T03:00:00.000Z
