import {
  Box,
  IconButton,
  CircularProgress,
  Typography,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Divider,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Personaje = (props) => {
  const { url } = props;
  const { id } = useParams();
  const [personaje, setPersonaje] = useState({});
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const [episodes, setEpisodes] = useState([]);

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
    }, 600);

    return () => clearTimeout(timer);
  }, [url, id]);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  useEffect(() => {
    if (personaje.episode) {
      const episodes = personaje.episode.map((episode) => {
        return fetch(episode)
          .then((response) => response.json())
          .then((data) => {
            return data;
          })
          .catch((error) => {
            console.error("Error fetching episode:", error);
          });
      });
      Promise.all(episodes).then((episodes) => {
        setEpisodes(episodes);
      });
    }
  }, [personaje.episode]);

  return (
    <Box>
      <IconButton
        sx={{ position: "absolute", top: "10px", left: "10px" }}
        onClick={handleGoBack}
      >
        <ArrowBackIcon sx={{ color: "white", fontSize: "50px" }} />
      </IconButton>
      {loading ? (
        <CircularProgress
          color="success"
          sx={{ position: "absolute", top: "50%", left: "50%" }}
        />
      ) : (
        <Box
          width="80%"
          margin="auto"
          marginTop={12}
          paddingBottom={3}
          color="white"
          sx={{
            backgroundColor: "#3c3e44",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "@media (max-width: 600px)": {
              width: "90%",
            },
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
              "@media (max-width: 600px)": {
                height: "100px",
                width: "100px",
                marginTop: "-50px",
              },
            }}
          />
          <Typography
            variant={personaje.name.length > 34 ? "h3" : "h2"}
            textAlign="center"
            marginTop={3}
            marginBottom={3}
            sx={{
              color: "#12B0C9",
              fontWeight: "bold",
              opacity: "0.7",
              width: "90%",
              "@media (max-width: 600px)": {
                fontSize: "40px",
              },
            }}
          >
            {personaje.name}
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            width="90%"
            marginTop={4}
            sx={{
              "@media (max-width: 600px)": {
                flexDirection: "column",
                alignItems: "center",
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                "@media (max-width: 600px)": {
                  marginBottom: "10px",
                },
                textAlign: "center",
              }}
            >
              Status:{" "}
              {personaje.status === "unknown" ? "Unknown" : personaje.status}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                "@media (max-width: 600px)": {
                  marginBottom: "10px",
                },
                textAlign: "center",
              }}
            >
              Specie:{" "}
              {personaje.species === "unknown" ? "Unknown" : personaje.species}
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            width="90%"
            marginTop={4}
            sx={{
              "@media (max-width: 600px)": {
                flexDirection: "column",
                alignItems: "center",
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                "@media (max-width: 600px)": {
                  marginBottom: "10px",
                },
                textAlign: "center",
              }}
            >
              Type: {personaje.type === "" ? "Unknown" : personaje.type}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                "@media (max-width: 600px)": {
                  marginBottom: "10px",
                },
                textAlign: "center",
              }}
            >
              Gender:{" "}
              {personaje.gender === "unknown" ? "Unknown" : personaje.gender}
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            width="90%"
            marginTop={4}
            sx={{
              "@media (max-width: 600px)": {
                flexDirection: "column",
                alignItems: "center",
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                "@media (max-width: 600px)": {
                  marginBottom: "10px",
                },
                textAlign: "center",
              }}
            >
              Origin:{" "}
              {personaje.origin.name === "" ||
              personaje.origin.name === "unknown"
                ? "Unknown"
                : personaje.origin.name}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                "@media (max-width: 600px)": {
                  marginBottom: "10px",
                },
                textAlign: "center",
              }}
            >
              N° of episodes: {personaje.episode?.length}
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            width="90%"
            marginTop={4}
            marginBottom={2}
            sx={{
              "@media (max-width: 600px)": {
                flexDirection: "column",
                alignItems: "center",
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                "@media (max-width: 600px)": {
                  marginBottom: "10px",
                },
                textAlign: "center",
              }}
            >
              Location: {personaje.location.name}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                "@media (max-width: 600px)": {
                  marginBottom: "10px",
                },
                textAlign: "center",
              }}
            >
              <Link
                onClick={handleClickOpen("paper")}
                underline="hover"
                component="button"
                color="darkseagreen"
              >
                Episodes
              </Link>
              <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                fullWidth={true}
                maxWidth="md"
                sx={{
                  "& .MuiDialog-paper": {
                    backgroundColor: "#3c3e44",
                    color: "white",
                    borderRadius: "15px",
                  },
                }}
              >
                <DialogTitle
                  id="scroll-dialog-title"
                  sx={{
                    "@media (max-width: 600px)": {
                      textAlign: "center",
                    },
                  }}
                >
                  Episodes of {personaje.name}
                </DialogTitle>
                <DialogContent dividers={scroll === "paper"}>
                  <DialogContentText
                    id="scroll-dialog-description"
                    ref={descriptionElementRef}
                    tabIndex={-1}
                    component="div"
                    sx={{
                      "@media (max-width: 600px)": {
                        fontSize: "12px",
                      },
                    }}
                  >
                    {episodes.map((episode) => {
                      return (
                        <Fragment key={episode.id}>
                          <Box
                            key={episode.id}
                            display="flex"
                            justifyContent="space-between"
                            width="100%"
                            marginTop={2}
                            sx={{
                              "@media (max-width: 600px)": {
                                flexDirection: "column",
                                textAlign: "center",
                              },
                            }}
                          >
                            <Typography
                              variant="h6"
                              color="#12B0C9"
                              sx={{
                                opacity: "0.8",
                                "@media (max-width: 600px)": {
                                  marginBottom: "10px",
                                },
                              }}
                            >
                              Season {episode.episode.substring(2, 3)} - Episode{" "}
                              {episode.episode.substring(4, 6)}
                            </Typography>
                            <Typography
                              variant="h5"
                              color="white"
                              sx={{
                                "@media (max-width: 600px)": {
                                  marginBottom: "10px",
                                },
                              }}
                            >
                              {episode.name}
                            </Typography>
                          </Box>
                          <Divider
                            sx={{
                              backgroundColor: "white",
                              marginTop: "10px",
                              marginBottom: "10px",
                              "@media (max-width: 600px)": {
                                marginTop: "5px",
                                marginBottom: "5px",
                              },
                            }}
                          />
                        </Fragment>
                      );
                    })}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Close</Button>
                </DialogActions>
              </Dialog>
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Personaje;
