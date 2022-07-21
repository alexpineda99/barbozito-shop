import React, { useState } from 'react';
import Nav from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { loguser, loguserstoraged } from "../State/actions/userAction";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function Login() {

  const { register, handleSubmit } = useForm();
  const eye = <FontAwesomeIcon icon={faEye} />
  const closeEye = <FontAwesomeIcon icon={faEyeSlash} />
  const [passwordShown, setPasswordShown] = useState(false);
  const state = useSelector(state => console.log(state));
  let [msg, setMsg] = useState(null);
  let [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  // https://barbozitoshop-server.herokuapp.com/loguser
  // http://localhost:3001/loguser

  const onSubmit = (data) => {
    console.log(data);
    setisLoading(true);
    axios.post("https://barbozitoshop-server.herokuapp.com/loguser", data)
      .then(res => {
        console.log(res.data)
        if (res.data.success === false) {
          setisLoading(false);
          setMsg(res.data.msg);

        } else {
          if (data.remember) {
            dispatch(loguserstoraged(res.data.data));
            localStorage.setItem('currentUser', res.data.data)
            setisLoading(false);
            navigate("/");
          } else {
            dispatch(loguser(res.data.data));
            sessionStorage.setItem('currentUser', res.data.data)
            setisLoading(false);
            navigate("/");
          }
        }
      })
      .catch(error => {
        console.log(error);
        setisLoading(false);
        setMsg("Error Server");
      })
  }

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Nav />
        {isLoading ?
          <div className="shader">
            <div className="loadingContainer">
              <ClimbingBoxLoader color={"#fff"} loading={true} css={override} size={15} />
            </div>
          </div>
          :
          null
        }

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
            <FormControlLabel control={<Checkbox defaultChecked={false} {...register("remember")} />} label="Remember me" />

            <span className="form-warning-msg"> {msg} </span>

            <button className="button-signin" type="submit">
              Login
            </button>
          </form>
          <div className="span-login"> 
          <p>  <a href="./" className="linkto-signup"> I forgot my password </a> </p>
          </div>
          <div className="span-login"> 
          <p> <a href="./signup" className="linkto-signup"> Don't have an account? Register here </a> </p>
          </div>
        </div>


      </div>
      <Footer />
    </div>
  );
}

export default Login;