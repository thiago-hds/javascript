// como as variáveis declaradas em uma função estão disponíveis apenas
// dentro dela, podemos usar uma função como uma namespace para evitar que
// variáveis entrem em conflito com as variáveis globais

// função como namespace
// apenas a variável namespace é global (contém a função)
function namespace() {
  console.log('oi');
}
namespace();

// função como namespace sem nenhuma variável global
// expressão de função invocada imediatamente
(function () {
  console.log('ola');
})();
