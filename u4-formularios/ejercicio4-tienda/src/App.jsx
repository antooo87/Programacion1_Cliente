import ListaProductos from "./componentes/ListaProductos.jsx"
import DetalleProducto from "./componentes/DetalleProducto.jsx"
import { useState} from 'react'

function App() {
  const [idSeleccionado,setIdSeleccionado] = useState(null);

  return (
    <>
      <h1>Tienda</h1>
      <ListaProductos onSeleccionar={setIdSeleccionado} />
      {idSeleccionado && <DetalleProducto id={idSeleccionado} /> }
    </>
  );
}

export default App;
