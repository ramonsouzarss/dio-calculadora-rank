// Função para calcular o saldo de vitórias e determinar o nível
function calcularRank(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas; // Calcula o saldo de vitórias
    let nivel;

    // Estrutura de decisão para determinar o nível com base nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna o saldo de vitórias e o nível do jogador
    return { saldoVitorias, nivel };
}

// Exemplo de como utilizar a função
const vitorias = parseInt(prompt("Digite a quantidade de vitórias:"));
const derrotas = parseInt(prompt("Digite a quantidade de derrotas:"));

// Chama a função para calcular o saldo de vitórias e o nível
const resultado = calcularRank(vitorias, derrotas);

// Exibe o resultado final
console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} vitórias e está no nível ${resultado.nivel}.`);
