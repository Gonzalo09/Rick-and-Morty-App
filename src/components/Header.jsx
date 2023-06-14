import { Typography, Button, AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import "../fonts.css"; // Importo el archivo fonts.css
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import imagen from "../image/b6740400-92d4-11ea-8a13-d5f6e0558e9b-PhotoRoom.png-PhotoRoom2.png";

const Header = (props) => {
  const { titulo } = props;
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
        <Toolbar>
          <Button
            startIcon={<ArrowBackIcon />}
            size="large"
            href="/"
            sx={{
              color: "white",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "#3c3e44",
                borderRadius: "10px",
              },
            }}
          >
            Back
          </Button>
          <Typography
            variant="h2"
            component="div"
            align="center"
            sx={{ flexGrow: 1, fontFamily: "Get Schwifty" }}
          >
            {titulo}
          </Typography>

          <img src={imagen} alt="imagen" width="70px" />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
