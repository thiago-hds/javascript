// CRIANDO UMA PROMISE BASEANDO-SE EM VALORES SÍNCRONOS

// Promise.resolve() recebe um único argumento e retorna uma promise que imediatamente
// é resolvida (de forma assíncrona) e fulfilled para esse valor.
Promise.resolve(2).then(value => console.log(value)); // 2

// Promise.reject() recebe um argumento e retorna uma promise que é rejected para
// esse valor
Promise.reject(3)
  .then(value => console.log(value))
  .catch(err => console.log(err)); // 3

// CRIANDO UMA PROMISE DO ZERO

// Uma promise pode ser criada a partir do construtor Promise(). Passamos para ele
// uma função que espera os argumentos resolve e reject.

function wait(duration) {
  return new Promise((resolve, reject) => {
    if (duration < 0) {
      reject(new Error('We cannot time travel yet! :('));
    }

    setTimeout(resolve, duration);
  });
}

console.log("Now let's wait!");
wait(2000)
  .then(() => {
    console.log('Our wait is now finally over.');
  })
  .catch(err => {
    console.log(err);
  });
