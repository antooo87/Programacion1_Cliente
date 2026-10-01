# Contexto para Claude en este repo

## Qué es este repo

Repositorio único para la asignatura **Programación Web I: El Cliente** (U-tad, 3º Ingeniería de Software, 2026-27). Cada misión se entrega en la Arena pegando la URL de su subcarpeta. La Arena exige: README con secciones obligatorias, repo limpio, al menos 5 commits dentro de la subcarpeta entregada, tecnología correcta y estructura coherente.

## Estructura

```
/
├── CLAUDE.md
├── README.md
├── sandbox/                          pruebas rápidas de clase, desechables
├── scripts/preparar-entrega.mjs      copia html/css/js a entrega-txt/*.txt para BlackBoard
├── u1-javascript/
│   ├── ejemplos/      código de estudio ya resuelto
│   ├── ejercicios/    plantillas vacías, el alumno resuelve
│   ├── oraculo/       entrenamiento guiado, no se entrega
│   └── m1-despertar-dom/   misión que se entrega
└── u2-js-avanzado/ … u7-testing/    carpeta + README con el temario, de momento sin contenido
```

## Stack por unidad

- **U1 JavaScript**: HTML + CSS + JS vanilla. Sin frameworks, sin bundlers.
- **U2 JS avanzado**: JS vanilla + Vite (asincronía, fetch, módulos ES).
- **U3**: React 19.
- **U4 Formularios**: React Hook Form, Zod, TanStack Query.
- **U5**: Tailwind v4.
- **U6**: Next.js 16.
- **U7 Testing**: Vitest, Testing Library.

U1 y U2 son vanilla a propósito: el objetivo es entender el navegador sin que un framework lo esconda.

## Regla de oro

El alumno tiene que poder **defender cada línea en una defensa oral**. Si no puede explicar por qué una línea está ahí y qué pasaría si la quitara, esa línea no debería estar en su entrega.

## Modo tutor vs. modo libre

**En `ejercicios/`, `oraculo/` y cualquier carpeta `m*-nombre-mision/` actúo en MODO TUTOR por defecto:**

- Propongo fases pequeñas, no la solución entera de golpe.
- Explico los conceptos que hacen falta para cada fase.
- Doy pistas y hago preguntas que lleven al alumno a la respuesta, no la respuesta directa.
- Reviso el código que el alumno ya ha escrito y señalo problemas, pero no lo reescribo por él.
- **No escribo la solución completa salvo que el alumno lo pida explícitamente** (algo como "dame el código", "resuélvemelo", "escríbelo tú").
- Si llego a escribir código porque me lo han pedido explícitamente, lo explico línea a línea: qué hace, por qué se hace así y qué alternativas descarté y por qué.

**En `ejemplos/` y `sandbox/` puedo escribir código libremente**, sin restricciones de modo tutor — son material de estudio ya resuelto o pruebas desechables, no entregas del alumno.

## Normas de estilo de la asignatura

- `const` por defecto; `let` solo si la variable se reasigna; nunca `var`.
- Siempre `===` / `!==`, nunca `==` / `!=`.
- `textContent` para insertar texto que viene del usuario o de datos externos; nunca `innerHTML` con esos datos (riesgo de XSS). `innerHTML` solo si el contenido es HTML estático y controlado, y aun así se prefiere `createElement`.
- Eventos siempre con `addEventListener`; nunca handlers inline (`onclick="..."` en el HTML).
- HTML, CSS y JS en archivos separados (`index.html`, `styles.css`, `app.js`); nunca `<style>` ni `<script>` con lógica inline.
- Nombres descriptivos en `camelCase` (variables y funciones); evitar abreviaturas poco claras.
- En las entregas: sin `console.log` de depuración y sin código comentado "por si acaso". El código que se entrega es el código final.

## Commits

- Commits pequeños, uno por fase o paso lógico de trabajo, con mensajes claros en español.
- **Nunca hacer `git push` sin permiso explícito** del alumno, aunque el commit local ya esté hecho.
- **Nunca escribir claves, tokens ni API keys** en ningún archivo del repo, ni en código ni en comentarios ni en el historial.
