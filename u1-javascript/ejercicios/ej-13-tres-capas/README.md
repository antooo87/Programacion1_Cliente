# Ejercicio 13 — Repaso en tres capas

## Enunciado

Construye una pequeña lista de tareas que repase todo lo visto en U1, manteniendo siempre HTML, CSS y JS en archivos separados:

1. Un `<input type="text">` y un botón "Añadir" para escribir una tarea nueva.
2. Al hacer click en "Añadir" (o pulsar Enter dentro del input), la tarea se añade como un `<li>` nuevo dentro de un `<ul>`, creado con `createElement` y `textContent` (no `innerHTML`).
3. Cada `<li>` tiene un botón "Completada" que le añade/quita una clase CSS (por ejemplo `.tarea-completada`, con `text-decoration: line-through`).
4. Cada `<li>` tiene un botón "Borrar" que lo elimina de la lista.
5. Los botones "Completada" y "Borrar" de las tareas usan **delegación de eventos**: un único listener en el `<ul>`, no uno por cada tarea.
6. Si el input está vacío (o solo tiene espacios) al pulsar "Añadir", no se añade ninguna tarea.

Bonus: muestra un contador de "tareas pendientes" que se actualice automáticamente cada vez que se añade, completa o borra una tarea.

## Pistas

- Repasa `u1-javascript/ejemplos/10-eventos-delegacion/` para la delegación, y `09-dom-seleccion-modificacion/` para `createElement`/`classList`.
- Para capturar la tecla Enter en el input, escucha el evento `"keydown"` y comprueba `evento.key === "Enter"`.
- El contador de pendientes necesita recorrer las tareas actuales y contar cuántas NO tienen la clase de completada; puedes usar `querySelectorAll` + `filter` o un bucle simple.
