import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import CardPersonajes from "./CardPersonajes";

const Personajes2 = (props) => {
  const { personajes } = props;

  return (
    <Box padding={4}>
      <Header titulo="Personajes" />
      <CardPersonajes personajes={personajes} />
    </Box>
  );
};

export default Personajes2;
