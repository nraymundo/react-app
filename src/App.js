import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Main from "./Main";
import Home from "./Home";
import SearchBar from "./SearchBar";
import PhotoCarousel from "./PhotoCarousel";
import PhotoData from "./PhotoData";
import Grid from "./Grid";

export default function App() {
  // let [currDisplay, setCurrDisplay] = useState("carousel");
  // console.log(process.env);
  return (
    <div className="App">
      <div className="Header">
        <Main />
      </div>
      {/* {currDisplay === "carousel" && ( */}
      <div>
        <div className="SearchB">
          <SearchBar />
        </div>
        <></>
        <div>
          <div className="HomeCarousel">{/* <PhotoCarousel /> */}</div>
          {/* <Grid /> */}
        </div>
      </div>
      {/* )} */}
    </div>
  );
}
