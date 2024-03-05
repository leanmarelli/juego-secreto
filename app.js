let numSecreto = 0;
let intentos = 1;
let listaNumerosGenerados = []
let numMaximo = 10

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return
}

function verificarIntento() {
    let numUsuario = parseInt(document.getElementById('valor').value);
    if (numUsuario == numSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if(numUsuario > numSecreto){
            asignarTextoElemento('p', `El numero secreto es menor. Intentá nuevamente. Intento n°: ${intentos}`)
        } else{
            asignarTextoElemento('p', `El numero secreto es mayor. Intentá nuevamente. Intento n°: ${intentos}`)
        }
        intentos++
        limpiarCaja()
    }
    return
}

function limpiarCaja(){
    document.querySelector('#valor').value = ''
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numMaximo) + 1
    //si el num generado esta incluido en la lista hacemos una operacion y sino otra
    /* console.log(numeroGenerado);
    console.log(listaNumerosGenerados); */
    if(listaNumerosGenerados.length != numMaximo){
        if(listaNumerosGenerados.includes(numeroGenerado)){
            return generarNumeroSecreto()
        } else {
            listaNumerosGenerados.push(numeroGenerado)
            return numeroGenerado
        }
    } else {
        asignarTextoElemento('h1', 'Game Over')
        asignarTextoElemento('p', 'Se sortearon todos los numeros posibles')
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego Secreto')
    asignarTextoElemento('h4', `Pensá un número del 1 al ${numMaximo}`)
    asignarTextoElemento('p', `Ingresa el número`)
    intentos = 1
    numSecreto = generarNumeroSecreto()
}

function reiniciarJuego(){
    limpiarCaja()
    condicionesIniciales()
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}

condicionesIniciales()
