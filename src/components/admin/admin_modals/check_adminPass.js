import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Checkpass = (props) => {
  const [open, setOpen] = React.useState(true);
  const eye = <FontAwesomeIcon icon={faEye} />;
  const closeEye = <FontAwesomeIcon icon={faEyeSlash} />;
  const [passwordShown, setPasswordShown] = useState(false);
  const state = useSelector((state) => state);
  const { register, handleSubmit, reset } = useForm();
  const { endpoint, payload } = props;

  console.log(`${endpoint}/${payload}`);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const onSubmit = (data) => {
    // console.log("El payload es " + payload);
    axios
      .post("http://localhost:3001/admincheckerpass", data, {
        headers: { authad: state.user.user },
      })
      .then((res) => {
        if (res.data.succesful === false) {
          alert("clave invalida");
          console.log(res.data);
        } else {
          console.log(res.data);
          console.log("aceptado en modal");
          setOpen(!open);
        }
      })
      .catch((error) => {
        console.log(error);
        setOpen(!open);
        // navigate("/");
      });
    reset();
  };

  return (
    // <>
    //     <div />
    //     <button className="button" onClick={() => setOpen(!open)}>
    //         Open modal
    //     </button>
    <Modal open={open} onClose={() => setOpen(false)} center>
      <div className="modal-pass">
        <form form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-password">
            <TextField
              id="standard-password-input"
              label="Password"
              type={!passwordShown ? "password" : "text"}
              autoComplete="current-password"
              variant="standard"
              {...register("name")}
            />
            <div className="icon-eye">
              <i onClick={togglePasswordVisiblity} className="icon">
                {" "}
                {passwordShown ? eye : closeEye}{" "}
              </i>
            </div>
          </div>

          <button className="a-modal-pass-button" type="submit">
            Confirmar clase
          </button>
        </form>
      </div>
    </Modal>
    // </>
  );
};

export default Checkpass;
