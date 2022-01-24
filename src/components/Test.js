import React from 'react';
import  ReactDOM  from  'react-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";

function Test() {

    return (
        <div className="page-container">
        <div className="content-wrap">
          <Navbar />
          test component
          </div>
          <Footer />
        
      </div>
    );
  }
  
  export default Test;
  