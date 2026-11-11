import Objetivo from "./Objetivo.jsx";

export default function ZonaJuego({ jugando, posicion, tamano, onAtrapar }) {
  return (
    <section>
      <h2>Zona de juego</h2>
      <div className="zona-juego">
        {jugando ? (
          <Objetivo posicion={posicion} tamano={tamano} onAtrapar={onAtrapar} />
        ) : (
          <p className="mensaje-zona">Pulsa Empezar para jugar</p>
        )}
      </div>
    </section>
  );
}
