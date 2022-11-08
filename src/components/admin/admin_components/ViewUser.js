import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-responsive-modal";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import Button from "@mui/material/Button";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

function Viewusers() {
  const state = useSelector((state) => state);
  const { register, handleSubmit, setValue } = useForm();
  let [msg, setMsg] = useState(null);
  let [isOpen, SetisOpen] = useState(false);
  let [isLoading, setisLoading] = useState(false);
  let [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;


  const eliminaruser = (data, pass) => {
    const payload = {data:data, password: pass}
    axios
      .post(`http://localhost:3001/deleteuser/${payload.data}`, payload,{
        headers: { authad: state.user.user },
      })
      .then((res) => {
        console.log(res);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submit = (data) => {


    const pass = prompt("clave");
    const confi = window.confirm("quiere continuar?");
    if (confi === true){eliminaruser(data, pass)} else{}
    // confirmAlert({
    //   title: 'Confirm to delete user',
    //   message: 'Are you sure to do this.',
    //   buttons: [
    //     {
    //       label: 'Yes',
    //       onClick: () => eliminaruser(data)
    //     },
    //     {
    //       label: 'No',
    //       //onClick: () => alert('Click No')
    //     }
    //   ]
    // });
  }

  useEffect(() => {
    axios
      .get("http://localhost:3001/adminusers")
      .then((res) => {
        console.log(res.data.data);
        setUsers(res.data.data);
      })
      .catch((error) => {
        console.log(error);
        setisLoading(false);
        setMsg("Error Server");
      });
  }, []);

  return (
    <div className="page-container">
      <div className="content-wrap-admin">
        {isLoading ? (
          <div className="shader">
            <div className="loadingContainer">
              <ClimbingBoxLoader
                color={"#fff"}
                loading={true}
                css={override}
                size={15}
              />
            </div>
          </div>
        ) : null}
        
        <h1>View users</h1>

        <div>
          Users
          {users.map((user, i) => (
            <div key={i}>
              <div> {user.name} </div>
              <div> {user.email} </div>
              <Button onClick={() => submit(user.id)}>
                {" "}
                Delete user{" "}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Viewusers;
