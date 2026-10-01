# Ejercicio 09 — Cambiar texto en el DOM

## Enunciado

Añade al HTML un `<p id="mensaje">` con un texto inicial cualquiera y un `<button>` con el texto "Cambiar mensaje".

Al hacer click en el botón, el texto del párrafo debe cambiar a otro distinto. Cada click debe alternar entre al menos dos mensajes diferentes (por ejemplo, si el mensaje actual es "A", pasa a ser "B", y si es "B", vuelve a ser "A").

## Pistas

- Selecciona ambos elementos con `querySelector` antes de añadir ningún listener.
- Usa `addEventListener("click", ...)`, nunca `onclick` en el HTML.
- Para cambiar el texto usa `textContent`, no `innerHTML`.
- Para alternar entre dos mensajes necesitas guardar en algún sitio cuál es el mensaje "actual" (pista: puedes comparar el `textContent` actual del párrafo antes de cambiarlo).
