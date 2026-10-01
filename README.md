# Programación Web I: El Cliente

Repositorio único de la asignatura **Programación Web I: El Cliente** (U-tad, 3º Ingeniería de Software, curso 2026-27). Aquí viven los apuntes, ejemplos, ejercicios y las misiones que se entregan en la Arena.

## Unidades

| Unidad | Tema | Tecnología |
|---|---|---|
| [u1-javascript](u1-javascript/) | JavaScript — DOM, eventos, navegador a pelo | HTML + CSS + JS vanilla |
| [u2-js-avanzado](u2-js-avanzado/) | JavaScript avanzado — asincronía, fetch, módulos | JS vanilla + Vite |
| [u3-react](u3-react/) | React 19 | React |
| [u4-formularios](u4-formularios/) | Formularios | React Hook Form, Zod, TanStack Query |
| [u5-tailwind](u5-tailwind/) | Estilos | Tailwind v4 |
| [u6-nextjs](u6-nextjs/) | Framework full-stack | Next.js 16 |
| [u7-testing](u7-testing/) | Testing | Vitest, Testing Library |

Cada unidad tiene su propio `README.md` con el índice y el temario detallado.

## Cómo está organizada cada unidad

- **`ejemplos/`** — código de estudio ya resuelto, para leer y ejecutar (típicamente con Live Server). No se entrega.
- **`ejercicios/`** — plantillas vacías con el enunciado en el README. Los resuelve el alumno.
- **`oraculo/`** (solo U1) — entrenamiento guiado paso a paso. No se entrega.
- **`m*-nombre-mision/`** — la misión de la unidad que se entrega en la Arena.

## Carpetas especiales

- **`sandbox/`** — pruebas rápidas de clase, desechables. Ver su [README](sandbox/README.md).
- **`scripts/`** — utilidades de Node para el repo.

## Entregar una misión en la Arena

La Arena pide la URL de la subcarpeta de la misión (no del repo entero) y exige: README con las secciones obligatorias, repo limpio, al menos 5 commits dentro de esa subcarpeta, la tecnología correcta y una estructura coherente.

Para pasar los archivos a BlackBoard (que no acepta `.html`/`.css`/`.js` directamente), usa el script de preparación de entregas:

```bash
node scripts/preparar-entrega.mjs u1-javascript/m1-despertar-dom
```

Esto copia los `.html`, `.css` y `.js` de esa carpeta a `entrega-txt/m1-despertar-dom/`, añadiendo `.txt` al nombre (por ejemplo `index.html` → `index.html.txt`), sin tocar los originales. La carpeta `entrega-txt/` está en `.gitignore` y no se sube al repo.

## Reglas básicas

- Nunca se hace `git push` sin permiso explícito.
- Nunca se escriben claves, tokens o API keys en ningún archivo del repo.
- Commits pequeños y con mensajes claros, por fase de trabajo.

Más detalle de estilo y de cómo debe comportarse la IA en este repo en [CLAUDE.md](CLAUDE.md).
