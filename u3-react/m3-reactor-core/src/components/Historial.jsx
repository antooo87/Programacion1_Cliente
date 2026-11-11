export default function Historial({ partidas }) {
  return (
    <section>
      <h2>Historial</h2>
      {partidas.length === 0 ? (
        <p>Todavía no has jugado ninguna partida.</p>
      ) : (
        <ul className="lista-partidas">
          {partidas.map((partida) => (
            <li key={partida.id}>
              Partida {partida.numero}: {partida.puntos} puntos
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
