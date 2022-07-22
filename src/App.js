import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link, Routes, Route, Navigate } from "react-router-dom";
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
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin/" element={<Login />} />
          <Route exact path="/signup/" element={<Register />} />
          <Route exact path="/profile/:token" element={<Profile />} />
          <Route exact path="/resendemail/" element={<Resend />} />
          <Route exact path="/sendrecoverpassword/" element={<SendRecover />} />
          <Route exact path="/logout/" element={<Logout />} />
          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
      );
}

      export default App;
