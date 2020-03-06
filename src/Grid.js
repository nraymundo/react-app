import React, { useState } from "react";
import { data } from "./Config";
import "./Grid.css";

const UnsplashImage = ({ url, key }) => (
  <div className="image-item" key={key}>
    <img src={url} />
  </div>
);

let Grid = () => {
  const [images, setImages] = React.useState([]);
  const [loaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = (count = 7) => {
    const apiRoot = "https://api.unsplash.com";
    const apiKey = "14c7hKqujvRayBTzClblkcKG2m8OnxQaJRvnx3Y1b9U";

    fetch(
      `${data.REACT_APP_API_URL}photos/random?client_id=${data.REACT_APP_API_KEY}&count=${count}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        setImages([...images, ...data]);
        setIsLoaded(true);
        console.log(data);
      })
      .catch(e => {
        console.log("Fetch error", e);
      });
  };

  return (
    <div className="image-grid" style={{ marginTop: "30px" }}>
      {loaded
        ? images.map((image, index) => (
            <UnsplashImage url={image.urls.regular} key={index} />
          ))
        : ""}
    </div>
  );
};
export default Grid;
