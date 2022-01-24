import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Test from "./components/Test"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
