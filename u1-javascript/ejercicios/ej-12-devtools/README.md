# Ejercicio 12 — DevTools

## Enunciado

Este ejercicio es sobre usar las herramientas del navegador, no sobre escribir mucho código.

1. En `app.js`, escribe una función `calcularTotal(precio, cantidad)` que devuelva `precio * cantidad`, y llámala un par de veces con valores distintos.
2. Abre las DevTools (F12) y, en la pestaña **Elements**, localiza el `<h1>` de esta página e inspecciona sus estilos aplicados en el panel de la derecha.
3. En la pestaña **Sources**, abre `app.js`, pon un **breakpoint** (punto de interrupción) haciendo click en el número de la línea donde llamas a `calcularTotal`, y recarga la página. Comprueba que la ejecución se detiene ahí y que puedes ver el valor de las variables en ese momento.
4. Usa el panel de **Console** para, con la ejecución pausada en el breakpoint, escribir `precio` y `cantidad` y comprobar sus valores en ese instante exacto.
5. Quita el breakpoint y, en su lugar, añade dentro de la función una línea `debugger;` justo antes del `return`. Recarga la página y comprueba que también para la ejecución ahí.

## Qué debes poder explicar en la defensa oral

- Qué diferencia hay entre la pestaña Elements (lo que ves) y la pestaña Sources (tu código).
- Qué es un breakpoint y para qué sirve pausar la ejecución a mitad de una función.
- Qué hace la palabra clave `debugger;` dentro del código.
