import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { usePalette } from "react-palette";

import Main from "./Main";
import Home from "./Home";
import SearchBar from "./SearchBar";
import PhotoCarousel from "./PhotoCarousel";
import PhotoData from "./PhotoData";
import Grid from "./Grid";

export default function App() {
  // let [currDisplay, setCurrDisplay] = useState("carousel");
  // console.log(process.env);
  //const { data, loading, error } = usePalette(SearchBar.photo[0].urls.regular);

  return (
    <div className="App">
      <div className="Header">
        <Main />
      </div>
      <div>
        <div className="SearchB">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
