const pessoa = {
  nome: "Joao",
  idade: 30,
};

const usuario = {
  email: "joao@hcode.com",
  senha: 123456,
};

console.log({ ...pessoa, ...usuario });
