// Este ejemplo es sobre todo de CSS: las media queries viven en styles.css.
// Aquí solo mostramos en pantalla el ancho actual de la ventana para que
// sea fácil relacionar el número con el momento en que cambia el diseño.

const parrafoInfo = document.querySelector("#info-ancho");

function mostrarAnchoActual() {
  parrafoInfo.textContent = `Ancho de la ventana: ${window.innerWidth}px`;
}

mostrarAnchoActual();
window.addEventListener("resize", mostrarAnchoActual);
