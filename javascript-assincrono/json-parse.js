const texto =
  '{"primeiroNome":"Glaucio","ultimoNome":"Santos","linguagensFavoritas":["PHP","JavaScript","Java"],"idade":50}';

const objeto = JSON.parse(texto);

console.log(objeto.primeiroNome);
console.log(objeto.linguagensFavoritas);
