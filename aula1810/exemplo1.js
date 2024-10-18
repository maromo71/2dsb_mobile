function obterDados(callback){
    setTimeout(function(){
        const dados = "Maromo";
        callback(dados);
    }, 5000);
}

function mostrarDados(dados){
    console.log(dados);
}

obterDados(mostrarDados);