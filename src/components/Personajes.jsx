import Header from "./Header";
import { Box, Typography } from "@mui/material";
import CardPersonajes from "./CardPersonajes";
import Paginacion from "./Paginacion";
import { useEffect, useState } from "react";
import PersonajesFiltros from "./PersonajesFiltros";
import VolverArriba from "./VolverArriba";

const Personajes = (props) => {
  const {
    personajes,
    setPersonajes,
    pagina,
    setPagina,
    info,
    setInfo,
    url,
    setUrl,
  } = props;

  const [nombre, setNombre] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `${url}?page=${pagina}&name=${nombre}&status=${status}&gender=${gender}&species=${species}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setPersonajes(data.results);
        setInfo(data.info);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    setUrl(
      `${url}?page=${pagina}&name=${nombre}&status=${status}&gender=${gender}&species=${species}`
    );
  }, [
    pagina,
    nombre,
    status,
    gender,
    species,
    setPersonajes,
    setInfo,
    url,
    setUrl,
  ]);

  const handleSearch = () => {
    setPagina(1);
  };

  useEffect(() => {
    document.title = "Rick and Morty - Characters";
  }, []);

  return (
    <Box>
      <Header titulo="Characters" />
      <Paginacion
        path={"personajes"}
        info={info}
        url={url}
        setUrl={setUrl}
        setPagina={setPagina}
      />
      <PersonajesFiltros
        setNombre={setNombre}
        setStatus={setStatus}
        status={status}
        setGender={setGender}
        gender={gender}
        setSpecies={setSpecies}
        species={species}
        handleSearch={handleSearch}
      />
      {personajes && personajes.length > 0 ? (
        <CardPersonajes personajes={personajes} />
      ) : (
        <Typography
          variant="h6"
          align="center"
          sx={{ mt: 4 }}
          color="text.secondary"
        >
          No characters found
        </Typography>
      )}

      <VolverArriba />
    </Box>
  );
};

export default Personajes;
