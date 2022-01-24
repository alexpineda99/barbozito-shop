import React, { useEffect, useState } from 'react';
import { FormField } from 'react-form-input-fields'
import 'react-form-input-fields/dist/index.css'
import Nav from "./Navbar";
import Footer from "./Footer";

function Home() {

  const [categories, SetCategories] = useState("Hoodies");
  const [search, SetSearch] = useState("");

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Nav />
        <div className="search">
          <div className="select-category">
            <FormField
              type="select"
              option={["Hoodies", "Sweater"]}
              value={categories}
              label={'Select Category'}
              keys={"category"}
              handleOnChange={(value) => SetCategories(value)} />
          </div>
          <div className="search-bar">
            <FormField
              type="text"
              standard="labeleffect"
              value={search}
              keys={'search'}
              effect={'effect_3'}
              handleOnChange={(value) => SetSearch(value)}
              placeholder={'Search...'} />

          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
}

export default Home;
