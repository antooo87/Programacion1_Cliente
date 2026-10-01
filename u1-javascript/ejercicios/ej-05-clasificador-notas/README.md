# Ejercicio 05 — Clasificador de notas

## Enunciado

Escribe una función `clasificarNota(nota)` que reciba un número del 0 al 10 y devuelva un string según esta tabla:

| Nota | Resultado |
|---|---|
| 9 - 10 | "Sobresaliente" |
| 7 - 8.9 | "Notable" |
| 5 - 6.9 | "Aprobado" |
| 0 - 4.9 | "Suspenso" |

Prueba la función con al menos un valor de cada categoría, mostrando el resultado en consola.

Bonus: si la función recibe un valor fuera del rango 0-10 (por ejemplo, -3 o 15), que devuelva `"Nota inválida"` en vez de intentar clasificarla.

## Pistas

- Usa una cadena de `if`/`else if`, comprobando primero el caso más alto.
- Para el bonus, la comprobación del rango inválido puede ir al principio de la función, antes de las demás condiciones.
