import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from 'react-responsive-navbar-overlay';
import Home from "./Home";
function Nav() {
  return (
    <div>
        <Navbar fontColor="#fff" backgroundColor="#1f2021" brand={<Link to='/'>Barboza´s Shop</Link>}
        links={[
        {text: "Sign Up", link: "/signup"},
        {text: "Sign In", link: "/signin"}]} />
        <div class="seperator"></div>
    </div>
  )
}

export default Nav;