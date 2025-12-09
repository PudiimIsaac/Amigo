// Blocos de código reutilizáveis
function cumprimentar(nome) {
  return "Olá, " + nome + "!";
}
// Usando a função
let mensagem = cumprimentar("Isaac");
console.log(mensagem); // "Olá, Isaac!"

// Função para somar dois números
function somar(a, b) {
  return a + b;
}
let resultado = somar(5, 7);
console.log("Soma:", resultado); // "Soma: 12"

// Arrow Function (Função de seta) moderna
const somar = (a, b) => {
return a + b;
};
console.log(somar(10, 15)); // "Soma: 25"