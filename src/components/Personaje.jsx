import {
  Box,
  IconButton,
  CircularProgress,
  Typography,
  Link,
} from "@mui/material";
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
    }, 1000);

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
          width="80%"
          margin="auto"
          marginTop={12}
          marginBottom={10}
          paddingBottom={5}
          color="white"
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
          <Typography
            variant="h2"
            textAlign="center"
            marginTop={3}
            marginBottom={3}
          >
            {personaje.name}
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            width="90%"
            marginTop={4}
          >
            <Typography variant="h5">Status: {personaje.status}</Typography>
            <Typography variant="h5">Specie: {personaje.species}</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            width="90%"
            marginTop={4}
          >
            <Typography variant="h5">
              Type: {personaje.type === "" ? "unknown" : personaje.type}
            </Typography>
            <Typography variant="h5">Gender: {personaje.gender}</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            width="90%"
            marginTop={4}
          >
            <Typography variant="h5">
              <Link
                underline="hover"
                component="button"
                color="darkseagreen"
                onClick={() => {
                  window.location.href =
                    "https://rickandmortyapi.com/api/location/?name=" +
                    personaje.origin.name;
                }}
              >
                Origin: {personaje.origin.name}
              </Link>
            </Typography>
            <Typography variant="h5">
              N° of episodes: {personaje.episode?.length}
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            width="90%"
            marginTop={4}
            marginBottom={2}
          >
            <Typography variant="h5">
              <Link
                underline="hover"
                component="button"
                color="darkseagreen"
                onClick={() => {
                  window.location.href =
                    "https://rickandmortyapi.com/api/location/?name=" +
                    personaje.location.name;
                }}
              >
                Location: {personaje.location.name}
              </Link>
            </Typography>
            <Typography variant="h5">
              <Link
                underline="hover"
                component="button"
                color="darkseagreen"
                onClick={() => {
                  window.location.href = "/episodios";
                }}
              >
                Episodes
              </Link>
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Personaje2;
