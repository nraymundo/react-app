import React from "react";

import "./Home.css";

import Main from "./Main";
import SearchBar from "./SearchBar";
import PhotoCarousel from "./PhotoCarousel";

function Home({ setCurrDisplay }) {
  return (
    <div className="Home">
      <div className="HomeHeader">
        <Main />
      </div>
      <div className="HomeSearchbar">
        <SearchBar setCurrDisplay={setCurrDisplay} />
      </div>
      <div className="HomeCarousel">
        <PhotoCarousel />
      </div>
    </div>
  );
}

export default Home;
