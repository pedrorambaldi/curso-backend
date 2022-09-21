// Declaração de função
darBoasVindas("João", "Hcode Lab");
darBoasVindas("Rafael");

function darBoasVindas(nome, evento = "Hcode Lab") {
  console.log(`Seja bem-vindo ${nome} ao ${evento}`);
}

// Expressão de função
const darAdeus = function (nome) {
  console.log(`Até a próxima ${nome}`);
};

darAdeus("Pedro");
