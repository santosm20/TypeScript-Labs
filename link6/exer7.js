"use strict";
/**
 * Exercício 07 – Fibonacci
 * Objetivo: Imprimir os 10 primeiros números da sequência de Fibonacci.
 */
let f = 0; // Primeiro termo
let g = 1; // Segundo termo
let termos = 10; // Quantidade de termos a mostrar
let cont = 1; // Contador de termos exibidos
// Loop while: enquanto contador <= termos
while (cont <= termos) {
    console.log(f); // Exibe o termo atual
    let proximo = f + g; // Calcula próximo termo somando os dois anteriores
    f = g; // Atualiza a para o próximo termo
    g = proximo; // Atualiza b para o próximo termo
    contador++; // Incrementa contador
}
