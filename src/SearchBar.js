import React, { useState } from "react";

import "./SearchBar.css";

import SearchResults from "./SearchResults";
import searchTeams from "./api";

function getId(query) {
  console.log(query);
}

function SearchBar({ setCurrDisplay }) {
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [photo, setPhoto] = useState([]);

  const handleQueryChange = event => setQuery(event.target.value);

  const performQuery = async event => {
    event.preventDefault();

    setError(null);

    try {
      const result = await searchTeams({
        // team: getId(query),
        category: "search"
      });
      setPhoto(result);
    } catch (error) {
      setError("Sorry, that photo doesn't exist.");
    }
  };

  return (
    <form className="SearchForm" onSubmit={performQuery}>
      <div className="SearchContent">
        {/* <input type="submit" id="SearchButton" /> */}
        <input
          id="Search"
          name="query"
          type="text"
          autoComplete="off"
          value={query}
          onChange={handleQueryChange}
          placeholder={"Search photos"}
        />
        {/* <input type="submit" id="SearchButton" value="Search" /> */}
        <button
          id="SearchButton"
          type="button"
          disabled={!query}
          onClick={() => setCurrDisplay("search")}
        >
          Search
        </button>
      </div>

      {error && <div className="error">{error}</div>}
      {console.log(photo)}

      <SearchResults info={photo} />
    </form>
  );
}

export default SearchBar;
