import { buscarPersonajes } from "./api.js";

async function probar() {
  try {
    const personajes = await buscarPersonajes("rick");
    console.log(personajes);
  } catch (error) {
    console.log("Ha fallado:", error.message);
  }
}

probar();