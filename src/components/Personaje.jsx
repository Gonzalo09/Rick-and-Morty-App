import {
  CardMedia,
  CircularProgress,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams } from "react-router-dom";

const Personaje = (props) => {
  const { url } = props;
  const { id } = useParams();
  const [personaje, setPersonaje] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      fetch(`${url}/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setPersonaje(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching personaje:", error);
          setLoading(false);
        });
    }, 1000);

    return () => clearTimeout(timer);
  }, [url, id]);

  const handleGoBack = () => {
    window.history.back();
  };

  const PersonajeInfo = () => {
    return (
      <>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Typography
            variant="overline"
            sx={{
              fontFamily: "Roboto",
              fontSize: "30px",
              fontWeight: "bold",
              marginTop: "-30px",
            }}
          >
            {personaje.name}
          </Typography>
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
          <Typography variant="h5">Origin: {personaje.origin?.name}</Typography>
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
      </>
    );
  };

  return (
    <Grid
      container
      spacing={2}
      paddingTop={12}
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
          onClick={handleGoBack}
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
            marginTop: "-65px",
            borderRadius: "50%",
            outline: "none",
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
        {loading ? (
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <CircularProgress color="success" />
          </Grid>
        ) : (
          <Grid item container spacing={2} padding={4} display="flex">
            <PersonajeInfo />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Personaje;
