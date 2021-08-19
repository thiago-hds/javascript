var a = 10;
(function () {
  var a = 15;
  globalThis.x = function () {
    console.log(a);
  };
})();
x();
