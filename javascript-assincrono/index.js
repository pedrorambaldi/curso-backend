/**
 * Abaixo vemos duas variáveis que serão usadas para o cálculo
 * Os valores precisam ser inteiros
 * Use a função calcular()
 */
 

let a = 5 ;

let b = 2;

function calcular(numero1, numero2, operador) {
  return eval(`${numero1} ${operador} ${numero2}`);
}

console.log(calcular(50, 150, "-"));
console.log(calcular(320, 10, "/"));
