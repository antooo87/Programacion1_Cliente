import { useQuery } from "@tanstack/react-query";
import {obtenerProductos} from '../api.js'

function ListaProductos() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["productos"],
    queryFn: obtenerProductos,
});
    if(isPending === true){
    return <p>Cargando productos</p>;
  }
  if(isError === true){
    return <p>{error.message}</p>
  }

  return (
    <ul>
      {data.map((dato) => (
        <li key={dato.id}>
          {dato.title} - {dato.price}
        </li>
      ))}
    </ul>
  );
  
}

export default ListaProductos;