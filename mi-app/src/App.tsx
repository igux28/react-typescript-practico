import "./App.css";
import noticias from "./data/noticias.json";
import { Noticia } from "./components/Noticia/Noticia";
import { Contador } from "./components/Contador/Contador";
import { Tarjeta } from "./components/Tarjeta/Tarjeta";
import { FormularioContacto } from "./components/FormularioContacto/FormularioContacto";

function App() {
  return (
    <div>
      <div>
        <h1>Noticias</h1>
        {noticias.length === 0 && <p>No hay noticias publicadas.</p>}
        <h5>Hay {noticias.length} noticias en el JSON.</h5>
        {noticias.map((noticia) => (
          <Noticia key={noticia.id} noticia={noticia} />
        ))}
      </div>

      <hr></hr>

      <div>
        <h1>Composición</h1>
        <Tarjeta titulo="Prueba">
          <p>Contenido dentro de la tarjeta.</p>
        </Tarjeta>
      </div>

      <hr></hr>

      <div>
        <h1>useState</h1>
        <Contador />
      </div>

      <hr></hr>
      <div>
        <h1>Formulario</h1>
        <FormularioContacto />
      </div>
    </div>
  );
}

export default App;
