import React, { useState } from 'react';

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <button className='btn' onClick={prevImage}>Назад</button>
      <img className='picture' src={images[currentImageIndex]} alt="Slider" />
      <button className='btn' onClick={nextImage}>Далее</button>
    </div>
  );
};

export default Slider;