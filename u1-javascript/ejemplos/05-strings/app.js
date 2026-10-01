// --- template literals (comillas invertidas `) ---
const nombre = "Ada";
const edad = 30;

// Antes, con concatenación:
const saludoConcatenado = "Hola, " + nombre + ". Tienes " + edad + " años.";

// Con template literals: más legible, y permite cualquier expresión dentro de ${}
const saludoTemplate = `Hola, ${nombre}. Tienes ${edad} años.`;
console.log(saludoConcatenado);
console.log(saludoTemplate);

// Dentro de ${} puede ir cualquier expresión, no solo variables:
console.log(`El año que viene tendrás ${edad + 1} años.`);

// Los template literals también permiten varias líneas sin usar "\n"
const mensajeMultilinea = `Línea 1
Línea 2
Línea 3`;
console.log(mensajeMultilinea);

// --- métodos de string más usados ---
const frase = "  Programación Web I  ";

console.log(frase.trim()); // quita espacios al principio y al final
console.log(frase.trim().toUpperCase()); // "PROGRAMACIÓN WEB I"
console.log(frase.trim().toLowerCase()); // "programación web i"

console.log(frase.includes("Web")); // true: ¿contiene ese texto?
console.log(frase.trim().startsWith("Programación")); // true
console.log(frase.trim().endsWith("I")); // true

console.log(frase.trim().replace("Web", "Cliente")); // sustituye la primera coincidencia

const listaDeNombres = "Ada,Grace,Linus";
console.log(listaDeNombres.split(",")); // ["Ada", "Grace", "Linus"]

const partes = ["Ada", "Grace", "Linus"];
console.log(partes.join(" y ")); // "Ada y Grace y Linus"

console.log("Web".length); // 3: longitud del string

document.querySelector("#resultado").textContent =
  "Revisa la consola para ver cada método en acción.";
