import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Navbar from "../Navbar";
import Logout from "../Logout";
import Footer from "../Footer";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import Countries_Flags from "../../Assets/files json/countries_flags";

function UserProfile() {

  const { register, handleSubmit, watch, control, formState, setValue } = useForm({
    mode: "onChange",
    // defaultValues: {UserObjValues}
  });
  const { errors, isDirty, dirtyFields } = formState;

  const userState = useSelector(state => state);
  const { token } = useParams();
  let [name, setName] = useState("");
  let [lastname, setLastname] = useState("");
  let [email, setEmail] = useState("");
  let [country, SetCountry] = useState("");
  let [phonecode, SetPhonecode] = useState("");
  let [phonenumber, SetPhonenumber] = useState("");
  let [isLoading, setisLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const eye = <FontAwesomeIcon icon={faEye} />
  const closeEye = <FontAwesomeIcon icon={faEyeSlash} />
  const password = watch("password");
  const passwordMessage =
  <div>
    <p className="password-validate-msg-main"> Password must have: </p>
    <p className="password-validate-msg">* Minimun 8 characters</p>
    <p className="password-validate-msg">* Maximun 16 characters</p>
    <p className="password-validate-msg">* At least one uppercase</p>
    <p className="password-validate-msg">* At least one lowercase</p>
    <p className="password-validate-msg">* At least one special character</p> </div>;

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

// console.log(countries_flags.map(option=> <span> {option.} </span> ));

  const onSubmit = (data) => {
    console.log("aqui ", data);
  }
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  useEffect(() => {
    // setValue("email", res.data.data.email);
    setisLoading(true);
    axios.get(`https://barbozitoshop-server.herokuapp.com/profile/${token}`, {
      headers: { 'auth': token },
    })

      .then(res => {
        console.log(res.data.data);
        // console.log(hasChanged);
        setName(res.data.data.name);
        setValue("name", res.data.data.name);
        setValue("lastname", res.data.data.lastname);
        setValue("email", res.data.data.email);
        setValue("phonenumber", res.data.data.phone_number);
        setValue("phonecode", res.data.data.phone_code);
        SetCountry(res.data.data.country);
        SetPhonecode(res.data.data.phone_code);
        // setValue("country", res.data.data.country);
        setisLoading(false);
      }).catch(err => {
        console.log(err);
        window.location.href = "/";
        <Logout />
        setisLoading(false);

      })

  }, []);

  console.log("dirtyfields", dirtyFields);

  return (
    <div className="page-container">
      <Navbar />
      {/* <div> */}
      <div className="content-wrap-profile">
      {isLoading ?
        <div className="shader">
          <div className="loadingContainer">
            <ClimbingBoxLoader color={"#fff"} loading={true} css={override} size={15} />
          </div>
        </div>
        :
        <div className="div-login-form"> 
          <h1>Hola, {name} </h1>
          <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
            {/* nombre */}
            <TextField id="standard-basic"
              name="name"
              error={errors.name ? true : null}
              label="name"
              variant="standard" {...register("name", {
                required: "This field is required",
                minLength: { value: 3, message: "Name field must be at least 3 characters and not more than 30 characters" },
                maxLength: { value: 30, message: "Name field must be at least 3 characters and not more than 30 characters" },
                pattern: { value: /^[a-zA-Z\s]*$/, message: "Only alphabetic characters are allowed for this field" }
              })} />
            {errors.name && <span className="form-warning-msg"> {errors.name.message} </span>}
            {/* Lastname */}

            <TextField id="standard-basic"
              name="lastname"
              error={errors.lastnames ? true : null}
              label="Lastname(s)"
              variant="standard" {...register("lastname", {
                required: "This field is required",
                minLength: { value: 2, message: "Lastname field must be at least 2 characters and not more than 30 characters" },
                maxLength: { value: 30, message: "Lastname field must be at least 2 characters and not more than 30 characters" },
                pattern: { value: /^[a-zA-Z\s]*$/, message: "Only alphabetic characters are allowed for this field" }
              })} />
            {errors.lastnames && <span className="form-warning-msg"> {errors.lastnames.message} </span>}
            {/* email */}
            <TextField id="email" name="email" label="Email" variant="standard" {...register("email")} />
            {errors.email && <span className="form-warning-msg"> {errors.email.message} </span>}
            {/* country */}
            <Select
              id="standard-select-categories"
              // value={country}
              defaultValue={country}
              // error={errors.country ? true : null}
              label="Select Country"
              name="country"
              select
              variant="standard"
              // onClick={(value)=> handleChange(value)}
              {...register("country", 
              { required: "Country field is required" })}
            >
              {Countries_Flags.map((option) => (
                <MenuItem 
                key={option.name}
                value={option.name}
                // onChange={(e)=> handleChange(e)}
                >
                  {<img src={option.flag} alt={option.name} className="select-country-items" />}
                  {option.name}

                </MenuItem>
              ))}
            </Select>
          {errors.country && <span className="form-warning-msg"> {errors.country.message} </span>}

            {/* phone input */}

            <div className="phone-div">
              <TextField
              // className={errors.phonecode ? "warning-input-style warning-color-style" : null}
                error={errors.phonecode ? true : null}
                id="select-code"
                name="phonecode"
                defaultValue={phonecode}
                select
                label="Country Code"
                // helperText="Please select your country code"
                {...register("phonecode", { required: "Country code field is required", pattern: { value: /^(\+?\d{1,4}|\d{1,4})$/gm, message: "Invalid country code" } })}
                variant="standard"
              >
          
                {Countries_Flags.map((option) => (
                  <MenuItem key={option.dialCode} value={option.dialCode}>
                    {<img src={option.flag} className="select-country-items-code" />}
                    {option.dialCode}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
              error={errors.phonenumber ? true : null}
                id="standard"
                name="phonenumber"
                label="Phone Number"
                variant="standard"
                {...register("phonenumber", { required: "Phone number field is required", pattern: {value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/gm, message: "Invalid phone number"} })}
              />
            </div>
            {errors.phonecode && <span className="form-warning-msg"> {errors.phonecode.message} </span> || errors.phonenumber && <span className="form-warning-msg"> {errors.phonenumber.message} </span>}
            
            {/* passowrd */}
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

            <div className="profile-buttons" >
              <Button variant="contained" color="success" size="small" type="submit" disabled={isDirty ? false : true}>
                Save
              </Button>
              <Button variant="contained" color="error" size="small" disabled={isDirty ? false : true} >
                Discard
              </Button>
            </div>
          </form>
          </div>
      }
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;
