import React, {useEffect} from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/User/userProfile";
import Logout from "./components/Logout";
import Resend from "./components/Verify_Recover/resendEmail";
import SendRecover from "./components/Verify_Recover/sendRecoverPassword";
import { useDispatch, useSelector } from "react-redux";
import { logoutuser } from "./State/actions/userAction";


function App() {
  const dispatch = useDispatch();

    useEffect(() => {

      const userssion = localStorage.getItem("currentUser");

      if (!userssion) {
        dispatch(logoutuser());
      }
      
    }, []);
  

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/signin/" element={<Login/>} />
        <Route path="/signup/" element={<Register/>} />
        <Route path="/profile/:token" element={<Profile/>} />
        <Route path="/resendemail/" element={<Resend/>} />
        <Route path="/sendrecoverpassword/" element={<SendRecover/>} />
        <Route path="/logout/" element={<Logout/>} />

      </Routes>
    </Router>
  );
}

export default App;
