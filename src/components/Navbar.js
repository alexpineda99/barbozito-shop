import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from 'react-responsive-navbar-overlay';
import Home from "./Home";
function Nav() {
  return (
    <div>
        <Navbar fontColor="#000" backgroundColor="#f89e9c" brand={"Barboza´s Shop"}
        links={[
        {text: "Register", link: "register"},
        {text: "Log in", link: "login"}]} />
        <div class="seperator"></div>
    </div>
  )
}

export default Nav;