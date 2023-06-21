import Header from "./Header";
import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CardPersonajes from "./CardPersonajes";
import Paginacion from "./Paginacion";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const Personajes = (props) => {
  const {
    personajes,
    setPersonajes,
    pagina,
    setPagina,
    info,
    setInfo,
    url,
    setUrl,
  } = props;

  const [nombre, setNombre] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  useEffect(() => {
    const paginaUrl = window.location.href.split("/")[5];

    const apiUrl = `https://rickandmortyapi.com/api/character?page=${paginaUrl}&name=${nombre}&status=${status}&gender=${gender}&species=${species}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.results);
        setInfo(data.info);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [pagina, url, setPersonajes, setInfo, nombre, status, gender, species]);

  const handleNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const handleSpecies = (event) => {
    setSpecies(event.target.value);
  };

  return (
    <Box>
      <Header titulo="Characters" />
      <Paginacion info={info} setUrl={setUrl} setPagina={setPagina} />
      <Grid container display="flex" justifyContent="space-between">
        <Grid
          item
          xs={3}
          paddingLeft={4}
          paddingRight={4}
          sx={{
            mt: 2,
            mb: 2,
          }}
        >
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel htmlFor="grouped-select">Filter by status</InputLabel>
            <Select
              defaultValue=""
              id="grouped-select"
              label="Grouping"
              value={status}
              onChange={handleStatus}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Alive"}>Alive</MenuItem>
              <MenuItem value={"Dead"}>Dead</MenuItem>
              <MenuItem value={"Unknown"}>Unknown</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={3}
          paddingLeft={4}
          paddingRight={4}
          sx={{
            mt: 2,
            mb: 2,
          }}
        >
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel htmlFor="grouped-select">Filter by gender</InputLabel>
            <Select
              defaultValue=""
              id="grouped-select"
              label="Grouping"
              value={gender}
              onChange={handleGender}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Genderless"}>Genderless</MenuItem>
              <MenuItem value={"Unknown"}>Unknown</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={3}
          paddingLeft={4}
          paddingRight={4}
          sx={{
            mt: 2,
            mb: 2,
          }}
        >
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel htmlFor="grouped-select">Filter by specie</InputLabel>
            <Select
              defaultValue=""
              id="grouped-select"
              label="Grouping"
              value={species}
              onChange={handleSpecies}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Human"}>Human</MenuItem>
              <MenuItem value={"Alien"}>Alien</MenuItem>
              <MenuItem value={"Humanoid"}>Humanoid</MenuItem>
              <MenuItem value={"Poopybutthole"}>Poopybutthole</MenuItem>
              <MenuItem value={"Mythological Creature"}>
                Mythological Creature
              </MenuItem>
              <MenuItem value={"Animal"}>Animal</MenuItem>
              <MenuItem value={"Robot"}>Robot</MenuItem>
              <MenuItem value={"Cronenberg"}>Cronenberg</MenuItem>
              <MenuItem value={"Disease"}>Disease</MenuItem>
              <MenuItem value={"unknown"}>Unknown</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3} paddingLeft={4} paddingRight={4}>
          <TextField
            id="input-with-sx"
            type="search"
            label="Search by name"
            variant="standard"
            value={nombre}
            onChange={handleNombre}
            sx={{
              width: "100%",
              mt: 2,
              mb: 2,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon
                    sx={{
                      color: "action.active",
                      mr: 1,
                      my: 0.5,
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      {personajes && personajes.length > 0 ? (
        <CardPersonajes personajes={personajes} />
      ) : (
        <Typography
          variant="h6"
          align="center"
          sx={{ mt: 4 }}
          color="text.secondary"
        >
          No characters found
        </Typography>
      )}
    </Box>
  );
};

export default Personajes;
