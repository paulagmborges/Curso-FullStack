function verificarIdade(idade) {
    if (idade >= 18) {
        return "Você é maior de idade";
    }
    else {
        return "Você é menor de idade";
    }}

let idade = 8;

console.log(verificarIdade(idade));