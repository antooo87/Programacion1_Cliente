# Ejercicio 10 — Contador en el DOM

## Enunciado

Construye un contador visual con:

- Un elemento que muestre el valor actual (empezando en 0).
- Un botón "+1" que incrementa el valor.
- Un botón "-1" que decrementa el valor.
- Un botón "Reiniciar" que vuelve el valor a 0.

El contador debe poder bajar de 0 (números negativos), salvo que decidas añadir como bonus una restricción para que no baje de un mínimo.

## Pistas

- Necesitas una variable que guarde el valor actual del contador, declarada con `let` porque se reasigna.
- Cada botón necesita su propio `addEventListener("click", ...)`.
- Tras cambiar la variable, actualiza el `textContent` del elemento que muestra el valor: cambiar la variable no actualiza la pantalla por sí solo.
- Piensa en escribir una única función `actualizarPantalla()` que leas y llames desde los tres listeners, en vez de repetir la misma línea tres veces.
