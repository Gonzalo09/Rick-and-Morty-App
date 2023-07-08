import { Typography, Button, AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import "../fonts.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import imagen from "../image/RickAndMortyHeader.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { titulo } = props;

  const handleBack = () => {
    const ruta = window.location.pathname;
    if (ruta.includes("/personajes/pagina/")) {
      window.location.href = "/";
    }
    if (ruta.includes("/personaje/")) {
      window.history.back();
    }
    if (ruta.includes("/ubicaciones")) {
      window.location.href = "/";
    }
    if (ruta.includes("/episodios/pagina/")) {
      window.location.href = "/";
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#282c34",
          color: "white",
          boxShadow: "none",
          paddingTop: "10px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            startIcon={<ArrowBackIcon />}
            size="large"
            component={Link}
            onClick={handleBack}
            sx={{
              width: "120px",
              color: "white",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "#3c3e44",
                borderRadius: "10px",
              },
              "@media (max-width: 600px)": {
                width: "80px",
              },
            }}
          >
            Back
          </Button>
          <Typography
            variant="h2"
            component="div"
            align="center"
            sx={{
              flexGrow: 1,
              fontFamily: "Get Schwifty",

              "@media (max-width: 1200px)": {
                fontSize: "4rem",
              },
              "@media (max-width: 900px)": {
                fontSize: "3rem",
              },
              "@media (max-width: 600px)": {
                fontSize: "1.5rem",
              },
            }}
          >
            {titulo}
          </Typography>
          <Box
            component="img"
            src={imagen}
            alt="imagen"
            width="120px"
            height="auto"
            sx={{
              "@media (max-width: 600px)": {
                width: "80px",
              },
            }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
