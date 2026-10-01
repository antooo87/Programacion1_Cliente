# const, let y por qué no var

## Qué observar

- `const` no permite reasignar el identificador, pero si el valor es un objeto o array, su contenido sí se puede mutar (`persona.nombre = ...` funciona).
- `let` existe para los casos en que SÍ necesitas reasignar, como un contador.
- `var` tiene ámbito de función, no de bloque: una variable declarada con `var` dentro de un `if` o un `for` se puede leer fuera de ese bloque, lo cual suele ser una fuente de bugs.
- `var` permite redeclarar la misma variable sin avisar; `let`/`const` lanzan un error si lo intentas.
- La "zona muerta temporal": con `let`/`const`, usar la variable antes de la línea donde se declara lanza un `ReferenceError`, en vez de devolver `undefined` silenciosamente.

## Prueba a cambiar

- Cambia `nombreCurso` de `const` a `let` y añade una reasignación: comprueba que ahora sí funciona.
- Descomenta la línea `nombreCurso = "Otro nombre";` con `nombreCurso` siendo `const` y observa el error exacto en consola.
- Cambia `filtraFueraDelIf` de `var` a `let` y comprueba que ahora el `console.log` de fuera del `if` falla.
