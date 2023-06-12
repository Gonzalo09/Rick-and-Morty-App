import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Paginacion from "./Paginacion";

const CardPersonajes = (props) => {
  const { personajes, setPagina, url } = props;

  const handleName = (name) => {
    if (name.length > 20) {
      return "h6";
    } else {
      return "h5";
    }
  };

  return (
    <Grid container spacing={2} padding={4}>
      {personajes.map((personaje, index) => (
        <Grid sm={12} md={6} lg={4} xl={3} item key={index} padding={2}>
          <Card
            sx={{
              backgroundColor: "#3c3e44",
              color: "white",
              borderRadius: "10px",
              height: 290,
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
                    <Typography variant={handleName(personaje.name)}>
                      <strong>{personaje.name}</strong>
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item>
                  <CardContent>
                    <Typography variant="h6">
                      Status:&nbsp;
                      {personaje.status === "Alive" ? (
                        <Typography
                          variant="subtitle1"
                          display="inline"
                          sx={{ color: "#00ff00" }}
                        >
                          {personaje.status}
                        </Typography>
                      ) : personaje.status === "Dead" ? (
                        <Typography
                          variant="subtitle1"
                          display="inline"
                          sx={{ color: "#ff0000" }}
                        >
                          {personaje.status}
                        </Typography>
                      ) : (
                        <Typography
                          variant="subtitle1"
                          display="inline"
                          sx={{ color: "#ff8000" }}
                        >
                          {personaje.status}
                        </Typography>
                      )}
                    </Typography>
                    <Typography variant="h6" component="div">
                      Species:&nbsp;
                      <Typography variant="subtitle1" display="inline">
                        {personaje.species}
                      </Typography>
                    </Typography>
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
                      href={`/personajes/${personaje.id}`}
                    >
                      <Typography variant="overline">
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
      <Paginacion setPagina={setPagina} url={url} />
    </Grid>
  );
};

export default CardPersonajes;
