import { Grid, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const Paginacion = (props) => {
  const { info, setUrl, setPagina } = props;
  const navigate = useNavigate();
  const paginaActual =
    info.prev === null
      ? 1
      : info.next === null
      ? info.pages
      : parseInt(info.next?.split("=")[1]) - 1;

  const handleFirstPage = () => {
    setUrl("https://rickandmortyapi.com/api/character?page=1");
    setPagina(1);
    navigate("/personajes/pagina/1");
  };

  const handleLastPage = () => {
    setUrl(`https://rickandmortyapi.com/api/character?page=${info.pages}`);
    setPagina(info.pages);
    navigate(`/personajes/pagina/${info.pages}`);
  };

  const handlePreviousPage = () => {
    if (info.prev !== null) {
      setUrl(info.prev);
      setPagina(paginaActual - 1);
      navigate(`/personajes/pagina/${paginaActual - 1}`);
    }
  };

  const handleNextPage = () => {
    if (info.next !== null) {
      setUrl(info.next);
      setPagina(paginaActual + 1);
      navigate(`/personajes/pagina/${paginaActual + 1}`);
    }
  };

  return (
    <Grid
      container
      spacing={2}
      paddingTop={2}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={4} display="flex" justifyContent="center">
        <IconButton onClick={handleFirstPage}>
          <NavigateBeforeIcon
            sx={{
              fontSize: "3rem",
              "@media (max-width: 550px)": {
                fontSize: "2rem",
              },
              "@media (max-width: 390px)": {
                fontSize: "1.5rem",
              },
            }}
          />
        </IconButton>
        <IconButton onClick={handlePreviousPage}>
          <NavigateBeforeIcon
            sx={{
              fontSize: "3rem",
              "@media (max-width: 550px)": {
                fontSize: "2rem",
              },
              "@media (max-width: 390px)": {
                fontSize: "1.5rem",
              },
            }}
          />
        </IconButton>
      </Grid>
      <Grid item xs={4} display="flex" justifyContent="center">
        <Typography
          variant="overline"
          component="div"
          sx={{
            fontSize: "1.5rem",
            color: "rgba(0, 0, 0, 0.54)",
            "@media (max-width: 800px)": {
              fontSize: "1rem",
            },
            "@media (max-width: 550px)": {
              fontSize: "0.8rem",
            },
            "@media (max-width: 450px)": {
              fontSize: "0.7rem",
            },
          }}
        >
          Page {paginaActual} of {info.pages}
        </Typography>
      </Grid>
      <Grid item xs={4} display="flex" justifyContent="center">
        <IconButton onClick={handleNextPage}>
          <NavigateNextIcon
            sx={{
              fontSize: "3rem",
              "@media (max-width: 550px)": {
                fontSize: "2rem",
              },
              "@media (max-width: 390px)": {
                fontSize: "1.5rem",
              },
            }}
          />
        </IconButton>
        <IconButton onClick={handleLastPage}>
          <NavigateNextIcon
            sx={{
              fontSize: "3rem",
              "@media (max-width: 550px)": {
                fontSize: "2rem",
              },
              "@media (max-width: 390px)": {
                fontSize: "1.5rem",
              },
            }}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Paginacion;
