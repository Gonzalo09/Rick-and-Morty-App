import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { IconButton } from "@mui/material";

const VolverArriba = () => {
  return (
    <IconButton
      aria-label="Volver arriba"
      sx={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        zIndex: "100",
        color: "white",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        },
      }}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <ArrowUpwardIcon
        sx={{
          fontSize: "3rem",
          "@media (max-width: 450px)": {
            fontSize: "2rem",
          },
        }}
      />
    </IconButton>
  );
};

export default VolverArriba;
