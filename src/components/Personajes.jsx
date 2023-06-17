import Header from "./Header";
import { Box } from "@mui/material";
import CardPersonajes from "./CardPersonajes";
import Paginacion from "./Paginacion";
import { useEffect } from "react";

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

  useEffect(() => {
    const paginaUrl = window.location.href.split("/")[5];

    fetch(`https://rickandmortyapi.com/api/character?page=${paginaUrl}`)
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.results);
        setInfo(data.info);
      });
  }, [pagina, url, setPersonajes, setInfo]);

  return (
    <Box>
      <Header titulo="Characters" />
      <Paginacion info={info} setUrl={setUrl} setPagina={setPagina} />
      <CardPersonajes personajes={personajes} />
    </Box>
  );
};

export default Personajes;
