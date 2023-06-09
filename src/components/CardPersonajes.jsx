import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const CardPersonajes = (props) => {
  const { personajes } = props;
  return (
    <Grid container spacing={2} paddingBottom={6} paddingTop={2}>
      {personajes.map((personaje, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} padding={2}>
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
                        <strong>{personaje.status}</strong>
                      </span>
                    ) : (
                      <span style={{ color: "red" }}>
                        <strong>{personaje.status}</strong>
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
