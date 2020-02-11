import React from "react";

// import "./SearchResults.css";

// import TeamData from "./TeamData";
import PhotoData from "./PhotoData";

const SearchResults = props => (
  <div className="SearchResults">
    {props.info.api &&
      props.info.api.results.map(data => (
        <PhotoData key={data.id} data={data} table={props.table} />
      ))}
  </div>
);

export default SearchResults;
