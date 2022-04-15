import { useState, useEffect } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Countries_Flags from "../Assets/files json/countries_flags";

function Register() {

  const { register, handleSubmit, watch, control, formState: { errors } } = useForm({
    mode: "onChange"
  });
  const [country, SetCountry] = useState("");
  const [countriesList, SetCountriesList] = useState("");
  let [msg, setMsg] = useState(null);
  let [isLoading, setisLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordConfirmShown, setPasswordConfirmShown] = useState(false);
  const password = watch("password");
  const navigate = useNavigate();
  const passwordMessage =
    <div>
      <p className="password-validate-msg-main"> Password must have: </p>
      <p className="password-validate-msg">* Minimun 8 characters</p>
      <p className="password-validate-msg">* Maximun 16 characters</p>
      <p className="password-validate-msg">* At least one uppercase</p>
      <p className="password-validate-msg">* At least one lowercase</p>
      <p className="password-validate-msg">* At least one special character</p> </div>;
  const eye = <FontAwesomeIcon icon={faEye} />
  const closeEye = <FontAwesomeIcon icon={faEyeSlash} />

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

  const handleChange = (event) => {
    SetCountry(event.target.value);
  };

  const onSubmit = (data) => {
    console.log(data);
    setisLoading(true);
    axios.post("https://barbozitoshop-server.herokuapp.com/registeruser", data)
    .then(res => {
      console.log('respuesta servidor', res)
      if (res.data.success === false) {
        
        console.log("error!");
        setisLoading(false);
        setMsg(res.data.msg);

      } else {
        // dispatch(loguser(res.data.data));
        // setisLoading(false);
        // navigate("/");
        setisLoading(false);
        navigate("/signin");
      }
    })
    .catch(error => {
      console.log(error);
      setisLoading(false);
      setMsg(error);
    })
  }
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const togglePasswordConfirmVisiblity = () => {
    setPasswordConfirmShown(passwordConfirmShown ? false : true);
  };

  useEffect(() => {

  }, [])

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
        <h1 className="title">Sign Up</h1>
        <div className="div-signup-form">
          <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
            <TextField id="standard-basic"
              name="name"
              error={errors.name ? true : null}
              label="Name"
              variant="standard" {...register("name", {
                required: "This field is required",
                minLength: { value: 3, message: "Name field must be at least 3 characters and not more than 30 characters" },
                maxLength: { value: 30, message: "Name field must be at least 3 characters and not more than 30 characters" },
                pattern: { value: /^[a-zA-Z\s]*$/, message: "Only alphabetic characters are allowed for this field" }
              })} />
            {errors.name && <span className="form-warning-msg"> {errors.name.message} </span>}
            <TextField id="standard-basic"
              name="lastname"
              error={errors.lastnames ? true : null}
              label="Lastname(s)"
              variant="standard" {...register("lastnames", {
                required: "This field is required",
                minLength: { value: 2, message: "Lastname field must be at least 2 characters and not more than 30 characters" },
                maxLength: { value: 30, message: "Lastname field must be at least 2 characters and not more than 30 characters" },
                pattern: { value: /^[a-zA-Z\s]*$/, message: "Only alphabetic characters are allowed for this field" }
              })} />

            {errors.lastnames && <span className="form-warning-msg"> {errors.lastnames.message} </span>}
            <TextField
              id="standard-select-categories"
              error={errors.country ? true : null}
              select
              label="Select Country"
              // value="j balvin"
              onChange={handleChange}
              variant="standard"
              {...register("country", { required: "This field is required" })}
            >
              {Countries_Flags.map((option, index) => (
                <MenuItem key={index} value={option.name}>
                  {<img src={option.flag} className="select-country-items" />}
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            {errors.country && <span className="form-warning-msg"> {errors.country.message} </span>}
            <TextField id="standard-basic" label="Email" variant="standard" error={errors.email ? true : null}
              {...register("email", {
                required: "This field is required",
                pattern: { value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, message: "Invalid email address" }
              })} />
            {errors.email && <span className="form-warning-msg"> {errors.email.message} </span>}

            <div className="phone-div">
              <TextField
              // className={errors.phonecode ? "warning-input-style warning-color-style" : null}
                error={errors.phonecode ? true : null}
                id="select-code"
                select
                label="Country Code"
                // helperText="Please select your country code"
                {...register("phonecode", { required: "Country code field is required", pattern: { value: /^(\+?\d{1,4}|\d{1,4})$/gm, message: "Invalid country code" } })}
                variant="standard"
              >
          
                {Countries_Flags.map((option, index) => (
                  <MenuItem key={index} value={option.dialCode}>
                    {<img src={option.flag} className="select-country-items-code" />}
                    {option.dialCode}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
              error={errors.phonenumber ? true : null}
                id="standard"
                label="Phone Number"
                variant="standard"
                {...register("phonenumber", { required: "Phone number field is required", pattern: {value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/gm, message: "Invalid phone number"} })}
              />
            </div>
            {errors.phonecode && <span className="form-warning-msg"> {errors.phonecode.message} </span> || errors.phonenumber && <span className="form-warning-msg"> {errors.phonenumber.message} </span>}

            <div className="input-password">
              <TextField id="standard-basic" type={!passwordShown ? "password" : "text"}
                error={errors.password ? true : null}
                label="Password" variant="standard"
                {...register("password", {
                  required: "This field is required", minLength: { value: 8, message: passwordMessage }, maxLength: { value: 16, message: passwordMessage },
                  pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})/gm, message: passwordMessage }
                })}
              />
              <div className="icon-eye">
                <i onClick={togglePasswordVisiblity} className="icon"> {passwordShown ? eye : closeEye} </i>
              </div>
            </div>
            {errors.password && <span className="form-warning-msg"> {errors.password.message} </span>}
            <div className="input-password">
              <TextField id="standard-basic" type={!passwordConfirmShown ? "password" : "text"}
                error={errors.confirmPassword ? true : null}
                {...register("confirmPassword", { required: "This field is required", validate: (value) => value === password || "Confirm password must match with password field" })}
                label="Confirm password" variant="standard" />
              <div className="icon-eye">
                <i onClick={togglePasswordConfirmVisiblity} className="icon"> {passwordConfirmShown ? eye : closeEye} </i>
              </div>
            </div>
            {errors.confirmPassword && <span className="form-warning-msg"> {errors.confirmPassword.message} </span>}
            <span className="form-warning-msg"> {msg} </span>
            <button className="button-signup" type="submit">
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