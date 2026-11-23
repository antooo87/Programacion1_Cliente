import { useQuery } from "@tanstack/react-query";
import {obtenerProducto} from '../api.js'

function DetalleProducto({id}){
const { data, isPending, isError, error } = useQuery({
  queryKey: ["producto", id],            
  queryFn: () => obtenerProducto(id),    
});

if(isPending === true){
    return <p>Cargando producto</p>;
  }
  if(isError === true){
    return <p>{error.message}</p>
  }
  return (
  <article>
    <h2>{data.title}</h2>
    <img src={data.thumbnail} alt={data.title} />
    <p>{data.description}</p>
    <p>{data.price} €</p>
  </article>
);

}

export default DetalleProducto;