# Media queries — mobile first

## Qué observar

- El CSS "base" (fuera de cualquier `@media`) es el de móvil: una sola columna.
- Cada `@media (min-width: ...)` **añade** reglas para pantallas más anchas; no se escriben reglas de escritorio que luego haya que "deshacer" en móvil.
- `orientation: landscape` depende de la relación ancho/alto de la ventana, no del tamaño del dispositivo: puedes probarlo en un portátil achicando la ventana hasta que sea más alta que ancha.
- `(hover: hover)` solo es verdad cuando hay un puntero real. En un móvil táctil esa media query no se cumple, así que el botón nunca depende de un `:hover` para ser usable.
- `prefers-color-scheme` lee la preferencia del sistema operativo, no un botón de la página.

## Prueba a cambiar

- Cambia los `min-width: 600px` y `900px` por otros valores y observa en qué momento salta el número de columnas de `.tarjetas`.
- Cambia `orientation: landscape` por `orientation: portrait` y mira qué condición se cumple en tu pantalla ahora.
- Fuerza el modo oscuro de tu sistema operativo (no de la página) y comprueba que `.aviso-esquema` cambia solo.
- Añade un `@media (min-width: 1200px)` nuevo con 4 columnas.
