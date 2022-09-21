const pessoa = {
  primeiroNome: "Glaucio",
  ultimoNome: "Santos",
  linguagensFavoritas: ["PHP", "JavaScript", "Java"],
  idade: 50,
  mostrarNomeCompleto: function () {
    return `${this.primeiroNome} ${this.ultimoNome}`;
  },
};

console.log(pessoa);
console.log(JSON.stringify(pessoa));
