import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loguser } from "../../State/actions/userAction";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function AdminSession() {

  const state = useSelector(state => console.log(state));
  let [msg, setMsg] = useState(null);
  let [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

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

        <div className="main-admin-div">
          <Link to="/admin-panel/adder-category" >
            <div className="admin-selection">
              Anadir o eliminar categoria
            </div>
          </Link>
          <Link to="">
            <div className="admin-selection">
              Anadir o eliminar articulo
            </div>
          </Link>
          <Link to="">
            <div className="admin-selection">
              Ver usuarios
            </div>
          </Link>
          <Link to="">
            <div className="admin-selection">
              Ver ventas
            </div>
          </Link>
        </div>


      </div>
    </div>
  );
}

export default AdminSession;