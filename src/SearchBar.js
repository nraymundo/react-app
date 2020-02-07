import React from "react";

import "./SearchBar.css";

function SearchBar() {
  return (
    <form className="SearchForm">
      <div className="SearchContent">
        {/* <input type="submit" id="SearchButton" /> */}
        <input
          id="Search"
          name="query"
          type="text"
          autoComplete="off"
          //   value={query}
          //   onChange={handleQueryChange}
          placeholder={"Search photos"}
        />
        <input type="submit" id="SearchButton" value="Search" />
        {/* <button id="SearchButton" type="submit">
          Search
        </button> */}
      </div>
    </form>
  );
}

export default SearchBar;
