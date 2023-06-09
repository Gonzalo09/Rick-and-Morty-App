import React, { useEffect } from "react";
import Header from "../Header/Header";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";
import Paginacion from "../Paginacion/Paginacion";
import VolverArriba from "../Boton/VolverArriba";

const Episodios = (props) => {
  const {
    episodios,
    setEpisodios,
    info,
    setInfo,
    pagina,
    setPagina,
    url,
    setUrl,
  } = props;

  useEffect(() => {
    document.title = "Rick and Morty - Episodes";
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `${url}?page=${pagina}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setEpisodios(data.results);
        setInfo(data.info);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    setUrl(`${url}?page=${pagina}`);
  }, [pagina, setInfo, url, setUrl, setEpisodios]);

  if (episodios.length === 0) {
    return (
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
    );
  }

  return (
    <>
      <Header titulo="Episodes" />
      <Paginacion
        path={"episodios"}
        info={info}
        url={url}
        setUrl={setUrl}
        setPagina={setPagina}
      />
      <Grid
        container
        spacing={4}
        paddingLeft={4}
        paddingTop={2}
        paddingRight={4}
        paddingBottom={5}
        sx={{
          "@media (max-width: 450px)": {
            padding: 1,
            paddingBottom: 5,
          },
        }}
      >
        {episodios.map((episodio, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={episodio.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#3c3e44",
                color: "white",
              }}
            >
              <CardHeader
                title={episodio.id}
                subheader={`Season ${episodio.episode.substring(
                  episodio.episode.indexOf("S") + 1,
                  episodio.episode.indexOf("E")
                )} - Episode ${episodio.episode.substring(
                  episodio.episode.indexOf("E") + 1
                )}`}
                sx={{
                  backgroundColor: "#3c3e44",
                  color: "white",
                  // title
                  "& .MuiCardHeader-title": {
                    fontWeight: "bold",
                    color: "#12B0C9",
                    opacity: "0.8",
                    textShadow: "1px 1px 1px black",
                    fontSize: "1.8rem",
                  },
                }}
              />
              <CardContent>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "#ffffff",
                    textShadow: "1px 1px 1px black",
                    opacity: "0.8",
                  }}
                >
                  {episodio.name}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body1">
                  Air date: {episodio.air_date}
                </Typography>
                <Typography variant="body1">
                  Characters: {episodio.characters.length === 0 ? "None" : ""}
                  {episodio.characters.length}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <VolverArriba />
    </>
  );
};

export default Episodios;
