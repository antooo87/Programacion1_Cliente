// Las variables CSS no son solo cosa de CSS: se pueden leer y cambiar
// desde JavaScript con setProperty(), tanto en <html> (afecta a todo
// el documento) como en un elemento concreto (afecta solo a ese elemento
// y a sus hijos, igual que la sobrescritura que hace .caja-especial en CSS).

const selectorAcentoGlobal = document.querySelector("#selector-acento-global");
const selectorAcentoLocal = document.querySelector("#selector-acento-local");
const cajaDestacada = document.querySelector("#caja-destacada");

// Cambia --color-acento en documentElement (<html>): afecta a toda la
// página, salvo donde algo más concreto la sobrescriba (como .caja-especial)
selectorAcentoGlobal.addEventListener("input", (evento) => {
  document.documentElement.style.setProperty("--color-acento", evento.target.value);
});

// Cambia --color-acento SOLO en cajaDestacada: esta caja concreta deja de
// heredar la variable global y usa la suya propia, como hace .caja-especial
// en CSS pero decidido en tiempo real desde JS
selectorAcentoLocal.addEventListener("input", (evento) => {
  cajaDestacada.style.setProperty("--color-acento", evento.target.value);
});
