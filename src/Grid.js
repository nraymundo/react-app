import React, { useState, useEffect } from "react";
import "./Grid.css";

const UnsplashImage = ({ url, key }) => (
  <div className="image-item" key={key}>
    <img class="img-fluid img-thumbnail" src={url} />
  </div>
);

let Grid = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log("useEffect in Grid")
    fetchImages();
  }, []);

  const fetchImages = (count = 7) => {
    console.log("fetchImages entry", images )
    const apiRoot = "https://api.unsplash.com";
    const apiKey =
      "a920466e5973644c09180f9583b9cb3b409c600d84fd46f025946ca2ebb23f7f";

    fetch(`${apiRoot}/photos/random?client_id=${apiKey}&count=${count}`)
      .then(response => response.json())
      .then(data => {
        setImages([ ...images, ...data]);
      })
      .catch(e => {
        console.log("Fetch error", e);
      });
  };

  return (
    <div className="Grid" style={{ marginTop: "30px" }}>
    {console.log("inside return ", images)}
      {images && images.map((image, index) => (
            <UnsplashImage url={image.urls.regular} key={index} />
          ))}
    </div>
  );
};
export default Grid;
