"use strict";
/**
 * Exercício 08 – Função par ou ímpar
 * Objetivo: verificar se um número é par ou ímpar.
 */
function parOuImpar(n) {
    // O operador módulo (%) retorna o resto da divisão por 2.
    // Se o resto for 0 → número par. Caso contrário → ímpar.
    if (n % 2 === 0) {
        return "Par";
    }
    else {
        return "Ímpar";
    }
    // Observação: podemos também usar forma curta com operador ternário:
    // return (n % 2 === 0) ? "Par" : "Ímpar";
}
console.log(`7 é ${parOuImpar(7)}`); // Saída: 7 é Ímpar
console.log(`10 é ${parOuImpar(10)}`); // Saída: 10 é Par
