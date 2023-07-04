import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

const PersonajesFiltros = (props) => {
  const {
    setNombre,
    setStatus,
    status,
    setGender,
    gender,
    setSpecies,
    species,
    handleSearch,
  } = props;

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
        xs={12}
        sm={6}
        md={3}
        paddingLeft={4}
        paddingRight={4}
        sx={{
          mt: 2,
          mb: 2,
        }}
      >
        <FormControl
          variant="standard"
          sx={{
            width: status ? "85%" : "100%",
          }}
        >
          <InputLabel htmlFor="grouped-select">Filter by status</InputLabel>
          <Select
            value={status}
            id="grouped-select-status"
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
        {status && (
          <IconButton
            aria-label="clear status"
            sx={{
              padding: 0,
              mt: "24px",
              ml: "12px",
            }}
            title="Clear status"
          >
            <ClearRoundedIcon color="primary" onClick={() => setStatus("")} />
          </IconButton>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        paddingLeft={4}
        paddingRight={4}
        sx={{
          mt: 2,
          mb: 2,
        }}
      >
        <FormControl
          variant="standard"
          sx={{
            width: gender ? "85%" : "100%",
          }}
        >
          <InputLabel htmlFor="grouped-select">Filter by gender</InputLabel>
          <Select
            value={gender}
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
        {gender && (
          <IconButton
            aria-label="clear gender"
            sx={{
              padding: 0,
              mt: "24px",
              ml: "12px",
            }}
            title="Clear gender"
          >
            <ClearRoundedIcon color="primary" onClick={() => setGender("")} />
          </IconButton>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        paddingLeft={4}
        paddingRight={4}
        sx={{
          mt: 2,
          mb: 2,
        }}
      >
        <FormControl
          variant="standard"
          sx={{
            width: species ? "85%" : "100%",
          }}
        >
          <InputLabel htmlFor="grouped-select">Filter by specie</InputLabel>
          <Select
            value={species}
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
        {species && (
          <IconButton
            aria-label="clear species"
            sx={{
              padding: 0,
              mt: "24px",
              ml: "12px",
            }}
            title="Clear species"
          >
            <ClearRoundedIcon color="primary" onClick={() => setSpecies("")} />
          </IconButton>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        paddingLeft={4}
        paddingRight={4}
        sx={{
          mt: 2,
          mb: 2,
        }}
      >
        <TextField
          id="input-with-sx"
          type="search"
          label="Search by name"
          variant="standard"
          onChange={handleNombre}
          sx={{
            width: "100%",
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
