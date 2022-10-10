import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import TextField from '@mui/material/TextField';
import Modal from "../admin_modals/check_adminPass";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import { css } from "@emotion/react";
import Button from '@mui/material/Button';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function AddCategory() {

    const state = useSelector(state => console.log(state));
    const { register, handleSubmit } = useForm();
    let [msg, setMsg] = useState(null);
    let [isOpen, SetisOpen] = useState(false);
    let [endpoint, SetEndpoint] = useState(null);
    let [payload, SetPayload] = useState(null);
    let [isLoading, setisLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

    const onSubmit = (data) => {
        SetEndpoint("url enviadad");
        SetPayload(data.category);
        console.log(payload);
        SetisOpen(!isOpen);
    }

    useEffect(() => {

        axios.get("http://localhost:3001/categories")
            .then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })

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

                {isOpen ?

                    <Modal endpoint={endpoint} payload={payload} /> :

                    null
                }

                <h1>Add category</h1>

                <div>
                    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <TextField id="category" label="Add category" variant="standard" {...register("category")} />
                        <Box sx={{display: "flex", justifyContent: "center", width: "100%"}} >
                            <Button variant="contained" type="submit">
                                añadir categoria
                            </Button>
                        </Box>
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