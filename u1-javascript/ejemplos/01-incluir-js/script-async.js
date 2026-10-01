// async: se descarga en paralelo con el HTML, pero se EJECUTA en cuanto
// termina de descargarse, sin esperar a que el HTML esté listo ni respetar
// el orden en que aparece en el documento. Por eso su mensaje puede salir
// antes o después que el de script-defer.js dependiendo de lo rápido que
// se descargue cada archivo.
console.log("1 (async) — script-async.js ejecutado");
