
const objetivo = document.querySelector("#btn-objetivo");
const zona = document.querySelector("#zona-juego");
const textoPuntos = document.querySelector("#puntos");
let contador = 0;


function atraparObjetivo(){

    const maxX = zona.clientWidth - objetivo.offsetWidth;
    const maxY = zona.clientHeight - objetivo.offsetHeight;
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    objetivo.style.left = `${x}px`;
    objetivo.style.top = `${y}px`;
    contador = contador +1;
    textoPuntos.textContent = contador;

}

objetivo.addEventListener("click", atraparObjetivo);




