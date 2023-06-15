import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";
import RickAndMorty from "../image/rick-and-morty-31013.png";
import { Link } from "react-router-dom";

const Inicio = (props) => {
  const { pagina } = props;
  return (
    <Grid
      container
      spacing={2}
      paddingBottom={4}
      sx={{ backgroundColor: "#282c34" }}
    >
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <img
          src={RickAndMorty}
          style={{ width: "100%", maxWidth: "500px" }}
          alt="RickAndMorty"
        />
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, sm: 4 }}>
            <Grid item xs={12} sm={4} display="flex" justifyContent="center">
              <Button
                component={Link}
                to={`/personajes/pagina/${pagina}`}
                variant="contained"
                color="success"
                sx={{ minWidth: "130px", width: "90%" }}
              >
                Characters
              </Button>
            </Grid>
            <Grid item xs={12} sm={4} display="flex" justifyContent="center">
              <Button
                href="/ubicaciones"
                variant="contained"
                color="success"
                sx={{ minWidth: "130px", width: "90%" }}
              >
                Locations
              </Button>
            </Grid>
            <Grid item xs={12} sm={4} display="flex" justifyContent="center">
              <Button
                href="/episodios"
                variant="contained"
                color="success"
                sx={{ minWidth: "130px", width: "90%" }}
              >
                Episodes
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Inicio;
