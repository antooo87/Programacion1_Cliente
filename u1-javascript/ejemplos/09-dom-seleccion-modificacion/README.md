# Selección y modificación del DOM

## Qué observar

- Escribe `<b>hola</b>` en el campo de texto: en la columna `textContent` se ve literalmente esa etiqueta como texto; en la columna `innerHTML` se ve "hola" en negrita de verdad.
- `innerHTML` interpreta el contenido como HTML, por eso es peligroso usarlo con datos que vengan de un usuario (ataque XSS: alguien podría meter un `<script>` o un atributo con JavaScript). `textContent` nunca interpreta nada, siempre es texto plano, por eso es la opción segura por defecto.
- `classList.toggle("destacado")` añade la clase si no la tiene, y la quita si ya la tiene: es la forma habitual de manejar estados visuales como "activo"/"seleccionado".
- `createElement` crea un nodo que todavía no está en la página; hasta que no lo "enganchas" con `appendChild` (o similar), no se ve.
- `querySelector` devuelve el primer elemento que coincide; `querySelectorAll` devuelve todos los que coinciden (una `NodeList`, recorrible con `forEach`).

## Prueba a cambiar

- Prueba a escribir `<img src=x onerror="alert(1)">` en el campo de texto y observa qué pasa en la columna `innerHTML` (en un sitio real, esto sería un ataque XSS de verdad).
- Añade un botón que elimine el último elemento de la lista con `listaElementos.lastElementChild?.remove()`.
- Cambia `setAttribute("data-indice", ...)` por `nuevoElemento.dataset.indice = ...` (es otra forma de hacer lo mismo) y comprueba en las DevTools que el resultado en el HTML es idéntico.
