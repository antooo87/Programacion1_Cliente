import Formulario from "./components/Formulario.jsx";
import Listado from "./components/Listado.jsx";

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>Torneo Atrapa el objetivo</h1>
        <p className="pista">Apúntate al torneo y mira quién más se ha inscrito.</p>
      </header>

      <main>
        <Formulario />
        <Listado />
      </main>

      <footer>
        <p>Hecho por Antonio</p>
      </footer>
    </div>
  );
}
