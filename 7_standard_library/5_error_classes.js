// ERROR CLASSES

// apesar de ser possível usar qualquer valor com as statements throw e catch
// é comum usar instâncias da classe Error

// essa classe define as propriedades message e name
// no node.js e em browsers recentes ela ainda define a propriedade stack
const error = new Error('Deu ruim'); // mensagem passada para o construtor
console.log(error.message); // Deu ruim
console.log(error.name); // Error
console.log(error.stack); //Error: Deu ruim at Object.<anonymous>...

// o javascript define subclasses de erro que podem ser usadas no nosso próprio
// código
// EvalError: erro relacionado a função eval(). Não é mais lançados pelo js
// mas existe por razões de compatibilidade

// RangeError: quando um valor passado está fora do conjunto de valores permitidos
// EX: ao criar array com tamanho inválido
try {
  const arr = new Array(-1); // RangeError: Invalid array length
} catch (err) {
  console.log(err);
}

// ReferenceError: Indica um erro quando uma variável não existente é referenciada
try {
  const count = val + 10; // ReferenceError: val is not defined
} catch (err) {
  console.log(err);
}

// Erro quando se tenta interpretar código sintaticamente inválido
try {
  // else{ // SyntaxError: Unexpected token 'else'
  //   console.log('senão');
  // }
} catch (err) {
  console.log(err);
}

//TypeError: Erro que ocorre quando uma operação não pode ser realizada tipicamente quando o valor passado não é do tipo esperado. Também pode ser lançado ao tentar modificar um valor que não pode ser modificado.
try {
  const num = 1;
  num = 2; // TypeError: Assignment to constant variable.
} catch (err) {
  console.log(err);
}

// Podemos ainda definir nossas próprias classes de erro de acordo com a necessidade
class HTTPError extends Error {
  constructor(status, statusText, url) {
    super(`${status} ${statusText}: ${url}`);
    this.status = status;
    this.statusText = statusText;
    this.url = url;
  }
  get name() {
    return 'HTTPError';
  }
}
