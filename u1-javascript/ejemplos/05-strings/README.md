# Strings y template literals

## Qué observar

- Los template literals (comillas invertidas `` ` ``) permiten meter cualquier expresión dentro de `${...}`, no solo variables sueltas: `${edad + 1}` funciona.
- Permiten escribir texto en varias líneas sin usar `\n`, simplemente pulsando intro dentro de las comillas invertidas.
- `trim()`, `toUpperCase()`, `toLowerCase()`, `includes()`, `startsWith()`, `endsWith()` y `replace()` son los métodos de string que más se van a repetir en la asignatura.
- `split(separador)` convierte un string en un array; `join(separador)` hace lo contrario, convierte un array en string.

## Prueba a cambiar

- Cambia el template literal del saludo para que, en vez de un número fijo de años, calcule si la persona es mayor o menor de edad usando un ternario dentro de `${}`.
- Prueba `frase.replace("Web", "Cliente")` sin `trim()` antes y fíjate en si los espacios sobrantes siguen ahí.
- Usa `split(" ")` sobre `"Programación Web I"` para obtener un array de palabras, y luego `join("-")` para unirlas con guiones.
