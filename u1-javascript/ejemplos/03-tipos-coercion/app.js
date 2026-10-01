// --- typeof ---
console.log(typeof 42); // "number"
console.log(typeof "42"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (sí, es una rareza histórica de JS)
console.log(typeof [1, 2, 3]); // "object" (los arrays son objetos)
console.log(typeof {}); // "object"
console.log(typeof function () {}); // "function"

// --- == vs === ---
// == compara con COERCIÓN: convierte los tipos antes de comparar
console.log(5 == "5"); // true: "5" se convierte a número 5
console.log(0 == false); // true: false se convierte a número 0
console.log(null == undefined); // true: caso especial de ==

// === compara SIN coerción: si los tipos son distintos, ya es false
console.log(5 === "5"); // false: number !== string
console.log(0 === false); // false: number !== boolean

// En la asignatura usamos siempre === porque su comportamiento es
// predecible: no hay que memorizar las reglas de conversión de ==

// --- truthy / falsy ---
// Valores falsy: false, 0, -0, "", null, undefined, NaN
// Todo lo demás es truthy, incluidas cosas que podrían parecer "vacías":
console.log(Boolean("0")); // true: es un string no vacío, aunque diga "0"
console.log(Boolean([])); // true: un array vacío es un objeto, y los objetos son truthy
console.log(Boolean({})); // true: igual, un objeto vacío es truthy
console.log(Boolean(0)); // false
console.log(Boolean("")); // false

// --- Number() y NaN ---
console.log(Number("42")); // 42
console.log(Number("42px")); // NaN: no se puede convertir del todo
console.log(Number("")); // 0: string vacío se convierte a 0
console.log(Number(" 7 ")); // 7: Number() ignora espacios al principio/final

console.log(NaN === NaN); // false: NaN nunca es igual a sí mismo
console.log(Number.isNaN(NaN)); // true: así es como se comprueba de verdad

// --- input.value siempre es string ---
// Por eso hace falta convertir manualmente si queremos operar como número
const campoNumero = document.querySelector("#campo-numero");
const resultadoInput = document.querySelector("#resultado-input");

function mostrarTipoDelValor() {
  const valorComoTexto = campoNumero.value; // SIEMPRE es string, aunque el input sea type="number"
  const valorComoNumero = Number(valorComoTexto);

  resultadoInput.textContent =
    `input.value es "${valorComoTexto}" (${typeof valorComoTexto}). ` +
    `Number(input.value) es ${valorComoNumero} (${typeof valorComoNumero}).`;
}

mostrarTipoDelValor();
campoNumero.addEventListener("input", mostrarTipoDelValor);
