import React from 'react';

const CarouselItem = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
    </div>
  );
};

export default CarouselItem;
