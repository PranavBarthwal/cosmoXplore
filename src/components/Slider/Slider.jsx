import React, { useEffect, useState } from 'react';
import Styles from './Slider.module.css';

function Slider() {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetchImages();
  }, []);
 
  const fetchImages = async () => {
    const response = await fetch(`https://images-api.nasa.gov/search?q=space&media_type=image&page=1&page_size=99`);
    const data = await response.json();
    const imageUrls = data.collection.items.filter(url => url !== '').map(item => item.links ? item.links[0].href : '');
    setImages(imageUrls);
    displayImages();
  };
  const displayImages = () => {
    images.map((url, index) => (
        <img key={index} src={url} alt="NASA" />
    ));
  };
  const showSlide = (index) => {
    if (index >= images.length) {
      setCurrentSlide(0);
    } else if (index < 0) {
      setCurrentSlide(images.length - 1);
    } else {
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    showSlide(currentSlide - 1);
  };

  return (
    <>
    <h1><center>Slider of Images from NASA's Image Library</center></h1>
    <div className={Styles["slider-container"]}>
      <div className={Styles["slider"]} style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
      {images.map((url, index) => (
          <div className={Styles["slide"]} key={index}>
            <img src={url} alt={`NASA Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className={Styles["prev"]}onClick={prevSlide}>&#10094;</button>
      <button className={Styles["next"]} onClick={nextSlide}>&#10095;</button>
    </div>
    </>
  );
}

export default Slider;
