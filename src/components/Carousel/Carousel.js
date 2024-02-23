import React from 'react';
import Slider from 'react-slick';
import CarouselItem from '../CarouselItem/CarouselItem';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <CarouselItem key={index} src={item.src} alt={item.alt} />
      ))}
    </Slider>
  );
};

export default Carousel;