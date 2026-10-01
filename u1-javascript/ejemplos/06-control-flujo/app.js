// --- if / switch ---
const nota = 7;

if (nota >= 9) {
  console.log("Sobresaliente");
} else if (nota >= 7) {
  console.log("Notable");
} else if (nota >= 5) {
  console.log("Aprobado");
} else {
  console.log("Suspenso");
}

// switch compara con === (sin coerción), por eso es seguro usarlo
const dia = "martes";
switch (dia) {
  case "sabado":
  case "domingo":
    console.log("Fin de semana");
    break;
  case "martes":
    console.log("Es martes");
    break;
  default:
    console.log("Día laboral normal");
}
// el break es importante: sin él, el switch sigue cayendo a los casos
// siguientes aunque no coincidan ("fall-through")

// --- for clásico ---
// útil cuando necesitas el índice o controlar el paso manualmente
for (let i = 0; i < 5; i++) {
  console.log("for clásico, iteración", i);
}

// --- for...of ---
// recorre los VALORES de algo iterable (arrays, strings, etc.)
const frutas = ["manzana", "pera", "uva"];
for (const fruta of frutas) {
  console.log("for...of:", fruta);
}

// --- for...in ---
// recorre las CLAVES (propiedades) de un objeto; casi nunca se usa con
// arrays porque devuelve los índices como strings, no los valores
const persona = { nombre: "Ada", profesion: "programadora" };
for (const clave in persona) {
  console.log("for...in:", clave, "->", persona[clave]);
}

// --- while ---
// se repite MIENTRAS la condición sea verdadera; no sabemos de antemano
// cuántas vueltas dará (a diferencia del for clásico)
let numero = 1;
while (numero < 100) {
  numero = numero * 2;
}
console.log("while terminó con numero =", numero);

document.querySelector("#resultado").textContent =
  "Revisa la consola para ver cada estructura en acción.";
