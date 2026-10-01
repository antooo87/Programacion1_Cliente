# Ejercicio 06 — FizzBuzz

## Enunciado

Escribe un bucle que recorra los números del 1 al 100 y, para cada uno, escriba en consola:

- `"Fizz"` si el número es múltiplo de 3.
- `"Buzz"` si el número es múltiplo de 5.
- `"FizzBuzz"` si el número es múltiplo de 3 **y** de 5 a la vez.
- El propio número, en cualquier otro caso.

## Pistas

- Usa el operador módulo `%` para comprobar si un número es múltiplo de otro (el resto de la división debe ser `0`).
- Comprueba primero la condición más restrictiva (múltiplo de ambos a la vez), porque si compruebas "múltiplo de 3" primero y usas `else if`, nunca llegarás a comprobar el caso combinado.
- Puedes usar `for` o `for...of` sobre un rango de números.
