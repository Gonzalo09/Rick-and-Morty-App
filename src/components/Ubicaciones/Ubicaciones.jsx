import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  CircularProgress,
} from "@mui/material";
import Paginacion from "../Paginacion/Paginacion";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import notFound from "../../image/not-found.png";
import VolverArriba from "../Boton/VolverArriba";

const Ubicaciones = (props) => {
  const {
    ubicaciones,
    setUbicaciones,
    pagina,
    setPagina,
    info,
    setInfo,
    url,
    setUrl,
  } = props;

  const [personajeImagen, setPersonajeImagen] = useState([]);
  const [personajeIndex, setPersonajeIndex] = useState([]);

  useEffect(() => {
    document.title = "Rick and Morty - Locations";
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `${url}?page=${pagina}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setUbicaciones(data.results);
        setInfo(data.info);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    setUrl(`${url}?page=${pagina}`);
  }, [pagina, setInfo, url, setUrl, setUbicaciones]);

  useEffect(() => {
    const obtenerPersonajesImagenes = async () => {
      const personajesImagenes = [];
      const personajesIndex = [];
      for (let i = 0; i < ubicaciones.length; i++) {
        personajesImagenes.push([]);
        personajesIndex.push(0);
        for (let j = 0; j < ubicaciones[i].residents.length; j++) {
          try {
            const response = await fetch(ubicaciones[i].residents[j]);
            const data = await response.json();
            personajesImagenes[i].push(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
      }
      setPersonajeImagen(personajesImagenes);
      setPersonajeIndex(personajesIndex);
    };
    obtenerPersonajesImagenes();
  }, [ubicaciones]);

  const handlePersonajeSiguiente = (index) => {
    const newIndex =
      (personajeIndex[index] + 1) % ubicaciones[index].residents.length;
    setPersonajeIndex((prevPersonajeIndex) => {
      const newPersonajeIndex = [...prevPersonajeIndex];
      newPersonajeIndex[index] = newIndex;
      return newPersonajeIndex;
    });
  };

  const handlePersonajeAnterior = (index) => {
    const newIndex =
      (personajeIndex[index] - 1 + ubicaciones[index].residents.length) %
      ubicaciones[index].residents.length;
    setPersonajeIndex((prevPersonajeIndex) => {
      const newPersonajeIndex = [...prevPersonajeIndex];
      newPersonajeIndex[index] = newIndex;
      return newPersonajeIndex;
    });
  };

  return (
    <>
      <Header titulo="Locations" />
      <Paginacion
        path={"ubicaciones"}
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
        {ubicaciones.map((ubicacion, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={ubicacion.id}>
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
                title={ubicacion.name}
                subheader={
                  ubicacion.type === "unknown" || ubicacion.type === ""
                    ? "Unknown"
                    : ubicacion.type
                }
                sx={{
                  backgroundColor: "#3c3e44",
                  color: "white",
                  minHeight: 95,
                }}
              />
              <CardContent>
                <Typography variant="h6">Residents</Typography>
              </CardContent>
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
                <IconButton
                  disabled={ubicacion.residents.length <= 1}
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => handlePersonajeAnterior(index)}
                >
                  <NavigateBeforeIcon />
                </IconButton>

                {personajeImagen.length === 0 && ubicaciones.length > 0 ? (
                  <CircularProgress
                    color="success"
                    sx={{
                      width: 140,
                      height: 140,
                      borderRadius: "50%",
                      marginBottom: -1,
                    }}
                  />
                ) : (
                  <></>
                )}

                {personajeImagen[index] && (
                  <CardMedia
                    component="img"
                    image={
                      ubicacion.residents.length > 0 &&
                      personajeImagen[index][personajeIndex[index]]
                        ? personajeImagen[index][personajeIndex[index]].image
                        : notFound
                    }
                    alt={
                      ubicacion.residents.length > 0 &&
                      personajeImagen[index][personajeIndex[index]]
                        ? personajeImagen[index][personajeIndex[index]].name
                        : "Not Found"
                    }
                    title={
                      ubicacion.residents.length > 0 &&
                      personajeImagen[index][personajeIndex[index]]
                        ? personajeImagen[index][personajeIndex[index]].name
                        : "Not Found"
                    }
                    sx={{
                      width: 140,
                      height: 140,
                      borderRadius: "50%",
                      marginBottom: -1,
                    }}
                  />
                )}
                <IconButton
                  disabled={ubicacion.residents.length <= 1}
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => handlePersonajeSiguiente(index)}
                >
                  <NavigateNextIcon />
                </IconButton>
              </Grid>
              <CardContent>
                <Typography>
                  {ubicacion.residents.length > 0
                    ? isNaN(personajeIndex[index])
                      ? "Loading..." // or any other loading message
                      : `${personajeIndex[index] + 1} / ${
                          ubicacion.residents.length
                        }`
                    : "0 / 0"}
                </Typography>
                <Typography>
                  {ubicacion.residents.length > 0 &&
                  personajeImagen[index] &&
                  personajeImagen[index][personajeIndex[index]]
                    ? personajeImagen[index][personajeIndex[index]].name
                    : "Not Found"}
                </Typography>

                <Typography
                  sx={{
                    paddingTop: 2,
                    minHeight: 50,
                  }}
                >
                  Dimension:{" "}
                  {ubicacion.dimension === "unknown" ||
                  ubicacion.dimension === ""
                    ? "Unknown"
                    : ubicacion.dimension}
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

export default Ubicaciones;
