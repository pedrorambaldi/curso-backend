const calcularIdade = function (anoNascimento) {
  return new Date().getFullYear() - anoNascimento;
};

console.log(calcularIdade(2000));
