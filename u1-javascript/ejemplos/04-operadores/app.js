// --- ?? (nullish coalescing) vs || ---
// || usa el operando derecho si el izquierdo es FALSY (false, 0, "", null, undefined, NaN)
// ?? usa el operando derecho SOLO si el izquierdo es null o undefined

const puntuacion = 0;

console.log(puntuacion || 10); // 10: 0 es falsy, así que || lo descarta (¡probablemente no es lo que queremos!)
console.log(puntuacion ?? 10); // 0: 0 no es null ni undefined, así que ?? respeta el 0

const sinValor = null;
console.log(sinValor || 10); // 10
console.log(sinValor ?? 10); // 10 (en este caso coinciden)

// Caso típico: un contador o una puntuación que legítimamente puede ser 0
// debe usar ?? para no "perder" el cero.

// --- ?. (optional chaining) ---
const usuario = {
  nombre: "Ada",
  direccion: null,
};

// Sin ?. esto lanzaría un error si direccion es null:
// console.log(usuario.direccion.ciudad); // TypeError: Cannot read properties of null

console.log(usuario.direccion?.ciudad); // undefined, sin lanzar error
console.log(usuario.contacto?.telefono); // undefined: "contacto" ni siquiera existe

// También funciona con llamadas a funciones que pueden no existir:
const objetoSinMetodo = {};
console.log(objetoSinMetodo.metodoQueNoExiste?.()); // undefined, no lanza error

// --- spread (...) para expandir ---
const numerosBase = [1, 2, 3];
const numerosAmpliados = [...numerosBase, 4, 5]; // expande el array dentro de uno nuevo
console.log(numerosAmpliados); // [1, 2, 3, 4, 5]

const datosBase = { nombre: "Ada", edad: 30 };
const datosActualizados = { ...datosBase, edad: 31 }; // copia y sobrescribe "edad"
console.log(datosActualizados); // { nombre: "Ada", edad: 31 }

// --- rest (...) para agrupar ---
function sumarTodo(...numeros) {
  // "numeros" agrupa TODOS los argumentos en un array real
  return numeros.reduce((acumulado, actual) => acumulado + actual, 0);
}
console.log(sumarTodo(1, 2, 3, 4)); // 10

const [primero, ...resto] = [10, 20, 30, 40];
console.log(primero, resto); // 10 [20, 30, 40]

// --- ternario ---
// condicion ? valorSiVerdadero : valorSiFalso
const edad = 20;
const tipoUsuario = edad >= 18 ? "adulto" : "menor";
console.log(tipoUsuario); // "adulto"

document.querySelector("#resultado").textContent =
  "Revisa la consola para ver cada operador en acción.";
