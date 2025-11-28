// // Declaração de variáveis em JavaScript
// let nome="joão" ; //string
// let idade=25; //numero
// let estalogado=true; //booleano
// console.log(nome, idade, estalogado)

// var nome = "antigo"; //evite usar
// let idade = 25; //pode mudar e é preferível de se utilizar
// const PI = 3.14; //não pode mudar
// console.log(nome, idade, PI)

//Array - Lista
// let frutas = ["maçã", "banana", "laranja"];

// //Object - Objeto
// let pessoa = {
//   nome: "João",
//   idade: 30,
//   cidade: "São Paulo"
// };

//Aritmética
// let soma = 5 + 3; // Adição
// console.log("Soma:", soma);
// let subtracao = 10 - 4; // Subtração
// console.log("Subtração:", subtracao);
// let divisao = 20 / 4; // Divisão
// console.log("Divisão:", divisao);
// let mult = 6 * 7; // Multiplicação
// console.log("Multiplicação:", mult);

//Comparação
// let igual = 5 == "5"; // True, pois compara apenas o valor
// let estritamenteIgual = 7 === "7"; // false, pois compara valor e tipo
// let maiorQue = 10 > 5; // true
// let diferente = 8 != 8; // false
// let menorOuIgual = 4 <= 4; // true
// let maiorOuIgual = 6 >= 10; // false
// console.log(diferente, maiorOuIgual, igual, estritamenteIgual, maiorQue, menorOuIgual);

// //Lógicos
// let e = true && false; // false, pois ambos precisam ser verdadeiros
// let ou = true || false; // true, pois apenas um precisa ser verdadeiro
// let nao = !true; // false, inverte o valor

//Estruras de controle
// Tomada de decisão
// let idade = 20;
// if (idade >= 18) {
//   console.log("Você é maior de idade."); //True, pois 20 é maior que 18
// } else {
//   console.log("Você é menor de idade."); //False, pois 20 é maior que 18
// }
// let idade2 = 16;
// if (idade2 >= 18) {
//   console.log("Você é maior de idade."); //False, pois 16 é menor que 18
// } else {
//   console.log("Você é menor de idade."); //True, pois 16 é menor que 18
// }
// let idade2 = 18;
// if (idade2 > 18) {
//   console.log("Você é maior de idade.");
//   else if (idade >15 && idade <18) {
//     console.log("Você é um adolescente.");
//   } else {
//     console.log("É menor, mas não é adolescente.");
//   }

// // For loop - quando sabemos o número de iterações
// for (let i = 0; i < 5; i++) {
//   console.log("Número:", i); // Resulta em números de 0 a 4
// }
// // While Loop - enquanto uma condição for verdadeira
// let contador = 0;
// while (contador < 3) {
//   console.log("Contador:" + contador);
//   contador++;
// }