import React, { useState, useEffect } from "react";
import { data } from "./Config";
import PhotoCarousel from "./PhotoCarousel";
import Grid from "./Grid";
import "./Grid.css";

import "./SearchBar.css";

const UnsplashImage = ({ url, index }) => (
  <div className="image-item">
    <img src={url} />
  </div>
);

export default function SearchBar() {
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [images, setImages] = useState([]);
  const [currDisplay, setCurrDisplay] = useState("carousel");

  const handleQueryChange = event => setQuery(event.target.value);

  const fetchImages = (event, count = 7) => {
    event.preventDefault();
    let api = `${data.REACT_APP_API_URL}photos/random/?client_id=${data.REACT_APP_API_KEY}&count=${count}`;
    fetch(api)
      .then(response => response.json())
      .then(content => {
        setImages(content);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const fetchAPI = (event, count = 7) => {
    event.preventDefault();
    let api = `${data.REACT_APP_API_URL}search/photos/?client_id=${
      data.REACT_APP_API_KEY
    }&query=${query}&page=${Math.floor(Math.random() * 20) +
      1}&per_page=${count}`;
    fetch(api)
      .then(response => response.json())
      .then(content => {
        setPhotos(content.results);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <React.Fragment>
      <div className="form-wrapper">
        <form className="RandomPics" onSubmit={fetchImages}>
          <div className="RandomContent">
            <input
              id="RandomButton"
              type="submit"
              value=":)"
              onClick={() => setCurrDisplay("random")}
            />
          </div>
          <div className="randomContent">
            <div>
              {console.log(images)}
              <div className="Grid" style={{ marginTop: "30px" }}>
                {currDisplay === "random" &&
                  images?.map((image, index) => (
                    <UnsplashImage url={image.urls.regular} key={index} />
                  ))}
              </div>
            </div>
          </div>
        </form>

        <form className="SearchForm" onSubmit={fetchAPI}>
          <div className="SearchContent">
            <input
              id="Search"
              name="query"
              type="text"
              autoComplete="off"
              value={query}
              onChange={handleQueryChange}
              placeholder={"What's your mood?"}
            />
            <input
              id="SearchButton"
              type="submit"
              value="⟶"
              onClick={() => setCurrDisplay("search")}
            />
          </div>
          <div className="renderContent">
            <div>{currDisplay === "carousel" && <PhotoCarousel />}</div>
            <div className="Grid" style={{ marginTop: "30px" }}>
              {currDisplay === "search" &&
                photos?.map((photo, index) => (
                  <UnsplashImage url={photo.urls.regular} key={index} />
                ))}
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
