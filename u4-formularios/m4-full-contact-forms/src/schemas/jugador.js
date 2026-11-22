import { z } from "zod";

export const CATEGORIAS = ["novato", "amateur", "pro"];
const NICKS_RESERVADOS = ["admin", "arbitro", "organizacion"];
const EDAD_MINIMA_PRO = 16;

const camposJugador = {
  nick: z
    .string()
    .trim()
    .min(3, "El nick tiene que tener al menos 3 caracteres")
    .max(15, "El nick no puede pasar de 15 caracteres")
    .regex(/^[a-zA-Z0-9_]+$/, "Solo letras, números y guion bajo (sin espacios ni tildes)")
    .refine((nick) => !NICKS_RESERVADOS.includes(nick.toLowerCase()), "Ese nick está reservado"),
  email: z.email("Ese email no tiene buena pinta"),
  edad: z
    .number({ error: "Pon tu edad" })
    .int("La edad tiene que ser un número entero")
    .min(12, "Hay que tener al menos 12 años para participar")
    .max(99, "Revisa la edad, parece un error"),
  categoria: z.enum(CATEGORIAS, { error: "Elige una categoría" }),
  mensaje: z.string().trim().max(120, "El mensaje no puede pasar de 120 caracteres"),
};

export const inscripcionSchema = z
  .object({
    ...camposJugador,
    aceptaNormas: z.literal(true, { error: "Tienes que aceptar las normas del torneo" }),
  })
  .refine((datos) => datos.categoria !== "pro" || datos.edad >= EDAD_MINIMA_PRO, {
    message: `Para jugar en Pro tienes que tener ${EDAD_MINIMA_PRO} años o más`,
    path: ["edad"],
  });

export const jugadorSchema = z.object({
  id: z.union([z.string(), z.number()]),
  ...camposJugador,
  fecha: z.iso.datetime("La fecha no tiene formato ISO"),
});
