import React, { useState, useEffect } from "react";
import { data } from "./Config";
import "./Grid.css";

const UnsplashImage = ({ url, key }) => (
  <div className="image-item" key={key}>
    <img class="img-fluid img-thumbnail" src={url} />
  </div>
);

let Grid = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log("useEffect in Grid");
    fetchImages();
  }, []);

  const fetchImages = (count = 7) => {
    console.log("fetchImages entry", images);
    const apiKey = "14c7hKqujvRayBTzClblkcKG2m8OnxQaJRvnx3Y1b9U";

    fetch(
      `${data.REACT_APP_API_URL}photos/random?client_id=${data.REACT_APP_API_KEY}&count=${count}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        setImages([...images, ...data]);
        console.log(data);
      });

    fetch(
      `${data.REACT_APP_API_URL}/photos/random?client_id=${data.REACT_APP_API_KEY}&count=${count}`
    )
      .then(response => response.json())
      .then(data => {
        setImages([...images, ...data]);
      })
      .catch(e => {
        console.log("Fetch error", e);
      });
  };

  return (
    <div className="Grid" style={{ marginTop: "30px" }}>
      {console.log("inside return ", images)}
      {images &&
        images.map((image, index) => (
          <UnsplashImage url={image.urls.regular} key={index} />
        ))}
    </div>
  );
};

export default Grid;
