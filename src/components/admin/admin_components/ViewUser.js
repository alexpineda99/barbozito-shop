import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import TextField from '@mui/material/TextField';
import Modal from "../admin_modals/check_adminPass";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function Viewusers() {

    const state = useSelector(state => console.log(state));
    const { register, handleSubmit } = useForm();
    let [msg, setMsg] = useState(null);
    let [isOpen, SetisOpen] = useState(false);
    let [endpoint, SetEndpoint] = useState(null);
    let [payload, SetPayload] = useState(null);
    let [isLoading, setisLoading] = useState(false);
    let [users, setUsers] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

    const onSubmit = (data) => {
        console.log(data);
        SetEndpoint("url enviadad");
        SetPayload(data.category);
        SetisOpen(!isOpen);
    }

    useEffect(() => {

        axios.get("http://localhost:3001/adminusers")
            .then(res => {
                console.log(res.data.data);
                // console.log(res.data.data);
                setUsers(res.data.data);
                // console.log(users);
            })
            .catch(error => {
                console.log(error);
                setisLoading(false);
                setMsg("Error Server");
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

                    <Modal endpoint={endpoint} data={payload} /> :

                    null
                }

                <h1>View users</h1>

                <div>
                    {/* <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <TextField id="category" label="Add category" variant="standard" {...register("category")} />
                        <button className="" type="submit">
                        añadir categoria
                    </button>
                    </form> */}
                </div>


                <div>
                    Users
                    {users.map((user, i) =>
                        <div>
                            {user.name}

                            {user.email}
                            
                            <button> 
                                <a href={`http://localhost:3001/delete/${user.id}`} >
                                Eliminar Usuario
                                </a>

                            </button>

                        </div>
                    )}


                </div>


            </div>
        </div>
    );
}

export default Viewusers;