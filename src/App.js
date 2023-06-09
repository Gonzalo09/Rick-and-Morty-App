import { useState, useEffect, Fragment } from "react";
import "./App.css";
import Personajes from "./components/Personajes";
import Ubicaciones from "./components/Ubicaciones";
import Episodios from "./components/Episodios";
import Personajes2 from "./components/Personajes2";
import Inicio from "./components/Inicio";
import { Route, Routes } from "react-router-dom";

const PERSONAJES_API = "https://rickandmortyapi.com/api/character";
const UBICACIONES_API = "https://rickandmortyapi.com/api/location";
const EPISODIOS_API = "https://rickandmortyapi.com/api/episode";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [ubicaciones, setUbicaciones] = useState([]);
  const [episodios, setEpisodios] = useState([]);

  useEffect(() => {
    fetch(PERSONAJES_API)
      .then((response) => response.json())
      .then((data) => setPersonajes(data.results));
  }, []);

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
        element={<Personajes personajes={personajes} />}
      />
      <Route
        path="/ubicaciones"
        element={<Personajes2 personajes={personajes} />}
      />
      <Route path="/episodios" element={<Episodios episodios={episodios} />} />
    </Routes>
  );
}

export default App;
