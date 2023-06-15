import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const CardPersonajes = (props) => {
  const { personajes } = props;
  const location = useLocation();
  const scrollRef = useRef({});

  useEffect(() => {
    if (
      location.state &&
      location.state.scrollPosition &&
      scrollRef.current &&
      scrollRef.current.scrollTop !== undefined
    ) {
      const { scrollPosition } = location.state;
      scrollRef.current.scrollTop = scrollPosition;
    }
  }, [location]);

  const handleName = (name) => {
    const fontSize = name.length > 15 ? "0.9rem" : "1.3rem";
    return (
      <Typography
        variant="h5"
        sx={{ "@media (max-width: 450px)": { fontSize } }}
      >
        {name}
      </Typography>
    );
  };

  const handleSpecies = (species) => {
    return (species.length > 7 && species.indexOf(" ") === -1) ||
      species.length > 10 ? (
      <Typography
        variant="h6"
        component="div"
        sx={{
          "@media (max-width: 450px)": {
            fontSize: "0.9rem",
          },
        }}
      >
        Species:&nbsp;
        <Typography
          variant="subtitle1"
          display="inline"
          sx={{
            "@media (max-width: 450px)": {
              fontSize: "0.7rem",
            },
          }}
        >
          {species}
        </Typography>
      </Typography>
    ) : (
      <Typography
        variant="h6"
        component="div"
        sx={{
          "@media (max-width: 450px)": {
            fontSize: "1.1rem",
          },
        }}
      >
        Species:&nbsp;
        <Typography
          variant="subtitle1"
          display="inline"
          sx={{
            "@media (max-width: 450px)": {
              fontSize: "0.9rem",
            },
          }}
        >
          {species}
        </Typography>
      </Typography>
    );
  };

  return (
    <Grid
      container
      spacing={4}
      paddingLeft={4}
      paddingRight={4}
      paddingTop={2}
      paddingBottom={5}
      ref={scrollRef}
      sx={{
        "@media (max-width: 450px)": {
          padding: 1,
          paddingBottom: 5,
        },
      }}
    >
      {personajes.map((personaje, index) => (
        <Grid sm={12} md={6} lg={4} xs={12} xl={3} item key={index}>
          <Card
            sx={{
              backgroundColor: "#3c3e44",
              color: "white",
              borderRadius: "10px",
              maxHeight: 290,
              height: "100%",
              transition: "transform 0.5s ease",
              "&:hover": {
                transform: "scale(1.1)",
                boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.75)",
              },
              "&:hover:not(:hover)": {
                transform: "scale(1)",
                boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.75)",
              },
            }}
          >
            <Grid container>
              <Grid item xs={6}>
                <CardMedia
                  component="img"
                  sx={{ width: "100%", height: 290 }}
                  image={personaje.image}
                  title={personaje.name}
                />
              </Grid>
              <Grid
                item
                container
                xs={6}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Grid item>
                  <CardContent>
                    <strong>{handleName(personaje.name)}</strong>
                  </CardContent>
                </Grid>
                <Grid item>
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        "@media (max-width: 450px)": {
                          fontSize: "1.1rem",
                        },
                      }}
                    >
                      Status:&nbsp;
                      {personaje.status === "Alive" ? (
                        <Typography
                          variant="subtitle1"
                          display="inline"
                          sx={{
                            color: "#00ff00",
                            "@media (max-width: 450px)": {
                              fontSize: "0.9rem",
                            },
                          }}
                        >
                          {personaje.status}
                        </Typography>
                      ) : personaje.status === "Dead" ? (
                        <Typography
                          variant="subtitle1"
                          display="inline"
                          sx={{
                            color: "#ff0000",
                            "@media (max-width: 450px)": {
                              fontSize: "0.9rem",
                            },
                          }}
                        >
                          {personaje.status}
                        </Typography>
                      ) : (
                        <Typography
                          variant="subtitle1"
                          display="inline"
                          sx={{
                            color: "#ff8000",
                            "@media (max-width: 450px)": {
                              fontSize: "0.9rem",
                            },
                          }}
                        >
                          {personaje.status}
                        </Typography>
                      )}
                    </Typography>
                    {handleSpecies(personaje.species)}
                  </CardContent>
                </Grid>
                <Grid item>
                  <CardContent>
                    <Button
                      variant="text"
                      size="small"
                      sx={{
                        color: "white",
                        textDecoration: "underline",
                        transition: "all 0.5s ease",
                        "&:hover": {
                          backgroundColor: "transparent",
                          textDecoration: "underline",
                          transform: "scale(1.1)",
                        },
                        "&:hover:not(:hover)": {
                          transform: "scale(1)",
                        },
                      }}
                      component={Link}
                      to={{
                        pathname: `/personaje/${personaje.id}`,
                        state: {
                          scrollPosition: scrollRef.current.scrollTop,
                        },
                      }}
                    >
                      <Typography
                        variant="overline"
                        sx={{
                          "@media (max-width: 450px)": {
                            fontSize: "0.7rem",
                          },
                        }}
                      >
                        More information
                      </Typography>
                    </Button>
                  </CardContent>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardPersonajes;
