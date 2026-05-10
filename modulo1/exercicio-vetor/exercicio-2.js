 /*2. Calculando a média de notas: Usar um laço for para calcular a média das notas de
um/a estudante.
Instruções:
● Criar um array com as notas de um/a estudante(por exemplo: [8, 7, 9, 10, 6]);
● Utilizar o laço for para somar as notas;
● Calcular a média das notas e exibir o resultado no console.*/

notasEstudante = [8, 7, 9, 10, 6];

let somaNotas = 0;
for(let i =0; i < notasEstudante.length;i++){
    somaNotas= somaNotas + notasEstudante[i]
}
let mediaNotas = somaNotas / notasEstudante.length;
console.log(`Média das notas: ${mediaNotas}`);