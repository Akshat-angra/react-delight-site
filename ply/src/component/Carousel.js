import React, { useState, useEffect } from 'react';
import './image.css'
const ImageSlider = () => {
  const slides = [
    "https://zenlayercdn.centuryply.com/homeslider/Sainik-710-Lp Banner-1400x575-nwprice.jpg",
    "https://zenlayercdn.centuryply.com/homeslider/a81d6f012cc74c349a2145fc90b5a4aa.png",
    "https://zenlayercdn.centuryply.com/homeslider/bebb2cc04068cda87f6a399db30e1f38.png",
    "https://zenlayercdn.centuryply.com/homeslider/8b1adda54e6830f0bf26671e1738a5bf.jpg",
    "https://zenlayercdn.centuryply.com/homeslider/Look-Book-Launch-Banner-1400x575.jpg",
    "https://zenlayercdn.centuryply.com/homeslider/e157bfcd80da0124b8bb9902893012df.jpg",
    "https://zenlayercdn.centuryply.com/homeslider/2116c2620da9e727e771130329b74cae.jpg",
    "https://zenlayercdn.centuryply.com/homeslider/CP-Digitral-Mani-h-Malhotra-1400x575.jpg",
    "https://zenlayercdn.centuryply.com/homeslider/a5b1ee2b589e3042b4f545345dc1ef46.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  },);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={slide} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
