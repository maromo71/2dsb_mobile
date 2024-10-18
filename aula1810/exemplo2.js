function obterDados() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const pedido = null;
            //const pedido = "Amor eterno"; 
            if (pedido) {
                resolve(pedido);
            } else {
                reject("Pedido de namoro rejeitado")
            }
        }, 2000);
    });
}

obterDados()
    .then(function (dados) {
        console.log(dados);
    })
    .catch(function (erro) {
        console.log(erro);
    });