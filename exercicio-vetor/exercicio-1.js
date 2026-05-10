//1. Acumulando o valor de vendas: Usar o laço for para calcular o total de vendas de uma
//loja, dado um array com os valores das transações.

//Instruções:
//● Criar um array com valores de vendas diárias (por exemplo: [100, 200, 150, 300]);
//● Usar o laço for para somar todos os valores;
//● No final, exibir o valor total acumulado de vendas no console.
// Criando um array com valores de vendas diárias

const vendasDiarias = [100, 200, 150, 300];

let totalVendas = 0;

for (let i =0; i< vendasDiarias.length ;i++){
    totalVendas += vendasDiarias[i]
}
console.log(`Total de vendas: ${totalVendas}`);