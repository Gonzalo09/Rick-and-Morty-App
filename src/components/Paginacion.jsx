import { Grid, Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

const Paginacion = (props) => {
  const { setPagina, url } = props;
  const [numPaginas, setNumPaginas] = useState(0);

  useEffect(() => {
    const obtenerCantidadDePaginas = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const cantidadPaginas = data.info.pages;
        setNumPaginas(cantidadPaginas);
      } catch (error) {
        console.error("Error al obtener la cantidad de páginas:", error);
      }
    };

    obtenerCantidadDePaginas();
  }, [url]);

  return (
    <Grid
      item
      xs={12}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Stack spacing={2} sx={{ paddingBottom: 4, paddingTop: 2 }}>
        <Pagination
          count={numPaginas}
          color="success"
          defaultPage={1}
          shape="rounded"
          size="large"
          variant="outlined"
          onChange={(event, value) => setPagina(value)}
        />
      </Stack>
    </Grid>
  );
};

export default Paginacion;
