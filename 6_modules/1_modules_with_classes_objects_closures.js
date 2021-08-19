// objetos são modulares pois variáveis e métodos declarados dentro deles
// não afetam a namespace global

// um problema de usar objetos como módulos é que não é possível esconder
// detalhes internos da implementação

// uma forma de resolver esse problema é implementando módulos com expressões
// de função imediatamente invocadas. Variáveis declaradas dentro delas são
// privadas

// exemplo: modulo de estatística
const stats = (function () {
  const sum = (x, y) => x + y;
  const square = x => x ** 2;

  function mean(data) {
    return data.reduce(sum) / data.length;
  }

  function stddev(data) {
    const m = mean(data);
    return Math.sqrt(
      data
        .map(x => x - m)
        .map(square)
        .reduce(sum) /
        data.length -
        1
    );
  }

  return { mean, stddev };
})();

let result = stats.mean([1, 3, 5, 7, 9]); // 5
console.log(result);
result = stats.stddev([1, 3, 5, 7, 9]); // 2.64
console.log(result);
