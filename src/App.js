import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Main from "./Main";
import Home from "./Home";
import SearchBar from "./SearchBar";
import PhotoCarousel from "./PhotoCarousel";
import PhotoData from "./PhotoData";

function App() {
  let [currDisplay, setCurrDisplay] = useState("carousel");
  // console.log(process.env);
  return (
    <div className="App">
      <div className="Header">
        <Main />
      </div>
      {currDisplay === "carousel" && (
        <div>
          <div className="SearchB">
            <SearchBar setCurrDisplay={setCurrDisplay} />
          </div>
          <div>
            {currDisplay === "carousel" && (
              <div className="HomeCarousel">
                <PhotoCarousel />
              </div>
            )}
            {currDisplay === "search" && (
              <div className="SearchContents">
                <PhotoData />
              </div>
            )}
          </div>
        </div>
      )}
      {/* <div className="Header">
        <Main />
      </div>
      <div className="SearchB">
        <SearchBar setCurrDisplay={setCurrDisplay} />
      </div>
      <div>
        {currDisplay === "carousel" && (
          <div className="HomeCarousel">
            <PhotoCarousel />
          </div>
        )}
        {currDisplay === "search" && (
          <div className="SearchContents">
            <PhotoData />
          </div>
        )}
      </div> */}
    </div>
  );
}

export default App;
