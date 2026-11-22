import { jugadorSchema } from "./schemas/jugador.js";

const BASE = "http://localhost:3000";

function explicarFallo(resultado) {
  return resultado.error.issues
    .map((problema) => `${problema.path.join(".")}: ${problema.message}`)
    .join(" · ");
}

export async function obtenerJugadores(categoria) {
  const url =
    categoria === "todas"
      ? `${BASE}/jugadores`
      : `${BASE}/jugadores?categoria=${encodeURIComponent(categoria)}`;
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Error HTTP: ${r.status}`);
  const json = await r.json();
  if (!Array.isArray(json)) throw new Error("La API no ha devuelto una lista de jugadores");

  const jugadores = [];
  const corruptos = [];
  for (const dato of json) {
    const resultado = jugadorSchema.safeParse(dato);
    if (resultado.success) {
      jugadores.push(resultado.data);
    } else {
      corruptos.push({ id: dato?.id ?? "?", motivo: explicarFallo(resultado) });
    }
  }
  return { jugadores, corruptos };
}

export async function inscribirJugador(jugador) {
  const r = await fetch(`${BASE}/jugadores`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...jugador, fecha: new Date().toISOString() }),
  });
  if (!r.ok) throw new Error(`Error HTTP: ${r.status}`);
  const resultado = jugadorSchema.safeParse(await r.json());
  if (!resultado.success) {
    throw new Error(`El servidor ha devuelto datos corruptos (${explicarFallo(resultado)})`);
  }
  return resultado.data;
}

export async function borrarJugador(id) {
  const r = await fetch(`${BASE}/jugadores/${id}`, { method: "DELETE" });
  if (!r.ok) throw new Error(`Error HTTP: ${r.status}`);
}
