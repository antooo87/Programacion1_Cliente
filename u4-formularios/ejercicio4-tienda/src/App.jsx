import ListaProductos from "./componentes/ListaProductos.jsx"
import DetalleProducto from "./componentes/DetalleProducto.jsx"
import ResultadosBusqueda from "./componentes/ResultadosBusqueda"
import { useState} from 'react'

function App() {
  const [idSeleccionado,setIdSeleccionado] = useState(null);
  const [texto, setTexto] = useState("");  

  return (
    <>
      <h1>Tienda</h1>
      <label htmlFor="buscador"> Buscar Producto </label>
      <input
        id="buscador"
        type="search"
        value={texto}
        onChange={(e) => setTexto(e.target.value)} />

      <ResultadosBusqueda texto={texto} onSeleccionar={setIdSeleccionado} />
      <ListaProductos onSeleccionar={setIdSeleccionado} />
      {idSeleccionado && <DetalleProducto id={idSeleccionado} /> }
    </>
  );
}

export default App;
