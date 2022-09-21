const diaDaSemana = new Date().getDay();

console.log(diaDaSemana);

switch (diaDaSemana) {
  case 0:
    console.log("Domingo");
    break;

  case 1:
    console.log("Segunda");
    break;

  default:
    console.log("Este dia não existe"); 
}
