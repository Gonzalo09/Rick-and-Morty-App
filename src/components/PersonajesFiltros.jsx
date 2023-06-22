import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const PersonajesFiltros = (props) => {
  const { setNombre, setStatus, setGender, setSpecies, handleSearch } = props;

  const handleNombre = (event) => {
    setNombre(event.target.value);
    handleSearch();
  };

  const handleStatus = (event) => {
    setStatus(event.target.value);
    handleSearch();
  };

  const handleGender = (event) => {
    setGender(event.target.value);
    handleSearch();
  };

  const handleSpecies = (event) => {
    setSpecies(event.target.value);
    handleSearch();
  };

  return (
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
  );
};

export default PersonajesFiltros;
