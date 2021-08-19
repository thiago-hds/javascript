/* MATEMÁTICA E ARREDONDAMENTO */

// raiz quadrada
console.log(Math.sqrt(25)); // 5
console.log(8 ** (1 / 3)); // 2

// maximo e minimo
console.log(Math.max(23, 53, 6, 23, 5, 7)); // 53
console.log(Math.min(23, 53, 6, 23, 5, 7)); // 5

// CONSTANTES MATEMÁTICAS
console.log('PI', Math.PI); // 3.141592653589793

// truncar numero
console.log('3.12312312 truncado', Math.trunc(3.12312312));

// random
console.log('random:', Math.random()); // gera um numero aleatório entre 0 e 1
console.log('random inteiro entre 0 e 9:', Math.floor(Math.random() * 10));
console.log('random inteiro entre 1 e 10:', Math.floor(Math.random() * 10) + 1);

// gerar dois numero aleatório entre min e max:
const randomInt = (min, max) => {
  // Math.random() gera um numero entre 0...1
  // 0...1 * (max - min) = 0...(max - min)
  // 0...(max - min) + min = min...max
  return Math.floor(Math.random() * (max - min) + 1) + min;
};

// arredondamento
console.log(Math.trunc(43.523)); // 43 -> remove decimais
console.log(Math.round(3.6)); //4 -> arredondamento matemático
console.log(Math.round(3.4)); //3 -> arredondamento matemático
console.log(Math.ceil(5.4)); //6 -> arredondamento para cima
console.log(Math.floor(3.4)); //3 -> arredondamento para baixo

// OBS: floor e trunc funcionam da mesma forma para numeros positivos mas não para negativos
console.log(Math.floor(-3.4)); // -4
console.log(Math.trunc(-3.4)); // -3

// formatando numeros
console.log((2.4).toFixed(3)); // "2.400" -> numero como string com 3 casas decimais

console.log(Math.abs(-76)); // 76
