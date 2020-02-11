import React from "react";

// import "./SearchResults.css";

// import TeamData from "./TeamData";
import PhotoData from "./PhotoData";

const SearchResults = props => (
  <div className="SearchResults">
    {console.log(props.info.api)}
    {props.info.api && (
      <PhotoData
        key={props.info.api.results[0].id}
        data={props.info.api.results}
        table={props}
      />
    )
    //   props.info.api.results.map(data => (
    //     <PhotoData key={data.id} data={data} table={props} />
    }
  </div>
);

export default SearchResults;
