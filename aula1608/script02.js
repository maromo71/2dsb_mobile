//script02.js - usar nossa calculadora

const calculadora = require('./calculadora.js');

let valor1 = 10;
let valor2 = 5;
let resultado;

//somar
resultado = calculadora.somar(valor1, valor2);
console.log("10 + 5 = " + resultado);
//subtração
resultado = calculadora.subtrair(valor1, valor2);
console.log("10 - 5 = " + resultado);
//multiplicação
resultado = calculadora.multiplicar(valor1, valor2);
console.log("10 * 5 = " + resultado);
//divisão
resultado = calculadora.dividir(valor1, valor2);
console.log("10 / 5 = " + resultado);
