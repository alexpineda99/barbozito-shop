import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from 'react-responsive-navbar-overlay';
import img from "../Assets/img/photo1644162358-modified.jpeg";
import logo from "../Assets/img/oficial_logo-removebg-preview.png";

const styles= {
  seperator: {
    backgroundImage: `url(${img})`
  },
};

function Nav() {
  return (
    <div>
        <Navbar fontColor="#fff" backgroundColor="#1f2021" brand={<Link to='/'>Vade Retro <img className="img-logo-navbar" src={logo} /> </Link>}
        links={[
        {text: "Home", link: "/"},
        {text: "Sign Up", link: "/signup"},
        {text: "Sign In", link: "/signin"}]} />
        <div class="seperator" style={window?.location.pathname === '/' ? styles.seperator : null}></div>
    </div>
  )
}

export default Nav;