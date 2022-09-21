const usuario = {
  nome: "Glaucio",
  email: "glaucio@gmail.com",
  senha: "123456",
};

const pessoa = {
  nome: "Glaucio Daniel",
  idade: 50,
};

const uniao = Object.assign(usuario, pessoa, {
  nome: "Glaucio Daniel dos Santos",
});

//console.log(uniao);
console.log(Object.keys(uniao));

Object.keys(uniao).forEach(function (chave) {
  console.log(uniao[chave]);
});

console.log("============================");

for (let chave in uniao) {
  console.log(uniao[chave]);
}
