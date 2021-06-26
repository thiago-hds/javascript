/**
 *  O módulo process possui o método process.exit() que permite sair
 *  programaticamente de um programa Node. Qualquer callback pendente,
 *  requisições de rede sendo enviadas, acesso a arquivos, tudo é encerrado
 *  abruptamente.
 */

// process.exit() recebe um inteiro que sinaliza ao SO o código de saída
// https://nodejs.org/api/process.html#process_exit_codes
process.exit(1);

/**
 * Em muitos casos criamos programas que nunca terminam (apps criados com express
 * por exemplo). Se process.exit for chamado tudo será abortado, o que não é bom.
 *
 * Nesses casos enviamos um sinal SIGTERM. (uma notificação para o processo do
 * node para notificá-lo de que deve ser encerrado)
 */
const app = express();

app.get('/', (req, res) => {
  res.send('Hi!');
});

const server = app.listen(3000, () => console.log('Server ready'));

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated');
  });
});

// É possível enviar um sinal SIGTERM de dentro do programa (em outra função) ou
// de outro app que sabe o pid do processo que deve ser encerrado.
process.kill(process.pid, 'SIGTERM');
