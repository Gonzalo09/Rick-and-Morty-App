import { Grid, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

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

  return (
    <Grid
      container
      spacing={2}
      paddingTop={2}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={4} display="flex" justifyContent="center">
        <IconButton
          onClick={() => {
            if (info.prev !== null) {
              setUrl(info.prev);
              setPagina(() => paginaActual() - 1);
              navigate(`/personajes/pagina/${paginaActual() - 1}`);
            }
          }}
        >
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
          Page {paginaActual()} of {info.pages}
        </Typography>
      </Grid>
      <Grid item xs={4} display="flex" justifyContent="center">
        <IconButton
          onClick={() => {
            if (info.next !== null) {
              setUrl(info.next);
              setPagina(() => paginaActual() + 1);
              navigate(`/personajes/pagina/${paginaActual() + 1}`);
            }
          }}
        >
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
