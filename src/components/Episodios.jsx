import React, { useEffect, useState } from "react";
import Header from "./Header";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Paginacion from "./Paginacion";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

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

  const [personajeIndex, setPersonajeIndex] = useState([]);
  const [personajeImagen, setPersonajeImagen] = useState([]);

  useEffect(() => {
    const obtenerPersonajesImagenes = async () => {
      const personajesImagenes = await Promise.all(
        episodios.map(async (episodio) => {
          const response = await fetch(episodio.characters[0]);
          const data = await response.json();
          return data.image;
        })
      );
      setPersonajeIndex(episodios.map(() => 0));
      setPersonajeImagen(personajesImagenes);
    };

    obtenerPersonajesImagenes();
  }, [episodios]);

  const handlePersonajeAnterior = (index) => {
    if (personajeIndex[index] > 0) {
      const newPersonajeIndex = [...personajeIndex];
      newPersonajeIndex[index] = personajeIndex[index] - 1;
      setPersonajeIndex(newPersonajeIndex);
    }
  };

  const handlePersonajeSiguiente = (index) => {
    if (personajeIndex[index] < episodios[index].characters.length - 1) {
      const newPersonajeIndex = [...personajeIndex];
      newPersonajeIndex[index] = personajeIndex[index] + 1;
      setPersonajeIndex(newPersonajeIndex);
    }
  };

  useEffect(() => {
    const obtenerPersonajeImagen = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      return data.image;
    };

    const actualizarPersonajeImagen = async () => {
      const personajesImagenes = await Promise.all(
        episodios.map((episodio, index) =>
          obtenerPersonajeImagen(episodio.characters[personajeIndex[index]])
        )
      );
      setPersonajeImagen(personajesImagenes);
    };

    actualizarPersonajeImagen();
  }, [episodios, personajeIndex]);

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
                minHeight: 386,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#3c3e44",
                color: "white",
              }}
            >
              <CardHeader
                title={episodio.id}
                sx={{
                  backgroundColor: "#3c3e44",
                  color: "white",
                  paddingBottom: 4,
                }}
              />
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  width: "100%",
                  paddingLeft: 2,
                  paddingRight: 2,
                }}
              >
                <NavigateBeforeIcon
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => handlePersonajeAnterior(index)}
                />
                {personajeImagen[index] && (
                  <CardMedia
                    component="img"
                    sx={{
                      width: 150,
                      height: 150,
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    image={personajeImagen[index]}
                    alt={episodio.name}
                  />
                )}
                <NavigateNextIcon
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => handlePersonajeSiguiente(index)}
                />
              </Grid>
              <CardContent>
                <Typography variant="h5">{episodio.name}</Typography>
                <br />
                <Typography>Air date: {episodio.air_date}</Typography>
                <Typography>
                  Characters: {personajeIndex[index] + 1} of{" "}
                  {episodio.characters.length}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Episodios;
