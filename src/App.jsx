import React from 'react';
import Slider from './Slider';

const App = () => {
  const images = [
    '../imeg_react/img1.jpg',
    '../imeg_react/img2.jpg',
    '../imeg_react/img3.jpg',
    '../imeg_react/img4.jpg',
    '../imeg_react/img5.jpg',
    '../imeg_react/img6.jpg',
    // Добавьте свои пути к картинкам здесь
  ];

  return (
    <div className='slider'>
      <h1>Слайдер фотографий</h1>
      <Slider images={images} />
    </div>
  );
};

export default App;