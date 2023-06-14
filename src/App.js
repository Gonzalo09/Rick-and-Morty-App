import { useState, useEffect } from "react";
import "./App.css";
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

  useEffect(() => {
    fetch(`${PERSONAJES_API}/?page=${pagina}`)
      .then((response) => response.json())
      .then((data) => setPersonajes(data.results));
  }, [pagina]);

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
      <Route path="/" element={<Inicio />} />
      <Route
        path="/personajes"
        element={
          <Personajes
            personajes={personajes}
            setPagina={setPagina}
            url={PERSONAJES_API}
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
