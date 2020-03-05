import React, { useState, useEffect } from "react";
import { usePalette } from "react-palette";
import Grid from "./Grid.js";
import { data } from "./config";

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

  useEffect(() => {
    console.log("useEffect in SearchBar");
  }, []);

  const handleQueryChange = event => setQuery(event.target.value);

  const fetchAPI = (event, count = 7) => {
    event.preventDefault();
    let api = `${data.REACT_APP_API_URL}search/photos/?client_id=${
      data.REACT_APP_API_KEY
    }&query=${query}&page=${Math.floor(Math.random() * 20) +
      1}&per_page=${count}`;
    fetch(api)
      .then(response => response.json())
      .then(content => {
        console.log("content" + content.results[0].urls.regular);

        setPhotos(content.results);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <React.Fragment>
      <form className="SearchForm" onSubmit={fetchAPI}>
        <div className="SearchContent">
          <input
            id="Search"
            name="query"
            type="text"
            autoComplete="off"
            value={query}
            onChange={handleQueryChange}
            placeholder={"Search photos"}
          />
          <input id="SearchButton" type="submit" value="GO" />
        </div>
        {error && <div className="error">{error}</div>}
        <div>
          <div className="Grid" style={{ marginTop: "30px" }}>
            {photos &&
              photos.map((photo, index) => (
                <UnsplashImage url={photo.urls.regular} key={index} />
              ))}
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

// const performQuery = async event => {
//   event.preventDefault();

//   setError(null);

//   try {
//     const result = await searchTeams({
//       category: "search",
//     });
//     setPhoto(result);
//   } catch (error) {
//     setError("Sorry, that photo doesn't exist.")
//   }
// };

// const { data, loading, error } = usePalette(IMAGE_URL)
//
// <div style={{ color: data.vibrant }}>
//   text with the vibrant color
// </div>
// removed this
