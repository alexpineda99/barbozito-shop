import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
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