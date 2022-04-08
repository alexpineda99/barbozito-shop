import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Nav from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useForm, Controller } from "react-hook-form";
import  TextField from '@mui/material/TextField';

function Login() {

  const { register, handleSubmit } = useForm();
  const eye = <FontAwesomeIcon icon={faEye} />
  const closeEye = <FontAwesomeIcon icon={faEyeSlash} />
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:3001/loguser", data)
    .then(res => {
      console.log('respuesta servidor', res)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Nav />
        <div className="div-login-form">
        <h1 className="title">Login</h1>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>

        <TextField id="email" label="Email" variant="standard" {...register("email")} />
        <div className="input-password">
        <TextField
          id="standard-password-input"
          label="Password"
          type={!passwordShown ? "password" : "text"}
          autoComplete="current-password"
          variant="standard"
          {...register("password")}
        />
        <div className="icon-eye"> 
            <i onClick={togglePasswordVisiblity} className="icon"> {passwordShown ? eye : closeEye} </i>
            </div>
        </div>

            <button className="button-signin" type="submit">
              Log in
            </button>
        </form>
        <p> ¿Don´t you have an account? <a href="./signup" className="linkto-signup"> Sign up here </a> </p>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Login;