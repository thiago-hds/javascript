// podemos selecionar o custom elemento da mesma forma que qualquer outro
const circle = document.querySelector('inline-circle');
console.log(circle);

// e alterar seus atributos
setTimeout(() => {
	circle.diameter = '4em';
	circle.color = 'gold';
}, 2000);
