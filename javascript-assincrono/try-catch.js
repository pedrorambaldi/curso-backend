function Excecao(mensagem) {
  this.message = mensagem;
  this.name = "Excecao";
}

function NaoNumeroException() {
  this.message = "É necessário informar um número";
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
try {
  console.log(dividir(10 / 2));
} catch (erro) {
  if (erro instanceof NaoNumeroException) {
    console.error(erro.message);
  } else if (erro instanceof Excecao) {
    console.log(erro.message);
  }
}

try {
  console.log(dividir(50 / "feijao"));
} catch (erro) {
  if (erro instanceof NaoNumeroException) {
    console.error(erro.message);
  } else if (erro instanceof Excecao) {
    console.log(erro.message);
  }
} finally {
  console.warn("Finalizou");
}

try {
  console.log(dividir(50 / 10));
} catch (erro) {
  if (erro instanceof NaoNumeroException) {
    console.error(erro.message);
  } else if (erro instanceof Excecao) {
    console.log(erro.message);
  }
}

console.log("Após o try catch");
