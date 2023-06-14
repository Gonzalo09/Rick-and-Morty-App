import Header from "./Header";
import { Box } from "@mui/material";
import CardPersonajes from "./CardPersonajes";
import Paginacion from "./Paginacion";
import { useEffect } from "react";

const Personajes = (props) => {
  const {
    personajes,
    setPagina,
    url,
    info,
    setUrl,
    pagina,
    setPersonajes,
    setInfo,
  } = props;

  const paginaUrl = () => {
    const url = window.location.href;
    const pagina = url.split("/")[5];
    return pagina;
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${paginaUrl()}`)
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
