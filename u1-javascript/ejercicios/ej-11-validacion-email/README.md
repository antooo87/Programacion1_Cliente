# Ejercicio 11 — Validación de email

## Enunciado

Añade un `<input type="email">` y un elemento donde mostrar un mensaje de validación que se actualice mientras el usuario escribe:

- Si el texto tiene una forma básica válida de email (algo-arroba-algo-punto-algo), muestra un mensaje de éxito, por ejemplo "✅ Formato válido".
- Si no, muestra un mensaje de error, por ejemplo "❌ Formato no válido".
- Si el campo está vacío, no muestres ningún mensaje de error ni de éxito.

No hace falta una validación perfecta de emails reales (eso es casi imposible con una sola comprobación); basta con comprobar que hay texto antes de una `@`, texto después, y un punto en esa segunda parte.

## Pistas

- Puedes resolverlo sin expresiones regulares usando `includes("@")`, `split("@")` y comprobando las partes resultantes, o usar una expresión regular simple si ya la conoces de otra asignatura.
- Recuerda comprobar primero si el campo está vacío (`input.value.trim() === ""`) antes de evaluar el resto de condiciones.
- El mensaje de validación debe cambiar con el evento `"input"`, no solo al enviar un formulario (aquí no hay formulario que enviar).
