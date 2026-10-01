# U1 — JavaScript

JavaScript del navegador sin frameworks: variables, tipos, control de flujo, funciones, DOM y eventos. El objetivo de esta unidad es entender qué hace el navegador por debajo, antes de dejar que un framework lo esconda.

**Stack:** HTML + CSS + JS vanilla. Sin frameworks, sin bundlers, sin dependencias.

## Contenido

- **[ejemplos/](ejemplos/)** — código de estudio ya resuelto, para leer y ejecutar con Live Server.
- **[ejercicios/](ejercicios/)** — plantillas vacías con el enunciado en el README. Los resuelve el alumno, no se entregan.
- **[oraculo/](oraculo/)** — entrenamiento guiado paso a paso ("El oráculo de los números"). No se entrega.
- **[m1-despertar-dom/](m1-despertar-dom/)** — misión que se entrega en la Arena.

## Ejemplos

| Carpeta | Tema |
|---|---|
| `00-repaso-css/media-queries` | Mobile first, `min-width`, `orientation`, `hover`, `prefers-color-scheme` |
| `00-repaso-css/custom-properties` | Variables CSS en `:root`, herencia, sobrescritura, cambio desde JS |
| `01-incluir-js` | `defer` / `async` / `type="module"` |
| `02-variables-ambito` | `const`, `let`, por qué no `var`, zona muerta temporal |
| `03-tipos-coercion` | `typeof`, `==` vs `===`, truthy/falsy, `Number()`, `NaN`, `input.value` es string |
| `04-operadores` | `??` vs `\|\|`, `?.`, spread/rest, ternario |
| `05-strings` | Template literals, métodos de string |
| `06-control-flujo` | `if`/`switch`, `for`, `for...of`, `for...in`, `while` |
| `07-funciones-closures` | Declaración, expresión, arrow, parámetros por defecto, rest, closure contador |
| `08-arrays-objetos` | Arrays y objetos: métodos, desestructuración |
| `09-dom-seleccion-modificacion` | `querySelector`, `textContent` vs `innerHTML` y XSS, `classList`, `setAttribute`, `createElement` |
| `10-eventos-delegacion` | `addEventListener`, `event.target` vs `currentTarget`, `closest`, delegación |
| `11-asincronia` | `setTimeout` y orden de ejecución |

## Ejercicios

13 ejercicios (`ej-01` a `ej-13`) que van de consola y tipos a DOM y validación, terminando en un ejercicio de repaso en tres capas (HTML/CSS/JS). Cada carpeta tiene su enunciado en el README.
