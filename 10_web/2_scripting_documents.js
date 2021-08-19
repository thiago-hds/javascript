// acessando o head e o body
const head = document.head;
const body = document.body;
console.log(head, body);

// SELECIONANDO ELEMENTOS

// selecionando apenas um elemento
const title = document.querySelector('#title');

// selecionando todos os elementos que batem com o seletor
const allParagraphs = document.querySelectorAll('p');
console.log(title, allParagraphs);

// querySelectorAll() retorna um NodeList, que é iterável
for (let paragraph of allParagraphs) {
  paragraph.prepend('😃');
}

// querySelector e querySelectorAll estão implementados na classe document
// também na classe element
const firstParagraph = document.querySelector('p');
console.log(firstParagraph);
const strongText = firstParagraph.querySelector('strong');
strongText.textContent = 'LOOOOOREEMMMM IPSUUUUUUUM!!!!!';

// o método closest() retorna o elemento em que foi invocado (se o seletor combinar) ou o ancestral mais próximo que combinar.
const closestParagraph = strongText.closest('p');
console.log(closestParagraph);

// o método matches testa se um elemento combina com um seletor
console.log(strongText.matches('strong')); // true
console.log(strongText.matches('.large')); // false

// outros métodos
const idTitle = document.getElementById('title');
const classLarge = document.getElementsByClassName('large');
const namePhone = document.getElementsByName('phone');
const allInputs = document.getElementsByTagName('input');

console.log(idTitle);
console.log(classLarge);
console.log(namePhone);
console.log(allInputs);

// NAVEGANDO PELO DOCUMENTO
console.log('NAVEGANDO PELO DOCUMENTO');

const li = document.querySelector('li');

// acessar o pai
const parentElement = li.parentElement;
console.log(parentElement);

const parentNode = li.parentNode;
console.log(parentNode);

const htmlParentNode = document.documentElement.parentNode;
console.log(htmlParentNode); // document

const htmlParentElement = document.documentElement.parentElement;
console.log(htmlParentElement); // null

// acessar filhos
