import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/signin/" element={<Login/>} />
        <Route path="/signup/" element={<Register/>} />

      </Routes>
    </Router>
  );
}

export default App;
