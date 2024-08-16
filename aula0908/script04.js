let somatoria = 0
//precisa dar o comando: npm install prompt-sync
//comando no console.
const prompt = require('prompt-sync')()
//While - Fazer enquanto a soma for menor que 100
while(somatoria < 100){
    let valor = prompt('Insira um valor: ')
    //preciso passar valor para inteiro
    somatoria += parseInt(valor)
}

console.log(`Soma dos valores: ${somatoria}`)