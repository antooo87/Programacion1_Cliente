# ?? vs ||, ?., spread/rest, ternario

## Qué observar

- `puntuacion || 10` descarta `0` porque `0` es falsy; `puntuacion ?? 10` lo respeta porque `??` solo mira si el valor es `null`/`undefined`. Con contadores o puntuaciones que pueden ser legítimamente `0`, `??` es casi siempre lo que quieres.
- `usuario.direccion?.ciudad` no lanza error aunque `direccion` sea `null`: corta ahí y devuelve `undefined` en vez de romper el programa.
- El spread (`...`) dentro de un array o un objeto literal **expande** los elementos: `{ ...datosBase, edad: 31 }` copia todas las propiedades de `datosBase` y luego sobrescribe `edad`.
- El rest (`...numeros` como parámetro de función) hace lo contrario: **agrupa** varios argumentos sueltos en un único array de verdad (con todos sus métodos, a diferencia del antiguo `arguments`).
- El ternario es una forma compacta de un `if/else` que devuelve un valor, no una sentencia para "hacer cosas" con efectos secundarios largos.

## Prueba a cambiar

- Cambia `puntuacion` a `null` y a `5`, y predice qué muestran `||` y `??` en cada caso antes de mirar la consola.
- Añade una propiedad `contacto: { telefono: "123" }` a `usuario` y comprueba cómo cambia `usuario.contacto?.telefono`.
- Escribe una función `combinarObjetos(...objetos)` que use rest para recibir varios objetos y spread para combinarlos todos en uno solo.
