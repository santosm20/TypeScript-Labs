"use strict";
/**
 * Exercício 06 – Fatorial
 * Objetivo: Calcular 5! (5*4*3*2*1)
 */
let num = 5; // Número que será calculado o fatorial
let fat = 1; // Inicializa acumulador do fatorial
let e = num; // Contador inicia em num
// Loop while: enquanto contador c > 1
while (e > 1) {
    fat *= e; // Multiplica fat pelo valor de c
    e--; // Decrementa c
}
console.log(`${num}! = ${fat}`); // Exibe o resultado final
