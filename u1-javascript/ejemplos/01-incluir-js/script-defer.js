// defer: se descarga en paralelo con el HTML, pero su EJECUCIÓN se retrasa
// hasta que el HTML completo esté parseado. Además, varios scripts con
// defer se ejecutan en el orden en que aparecen en el documento: por eso
// este mensaje sale siempre antes que el de app.js (que también es defer
// pero está después en el HTML), y después de que el DOM esté listo.
console.log("2 (defer) — script-defer.js ejecutado, DOM ya parseado");
