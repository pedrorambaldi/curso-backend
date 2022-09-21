const ranking = [300, 400, 150, 250, 500];

ranking.sort().reverse();

const removido = ranking.pop();

const resultado = ranking.push(1000);

ranking.sort(function (a, b) {
  return b - a;
});

console.log(ranking);
console.log(removido);
console.log(resultado);
