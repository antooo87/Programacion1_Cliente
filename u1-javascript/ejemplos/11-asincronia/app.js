// JavaScript ejecuta el código SÍNCRONO de arriba a abajo, de un tirón,
// sin pararse a esperar nada. setTimeout no "pausa" el programa: registra
// una función para que se ejecute MÁS ADELANTE, y el motor sigue
// inmediatamente con la siguiente línea de código síncrono.

console.log("1: esto es síncrono, se ejecuta primero");

setTimeout(() => {
  console.log("3: esto se ejecuta después de (al menos) 0ms de retraso");
}, 0);

console.log("2: esto también es síncrono, se ejecuta antes que el setTimeout");

// Aunque el retraso sea 0ms, el mensaje "3" sale DESPUÉS del "2".
// Esto pasa porque setTimeout no bloquea nada: el código síncrono que
// queda por ejecutar (incluido el resto del script) siempre se completa
// antes de que el motor atienda cualquier callback de setTimeout,
// por muy pequeño que sea el retraso indicado.

// --- con varios setTimeout, el retraso SÍ importa para el orden entre ellos ---
setTimeout(() => console.log("Este tarda 200ms"), 200);
setTimeout(() => console.log("Este tarda 50ms"), 50);
setTimeout(() => console.log("Este tarda 100ms"), 100);
// Entre ellos sí se respeta el orden de los retrasos: 50, 100, 200.
// Pero todos salen después de TODO el código síncrono, sin excepción.

console.log("4: último console.log síncrono del script");

// --- limpiar un setTimeout antes de que se ejecute ---
const idDelTimeout = setTimeout(() => {
  console.log("Este mensaje nunca debería aparecer");
}, 1000);

clearTimeout(idDelTimeout); // cancela el setTimeout anterior

document.querySelector("#resultado").textContent =
  "Revisa el orden de los mensajes en la consola.";
