let somatoria = 0
//precisa dar o comando: npm install prompt-sync
//comando no console.
const prompt = require('prompt-sync')()
//Do while - Fazer enquanto a soma for menor que 100
do{
    let valor = prompt('Insira um valor: ')
    //preciso passar valor para inteiro
    somatoria += parseInt(valor)
}while(somatoria < 100)

console.log(`Soma dos valores: ${somatoria}`)
