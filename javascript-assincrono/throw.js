function Excecao(mensagem) {
  this.message = mensagem;
  this.name = "Excecao";
}

function NaoNumeroException() {
  this.message = "É necessário um número";
  this.name = "NaoNumeroException";
}

function dividir(a, b) {
  if (typeof a !== "number") {
    throw new NaoNumeroException();
  } else if (typeof b !== "number") {
    throw new NaoNumeroException();
  } else if (b === 0) {
    throw new Excecao("O número para divisão não pode ser zero");
  }
  return a / b;
}

console.log(dividir(10 / 2));
console.log(dividir(100 / 5));
console.log(dividir(10 / 0));
