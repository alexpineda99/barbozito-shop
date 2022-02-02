import React from 'react';
import  ReactDOM  from  'react-dom';
import Nav from "./Navbar";
import Footer from "./Footer";
import  TextField from '@mui/material/TextField';

function Register() {

    return (
      <div className="page-container">
          <div className="content-wrap">
             <Nav />
             <h1 className="title">Sign Up</h1>
             <div className="div-signup-form">
             <TextField id="standard-basic" label="Standard" variant="standard" />
             </div>
             
          </div>
          <Footer />
      </div>
    );
  }
  
  export default Register;