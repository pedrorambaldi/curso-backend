const site = "www.hcodelab.com.br";

console.log(site.length);
console.log(site.substr(4, site.length - 4));
console.log(site.charAt(4));
console.log(site[0]);
console.log(site.substr(-1, 1));
console.log(site.toLocaleLowerCase());
console.log(site.toLocaleUpperCase());
console.log(site.replace(".com", ".org"));
console.log(site.includes(".br"));
console.log(site.indexOf(".br"));

const mensagemBoasVindas = "Seja bem-vindo ao HcodeLab!";

console.log(mensagemBoasVindas.split(' '));



