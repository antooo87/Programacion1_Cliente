# Funciones y closures

## Qué observar

- Una declaración de función (`function sumar() {}`) se puede llamar antes de aparecer en el código, por el "hoisting". Una expresión de función (`const restar = function () {}`) no: existe desde el principio del bloque, pero no tiene una función asignada hasta esa línea.
- Las funciones flecha no tienen su propio `this`; toman el del contexto donde se escribieron. Por ahora basta con saber que existen y son más cortas de escribir.
- `crearContador()` devuelve una función nueva. Esa función interna "recuerda" la variable `cuenta` de su entorno aunque `crearContador()` ya haya terminado: eso es un **closure**.
- `contadorA` y `contadorB` son dos closures totalmente independientes: cada llamada a `crearContador()` crea su propia variable `cuenta`, no se comparte entre ellos.
- El botón usa ese mismo patrón: `sumarUno` es un closure conectado a un evento, así que el contador en pantalla sobrevive mientras la página esté abierta, sin usar ninguna variable global.

## Prueba a cambiar

- Llama a `contadorA()` tres veces seguidas y a `contadorB()` solo una, y predice qué número imprime cada uno antes de ejecutarlo.
- Cambia `crearContador` para que reciba un valor inicial: `function crearContador(valorInicial = 0)`, y pruébalo con `crearContador(10)`.
- Añade un segundo botón que reinicie el contador a 0 (pista: necesitarás que el closure también exponga una función de reinicio, por ejemplo devolviendo un objeto `{ incrementar, reiniciar }` en vez de una sola función).
