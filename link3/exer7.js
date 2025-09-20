"use strict";
// Função recursiva para calcular fatorial
function calcularFatorial(n) {
    // Caso base: fatorial de 0 ou 1 é 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Chamada recursiva: n! = n * (n-1)!
    return n * calcularFatorial(n - 1);
}
console.log("Fatorial de 5:", calcularFatorial(5)); // 120
console.log("Fatorial de 7:", calcularFatorial(7)); // 5040
