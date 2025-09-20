"use strict";
/**
 * Objetivo: Receber um número representando o mês (1 a 12)
 * e exibir o nome correspondente usando switch.
 */
// Declaração de variável
// let mes: número do tipo number. Atribuímos 4 como exemplo.
let mes = 4;
// Estrutura switch
// Serve para comparar a variável "mes" com diversos casos possíveis.
// Cada "case" é um valor que a variável pode ter.
// Se houver correspondência, o bloco de código dentro do case é executado.
switch (mes) {
    case 1: // Se mes === 1
        console.log("Janeiro"); // Exibe "Janeiro" no console
        break; // Interrompe o switch para não executar os outros cases
    case 2: // Se mes === 2
        console.log("Fevereiro");
        break; // Evita que os próximos cases sejam executados
    case 3:
        console.log("Março");
        break;
    case 4: // Se mes === 4
        console.log("Abril"); // No nosso exemplo, mes = 4, então imprime "Abril"
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default: // Caso nenhum dos cases seja correspondente
        console.log("Mês inválido");
    // É executado quando a variável "mes" não está entre 1 e 12
}
