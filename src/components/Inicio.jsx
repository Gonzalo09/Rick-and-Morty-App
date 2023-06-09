import { theme } from "../muiTheme";
import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import RickAndMorty from "../image/rick-and-morty-31013.png";

export default function Inicio() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={RickAndMorty} className="img-home" alt="RickAndMorty" />
        <ThemeProvider theme={theme}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 6, sm: 8, md: 12 }}
            >
              <Grid item xs={2} sm={4} md={4}>
                <Button href="/personajes" variant="contained" color="success">
                  Personajes
                </Button>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Button href="/ubicaciones" variant="contained" color="success">
                  Ubicaciones
                </Button>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Button href="/episodios" variant="contained" color="success">
                  Episodios
                </Button>
              </Grid>
            </Grid>
          </Box>
        </ThemeProvider>
      </header>
    </div>
  );
}
