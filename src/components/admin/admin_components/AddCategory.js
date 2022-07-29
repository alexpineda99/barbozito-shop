import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function AddCategory() {

    const state = useSelector(state => console.log(state));
    const { register, handleSubmit } = useForm();
    let [msg, setMsg] = useState(null);
    let [isLoading, setisLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

    const onSubmit = (data) => {
        console.log(data);
    }

    useEffect(() => {

    }, []);

    return (
        <div className="page-container">
            <div className="content-wrap-admin">
                {isLoading ?
                    <div className="shader">
                        <div className="loadingContainer">
                            <ClimbingBoxLoader color={"#fff"} loading={true} css={override} size={15} />
                        </div>
                    </div>
                    :
                    null
                }

                <h1>Add category</h1>

                <div>
                    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <TextField id="email" label="Email" variant="standard" {...register("email")} />
                    </form>
                </div>


                <div>
                    Added categories
                </div>


            </div>
        </div>
    );
}

export default AddCategory;