# Ejercicio 04 — Conversor de temperatura

## Enunciado

Añade al HTML un `<input type="number">` donde el usuario escriba grados Celsius, y un elemento donde se muestre el resultado en Fahrenheit, actualizándose mientras el usuario escribe.

La fórmula de conversión es:

```
F = C * 9/5 + 32
```

Bonus: añade un segundo `<input>` para convertir de Fahrenheit a Celsius (la fórmula inversa es `C = (F - 32) * 5/9`).

## Pistas

- El valor de un `<input>` siempre llega como string (`input.value`); conviértelo a número con `Number(...)` antes de operar con él.
- Usa el evento `"input"` (no `"change"`) para que el resultado se actualice mientras el usuario escribe, sin esperar a que pierda el foco.
- Para mostrar el resultado, usa `textContent`, nunca `innerHTML`.
