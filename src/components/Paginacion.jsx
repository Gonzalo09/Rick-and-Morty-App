import { Grid, Pagination, Select, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

const Paginacion = (props) => {
  const { setPagina, url } = props;
  const [numPaginas, setNumPaginas] = useState(0);
  const [paginaActual, setPaginaActual] = useState(1);

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

  useEffect(() => {
    setPagina(paginaActual);
  }, [paginaActual, setPagina]);

  const handlePaginaChange = (event, value) => {
    setPagina(value);
    setPaginaActual(value);
    window.scrollTo(0, 0);
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setPagina(value);
    setPaginaActual(value);
    window.scrollTo(0, 0);
  };

  return (
    <Grid container item xs={12}>
      <Grid
        item
        xs={6}
        display="flex"
        justifyContent="flex-end"
        sx={{ paddingRight: 2 }}
      >
        <Stack spacing={2} sx={{ paddingBottom: 3, paddingTop: 2 }}>
          <Pagination
            page={parseInt(paginaActual)}
            count={numPaginas}
            color="success"
            shape="rounded"
            size="small"
            variant="outlined"
            onChange={handlePaginaChange}
          />
        </Stack>
      </Grid>
      <Grid
        item
        xs={6}
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ paddingLeft: 2, paddingBottom: 1 }}
      >
        <Select
          native
          value={paginaActual}
          id="select-pagina"
          onChange={handleSelectChange}
          sx={{
            width: "70px",
            height: "35px",
            backgroundColor: "#3c3e44",
            borderRadius: "10px",
          }}
        >
          {Array.from({ length: numPaginas }, (_, index) => index + 1).map(
            (pagina) => (
              <option
                key={pagina}
                value={pagina}
                style={{
                  backgroundColor: "#3c3e44",
                }}
              >
                {pagina}
              </option>
            )
          )}
        </Select>
      </Grid>
    </Grid>
  );
};

export default Paginacion;
