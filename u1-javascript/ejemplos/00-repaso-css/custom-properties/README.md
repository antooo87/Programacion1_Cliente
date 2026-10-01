# Custom properties (variables CSS)

## Qué observar

- `--color-acento` se define una vez en `:root` y se usa en varios sitios con `var(--color-acento)`.
- `.caja-especial` sobrescribe `--color-acento` solo dentro de sí misma: eso es herencia normal de CSS, no magia especial de las variables.
- El selector de color "global" cambia la variable en `document.documentElement` (el `<html>`), así que afecta a toda la página salvo donde algo más específico la sobrescriba.
- El selector de color "local" cambia la variable solo en `#caja-destacada`, con el mismo `setProperty()` pero aplicado a un elemento concreto en vez de a `documentElement`.

## Prueba a cambiar

- Añade una tercera variable, por ejemplo `--radio-borde`, y úsala en `border-radius` de varias cajas.
- Cambia el acento global y luego el local: comprueba que la caja destacada obedece al último que la haya tocado directamente a ella.
- Intenta leer el valor actual de una variable desde JS con `getComputedStyle(elemento).getPropertyValue('--color-acento')` y pinta ese valor en un `console.log`.
