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

  const { register, handleSubmit, formState: { errors } } = useForm();
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
            <TextField id="standard-basic" 
            name="name"
            className={errors.name ? "warning-input-style warning-color-style" : null}
            label="Name" 
            variant="standard" {...register("name", {required: "This field is required", minLength: {value: 3, message:"Name field must be at least 3 characters"} })} 
            />
            {errors.name && <span className="form-warning-msg"> {errors.name.message} </span>}
            <TextField id="standard-basic" 
            name="lastname" 
            className={errors.lastnames ? "warning-input-style warning-color-style" : null} 
            label="Lastname(s)" 
            variant="standard" {...register("lastnames", {required: "This field is required", minLength: {value: 2, message:"Lastname field must be at least 2 characters"} })} />
            {errors.lastnames && <span className="form-warning-msg"> {errors.lastnames.message} </span>}
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