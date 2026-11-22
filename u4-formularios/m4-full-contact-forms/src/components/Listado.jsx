import { useState } from "react";
import { CATEGORIAS } from "../schemas/jugador.js";
import { useBorrarJugador, useJugadores } from "../hooks/useJugadores.js";

export default function Listado() {
  const [categoria, setCategoria] = useState("todas");
  const { data, isPending, isError, error, isFetching } = useJugadores(categoria);
  const borrar = useBorrarJugador();

  function contenido() {
    if (isPending) {
      return <p role="status">Cargando jugadores...</p>;
    }
    if (isError) {
      return (
        <p className="aviso aviso-error" role="alert">
          No se ha podido cargar la lista: {error.message}. ¿Está arrancada la API con <code>npm run api</code>?
        </p>
      );
    }
    return (
      <>
        {data.corruptos.length > 0 && (
          <div className="aviso aviso-corrupto" role="alert">
            <p>
              Zod ha descartado {data.corruptos.length} registro(s) con datos corruptos:
            </p>
            <ul>
              {data.corruptos.map((corrupto) => (
                <li key={corrupto.id}>
                  id {corrupto.id} → {corrupto.motivo}
                </li>
              ))}
            </ul>
          </div>
        )}

        {data.jugadores.length === 0 ? (
          <p>Todavía no hay nadie inscrito en esta categoría.</p>
        ) : (
          <ul className="lista-jugadores">
            {data.jugadores.map((jugador) => (
              <li key={jugador.id}>
                <div>
                  <strong>{jugador.nick}</strong>{" "}
                  <span className={`etiqueta ${jugador.categoria}`}>{jugador.categoria}</span>
                  <p className="detalle">
                    {jugador.edad} años · inscrito el{" "}
                    {new Date(jugador.fecha).toLocaleDateString("es-ES")}
                  </p>
                  {jugador.mensaje !== "" && <p className="detalle">«{jugador.mensaje}»</p>}
                </div>
                <button
                  type="button"
                  className="boton-borrar"
                  onClick={() => borrar.mutate(jugador.id)}
                  disabled={borrar.isPending && borrar.variables === jugador.id}
                  aria-label={`Dar de baja a ${jugador.nick}`}
                >
                  {borrar.isPending && borrar.variables === jugador.id ? "Borrando..." : "Baja"}
                </button>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }

  return (
    <section className="tarjeta">
      <div className="cabecera-listado">
        <h2>Inscritos</h2>
        {isFetching && !isPending && <span className="actualizando">Actualizando...</span>}
      </div>

      <label htmlFor="filtro">Filtrar por categoría</label>
      <select id="filtro" value={categoria} onChange={(evento) => setCategoria(evento.target.value)}>
        <option value="todas">todas</option>
        {CATEGORIAS.map((opcion) => (
          <option key={opcion} value={opcion}>
            {opcion}
          </option>
        ))}
      </select>

      {borrar.isError && (
        <p className="aviso aviso-error" role="alert">
          No se ha podido dar de baja: {borrar.error.message}
        </p>
      )}

      {contenido()}
    </section>
  );
}
