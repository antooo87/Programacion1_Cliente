# El oráculo de los números

Entrenamiento guiado. **No se entrega.** Se resuelve en fases, en modo tutor: en cada fase se construye una pieza pequeña y se prueba antes de pasar a la siguiente. No se trata de llegar al final rápido, sino de poder explicar cada línea en la defensa oral.

El código de partida (`index.html` y `app.js`) ya está escrito tal cual lo dio el profesor. No se cambia la estructura del HTML ni se borra la línea del `console.log` del secreto hasta la fase 5.

## Fase 1 — Conexión

Objetivo: seleccionar con `querySelector` los elementos que vas a necesitar (`#intento`, `#probar`, `#respuesta`, `#marcador`) y guardarlos en constantes. Sin lógica todavía, solo comprobar con `console.log` que cada constante apunta al elemento correcto.

## Fase 2 — Primera consulta

Objetivo: al hacer click en `#probar`, leer el valor de `#intento`, convertirlo a número con `Number(...)`, y mostrar en `#respuesta` un mensaje con ese número usando un template literal (por ejemplo: `` `Has dicho ${intento}` ``). Todavía no se compara con el secreto.

## Fase 3 — El oráculo responde

Objetivo: comparar el número introducido con `secreto` usando `===`, `<` y `>` para decir si es el número exacto, si el secreto es mayor o si es menor. Añadir también una validación: si el campo está vacío o el número está fuera del rango 1-100, mostrar un mensaje de error en vez de intentar comparar.

## Fase 4 — Marcador

Objetivo: añadir un contador de intentos. La variable que lo guarda debe declararse con `let`, **fuera** del listener del botón (si se declarara dentro, se reiniciaría a 0 en cada click). Cada consulta válida suma 1 al contador, y el resultado se muestra en `#marcador`.

## Fase 5 — Fin de partida

Objetivo: cuando el jugador acierta el número, deshabilitar el botón (`boton.disabled = true`) para que no se pueda seguir jugando, y mostrar un mensaje final que incluya cuántos intentos ha necesitado. Por último, borrar la línea del `console.log` del secreto: ya no debe quedar ningún rastro de depuración en el código final.
