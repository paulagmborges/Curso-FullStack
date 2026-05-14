function calculadora(num1, num2, operador) {
    let resultado;

    if (operador === "+") {
        resultado = num1 + num2;

    } else if (operador === "-") {
        resultado = num1 - num2;

    } else if (operador === "*") {
        resultado = num1 * num2;

    } else if (operador === "/") {
        resultado = num1 / num2;

    } else {
        resultado = "Operador inválido";
    }

    return resultado;
}

let num1 = 10;
let num2 = 5;

console.log(calculadora(num1, num2, "+")); 
console.log(calculadora(num1, num2, "-")); 
console.log(calculadora(num1, num2, "*")); 
console.log(calculadora(num1, num2, "/")); 