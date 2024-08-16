let somatoria = 0
let acumulador = 0

//Exemplo do for. 
for(let i = 0; i < 10; i++){
    //Valores aleatorios entre 1 e 100
    let randomico = Math.floor(Math.random() * 100) + 1 
    //somando os valores
    somatoria += randomico
    //exibindo cada valor gerado
    console.log(randomico)
}
//soma de todos os valores gerados
console.log(`Soma dos numeros aleatorios: ${somatoria}`)
