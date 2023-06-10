import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Paginacion from "./Paginacion";

const CardPersonajes = (props) => {
  const { personajes, setPagina, url } = props;

  return (
    <Grid container spacing={2} paddingBottom={6} paddingTop={2}>
      <Paginacion setPagina={setPagina} url={url} />
      {personajes.map((personaje, index) => (
        <Grid sm={12} md={6} lg={4} xl={3} key={index} padding={2}>
          <Card
            sx={{
              backgroundColor: "#3c3e44",
              color: "white",
              borderRadius: "10px",
              height: 260,
            }}
          >
            <Grid container>
              <Grid item xs={6}>
                <CardMedia
                  component="img"
                  sx={{ width: "100%", height: 260 }}
                  image={personaje.image}
                  title={personaje.name}
                />
              </Grid>
              <Grid item xs={6}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <strong>{personaje.name}</strong>
                  </Typography>
                  <Typography variant="h6">
                    {personaje.status === "Alive" ? (
                      <span style={{ color: "green" }}>
                        <span
                          style={{
                            height: "0.6rem",
                            width: "0.6rem",
                            borderRadius: "50%",
                            backgroundColor: "green",
                            display: "inline-block",
                            marginRight: "0.5rem",
                            position: "relative",
                            bottom: "0.1rem",
                          }}
                        ></span>
                        Vivo
                      </span>
                    ) : personaje.status === "Dead" ? (
                      <span style={{ color: "red" }}>
                        <span
                          style={{
                            height: "0.6rem",
                            width: "0.6rem",
                            borderRadius: "50%",
                            backgroundColor: "red",
                            display: "inline-block",
                            marginRight: "0.5rem",
                            bottom: "0.1rem",
                          }}
                        ></span>
                        Muerto
                      </span>
                    ) : (
                      <span style={{ color: "gray" }}>
                        <span
                          style={{
                            height: "0.6rem",
                            width: "0.6rem",
                            borderRadius: "50%",
                            backgroundColor: "gray",
                            display: "inline-block",
                            marginRight: "0.5rem",
                            bottom: "0.1rem",
                          }}
                        ></span>
                        Desconocido
                      </span>
                    )}
                  </Typography>
                  <Typography variant="h6">{personaje.species}</Typography>
                  <Typography variant="h6">{personaje.gender}</Typography>
                  <Typography variant="subtitle2">
                    Más información <AddIcon />
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardPersonajes;
