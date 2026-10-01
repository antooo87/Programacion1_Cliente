// Este es el script "principal" del ejemplo. También usa defer, como
// hacemos en todos los ejemplos de la asignatura: así nos asegurarnos de
// que document.querySelector encuentra los elementos, porque el HTML ya
// está parseado cuando este código se ejecuta.
console.log("3 (defer) — app.js ejecutado, orden respetado frente a script-defer.js");

const parrafoResultado = document.querySelector("#resultado");
parrafoResultado.textContent = "Mensajes escritos en la consola. Revisa el orden.";

// Nota sobre type="module": un <script type="module"> se comporta como
// defer por defecto (se ejecuta tras parsear el HTML) pero además activa
// el sistema de módulos de ES (import/export) y ejecuta el código en modo
// estricto automáticamente. Lo veremos a fondo en U2 con Vite; aquí basta
// con saber que type="module" también retrasa la ejecución como defer.
