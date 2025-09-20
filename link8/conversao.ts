/**
 * Função: converterPrecoParaReais1
 * Objetivo: Receber um preço em dólares, aplicar taxa de câmbio, calcular IOF e preço de venda com lucro.
 *
 * Parâmetros:
 * - precoEmDolar1: número → preço do produto em dólares
 * - taxaDeCambio1: número → valor da taxa de câmbio USD → BRL
 * - iof1: número opcional → percentual do IOF (default 6.38%)
 * - lucro1: número opcional → percentual de lucro (default 45%)
 *
 * Retorno:
 * Um objeto contendo:
 * - precoEmReais1 → preço convertido sem IOF
 * - valorIOF1 → valor do IOF em reais
 * - precoComIOF1 → preço final com IOF
 * - precoVenda1 → preço de venda com lucro
 */
function converterPrecoParaReais1(
    precoEmDolar1: number,
    taxaDeCambio1: number,
    iof1: number = 6.38,
    lucro1: number = 45
): { precoEmReais1: number, valorIOF1: number, precoComIOF1: number, precoVenda1: number } {

    // Converte o preço de dólares para reais usando a taxa de câmbio
    const precoEmReais1 = precoEmDolar1 * taxaDeCambio1;

    // Calcula o valor do IOF (Imposto sobre Operações Financeiras)
    // Fórmula: precoEmReais1 * (iof1 / 100)
    const valorIOF1 = precoEmReais1 * (iof1 / 100);

    // Aplica o IOF ao preço convertido
    const precoComIOF1 = precoEmReais1 + valorIOF1;

    // Calcula o preço de venda incluindo percentual de lucro
    // Fórmula: precoComIOF1 * (1 + lucro1 / 100)
    const precoVenda1 = precoComIOF1 * (1 + lucro1 / 100);

    // Retorna todos os valores em um objeto
    return { precoEmReais1, valorIOF1, precoComIOF1, precoVenda1 };
}
