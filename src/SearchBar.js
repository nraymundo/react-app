import React, { useState } from "react";

import "./SearchBar.css";

import SearchResults from "./SearchResults";
import searchTeams from "./api";

function getId(query) {
  console.log(query);
}

export default function SearchBar() {
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [photo, setPhoto] = useState([]);

  const apiKey =
    "a920466e5973644c09180f9583b9cb3b409c600d84fd46f025946ca2ebb23f7f";

  const fetchAPI = event => {
    event.preventDefault();
    let api = `https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=${query}&per_page=4`;
    fetch(api)
      .then(response => response.json())
      .then(content => {
        console.log("content" + content.results[0].urls);
        setPhoto(content.results);
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
        {photo &&
          photo.map(photos => (
            <img src={photos.urls.regular} alt={photos.description}></img>
          ))}
      </div>
    </form>
  );
}
