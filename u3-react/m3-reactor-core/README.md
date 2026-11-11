# Atrapa el objetivo · React

Mi juego de la M1 (atrapar un círculo que salta durante 30 segundos) reconstruido en React 19. Cada vez que lo atrapas se hace un poco más pequeño, el historial y el récord se guardan aunque cierres la página, y hay un modo oscuro escondido.

## Cómo probarlo

```
npm install
npm run dev
```

Abre `http://localhost:5173`, pulsa **Empezar** y atrapa el círculo todas las veces que puedas. Pulsa la tecla **d** para activar o quitar el modo oscuro.

## Estructura

```
src/
├── main.jsx                 monta <App /> en el #root del index.html
├── App.jsx                  estado del juego, efectos y composición de la pantalla
├── index.css                estilos (variables de color y tema oscuro)
├── components/
│   ├── Marcador.jsx         puntos, tiempo, récord y botón Empezar
│   ├── ZonaJuego.jsx        la caja de juego: el objetivo o un mensaje
│   ├── Objetivo.jsx         el círculo (tamaño y posición por props)
│   └── Historial.jsx        lista de partidas
└── hooks/
    └── useLocalStorage.js   bonus: useState que se guarda en localStorage
```

## Uso de IA

El código de esta misión lo generó Claude (Anthropic) porque no me daba tiempo a programarlo antes de la entrega, a partir de mi M1, que sí escribí yo a mano. Le pedí expresamente que me explicara cada línea, el flujo por dentro y por qué tomó cada decisión, y lo he estudiado con un documento de explicación aparte.

Cómo lo he comprobado: lo he ejecutado con `npm run dev` y he probado una partida completa, que el botón se desactiva mientras se juega, que el tiempo se para en 0, que el historial y el récord siguen ahí al recargar y que la tecla secreta cambia el tema.

Prompt usado (resumido): «Hazme la M3 pasando mi juego de la M1 a React, como si lo programara yo, y explícame cada línea, cómo va el flujo por dentro y por qué has hecho cada cosa para defenderla».

Mi plan es volver a programarla yo después de terminar la M2.

## Autopsia

**1. El fin de la partida está en su propio `useEffect`, separado del temporizador.** El temporizador (`setInterval`) solo depende de `jugando`, así que el reloj no se reinicia cada vez que sumo un punto. Descarté terminar la partida dentro del mismo efecto, porque necesitaría `puntos` en sus dependencias y cada clic reiniciaría el segundo en curso (el reloj se frenaría al hacer clics rápidos). El precio es un efecto que reacciona a otro estado (`tiempo` llegando a 0), algo que React recomienda evitar cuando hay un evento del usuario; aquí el "evento" es el paso del tiempo, así que lo considero justificado.

**2. El récord no es un estado: se calcula.** Guardo solo la lista de partidas (en localStorage, con mi hook) y el récord se deriva con `Math.max(0, ...partidas.map(...))` en cada render. Descarté un `useState` para el récord porque duplicaría información y podría desincronizarse de la lista. Lo mismo con el tamaño del objetivo, que sale de los puntos. Otra decisión: el modo oscuro es una clase en el `<div>` principal, no en el `<body>`, para no necesitar un efecto que toque el DOM a mano.
