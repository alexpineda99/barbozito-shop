import React, {useState} from 'react';
import  ReactDOM  from  'react-dom';
import Nav from "./Navbar";
import Footer from "./Footer";
import  TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Countries_Flags from "../Assets/files json/countries_flags";

function Register() {

  const [country, SetCountry] = useState("");

  const handleChange = (event) => {
    SetCountry(event.target.value);
  };

  {Countries_Flags.map((data) => 

    console.log(data)

  )}

    return (
      <div className="page-container">
          <div className="content-wrap">
             <Nav />
             <h1 className="title">Sign Up</h1>
             <div className="div-signup-form">
             <TextField id="standard-basic" label="Nombre" variant="standard" />
             <TextField id="standard-basic" label="Apellido(s)" variant="standard" />
             <TextField
                id="standard-select-categories"
                select
                label="Select Country"
                value={country}
                onChange={handleChange}
                variant="standard"
              >
                {Countries_Flags.map((option,index) => (
                  <MenuItem key={option.index} value={option.name}>
                    {option.name} {<img src={option.image} width="5%" height="5%" />}
                  </MenuItem>
                ))}
              </TextField>
              <TextField id="standard-basic" label="Email" variant="standard" />
              <TextField id="standard-basic" label="Contraseña" variant="standard" />
              <TextField id="standard-basic" label="Confirmar contraseña" variant="standard" />
              <button className="button-shop" type="submit">
              Sign Up
            </button>
             </div>
             
          </div>
          <Footer />
      </div>
    );
  }
  
  export default Register;