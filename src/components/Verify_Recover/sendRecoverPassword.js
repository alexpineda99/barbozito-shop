import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import TextField from '@mui/material/TextField';
import Footer from "../Footer";

function SendRecoverPassword() {

  const { register, handleSubmit, watch, control, formState: { errors } } = useForm({
    mode: "onChange"
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordConfirmShown, setPasswordConfirmShown] = useState(false);
  const eye = <FontAwesomeIcon icon={faEye} />
  const closeEye = <FontAwesomeIcon icon={faEyeSlash} />

  const passwordMessage =
  <div>
    <p className="password-validate-msg-main"> Password must have: </p>
    <p className="password-validate-msg">* Minimun 8 characters</p>
    <p className="password-validate-msg">* Maximun 16 characters</p>
    <p className="password-validate-msg">* At least one uppercase</p>
    <p className="password-validate-msg">* At least one lowercase</p>
    <p className="password-validate-msg">* At least one special character</p> </div>;


  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const togglePasswordConfirmVisiblity = () => {
    setPasswordConfirmShown(passwordConfirmShown ? false : true);
  };

  return (
    <div className="page-container">
      <div className="content-wrap-email-sender">
        <div className="email-sender-div">
          <div className="email-sender-box">
            <span className="text-emailsender"> Please enter your email </span>
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
            <button className="button-sendrecoverpassword" type="submit">
              Recover my password
            </button>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default SendRecoverPassword;
