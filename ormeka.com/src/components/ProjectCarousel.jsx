import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import React, { useState , useEffect } from 'react';

const ProjectCarousel = ({ image }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [initialTouchX, setInitialTouchX] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  const nextSlide = () => {
    setPhotoIndex((photoIndex + 1) % image.length);
  };

  const prevSlide = () => {
    setPhotoIndex((photoIndex + image.length - 1) % image.length);
  };

  const handleKeyDown = (event) => {
    if (lightboxIsOpen) {
      // Lightbox açıkken klavye olaylarını dinle
      switch (event.key) {
        case 'ArrowRight':
          nextSlide();
          break;
        case 'ArrowLeft':
          prevSlide();
          break;
        case 'Escape':
          closeLightbox();
          break;
        default:
          break;
      }
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIsOpen, handleKeyDown]);

  
  const handleTouchStart = (event) => {
    if (event.touches.length === 1) {
      setInitialTouchX(event.touches[0].clientX);
    }
  };

  const handleTouchMove = (event) => {
    if (event.touches.length === 1) {
      const touchX = event.touches[0].clientX;
      const deltaX = touchX - initialTouchX;

      if (deltaX > 50) {
        // Sağa swipe, önceki slayda geçiş
        prevSlide();
      } else if (deltaX < -50) {
        // Sola swipe, sonraki slayda geçiş
        nextSlide();
      }
    }
  };

  const handleTouchEnd = () => {
    setInitialTouchX(0);
  };

  // Mobil cihazlarda swipe olaylarını dinleme
  useEffect(() => {
    if (lightboxIsOpen) {
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);

      return () => {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [lightboxIsOpen, handleTouchStart, handleTouchMove, handleTouchEnd]);


  return (
    <div>
      <div className="grid sm:grid-cols-2 sm:h-[400px] lg:h-[600px]">
        {image.map((image, index) => (
          <div
            key={index}
            className="relative "
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full cursor-pointer object-center object-cover overflow-hidden"
              onClick={() => openLightbox(index)}
            />
            {hoveredIndex === index && (
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent p-2 text-gray-800 rounded"
                onClick={() => console.log(`Button clicked for image ${index + 1}`)}
              ><MagnifyingGlassIcon onClick={() => openLightbox(index)} className="text-white relative w-10 h-10 cursor-pointer contrast-125"/>
              </button>
            )}
          </div>
        ))}
      </div>

      {lightboxIsOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 z-[100]">
          <img
            src={image[photoIndex]}
            alt={`Slide ${photoIndex + 1}`}
            className="max-w-full max-h-full cursor-pointer"
            onClick={closeLightbox}
          />
          <button
            className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
            onClick={closeLightbox}
          >
            X
          </button>
          <button
            className="absolute top-1/2 left-4 text-white text-3xl cursor-pointer transform -translate-y-1/2"
            onClick={prevSlide}
          >
            &#8249;
          </button>
          <button
            className="absolute top-1/2 right-4 text-white text-3xl cursor-pointer transform -translate-y-1/2"
            onClick={nextSlide}
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel;