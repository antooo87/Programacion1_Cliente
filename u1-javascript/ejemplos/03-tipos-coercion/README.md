# Tipos y coerción

## Qué observar

- `typeof null` devuelve `"object"`: es una rareza histórica de JavaScript, no un error tuyo.
- `==` convierte los tipos antes de comparar (coerción); `===` no convierte nada, así que si los tipos son distintos ya es `false` sin mirar los valores.
- No todo lo que "parece vacío" es falsy: `[]` y `{}` son **truthy**, aunque estén vacíos, porque son objetos.
- `Number("42px")` da `NaN`, pero `NaN === NaN` es `false`. Para comprobar si algo es `NaN` de verdad se usa `Number.isNaN(valor)`.
- `input.value` es **siempre** un string, incluso en un `<input type="number">`. Si quieres operar con él como número, hay que convertirlo explícitamente con `Number(...)`.

## Prueba a cambiar

- Escribe en el campo de número algo que no sea un número válido (si el navegador te lo deja, o cambia el `type` a `text` para probarlo libre) y observa qué pasa con `Number(valorComoTexto)`.
- Añade `console.log(1 + "1")` y `console.log(1 - "1")` y razona por qué dan resultados distintos (pista: `+` con un string concatena).
- Cambia algún `==` del ejemplo por `===` y viceversa, y predice el resultado antes de mirar la consola.
