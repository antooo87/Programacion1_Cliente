// --- declaración de función ---
// se puede llamar ANTES de su definición en el código ("hoisting")
console.log(sumar(2, 3)); // funciona aunque la función esté definida más abajo

function sumar(a, b) {
  return a + b;
}

// --- expresión de función ---
// la variable existe desde el principio (por ser const/let), pero no se
// puede llamar antes de esta línea, porque hasta aquí no tiene una
// función asignada
const restar = function (a, b) {
  return a - b;
};
console.log(restar(5, 2));

// --- función flecha ---
// sintaxis más corta; además NO tiene su propio "this" (toma el del
// contexto donde se escribió), lo cual es muy relevante en eventos y
// en closures con objetos
const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 3));

// --- parámetros por defecto ---
function saludar(nombre = "invitado") {
  return `Hola, ${nombre}`;
}
console.log(saludar("Ada"));
console.log(saludar()); // usa el valor por defecto

// --- parámetros rest ---
function contarParametros(...valores) {
  return valores.length;
}
console.log(contarParametros(1, 2, 3, 4)); // 4

// --- closure: una función que "recuerda" variables de donde se creó ---
// crearContador() devuelve una función nueva cada vez que se llama.
// Esa función interna sigue teniendo acceso a "cuenta", aunque
// crearContador() ya haya terminado de ejecutarse. Eso es un closure.
function crearContador() {
  let cuenta = 0; // esta variable queda "encerrada" dentro del closure

  return function incrementar() {
    cuenta = cuenta + 1;
    return cuenta;
  };
}

const contadorA = crearContador();
const contadorB = crearContador(); // un closure totalmente independiente

console.log(contadorA()); // 1
console.log(contadorA()); // 2
console.log(contadorB()); // 1 (contadorB no comparte "cuenta" con contadorA)

// --- aplicación práctica: closure conectado a un botón ---
const botonContador = document.querySelector("#boton-contador");
const resultadoContador = document.querySelector("#resultado-contador");
const sumarUno = crearContador();

botonContador.addEventListener("click", () => {
  const valorActual = sumarUno();
  resultadoContador.textContent = `Contador: ${valorActual}`;
});
