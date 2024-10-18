function obterDados() {
    return new Promise(function (resolve, reject) {
        //simula um pedido
        setTimeout(function () {
            const pedido = "Amor eterno"; 
            if (pedido) {
                resolve(pedido);
            } else {
                reject("Pedido de namoro rejeitado")
            }
        }, 2000);
    });
}
async function mostrarDados() {
    try {
        const dados = await obterDados();
        console.log(dados);
    } catch (erro) {
        console.log(erro);
    }
}
mostrarDados();