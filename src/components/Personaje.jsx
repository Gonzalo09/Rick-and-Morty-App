import { CardMedia, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Personaje = (props) => {
  const { url } = props;
  const [personaje, setPersonaje] = useState({});

  const obtenerIdDesdeUrl = () => {
    const urlActual = window.location.href;
    const urlActualArray = urlActual.split("/");
    return urlActualArray[urlActualArray.length - 1];
  };

  const id = obtenerIdDesdeUrl();

  useEffect(() => {
    fetch(`${url}/${id}`)
      .then((response) => response.json())
      .then((data) => setPersonaje(data));
  }, [url, id]);

  return (
    <Grid
      container
      spacing={2}
      paddingTop={10}
      justifyContent="center"
      sx={{ height: "100vh" }}
    >
      <Grid
        item
        key={id}
        sx={{
          backgroundColor: "#3c3e44",
          color: "white",
          borderRadius: "10px",
          height: "95%",
          width: "70%",
          boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.75)",
        }}
      >
        <IconButton
          sx={{ position: "absolute", top: "10px", left: "10px" }}
          onClick={() => {
            window.history.back();
          }}
        >
          <ArrowBackIcon sx={{ color: "white", fontSize: "50px" }} />
        </IconButton>

        <CardMedia
          component="img"
          sx={{
            position: "relative",
            height: "150px",
            width: "150px",
            margin: "auto",
            marginTop: "-55px",
            borderRadius: "50%",
            transition: "transform 0.5s ease",
            "&:hover": {
              transform: "scale(1.2)",
            },
            "&:hover:not(:hover)": {
              transform: "scale(1)",
            },
          }}
          image={personaje.image}
          title={personaje.name}
        />
        <Grid item container spacing={2} padding={4} display="flex">
          <Grid item xs={6} display="flex" justifyContent="flex-start">
            <Typography variant="h5">Name: {personaje.name}</Typography>
          </Grid>
          <Grid item xs={6} display="flex" justifyContent="flex-start">
            <Typography variant="h5">Status: {personaje.status}</Typography>
          </Grid>
          <Grid item xs={6} display="flex" justifyContent="flex-start">
            <Typography variant="h5">Species: {personaje.species}</Typography>
          </Grid>
          <Grid item xs={6} display="flex" justifyContent="flex-start">
            <Typography variant="h5">Type: {personaje.type}</Typography>
          </Grid>
          <Grid item xs={6} display="flex" justifyContent="flex-start">
            <Typography variant="h5">Gender: {personaje.gender}</Typography>
          </Grid>
          <Grid item xs={6} display="flex" justifyContent="flex-start">
            <Typography variant="h5">
              Origin: {personaje.origin?.name}
            </Typography>
          </Grid>
          <Grid item xs={6} display="flex" justifyContent="flex-start">
            <Typography variant="h5">
              Location: {personaje.location?.name}
            </Typography>
          </Grid>
          <Grid item xs={6} display="flex" justifyContent="flex-start">
            <Typography variant="h5">
              Episodes: {personaje.episode?.length}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Personaje;
