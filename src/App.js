import React, {useEffect} from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import {useSelector} from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { logoutuser } from "./State/actions/userAction";


function App() {
  const checksession = useSelector(state=>state.user.holdSession);
  const dispatch = useDispatch();

  useEffect(() => {
    () => {
      if (!checksession) {
        window.localStorage.clear();
        dispatch(logoutuser());
      } else {
        return null;
      }
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/signin/" element={<Login/>} />
        <Route path="/signup/" element={<Register/>} />
        <Route path="/logout/" element={<Logout/>} />

      </Routes>
    </Router>
  );
}

export default App;
