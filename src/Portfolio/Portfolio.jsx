import React, { useState, useEffect } from 'react';
import '../css/Portfolio.css';
import portfolio1 from "../images/poert1.png";
import portfolio2 from "../images/port2.png";
import portfolio3 from "../images/port3.png";

export default function Portfolio() {
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setCurrentImage(imageSrc);
  };

  const closeLightbox = () => {
    setCurrentImage(null);
  };

  useEffect(() => {
    const lightboxContainer = document.querySelector('.lightbox-container');
    if (lightboxContainer) {
      lightboxContainer.addEventListener('click', closeLightbox);
    }

    return () => {
      if (lightboxContainer) {
        lightboxContainer.removeEventListener('click', closeLightbox);
      }
    };
  }, []); 

  return (
    <>
      <div className='text-center pt-4 ports'>
        <h2 className='my-2'>PORTFOLIO COMPONENT</h2>
        <div class="separator">
          <span class="star">
            <i class="fa-solid fa-star fa-2xl my-3"></i>
          </span>
        </div>
      </div>
      <div className="row p-5 gy-3">
        {portfolioImages.map((image, index) => (
          <div className="col-md-4" key={index}>
            <div className="inner item position-relative" style={{ height: "300px" }}>
              <div className="overlay position-absolute top-0 start-0 end-0 bottom-0" style={{ zIndex: 1 }} onClick={() => handleImageClick(image)}>
                <i class="fa-solid fa-plus text-white"></i>
              </div>
              <img src={image} alt={`portfolio${index + 1}`} className="w-100 h-100" style={{ objectFit: "cover", zIndex: 0 }} />
            </div>
          </div>
        ))}
      </div>

      {currentImage && (
        <div className="lightbox-container" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img src={currentImage} alt="Enlarged Image" />
          </div>
        </div>
      )}
    </>
  );
}

const portfolioImages = [portfolio1, portfolio2, portfolio3, portfolio1, portfolio2, portfolio3];