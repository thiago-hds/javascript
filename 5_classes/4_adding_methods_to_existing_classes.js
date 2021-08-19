// herança baseada em protótipos é dinamica e podemos adicionar métodos ao
// prototype mesmo depois que o objeto é criado

// se String.prototype.startsWith não estiver implementado
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (s) {
    return this.indexOf(s) === 0;
  };
}
