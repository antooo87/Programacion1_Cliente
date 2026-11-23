import { useQuery } from "@tanstack/react-query";
import {buscarProductos} from '../api.js'

function ResultadosBusqueda({texto, onSeleccionar}) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["productos", "busqueda", texto],
    queryFn:() => buscarProductos(texto),
    enabled: texto.length > 0,
});

    if(texto.length === 0){
        return null;
    }
    if(isPending === true){
    return <p>Buscando...</p>;
  }
  if(isError === true){
    return <p>{error.message}</p>
  }
  if (data.length === 0) {
  return <p>No hay resultados</p>;
}

  return (
    <ul>
      {data.map((dato) => (
        <li key={dato.id} onClick={() => onSeleccionar(dato.id)}>
          {dato.title} - {dato.price}
        </li>
      ))}
    </ul>
  );
  
}


export default ResultadosBusqueda;

