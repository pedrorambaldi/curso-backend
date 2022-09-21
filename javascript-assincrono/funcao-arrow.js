const exibirNome = function (nome) {
  console.log(nome);
};

const exibirSobrenome = (sobrenome) => console.log(sobrenome);

//exibirNome("João");
//exibirSobrenome("Rangel");

console.log(
  ["Geisa", "João", "Sara"].map((nome) => nome.split("").reverse().join(""))
);
