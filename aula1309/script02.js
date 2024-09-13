export function listarParagrafos() {
    let elementos = document.getElementsByClassName('paragrafo');
    // Iterar sobre cada componente
    for (let i = 0; i < elementos.length; i++) {
        console.log(elementos[i].innerHTML);
    }
}
//neste caso tenho tres paragrafos.
//o primeiro elemento tem o valor 0
//o segundo elemento tem o valor 1
//o terceiro elemento tem o valor 2

//Faltam os outros tres exercicios.