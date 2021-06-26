// 1 - ES6 EXPORT

// para exportar uma constante, variável, função ou classe basta adicionar a
// keyword export antes da declaração

export const PI = Math.PI;

export function degreesToRadians(d) {
  return (s * PI) / 180;
}

export class Circle {
  constructor(r) {
    this.r = r;
  }
  area() {
    return PI * this.r * this.r;
  }
}

// outra opção é exportar apenas um objeto no final
export { PI, degreesToRadians, Circle };

// 2 - ES6 IMPORTS

// o import mais simples é de módulos que definem um export default
import Stats from './stats_default';

// podemos importar mais de uma valor ao mesmo tempo
// import { mean, stddev } from './stats';

// podemos importar um módulo com muitos exports com *
// dessa forma cada export se torna propriedade de um objeto constante
import * as stats from './stats';
let result = stats.mean([1, 2, 3, 4, 5]);
console.log(result);

// caso um módulo defina exports e ainda um export default (incomum), podemos
// importá-lo da seguinte forma
import Histogram, { mean, stddev } from './histogram-stats.js';

// 3 -  IMPORTS COM RENOMEAÇÃO

// se dois módulos definem valores com o mesmo nome ou se já usamos uma variável
// com um nome usado por um módulo, temos que renomear ao importar
import { render as renderImage } from './imageutils.js';
import { render as renderUI } from './ui.js';

// renomeação também pode ser usada ao importar módulos com exports e um export
// default
import { default as Histogram, mean, stddev } from './histogram-stats';

// também podemos renomear ao exportar um valor se quisermos nomes mais descritivos
export { layout as calculateLayout, render as renderLayout }; // isso não é um objeto!

// é preciso esperado um identificador antes de "as". O código seguinte lança
// Syntax Error
// export {Math.sin as sin, Math.cos as cos}

// 4 - RE-EXPORTS
// podemos exportar dois módulos existentes em um novo módulo
import { mean } from './stats/mean';
import { stddev } from './stats/stddev';
export { mean, stddev };

// a sintaxe pode ser reduzida para
export { mean } from './stats/mean';
export { stddev } from './stats/stddev';

// se não nos importarmos com o nome, podemos usar ainda
export * from './stats/mean.js';
export * from './stats/stddev.js';

// se mean e stddev tiverem sido exportadas com export default podemos usar
export { default as mean } from './stats/mean';
export { default as stddev } from './stats/stddev';

// se quisermos fazer o re-export de um valor como export default podemos usar
export { mean as default } from './stats/mean';

// 6 - IMPORTS DINÂMICOS
// podemos fazer imports dinâmicos com import()

// em vez de importar um módulo de forma estática
import * as stats from './stats.js';

// podemos importá-lo dinamicamente
import('./stats.js').then(stats => {
  let average = stats.mean([1, 2, 3, 4, 5]);
});
