import React, { useEffect, useState } from "react";
import Nav from "./Navbar";
import Footer from "./Footer";
import {
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Box,
} from "@mui/material";
// import TextField from "@mui/material/TextField";
// import FormControl from "@mui/material/FormControl";
// import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const category = [
  {
    id: 1,
    label: "Hoodies",
  },
  {
    id: 2,
    label: "Sweaters",
  },
];

function Home() {
  const [categories, SetCategories] = useState("Hoodies");
  const [search, SetSearch] = useState("");

  const handleChange = (event) => {
    SetCategories(event.target.value);
  };

  return (
    <div className="page-container home-container">
      <div className="content-wrap parallax">
        <Nav />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Centra horizontalmente
            alignItems: "flex-start", // Centra verticalmente
            //minHeight: '100vh',         Ocupa toda la altura de la ventana
            // backgroundColor: '#f0f4f8',
            padding: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row", // Inputs en línea
              gap: 2, // Espacio entre los inputs
              // backgroundColor: '#f5f5f5',
              // padding: 3,
              // borderRadius: 2,
              // boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
              // width: { xs: "90%", sm: "60%", md: "40%" }, // Responsivo
            }}
          >
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-label">Seleccione</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={categories}
                onChange={handleChange}
                label="Seleccione"
                sx={{ fontSize: "0.9rem" }} // Texto más legible
              >
                {category.map((option) => (
                  <MenuItem key={option.id} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              id="outlined-basic"
              label="Search..."
              variant="outlined"
              fullWidth
              sx={{ fontSize: "0.9rem" }} // Texto más legible
            />
          </Box>
        </Box>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
