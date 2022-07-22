import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import { Navbar } from 'react-responsive-navbar-overlay';
// import img from "../Assets/img/photo1644162358-modified.jpeg";

const styles= {
  // seperator: {
  //   backgroundImage: `url(${img})`
  // },
};


function Nav() {
  const isLogged = useSelector(state=>state.user.isAuth);
  const user = useSelector(state=>state.user.user)
  const logOutMenu = [
    {text: "Home", link: "/"},
    {text: "Sign In", link: "/signin"},
    {text: "Sign Up", link: "/signup"}];

    const loggedMenu = [
      {text: "Profile", link: `/profile/${user}`},
      {text: "Cart", link: "/"},
      {text: "Logout", link: "/logout"}];

      useEffect(() => {

      }, [])


  return (
    <div>
        <Navbar fontColor="#fff" backgroundColor="#1f2021" brand={<Link to='/'> Le Vide Clothing  </Link>}
        links={isLogged ? loggedMenu : logOutMenu} />
        <div class="seperator" style={window?.location.pathname === '/' ? styles.seperator : null}></div>
    </div>
  )
}

export default Nav;