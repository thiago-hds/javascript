// callbacks são funções passadas para outras funções que são invocadas quando alguma condição é satisfeita ou algum evento ocorre

// TIMERS: são uns dos exemplos mais simples de código assíncrono

const checkForUpdates = () => {
  console.log('finished');
};
// checkForUpdates é passada como um callback
setTimeout(checkForUpdates, 2000);

// EVENTOS: o browser gera um evento quando o usuário toma alguma ação.
// o programa registra callbacks para quando tipos específicos de eventos
// forem disparados

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
  alert('You clicked me! :)');
});

const btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert(':D');

// EVENTOS DE REDE também são fontes comuns de código assíncrono em
// javascript, como por exemplo buscar dados em um servidor web

function getGoogle() {
  const request = new XMLHttpRequest();
  request.open('GET', 'http://www.google.com');
  request.send();

  // callback em caso de sucesso
  request.onload = function () {
    console.log(request.responseText);
  };

  // callback em caso de erro ou timeout
  request.onerror = request.ontimeout = function (err) {
    console.log('Erro!', err);
  };
}
getGoogle();
