function mostrarNome() {
  if (localStorage.getItem("nome")) {
    document.getElementById(
      "boas-vindas"
    ).innerHTML = `Seja bem-vindo ${localStorage.getItem("nome")}`;
  }
}

function pegarDados(event) {
  event.preventDefault();

  const formulario = document.querySelector("form");

  const dados = {};

  [...formulario.querySelectorAll("input")].forEach((tag) => {
    console.log(tag);
    dados[tag.name] = tag.value;
    localStorage.setItem(tag.name, dados[tag.name]);
  });

  console.log(localStorage);

  mostrarNome();

  /*
  const form = new FormData(formulario);

  console.log(form.get("nome"));
  console.log(form.forEach((valor, chave) => {
    console.log(valor, chave)
  }));
*/
}
mostrarNome();
