// PROMISES

// uma promise é um objeto que representa o resultado de uma computação
// assíncrona.
// esse resultado pode ou não estar pronto e só é possível acessá-lo
// pedindo que a promise invoque um callback quando o resultado estiver pronto

const fakeRequest = url => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Fake data for url ${url}`);
    }, 1000);
  });
};

const fakeRequestWithPossibleError = url => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve(`Fake data for url ${url}`);
      }
      reject('Error 404 :(');
    }, 1000);
  });
};

const displayResult = function (result) {
  console.log(result);
};
const displayError = function (error) {
  console.log(error);
};

// USANDO PROMISES

// registramos callbacks usando o método then() da promise retornada
fakeRequest('google.com.br').then(displayResult);

// se invocarmos .then() mais de uma vez, todas as funções especificadas
// serão invocadas quando a promise for resolvida
const promiseResult = fakeRequest('gmail.com');
promiseResult.then(displayResult);
promiseResult.then(() => console.log('finished'));

// ENCADEANDO PROMISES

// quando temos uma operação assíncrona que depende do resultado de outra
// podemos encadear promises para evitar aninhar um callback dentro do outro

// forma ruim
fetch('/api/user/profile').then(response => {
  response.json().then(profile => {
    displayUserProfile(profile);
  });
});

// forma correta
fetch('/api/user/profile')
  .then(response => {
    return response.json();
  })
  .then(profile => {
    displayUserProfile(profile);
  });

// o encadeamento de .then() funciona de forma semelhante ao encadeamento de
// métodos de array. A diferença é que o then() não retorna o mesmo objeto
// promise, e sim um novo. Isso significa que o segundo then() está sendo invocado
// nessa nova promise

// a promise retornada por um .then() só é resolvida após o callback registrado
// por ele terminar de executar

fakeRequest('spotify.com')
  .then(displayResult) // invocado na promise retornada por fakeRequest
  .then(displayResult); // invocado na promise retornada pelo primeiro then()

// RESOLVENDO PROMISES

// Quando passamos um callback c para o método then(), ele retorna uma promise p
// e garante que invocará c no futuro.
// O callback c realiza operações e retorna um valor v. Quando o callback retorna,
// a promise p passa para o estado resolved com o valor v.
// Se o valor retornado v for uma promise, p passa para o estado resolved mas ainda
// não passa para fulfilled. Nesse momento p não pode passar para settled enquanto
// a promise v não passar para settled.
// Se v passa para fulfilled, então p passa para fulfilled com o mesmo valor.
// Se v passa para rejected, então p passa para rejected pelo mesmo motivo

// o estado resolved siginifica que a promise passou a estar associada com outra
// promise

// O código abaixo retorna 4 promises
// Nele, a PROMISE 2 passa para resolved quando o primeiro callback retorna
// mas ela fica dependente da resolução da PROMISE 4
// Quando a PROMISE 4 passa para settled, a PROMISE 2 passa para settled e o
// segundo callback é invocado.

fetch('/api/user/profile') // fetch retorna PROMISE 1
  // .then() retorna PROMISE 2
  .then(response => {
    return response.json(); // response.json() retorna PROMISE 4
  })
  // .then() retorna PROMISE 3
  .then(profile => {
    displayUserProfile(profile);
  });

// LIDANDO COM ERROS

// um segundo callback pode ser passado para then() e ele é invocado em caso de erro
fakeRequestWithPossibleError('yahoo.com').then(displayResult, displayError);

// a melhor forma de registrar um callback para lidar com erro em uma promise
// é com o método catch(), que na verdade é apenas um alias para chamar .then(null, cb)

// Em ES2018 também foi adicionado o .finally(). O callback passado para ele é
// invocado quando a promise passa para settled (fulfilled ou rejected).
// nenhum argumento é passado para ele

fakeRequestWithPossibleError('outlook.com')
  .then(displayResult)
  .catch(displayError)
  .finally(() => console.log('fim'));

// O exemplo abaixo retirado do livro "Javascript: The Definitive Guide"
// mostra um caso de uso real de uma promise chain

/* ************************   EXEMPLO   ************************ */
function fetchTest() {
  fetch('/api/user/profile') // Inicia requisição HTTP
    // Invoca esse callback quando headers e status estão prontos
    .then(response => {
      // Se recebermos 404 Not Found ou erro similar
      if (!response.ok) {
        return null; // Talvez o usuário não está logado. Retornar perfil null
      }

      // Agora checamos os headers para garantir que o servidor enviou um JSON
      // Caso contrário há um problema no servidor
      let type = response.headers.get('content-type');
      if (type !== 'application/json') {
        throw new TypeError(`Expected JSON, got ${type}`);
      }
      // Se chegamos aqui, então recebemos um status 2xx e um content-type JSON
      // então podemos retornar uma Promise para o corpo da resposta como um objeto JSON
      return response.json();
    })
    // Invocado com o corpo da resposta ou então com null
    .then(profile => {
      if (profile) {
        displayUserProfile(profile);
      }
      // Se recebemos um erro 404 acima e retornamos null, chegamos aqui
      else {
        displayLoggedOutProfilePage();
      }
    })
    .catch(e => {
      // fetch() pode lançar essa exceção se a conexão com a internet cair
      if (e instanceof NetworkError) {
        displayErrorMessage('Check your internet connection.');
      }
      // Isso ocorre quando lançamos TypeError acima
      else if (e instanceof TypeError) {
        displayErrorMessage('Something is wrong with our server!');
      }
      // Esse deve ser um erro que não foi previsto
      else {
        console.error(e);
      }
    });
}

// Se o fetch lançar um NetworkError, a promise retornada pelo primeiro .then()
// também é rejeitada com o mesmo NetworkError
/* ************************   EXEMPLO   ************************ */

// PROMISES EM PARALELO: em alguns casos podemos querer executar várias operações
// assíncronas em paralelo.

// Promise.all()

// A função Promise.all() recebe um array de promises e retorna uma promise.
// Essa promise retornada será rejeitada se qualquer uma das promises passadas
// for rejeitada. Caso contrário será fulfilled com um array de valores retornados.
// We start with an array of URLs

const urls = ['google.com', 'yahoo.com', 'outlook.com'];
// converter array de URLs para um array de promises
const promises = urls.map(url => fetch(url).then(r => r.text()));
// obtemos uma promise para todas todas as outras promises em paralelo
Promise.all(promises)
  .then(bodies => {
    /* fazer algo com o array de strings */
  })
  .catch(e => console.error(e));

// Promise.allSettled()

//   Em ES2020 foi introduzido Promise.allSettled(). Essa função nunca rejeita
// a promise de retorno e não a passa para fulfilled até que todas as promises
// passadas sejam settled. A promise de retorno é resolvida para um array de
// objetos.

// Cada um desses objetos possui uma propriedade status que é setada para
// “fulfilled” ou “rejected”. Se for fulfilled, o objeto também possui uma
// propriedade value com o valor retornado pela promises.
Promise.allSettled([Promise.resolve(1), Promise.reject(2), 3]).then(results => {
  results[0]; // => { status: "fulfilled", value: 1 }
  results[1]; // => { status: "rejected", reason: 2 }
  results[2]; // => { status: "fulfilled", value: 3 }
});
