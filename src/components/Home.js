import React, { useEffect, useState } from 'react';
import Nav from "./Navbar";
import Footer from "./Footer";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';

const category = [
  {
    id: 1,
    label: 'Hoodies',
  },
  {
    id: 2,
    label: 'Sweaters',
  }
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
        <div className="search">
          {/* <div className="select-category"> */}
            <FormControl size="small">
              <TextField id="standard-basic" label="Search" variant="standard" />
            </FormControl>
          {/* </div> */}
          {/* <div className="search-bar"> */}
            <FormControl size="small">
              <TextField
                id="standard-select-categories"
                select
                label="Select"
                value={categories}
                onChange={handleChange}
                variant="standard"
              >
                {category.map((option) => (
                  <MenuItem key={option.id} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          {/* </div> */}

        </div>
      </div>
      <Footer />

    </div>
  );
}

export default Home;
