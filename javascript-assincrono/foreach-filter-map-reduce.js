/*
const paises = ["Brasil", "Peru", "Uruguai", "Paraguai", "Chile"];

paises.forEach(function (valor, indice) {
  //console.log(`Indice ${indice}: ${valor}`);
  //paises[indice] = `${valor} é um país!`;
});

console.log(paises);

console.log(
  paises.map(function (valor, indice) {
    return `País: ${valor}`;
  })
);

console.log(
  paises.filter(function (valor, indice) {
    return valor.length > 5;
  })
);
*/

const notasPedro = [8, 7, 5, 6, 9, 9, 8, 7, 7, 5, 9, 9];

const notasTotal = notasPedro.reduce(function (total, notaAtual) {
  return total + notaAtual;
}, 0);

console.log(notasTotal);
console.log(Math.ceil(notasTotal / notasPedro.length));
console.log(Math.round(notasTotal / notasPedro.length));
