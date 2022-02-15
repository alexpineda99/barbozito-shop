import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Nav from "./Navbar";
import Footer from "./Footer";
import { useForm, Controller } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Countries_Flags from "../Assets/files json/countries_flags";

function Register() {

  const { register, handleSubmit } = useForm();
  const [country, SetCountry] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordConfirmShown, setPasswordConfirmShown] = useState(false);
  const eye = <FontAwesomeIcon icon={faEye} />
  const closeEye = <FontAwesomeIcon icon={faEyeSlash} />

  const handleChange = (event) => {
    SetCountry(event.target.value);
  };
  const onSubmit = (data) => {
    console.log(data)
  }
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const togglePasswordConfirmVisiblity = () => {
    setPasswordConfirmShown(passwordConfirmShown ? false : true);
  };

  // {Countries_Flags.map((data) => 

  //   console.log(data)

  // )}

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Nav />
        <h1 className="title">Sign Up</h1>
        <div className="div-signup-form">
          <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
            <TextField id="standard-basic" label="Name" variant="standard" {...register("name")} />
            <TextField id="standard-basic" label="Lastname(s)" variant="standard" {...register("lastnames")} />
            <TextField
              id="standard-select-categories"
              select
              label="Select Country"
              // value="j balvin"
              onChange={handleChange}
              variant="standard"
              {...register("country")}
            >
              {Countries_Flags.map((option, index) => (
                <MenuItem key={option.index} value={option.name}>
                  {option.name} 
                  {<img src={option.image} className="select-country-items" />}
                </MenuItem>
              ))}
            </TextField>
            <TextField id="standard-basic" label="Email" variant="standard" {...register("email")} />
            <div className="input-password">
              <TextField id="standard-basic" type={!passwordShown ? "password" : "text"} label="Password" variant="standard" {...register("password")} />
              <div className="icon-eye">
                <i onClick={togglePasswordVisiblity} className="icon"> {passwordShown ? eye : closeEye} </i>
              </div>
            </div>
            <div className="input-password">
              <TextField id="standard-basic" type={!passwordConfirmShown ? "password" : "text"} label="Confirm password" variant="standard" />
              <div className="icon-eye">
                <i onClick={togglePasswordConfirmVisiblity} className="icon"> {passwordConfirmShown ? eye : closeEye} </i>
              </div>
            </div>
            <button className="button-shop" type="submit">
              Sign Up
            </button>
          </form>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Register;