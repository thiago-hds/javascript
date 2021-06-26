// A classe Intl.NumberFormat permite a formatação de números com base no local
let euros = Intl.NumberFormat('es', { style: 'currency', currency: 'EUR' });
let result = euros.format(10); //10,00 €
console.log(result);

let formatReais = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format;
const values = [3.9, 4.5, 10, 20];
result = values.map(formatReais); // Array(4) [ "R$ 3,90", "R$ 4,50", "R$ 10,00", "R$ 20,00" ]
console.log(result);

// A classe Intl.DateTimeFormat permite a formatação de data e hora com base no local
const date = new Date('2021-05-14T10:14:30Z');
result = Intl.DateTimeFormat('en-US').format(date); // 5/14/2021
console.log(result);
result = Intl.DateTimeFormat('pt-BR').format(date); // 14/05/2021
console.log(result);
