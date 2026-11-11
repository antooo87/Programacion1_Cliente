export default function Marcador({ puntos, tiempo, record, jugando, onEmpezar }) {
  return (
    <section className="marcador">
      <h2>Marcador</h2>
      <p>Puntos: <span>{puntos}</span></p>
      <p>Tiempo: <span>{tiempo}</span></p>
      <p>Récord: <span>{record}</span></p>
      <button type="button" onClick={onEmpezar} disabled={jugando}>
        {jugando ? "Jugando..." : "Empezar"}
      </button>
    </section>
  );
}
