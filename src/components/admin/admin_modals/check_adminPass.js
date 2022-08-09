import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Checkpass = () => {
    const [open, setOpen] = React.useState(true);
    const eye = <FontAwesomeIcon icon={faEye} />
    const closeEye = <FontAwesomeIcon icon={faEyeSlash} />
    const [passwordShown, setPasswordShown] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const onSubmit = (data) => {
        console.log(data);
        
        reset();
    }


    return (
        <>
            <div />
            <button className="button" onClick={() => setOpen(!open)}>
                Open modal
            </button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                center
            >
                <div className="modal-pass">
                    <form form className="login-form" onSubmit={handleSubmit(onSubmit)}>
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

                        <button className="a-modal-pass-button" type="submit">
                            Confirmar clase
                        </button>

                    </form>
                </div>
            </Modal>
        </>
    );
};

export default Checkpass;