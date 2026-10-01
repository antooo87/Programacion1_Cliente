# Incluir JS: defer / async / type="module"

## Qué observar

- Abre la consola (F12), pestaña "Console", y recarga la página (no basta con mirar el código, hay que ver el orden real de los mensajes).
- `script-async.js` tiene `async`: se descarga en paralelo pero se ejecuta tan pronto como termina de descargar, sin esperar nada ni respetar el orden del documento. Por eso su mensaje "1" no siempre es el primero en salir de verdad.
- `script-defer.js` y `app.js` tienen `defer`: ambos esperan a que el HTML esté parseado, y entre ellos se ejecutan en el orden en que aparecen en el `<head>`.
- Ninguno de los tres bloquea el renderizado del HTML, a diferencia de un `<script>` normal sin atributos (que pararía el parseo justo donde está colocado).

## Prueba a cambiar

- Quita el atributo `defer` de `app.js` y ponlo justo antes de `</body>` en vez de en el `<head>`: compara si cambia el orden.
- Cambia `script-async.js` para que también tenga `defer` en vez de `async` y observa cómo pasa a ejecutarse siempre en el mismo punto, de forma predecible.
- Prueba a poner un `<script>` sin ningún atributo justo antes del `<h1>` con un `console.log` dentro: comprueba que bloquea el parseo (puedes simularlo con un bucle largo o simplemente fijándote en el orden respecto a los demás).
