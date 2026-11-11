const URL_BASE = "https://rickandmortyapi.com/api/character";

export async function buscarPersonajes(nombre) {

    const respuesta = await fetch(`${URL_BASE}/?name=${encodeURIComponent(nombre)}`);
    if(respuesta.status === 404){
        return [];
    }
    if (!respuesta.ok){
        throw new Error(`Error del servidor${respuesta.status}`);

    }
    const datos = await respuesta.json();
    return datos.results;
}