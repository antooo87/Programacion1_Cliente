# Ejercicio 08 — Contador con closure

## Enunciado

Escribe una función `crearContador()` que devuelva una función interna. Cada vez que se llame a esa función interna, debe aumentar en 1 una variable privada y devolver el nuevo valor.

Crea dos contadores independientes, por ejemplo `contadorA` y `contadorB`, y demuestra en consola que cada uno lleva su propia cuenta sin interferir con el otro.

Bonus: en vez de devolver una sola función, haz que `crearContador()` devuelva un objeto con dos funciones: `incrementar()` y `reiniciar()`.

## Pistas

- La variable que cuenta debe declararse DENTRO de `crearContador`, no fuera: así cada llamada a `crearContador()` crea su propia copia independiente.
- Esto es exactamente el mismo patrón que viste en `u1-javascript/ejemplos/07-funciones-closures/`.
- Para el bonus, recuerda que un objeto puede tener funciones como valores de sus propiedades: `{ incrementar: function () {...}, reiniciar: function () {...} }`.
