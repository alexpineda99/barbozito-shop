import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Footer from "../Footer";

function resendEmail() {

  return (
    <div className="page-container">
      <div className="content-wrap-email-sender">

        <div className="email-sender-div">
          <div className="email-sender-box">
            <span className="text-emailsender"> Please enter your email </span>
            <TextField id="email" label="Email" variant="standard" />
            <button className="button-emailverification" type="submit">
              Log in
            </button>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default resendEmail;
