# Control de flujo

## Qué observar

- `switch` compara con `===` internamente, así que es tan seguro como una cadena de `if`/`else if` con `===`.
- El `break` dentro de un `case` es imprescindible: sin él, la ejecución sigue cayendo en los casos siguientes aunque no coincidan ("fall-through").
- `for...of` recorre **valores** (sirve para arrays, strings y cualquier iterable); `for...in` recorre **claves** de un objeto, y casi nunca se usa con arrays porque da los índices como strings, no los elementos.
- `while` se usa cuando no sabes de antemano cuántas vueltas va a dar el bucle (depende de una condición que cambia dentro), a diferencia del `for` clásico, donde el número de vueltas suele estar claro desde el principio.

## Prueba a cambiar

- Quita el `break` del `case "martes"` y añade un `console.log` en el `default`: observa qué pasa cuando `dia` es `"martes"`.
- Cambia el `for...in` de `persona` por un `for...of` directamente sobre `persona` y comprueba el error que da (los objetos normales no son iterables).
- Cambia la condición del `while` a `numero < 1000000` y predice cuántas iteraciones hará antes de ejecutarlo.
