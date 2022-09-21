const valores1 = new Array("JavaScript", "Hcode", 50, false);
const valores2 = ["PHP", "Treinamentos", -25, new Date()];

for (let i = 0; i < valores2.length; i++) {
  console.log(valores2[i]);
}

console.log("================")

for (let valor of valores1) {
    console.log(valor)
}
