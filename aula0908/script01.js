let idade = 32
let categoria = ''
//Participar de concurso de natação.
if (idade < 5){
    categoria = 'Impossível participar'
}else if(idade < 10){
    categoria = 'Categoria A'
}else if(idade < 15){
    categoria = 'Categoria B'
}else if(idade < 18){
    categoria = 'Categoria C'
}else{
    categoria = 'Categoria Adulto'
}
console.log(`Categoria participante: ${categoria}`)