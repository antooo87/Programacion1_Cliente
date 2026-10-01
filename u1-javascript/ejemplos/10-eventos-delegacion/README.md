# Eventos y delegación

## Qué observar

- Haz click en el emoji 👉 y luego en el texto del botón: `currentTarget` siempre muestra `<BUTTON>` (donde está el listener), pero `target` cambia según el elemento exacto donde hiciste click.
- La lista de tareas tiene un **único** `addEventListener` en el `<ul>`, no uno por cada `<li>`. Eso es delegación de eventos.
- `evento.target.closest(".boton-borrar")` busca hacia arriba desde el elemento clicado hasta encontrar uno que coincida con ese selector (o hasta el propio elemento, si ya coincide). Si no encuentra nada, devuelve `null`.
- Gracias a la delegación, el botón "Añadir tarea" puede crear tareas nuevas con su propio botón "Borrar" y funcionan sin tener que añadirles un listener a cada una: el listener de la lista ya las cubre, porque sigue siendo un ancestro suyo.

## Prueba a cambiar

- Añade un `<strong>` dentro del `<button id="boton-anidado">` y haz click sobre él: comprueba que `target` cambia a `<STRONG>` pero `currentTarget` sigue siendo `<BUTTON>`.
- Cambia `evento.target.closest(".boton-borrar")` por `evento.target` directamente (sin `closest`) y haz click en el texto de una tarea (no en el botón): observa que ya no se borra nada, porque `target` no es el botón.
- Añade una funcionalidad para marcar una tarea como completada al hacer click en su texto (`.texto-tarea`), usando el mismo patrón de delegación con otro `closest()`.
