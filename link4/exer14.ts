/**
 * Exercício 14 – Função calculadora
 * Objetivo: receber dois números e um operador (+, -, *, /) e retornar resultado.
 * Tratamento: verificar divisão por zero; operador inválido retorna NaN.
 */

function calculadora(a: number, b: number, op: string): number {
  // Verifica qual operador foi passado e executa a operação correspondente.
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;

  if (op === "/") {
    // Se for divisão, checa se divisor (b) é zero.
    if (b === 0) {
      console.log("Erro: divisão por zero.");
      return NaN;
    }
    return a / b;
  }

  // Se não for nenhum operador válido, informa e retorna NaN.
  console.log("Operador inválido!");
  return NaN;
}

// Exemplos de uso:
console.log(calculadora(10, 5, "+")); // 15
console.log(calculadora(10, 5, "-")); // 5
console.log(calculadora(10, 5, "*")); // 50
console.log(calculadora(10, 5, "/")); // 2
