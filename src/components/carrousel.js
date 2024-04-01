import React, { useState } from 'react';
import { MdArrowForwardIos } from "react-icons/md";

const Carrousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className='wrapper_carrousel'>
    <button onClick={previousSlide}><MdArrowForwardIos height={24} style={{ transform: 'rotate(180deg)'}} /></button>
    <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
    <button onClick={nextSlide}><MdArrowForwardIos height={24} /></button>
  </div>
  );
};

export default Carrousel;
