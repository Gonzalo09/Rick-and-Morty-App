import { useState, useEffect } from "react";
import Personajes from "./components/Personajes";
import Ubicaciones from "./components/Ubicaciones";
import Episodios from "./components/Episodios";
import Inicio from "./components/Inicio";
import { Route, Routes } from "react-router-dom";
import Personaje from "./components/Personaje";

const PERSONAJES_API = "https://rickandmortyapi.com/api/character";
const UBICACIONES_API = "https://rickandmortyapi.com/api/location";
const EPISODIOS_API = "https://rickandmortyapi.com/api/episode";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [ubicaciones, setUbicaciones] = useState([]);
  const [episodios, setEpisodios] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [info, setInfo] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [url, setUrl] = useState(PERSONAJES_API);

  useEffect(() => {
    fetch(UBICACIONES_API)
      .then((response) => response.json())
      .then((data) => setUbicaciones(data.results));
  }, []);

  useEffect(() => {
    fetch(EPISODIOS_API)
      .then((response) => response.json())
      .then((data) => setEpisodios(data.results));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Inicio pagina={pagina} />} />
      <Route
        path="/personajes/pagina/:id"
        element={
          <Personajes
            personajes={personajes}
            setPersonajes={setPersonajes}
            pagina={pagina}
            setPagina={setPagina}
            info={info}
            setInfo={setInfo}
            url={PERSONAJES_API}
            setUrl={setUrl}
          />
        }
      />

      <Route
        path="/ubicaciones"
        element={<Ubicaciones ubicaciones={ubicaciones} />}
      />
      <Route path="/episodios" element={<Episodios episodios={episodios} />} />
      <Route
        path="/personaje/:id"
        element={<Personaje url={PERSONAJES_API} />}
      />
    </Routes>
  );
}

export default App;
