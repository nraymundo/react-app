import React, { useState } from "react";
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
    const apiKey =
      "a920466e5973644c09180f9583b9cb3b409c600d84fd46f025946ca2ebb23f7f";

    fetch(`${apiRoot}/photos/random?client_id=${apiKey}&count=${count}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setImages([...images, ...data]);
        setIsLoaded(true);
        console.log(images);
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
