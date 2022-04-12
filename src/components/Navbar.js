import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import { Navbar } from 'react-responsive-navbar-overlay';
import img from "../Assets/img/photo1644162358-modified.jpeg";
// import logo from "../Assets/img/oficial_logo-removebg-preview.png";

const styles= {
  seperator: {
    backgroundImage: `url(${img})`
  },
};


function Nav() {
  const isLogged = useSelector(state=>state.user.isAuth);
  const logOutMenu = [
    {text: "Home", link: "/"},
    {text: "Sign Up", link: "/signup"},
    {text: "Sign In", link: "/signin"}];

    const loggedMenu = [
      {text: "Profile", link: "/"},
      {text: "Cart", link: "/"},
      {text: "Logout", link: "/logout"}];

      useEffect(() => {

      }, [])


  return (
    <div>
        <Navbar fontColor="#fff" backgroundColor="#1f2021" brand={<Link to='/'>Vade Retro  </Link>}
        links={isLogged ? loggedMenu : logOutMenu} />
        <div class="seperator" style={window?.location.pathname === '/' ? styles.seperator : null}></div>
    </div>
  )
}

export default Nav;