// calculadora.js

function somar(x, y) {
    return x + y;
}
function subtrair(x, y) {
    return x - y;
}
function multiplicar(x, y) {
    return x * y;
}
function dividir(x, y) {
    return x / y;
}

function calcular(operacao) {
    const valor1 = parseInt(document.getElementById('valor1').value);
    const valor2 = parseInt(document.getElementById('valor2').value);
    let resultado = 0;
    switch (operacao) {
        case '+':
            resultado = somar(valor1, valor2);
            break;
        case '-':
                resultado = subtrair(valor1, valor2);
                break;
        case '*':
            resultado = multiplicar(valor1, valor2);
            break;
        case '/':
            resultado = dividir(valor1, valor2);
            break;
    }
    document.getElementById('resultado').value = resultado;
}

export { 
    somar, 
    subtrair, 
    multiplicar, 
    dividir,
    calcular
};
