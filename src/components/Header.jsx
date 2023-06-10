import { Grid, Typography, Button } from "@mui/material";
import React from "react";

const Header = (props) => {
  const { titulo } = props;
  return (
    <Grid container align="center">
      <Grid item xs={12}>
        <Typography
          variant="h2"
          sx={{
            pt: "1rem",
            color: "#ffffff",
            fontWeight: "bold",
          }}
        >
          {titulo}
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ padding: "2rem" }}>
        <Button variant="outlined" color="success" size="large" href="/">
          Volver
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
