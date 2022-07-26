import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import axios from "axios";
import Footer from "../Footer";

function ResendEmail() {

  let [isLoading, setisLoading] = useState(false);

  const { register, handleSubmit, watch, control, formState, setValue } = useForm({
    mode: "onChange",
    // defaultValues: {UserObjValues}
  });

  const onSubmit = (data) => {
    console.log("aqui ", data);
    // setValue("email", res.data.data.email);
    setisLoading(true);
    axios.post(`http://localhost:3001/resendemailuser`, data)

      .then(res => {
        console.log(res.data.data);
        // setValue("country", res.data.data.country);
        setisLoading(false);
      }).catch(err => {
        console.log(err);
        setisLoading(false);

      })
  }

  return (
    <div className="page-container">
      <div className="content-wrap-email-sender">

        <div className="email-sender-div">
          <div className="email-sender-box">
          <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
            <span className="text-emailsender"> Please enter your email </span>
            <TextField id="email" label="Email" variant="standard"  {...register("email")} />
            <button className="button-emailverification" type="submit">
              Log in
            </button>
            </form>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default ResendEmail;
