// --- arrays: métodos que no modifican el original ---
const numeros = [5, 3, 8, 1, 9];

// map: crea un array NUEVO transformando cada elemento
const numerosDobles = numeros.map((numero) => numero * 2);
console.log(numerosDobles); // [10, 6, 16, 2, 18]
console.log(numeros); // el original no cambia: [5, 3, 8, 1, 9]

// filter: crea un array NUEVO solo con los elementos que cumplen la condición
const numerosMayoresQueCuatro = numeros.filter((numero) => numero > 4);
console.log(numerosMayoresQueCuatro); // [5, 8, 9]

// find: devuelve el PRIMER elemento que cumple la condición (o undefined)
const primerParImpar = numeros.find((numero) => numero % 2 !== 0);
console.log(primerParImpar); // 5

// reduce: "reduce" el array a un único valor acumulado
const sumaTotal = numeros.reduce((acumulado, actual) => acumulado + actual, 0);
console.log(sumaTotal); // 26

// --- arrays: métodos que SÍ modifican el original ---
const frutas = ["pera", "manzana"];
frutas.push("uva"); // añade al final
frutas.unshift("kiwi"); // añade al principio
console.log(frutas); // ["kiwi", "pera", "manzana", "uva"]

frutas.pop(); // quita el último
frutas.shift(); // quita el primero
console.log(frutas); // ["pera", "manzana"]

// --- desestructuración de arrays ---
const coordenadas = [10, 20, 30];
const [x, y, z] = coordenadas;
console.log(x, y, z); // 10 20 30

const [primero, , tercero] = coordenadas; // se puede "saltar" una posición
console.log(primero, tercero); // 10 30

// --- objetos: forma básica ---
const libro = {
  titulo: "Eloquent JavaScript",
  autor: "Marijn Haverbeke",
  anio: 2018,
};

console.log(libro.titulo); // notación con punto
console.log(libro["autor"]); // notación con corchetes (útil si la clave es dinámica)

// --- desestructuración de objetos ---
const { titulo, anio } = libro;
console.log(titulo, anio); // "Eloquent JavaScript" 2018

// renombrar al desestructurar:
const { titulo: nombreDelLibro } = libro;
console.log(nombreDelLibro); // "Eloquent JavaScript"

// --- desestructuración en parámetros de función ---
function describirLibro({ titulo, autor }) {
  return `${titulo}, de ${autor}`;
}
console.log(describirLibro(libro));

// --- Object.keys, Object.values, Object.entries ---
console.log(Object.keys(libro)); // ["titulo", "autor", "anio"]
console.log(Object.values(libro)); // ["Eloquent JavaScript", "Marijn Haverbeke", 2018]
console.log(Object.entries(libro)); // [["titulo", ...], ["autor", ...], ["anio", ...]]

document.querySelector("#resultado").textContent =
  "Revisa la consola para ver cada método en acción.";
