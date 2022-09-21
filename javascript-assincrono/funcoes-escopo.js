let idade;

const calcularIdade = function (anoNascimento) {
  global.anoAtual = new Date().getFullYear();
  idade = anoAtual - anoNascimento;
  return idade;
};

console.log(calcularIdade(2000));
console.log(idade);
console.log(anoAtual);
