import React, {useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutuser } from "../State/actions/userAction";

const Logout = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logoutuser()); 
        localStorage.removeItem("currentUser");
        sessionStorage.removeItem("currentUser");
        navigate("/");
    }, [])

    return (
        
        <div></div>

    )
}

export default Logout
