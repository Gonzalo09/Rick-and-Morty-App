import React, { useEffect } from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import CardPersonajes from "./CardPersonajes";

const Personajes = (props) => {
  const { personajes, setPagina, url } = props;

  useEffect(() => {
    setPagina(1);
  }, [setPagina]);

  return (
    <Box padding={4}>
      <Header titulo="Personajes" />
      <CardPersonajes personajes={personajes} setPagina={setPagina} url={url} />
    </Box>
  );
};

export default Personajes;
