import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CATEGORIAS, inscripcionSchema } from "../schemas/jugador.js";
import { useInscribirJugador } from "../hooks/useJugadores.js";
import MensajeError from "./MensajeError.jsx";

const MAXIMO_MENSAJE = 120;

const valoresIniciales = {
  nick: "",
  email: "",
  edad: "",
  categoria: "",
  mensaje: "",
  aceptaNormas: false,
};

export default function Formulario() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(inscripcionSchema),
    mode: "onTouched",
    defaultValues: valoresIniciales,
  });
  const inscribir = useInscribirJugador();

  const caracteres = useWatch({ control, name: "mensaje" }).length;

  function enviar(datos) {
    const jugador = {
      nick: datos.nick,
      email: datos.email,
      edad: datos.edad,
      categoria: datos.categoria,
      mensaje: datos.mensaje,
    };
    inscribir.mutate(jugador, {
      onSuccess: () => reset(),
    });
  }

  return (
    <section className="tarjeta">
      <h2>Inscripción</h2>
      <form onSubmit={handleSubmit(enviar)} noValidate>
        <div className="campo">
          <label htmlFor="nick">Nick</label>
          <input
            id="nick"
            type="text"
            autoComplete="nickname"
            aria-invalid={errors.nick ? "true" : "false"}
            aria-describedby="error-nick"
            {...register("nick")}
          />
          <MensajeError id="error-nick" error={errors.nick} />
        </div>

        <div className="campo">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby="error-email"
            {...register("email")}
          />
          <MensajeError id="error-email" error={errors.email} />
        </div>

        <div className="fila">
          <div className="campo">
            <label htmlFor="edad">Edad</label>
            <input
              id="edad"
              type="number"
              aria-invalid={errors.edad ? "true" : "false"}
              aria-describedby="error-edad"
              {...register("edad", { valueAsNumber: true })}
            />
            <MensajeError id="error-edad" error={errors.edad} />
          </div>

          <div className="campo">
            <label htmlFor="categoria">Categoría</label>
            <select
              id="categoria"
              aria-invalid={errors.categoria ? "true" : "false"}
              aria-describedby="error-categoria"
              {...register("categoria")}
            >
              <option value="">Elige...</option>
              {CATEGORIAS.map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
            <MensajeError id="error-categoria" error={errors.categoria} />
          </div>
        </div>

        <div className="campo">
          <label htmlFor="mensaje">Mensaje para el resto (opcional)</label>
          <textarea
            id="mensaje"
            rows="3"
            aria-invalid={errors.mensaje ? "true" : "false"}
            aria-describedby="contador-mensaje error-mensaje"
            {...register("mensaje")}
          />
          <p
            id="contador-mensaje"
            className={caracteres > MAXIMO_MENSAJE ? "contador pasado" : "contador"}
          >
            {caracteres}/{MAXIMO_MENSAJE}
          </p>
          <MensajeError id="error-mensaje" error={errors.mensaje} />
        </div>

        <div className="campo">
          <label className="check">
            <input
              type="checkbox"
              aria-invalid={errors.aceptaNormas ? "true" : "false"}
              aria-describedby="error-normas"
              {...register("aceptaNormas")}
            />
            Acepto las normas del torneo
          </label>
          <MensajeError id="error-normas" error={errors.aceptaNormas} />
        </div>

        <button type="submit" disabled={inscribir.isPending}>
          {inscribir.isPending ? "Enviando..." : "Inscribirme"}
        </button>
      </form>

      {inscribir.isError && (
        <p className="aviso aviso-error" role="alert">
          No se ha podido completar la inscripción: {inscribir.error.message}
        </p>
      )}
      {inscribir.isSuccess && (
        <p className="aviso aviso-exito" role="status">
          ¡Listo, {inscribir.data.nick}! Ya estás inscrito en la categoría {inscribir.data.categoria}.
        </p>
      )}
    </section>
  );
}
