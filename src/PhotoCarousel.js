import React, { useState, useEffect } from "react";
import { data } from "./Config";
import Carousel from "react-bootstrap/Carousel";

import "./PhotoCarousel.css";

export default function PhotoCarousel() {
  const [photos, setPhotos] = useState([]);
  // const [query, setQuery] = useState("");

  // const handleQueryChange = event => setQuery(event.target.value);

  useEffect(() => {
    const fetchPhotos = (event, count = 3, query = "nature") => {
      // event.preventDefault();
      let api = `${data.REACT_APP_API_URL}search/collections/?client_id=${data.REACT_APP_API_KEY}&per_page=${count}&query=${query}`;
      fetch(api)
        .then(response => response.json())
        .then(content => {
          setPhotos(content);
        })
        .catch(e => {
          console.log(e);
        });
    };
    fetchPhotos();
  }, []);

  return (
    <div>
      <Carousel className="HomeCarousel">
        <Carousel.Item>
          {photos.results && (
            <img
              className="image1 d-block"
              src={photos.results[0].cover_photo.urls.full}
              alt="First slide"
            />
          )}
        </Carousel.Item>
        <Carousel.Item>
          {photos.results && (
            <img
              className="image2 d-block"
              src={photos.results[1].cover_photo.urls.full}
              alt="First slide"
            />
          )}
        </Carousel.Item>
        <Carousel.Item>
          {photos.results && (
            <img
              className="image3 d-block"
              src={photos.results[2].cover_photo.urls.full}
              alt="First slide"
            />
          )}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
