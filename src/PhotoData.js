import React from "react";

// import "./react-tabs.css";
import "./PhotoData.css";

const PhotoData = props => {
  const { data } = props;
  const { table } = props;
  return (
    <div>
      <p>hi</p>
      {data && (
        <div className="League">
          {console.log(data)}
          {data &&
            data.map(photos => (
              <div>
                <div>{photos.description}</div>
                <img
                  src={photos.urls.regular}
                  alt="logo"
                  className="TeamLogo"
                ></img>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default PhotoData;
