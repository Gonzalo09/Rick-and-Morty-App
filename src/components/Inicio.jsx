import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";
import RickAndMorty from "../image/rick-and-morty-31013.png";

const Inicio = () => {
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
        <img src={RickAndMorty} className="img-home" alt="RickAndMorty" />
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
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <Button
                href="/personajes"
                variant="contained"
                color="success"
                sx={{ minWidth: "130px" }}
              >
                Personajes
              </Button>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Button
                href="/ubicaciones"
                variant="contained"
                color="success"
                sx={{ minWidth: "130px" }}
              >
                Ubicaciones
              </Button>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Button
                href="/episodios"
                variant="contained"
                color="success"
                sx={{ minWidth: "130px" }}
              >
                Episodios
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Inicio;
