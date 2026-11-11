import { useEffect, useState } from "react";
import Marcador from "./components/Marcador.jsx";
import ZonaJuego from "./components/ZonaJuego.jsx";
import Historial from "./components/Historial.jsx";
import { useLocalStorage } from "./hooks/useLocalStorage.js";

const DURACION = 30;
const TECLA_SECRETA = "d";

function posicionAleatoria() {
  return { x: Math.random(), y: Math.random() };
}

export default function App() {
  const [puntos, setPuntos] = useState(0);
  const [tiempo, setTiempo] = useState(DURACION);
  const [jugando, setJugando] = useState(false);
  const [posicion, setPosicion] = useState(posicionAleatoria);
  const [oscuro, setOscuro] = useState(false);
  const [partidas, setPartidas] = useLocalStorage("partidas", []);

  const record = Math.max(0, ...partidas.map((partida) => partida.puntos));
  const tamano = Math.max(30, 70 - puntos * 2);

  useEffect(() => {
    if (!jugando) {
      return;
    }
    const alarma = setInterval(() => {
      setTiempo((anterior) => anterior - 1);
    }, 1000);
    return () => clearInterval(alarma);
  }, [jugando]);

  useEffect(() => {
    if (!jugando || tiempo > 0) {
      return;
    }
    setJugando(false);
    setPartidas((anteriores) => [
      ...anteriores,
      { id: crypto.randomUUID(), numero: anteriores.length + 1, puntos: puntos },
    ]);
  }, [jugando, tiempo, puntos, setPartidas]);

  useEffect(() => {
    function alPulsarTecla(evento) {
      if (evento.key === TECLA_SECRETA) {
        setOscuro((anterior) => !anterior);
      }
    }
    document.addEventListener("keydown", alPulsarTecla);
    return () => document.removeEventListener("keydown", alPulsarTecla);
  }, []);

  function empezarPartida() {
    setPuntos(0);
    setTiempo(DURACION);
    setPosicion(posicionAleatoria());
    setJugando(true);
  }

  function atraparObjetivo() {
    setPuntos(puntos + 1);
    setPosicion(posicionAleatoria());
  }

  return (
    <div className={oscuro ? "app oscuro" : "app"}>
      <header>
        <h1>Atrapa el objetivo</h1>
        <p className="pista">
          Atrápalo todas las veces que puedas en {DURACION} segundos. Cada vez es más pequeño.
        </p>
      </header>

      <main>
        <Marcador
          puntos={puntos}
          tiempo={tiempo}
          record={record}
          jugando={jugando}
          onEmpezar={empezarPartida}
        />
        <ZonaJuego
          jugando={jugando}
          posicion={posicion}
          tamano={tamano}
          onAtrapar={atraparObjetivo}
        />
        <Historial partidas={partidas} />
      </main>

      <footer>
        <p>Hecho por Antonio</p>
      </footer>
    </div>
  );
}
