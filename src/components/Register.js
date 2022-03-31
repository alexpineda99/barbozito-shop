import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Nav from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import TextField from '@mui/material/TextField';
import PhoneInput from 'react-phone-number-input';
import MenuItem from '@mui/material/MenuItem';
import Countries_Flags from "../Assets/files json/countries_flags";
import "react-phone-number-input/style.css";

function Register() {

  const { register, handleSubmit, watch, control, formState: { errors } } = useForm({
    mode: "onChange",
    defaultValues: {
      phone:""
    }
  });
  const [country, SetCountry] = useState("");
  const [countriesList, SetCountriesList] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordConfirmShown, setPasswordConfirmShown] = useState(false);
  const password = watch("password");
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

  const handleChange = (event) => {
    SetCountry(event.target.value);
  };

  const onSubmit = (data) => {
    console.log(data);
    // axios.post("http://localhost:3001/registeruser", data)
    // .then(res => {
    //   console.log('respuesta servidor', res)
    // })
    // .catch(error => {
    //   console.log(error)
    // })
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
        <h1 className="title">Sign Up</h1>
        <div className="div-signup-form">
          <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
            <TextField id="standard-basic"
              name="name"
              className={errors.name ? "warning-input-style warning-color-style" : null}
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
              className={errors.lastnames ? "warning-input-style warning-color-style" : null}
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
              className={errors.country ? "warning-input-style warning-color-style" : null}
              select
              label="Select Country"
              // value="j balvin"
              onChange={handleChange}
              variant="standard"
              {...register("country", { required: "This field is required" })}
            >
              {Countries_Flags.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                  {<img src={"https://img.mobiscroll.com/demos/flags/" + option.value + ".png"} className="select-country-items" />}
                  {option.text}
                </MenuItem>
              ))}
            </TextField>
            {errors.country && <span className="form-warning-msg"> {errors.country.message} </span>}
            <TextField id="standard-basic" label="Email" variant="standard" className={errors.email ? "warning-input-style warning-color-style" : null}
              {...register("email", {
                required: "This field is required",
                pattern: { value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, message: "Invalid email address" }
              })} />
            {errors.email && <span className="form-warning-msg"> {errors.email.message} </span>}
            <div className={errors.phone ? "phoneinputdiverror" : "phoneinputdiv"}>
            <Controller
            name="phone"
            control={control}
            rules={{required: "This field is required", pattern: {value: /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g, message: "Invalid phone number" }}}
            render={({field})=> 
            <PhoneInput
            initialValueFormat="national"
            className={errors.phone ? "warning-input-style" : null}
            placeholder="Enter phone number"
            {...field}
          />
          }
            />
            </div>
            {errors.phone && <span className="form-warning-msg"> {errors.phone.message} </span>}
            {/* <PhoneInput
              initialValueFormat="national"
              className={errors.phonenumber ? "warning-input-style warning-color-style" : null}
              placeholder="Enter phone number"
              {...register("phonenumber", { required: "This field is required", pattern: {value: /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g, message: "Invalid phone number" } })}
            />
            {errors.phonenumber && <span className="form-warning-msg"> {errors.phonenumber.message} </span>} */}
            <div className="input-password">
              <TextField id="standard-basic" type={!passwordShown ? "password" : "text"}
                className={errors.password ? "warning-input-style warning-color-style" : null}
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
                className={errors.confirmPassword ? "warning-input-style warning-color-style" : null}
                {...register("confirmPassword", { required: "This field is required", validate: (value) => value === password || "Confirm password must match with password field" })}
                label="Confirm password" variant="standard" />
              <div className="icon-eye">
                <i onClick={togglePasswordConfirmVisiblity} className="icon"> {passwordConfirmShown ? eye : closeEye} </i>
              </div>
            </div>
            {errors.confirmPassword && <span className="form-warning-msg"> {errors.confirmPassword.message} </span>}
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