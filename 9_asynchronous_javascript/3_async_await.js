// ASYNC E AWAIT

// await aguarda até a promise passe para settled. Quando isso o ocorre, o valor
// de await se torna o valor da fulfilled da promise. Se a promise for rejected,
// await lança o valor como uma exceção

let response = await fetch('/api/user/profile');
let profile = await response.json();

// OBS: await não bloqueia o programa e aguarda o fim da operação. O código continua
// assíncrono e o await apenas esconde esse fato.

// await só pode ser usado em funções que tenham sido declaradas com async

async function getHighScore() {
  let response = await fetch('/api/user/profile');
  let profile = await response.json();
  return profile.highScore;
}

// AGUARDANDO MULTIPLAS PROMISES
// Se temos que executar multiplas promises que não dependem umas das outras
// não precisamos executá-las de forma sequencial

let value1 = await getJSON(url1);
let value2 = await getJSON(url2);

// podemos usar Promise.all() para executar todas ao mesmo tempo e aguardar apenas
// a promise retornada

let [value1, value2] = await Promise.all([getJSON(url1), getJSON(url2)]);
