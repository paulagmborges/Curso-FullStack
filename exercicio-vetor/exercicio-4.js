 /*Contagem de números pares: Usar o laço for para contar quantos números pares
existem em um array de números.
Instruções:
● Criar um array com alguns números (por exemplo: [1, 2, 3, 4, 5, 6]);
● Utilizar o laço for para contar quantos números pares existem nesse array;
● Ao final, exiba a quantidade de números pares no console.*/

let numeros = [1, 2, 3, 4, 5, 6];

let contadorPares = 0;

for(let i=0;i< numeros.length;i++){
    if(numeros[i] % 2===0 ){
        contadorPares++;
    }   
}
console.log(contadorPares)