import React from 'react';
import Carousel from '../Carousel/Carousel';

const Home = () => {
  const carouselItems = [
    { src: 'url_1', alt: 'Imagem 1' },
    { src: 'url_2', alt: 'Imagem 2' },
    { src: 'url_3', alt: 'Imagem 3' },
  ];

  return (
    <div>
      <h2>Página Inicial</h2>
      <Carousel items={carouselItems} />
    </div>
  );
};

export default Home;
