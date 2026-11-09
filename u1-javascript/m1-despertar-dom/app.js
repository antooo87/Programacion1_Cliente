const objetivo = document.querySelector("#btn-objetivo");
const zona = document.querySelector("#zona-juego");
const empezar = document.querySelector("#btn-empezar");
const textoTiempo = document.querySelector("#tiempo");
const textoPuntos = document.querySelector("#puntos");
const listaPartidas = document.querySelector("#lista-partidas");
let contador = 0;
let tiempo = 30;
let alarma = null;
let numPartidas = 0;
let jugando = false;


function atraparObjetivo(){
    
    if(!jugando){
        return;
    }
    const maxX = zona.clientWidth - objetivo.offsetWidth;
    const maxY = zona.clientHeight - objetivo.offsetHeight;
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    objetivo.style.left = `${x}px`;
    objetivo.style.top = `${y}px`;
    contador = contador +1;
    textoPuntos.textContent = contador;

}

function restarSegundo() {
    tiempo = tiempo -1;
    textoTiempo.textContent = tiempo;
    if(tiempo === 0){
        historial();
    }
}

function empezarPartida() {
    jugando = true;
    contador = 0;
    tiempo = 30;
    textoPuntos.textContent = contador;
    textoTiempo.textContent = tiempo;
    alarma = setInterval(restarSegundo, 1000);
}

function historial() {
    clearInterval(alarma);
    jugando = false;
    numPartidas = numPartidas +1;
    const partida = document.createElement("li");
    partida.textContent = `Partida ${numPartidas}: ${contador} puntos`;
    listaPartidas.appendChild(partida);
    
}

function modoOscuro(evento){
    if(evento.key === 'd'){
           document.body.classList.toggle("oscuro");
    }
}

objetivo.addEventListener("click", atraparObjetivo);
empezar.addEventListener("click", empezarPartida);
document.addEventListener("keydown", modoOscuro);



