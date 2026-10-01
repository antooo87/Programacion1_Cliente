# Ejercicio 07 — Saludo configurable

## Enunciado

Escribe una función `crearSaludo(nombre, idioma)` que devuelva un saludo según el idioma indicado:

- `"es"` → `"Hola, <nombre>"`
- `"en"` → `"Hello, <nombre>"`
- `"fr"` → `"Bonjour, <nombre>"`

Si no se indica `idioma`, debe usar `"es"` por defecto. Si no se indica `nombre`, debe usar `"invitado"` por defecto.

Prueba la función llamándola de varias formas: sin argumentos, con solo el nombre, y con nombre e idioma.

## Pistas

- Usa parámetros por defecto en la propia declaración de la función: `function crearSaludo(nombre = "invitado", idioma = "es")`.
- Un `switch` sobre `idioma` es una forma clara de elegir el saludo correcto; recuerda el `default` para idiomas no soportados.
- Usa template literals para construir el string final, no concatenación con `+`.
