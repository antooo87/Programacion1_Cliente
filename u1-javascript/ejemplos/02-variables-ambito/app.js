// --- const vs let ---
// const: la variable no se puede REASIGNAR (el identificador siempre
// apunta al mismo valor). Es la opción por defecto en la asignatura.
const nombreCurso = "Programación Web I";
console.log("const no se puede reasignar:", nombreCurso);

// Si descomentas la siguiente línea, el navegador lanza un error:
// nombreCurso = "Otro nombre"; // TypeError: Assignment to constant variable.

// let: se usa SOLO cuando sabes que vas a reasignar la variable más
// adelante (por ejemplo, un contador o un acumulador)
let numeroDeIntentos = 0;
numeroDeIntentos = numeroDeIntentos + 1;
console.log("let sí se puede reasignar:", numeroDeIntentos);

// Importante: const no significa "inmutable". Si el valor es un objeto
// o un array, su CONTENIDO sí se puede modificar; lo que no se puede
// cambiar es a qué objeto apunta la variable.
const persona = { nombre: "Ada" };
persona.nombre = "Grace"; // esto SÍ está permitido
console.log("const con objeto: el contenido cambia, la referencia no:", persona);

// --- por qué no var ---

// 1) var tiene ámbito de FUNCIÓN, no de bloque: "se escapa" de los if/for
if (true) {
  var filtraFueraDelIf = "se puede ver fuera del if";
  let noFiltraFueraDelIf = "NO se puede ver fuera del if";
}
console.log("var se escapa del bloque:", filtraFueraDelIf);
// console.log(noFiltraFueraDelIf); // ReferenceError: no existe fuera del bloque

// 2) var permite redeclarar la misma variable sin avisar, lo que facilita
// pisarla por error en código largo
var contador = 1;
var contador = 2; // ningún error, aunque sea confuso
console.log("var permite redeclarar sin aviso:", contador);

// let noContador = 1;
// let noContador = 2; // SyntaxError: 'noContador' ya ha sido declarada

// --- zona muerta temporal (temporal dead zone) ---
// const y let existen desde el principio del bloque, pero no se pueden
// usar hasta la línea donde se declaran. Intentar leerlas antes lanza un
// error, en vez de devolver undefined como pasaría con var.
function demostrarZonaMuerta() {
  try {
    console.log(valorAntesDeDeclararse);
  } catch (error) {
    console.log("Zona muerta temporal:", error.message);
  }
  let valorAntesDeDeclararse = "ya declarada";
}
demostrarZonaMuerta();

document.querySelector("#resultado").textContent =
  "Revisa la consola para ver cada bloque explicado.";
