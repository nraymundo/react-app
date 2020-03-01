import React, { useState } from "react";

import "./SearchBar.css";

import SearchResults from "./SearchResults";
import searchTeams from "./api";

function getId(query) {
  console.log(query);
}

const UnsplashImage = ({ url, key }) => (
  <div className="image-item" key={key}>
    <img src={url} />
  </div>
);

export default function SearchBar() {
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [photo, setPhoto] = useState([]);
  const [loaded, setIsLoaded] = React.useState(false);

  let Grid = () => {
    [photo, setPhoto] = React.useState([]);
    [loaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
      fetchAPI();
    }, []);
  };

  const apiRoot = "https://api.unsplash.com";
  const apiKey =
    "a920466e5973644c09180f9583b9cb3b409c600d84fd46f025946ca2ebb23f7f";

  const fetchAPI = (event, count = 7) => {
    event.preventDefault();
    console.log("here bitch");
    let api = `${apiRoot}/search/photos/?client_id=${apiKey}&query=${query}&page=${Math.floor(
      Math.random() * 20
    ) + 1}&per_page=${count}`;
    fetch(api)
      .then(response => response.json())
      .then(content => {
        console.log("content" + content.results[0].urls);
        setIsLoaded(true);
        setPhoto(content.results);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleQueryChange = event => setQuery(event.target.value);

  // const performQuery = async event => {
  //   event.preventDefault();

  //   setError(null);

  //   try {
  //     const result = await searchTeams({
  //       category: "search",
  //     });
  //     setPhoto(result);
  //   } catch (error) {
  //     setError("Sorry, that photo doesn't exist.");
  //   }
  // };

  return (
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
        <button id="SearchButton" type="button" disabled={!query}>
          Search
        </button>
      </div>

      {error && <div className="error">{error}</div>}

      <div>
        <div className="Grid" style={{ marginTop: "30px" }}>
          {loaded
            ? photo &&
              photo.map((photos, index) => (
                <UnsplashImage url={photos.urls.regular} key={index} />
              ))
            : ""}
        </div>
      </div>
    </form>
  );
}
