# setTimeout y orden de ejecución

## Qué observar

- Los mensajes "1", "2" y "4" (síncronos) aparecen siempre antes que cualquier `setTimeout`, incluso el que tiene `0` milisegundos de retraso.
- `setTimeout` no pausa el programa: solo registra una función para ejecutarla más adelante, y JavaScript sigue inmediatamente con la línea siguiente.
- Entre varios `setTimeout`, sí se respeta el orden relativo de sus retrasos (50ms antes que 100ms, antes que 200ms), pero todos ellos esperan a que termine TODO el código síncrono del script, sin excepción.
- `clearTimeout(id)` cancela un `setTimeout` que todavía no se ha ejecutado, usando el identificador que devuelve `setTimeout` al crearlo.

## Prueba a cambiar

- Cambia el retraso del primer `setTimeout` de `0` a `5000` (5 segundos) y observa que el mensaje "2" y "4" siguen saliendo mucho antes, sin esperar nada.
- Añade un `console.log` extra justo después de `clearTimeout(idDelTimeout)` y comprueba que el `setTimeout` cancelado nunca llega a imprimir su mensaje, aunque esperes los 1000ms.
- Anota en papel el orden que crees que van a salir los mensajes ANTES de ejecutar el archivo, y luego compáralo con la consola real.
