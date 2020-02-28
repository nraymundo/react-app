import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./PhotoCarousel.css";

export default function PhotoCarousel() {
  return (
    <div>
      <Carousel className="HomeCarousel">
        <Carousel.Item>
          <img
            className="image1 d-block"
            src="https://img5.goodfon.com/wallpaper/nbig/3/3a/yosemite-national-park-yosemite-valley-usa-half-dome-united.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image1 d-block"
            src="https://thewallpaper.co//wp-content/uploads/2016/01/cool-nature-photos-nature-wallpaper-for-samsung-hd-landscape-wallpapers-plants-free-images-flowers-apple-background-images-best-nature-images-2560x1368.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image2 d-block"
            src="https://gooddaysacramento.cbslocal.com/wp-content/uploads/sites/31326160/2019/11/GettyImages-1174815340.jpg?w=1280"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
