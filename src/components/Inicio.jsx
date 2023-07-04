import Button from "@mui/material/Button";
import { Box, Grid, CircularProgress } from "@mui/material";
import RickAndMorty from "../image/RickAndMortyInicio.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Inicio = (props) => {
  const { pagina } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Grid container spacing={2} sx={{ height: "100vh" }}>
      {loading ? (
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress color="success" />
        </Grid>
      ) : (
        <>
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              component="img"
              src={RickAndMorty}
              sx={{ width: "100%", maxWidth: "500px" }}
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
            paddingBottom={2}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2, sm: 4 }}>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  display="flex"
                  justifyContent="center"
                >
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
                <Grid
                  item
                  xs={12}
                  sm={4}
                  display="flex"
                  justifyContent="center"
                >
                  <Button
                    component={Link}
                    to="/ubicaciones"
                    variant="contained"
                    color="success"
                    sx={{ minWidth: "130px", width: "90%" }}
                  >
                    Locations
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  display="flex"
                  justifyContent="center"
                >
                  <Button
                    component={Link}
                    to={`/episodios/pagina/${pagina}`}
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
        </>
      )}
    </Grid>
  );
};

export default Inicio;
