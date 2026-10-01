// --- event.target vs event.currentTarget ---
// target: el elemento EXACTO sobre el que se hizo click (puede ser un hijo)
// currentTarget: el elemento al que está ENGANCHADO el listener (siempre
// el mismo, sin importar en qué hijo suyo se haya hecho click)
const botonAnidado = document.querySelector("#boton-anidado");
const resultadoTarget = document.querySelector("#resultado-target");

botonAnidado.addEventListener("click", (evento) => {
  resultadoTarget.textContent =
    `target: <${evento.target.tagName}> — ` +
    `currentTarget: <${evento.currentTarget.tagName}>`;
});
// Prueba a hacer click en el emoji 👉 y luego en el texto del botón:
// currentTarget siempre es el <button>, pero target cambia según dónde
// hagas click exactamente.

// --- delegación de eventos ---
// En vez de poner un listener por cada botón "Borrar" (que además habría
// que volver a añadir cada vez que se crea una tarea nueva), ponemos UN
// único listener en la lista <ul>, que es un ancestro de todos ellos.
const listaTareas = document.querySelector("#lista-tareas");
const botonNuevaTarea = document.querySelector("#boton-nueva-tarea");
let contadorTareas = listaTareas.children.length;

listaTareas.addEventListener("click", (evento) => {
  // closest() busca hacia arriba desde el elemento clicado (evento.target)
  // hasta encontrar uno que coincida con el selector, o null si no hay
  const botonBorrar = evento.target.closest(".boton-borrar");

  if (botonBorrar) {
    // closest(".boton-borrar") puede devolver el propio botón o, si en el
    // futuro el botón tuviera hijos, el ancestro que coincide; luego
    // subimos hasta el <li> que lo contiene para borrar la tarea entera
    const tareaCompleta = botonBorrar.closest("li");
    tareaCompleta.remove();
  }
});

// Esto funciona incluso para tareas que todavía no existen cuando se
// registró el listener, porque el listener está en la lista, no en cada
// botón individual
botonNuevaTarea.addEventListener("click", () => {
  contadorTareas = contadorTareas + 1;

  const nuevaTarea = document.createElement("li");

  const textoTarea = document.createElement("span");
  textoTarea.className = "texto-tarea";
  textoTarea.textContent = `Tarea nueva número ${contadorTareas}`;

  const botonBorrarNuevo = document.createElement("button");
  botonBorrarNuevo.className = "boton-borrar";
  botonBorrarNuevo.textContent = "Borrar";

  nuevaTarea.append(textoTarea, botonBorrarNuevo);
  listaTareas.appendChild(nuevaTarea);
});
