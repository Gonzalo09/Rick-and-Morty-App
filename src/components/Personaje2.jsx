import { Box, IconButton, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Personaje2 = (props) => {
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
    }, 60);

    return () => clearTimeout(timer);
  }, [url, id]);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <Box>
      <IconButton
        sx={{ position: "absolute", top: "10px", left: "10px" }}
        onClick={handleGoBack}
      >
        <ArrowBackIcon sx={{ color: "white", fontSize: "50px" }} />
      </IconButton>
      {loading ? (
        <CircularProgress color="success" />
      ) : (
        <Box
          width="70%"
          margin="auto"
          marginTop={10}
          marginBottom={10}
          paddingBottom={5}
          sx={{
            backgroundColor: "#3c3e44",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={personaje.image}
            alt={personaje.name}
            sx={{
              height: "150px",
              width: "150px",
              borderRadius: "50%",
              marginTop: "-75px",
              outline: "none",
              transition: "transform 0.5s ease",
              "&:hover": {
                transform: "scale(1.2)",
              },
              "&:hover:not(:hover)": {
                transform: "scale(1)",
              },
            }}
          />
          <Typography variant="h3" textAlign="center" marginTop={2}>
            {personaje.name}
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            width="80%"
            marginTop={2}
          >
            <Typography variant="h5">Status: {personaje.status}</Typography>
            <Typography variant="h5">Specie: {personaje.species}</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            width="80%"
            marginTop={2}
          >
            <Typography variant="h5">
              Type: {personaje.type === "" ? "unknown" : personaje.type}
            </Typography>
            <Typography variant="h5">Gender: {personaje.gender}</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            width="80%"
            marginTop={2}
          >
            <Typography variant="h5">
              Origin: {personaje.origin.name}
            </Typography>
            <Typography variant="h5">
              Location: {personaje.location.name}
            </Typography>
          </Box>
          <Typography variant="h5" width="80%" marginTop={2}>
            N° of episodes: {personaje.episode?.length}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Personaje2;
