const calcularIdade = function (anoNascimento, callback) {
  setTimeout(callback, 3000);

  return new Date().getFullYear() - anoNascimento;
};

console.log(
  calcularIdade(2000, function () {
    console.log("A função anônima foi chamada!");
  })
);

(function () {
  console.log("Olá!");
})();
