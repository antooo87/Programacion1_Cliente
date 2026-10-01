# Arrays y objetos

## Qué observar

- `map`, `filter`, `find` y `reduce` **no modifican** el array original: siempre crean algo nuevo (un array nuevo, o un valor único en el caso de `reduce`).
- `push`/`unshift`/`pop`/`shift` **sí modifican** el array original. Hay que tener claro cuál es cuál antes de depender de que algo "no cambie".
- La desestructuración (`const [x, y] = array` o `const { titulo } = objeto`) es solo una forma más corta de sacar valores, equivalente a escribir `array[0]`, `array[1]`, `objeto.titulo` por separado.
- Desestructurar directamente en los parámetros de una función (`function describirLibro({ titulo, autor })`) es muy habitual cuando una función recibe un objeto de configuración.
- `Object.keys`, `Object.values` y `Object.entries` son la forma estándar de recorrer un objeto cuando `for...in` no es suficientemente explícito.

## Prueba a cambiar

- Encadena `numeros.filter(...).map(...)` en una sola línea para quedarte solo con los pares y luego duplicarlos.
- Usa `reduce` para encontrar el número más grande del array `numeros`, sin usar `Math.max`.
- Añade una propiedad `generos: ["ciencia", "programación"]` (un array) dentro de `libro`, y practica cómo acceder a su primer elemento combinando notación de punto y corchetes.
