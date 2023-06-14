import { Grid, Pagination, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Paginacion = (props) => {
  const { info, setUrl, setPagina } = props;
  const navigate = useNavigate();
  const paginaActual = () => {
    if (info.prev === null) {
      return 1;
    } else if (info.next === null) {
      return info.pages;
    } else {
      return info.next?.split("=")[1] - 1;
    }
  };

  const handlePaginaChange = (event, value) => {
    setUrl(`https://rickandmortyapi.com/api/character?page=${value}`);
    setPagina(() => value);
    navigate(`/personajes/pagina/${value}`);
  };

  return (
    <Grid container item xs={12}>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        sx={{ paddingBottom: 1, paddingTop: 5 }}
      >
        <Stack spacing={2}>
          <Pagination
            page={paginaActual()}
            count={info.pages}
            color="success"
            shape="rounded"
            size="small"
            variant="outlined"
            onChange={handlePaginaChange}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center">
        <p>
          Page {paginaActual()} of {info.pages}
        </p>
      </Grid>
    </Grid>
  );
};

export default Paginacion;
