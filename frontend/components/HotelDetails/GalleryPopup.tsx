import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';

interface GalleryPopupProps {
  images: { src: string; title: string }[];
  hotelTitle: string;
}

const GalleryPopup: React.FC<GalleryPopupProps> = ({ images, hotelTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleClose = () => {
    // Close the gallery popup
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex items-center justify-center">
      <div className="relative w-full max-w-5xl mx-4 md:mx-0">
        <Image
          src={images[currentIndex].src}
          alt={`Gallery image ${currentIndex + 1}`}
          fill
          className="object-contain rounded-lg"
        />
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md">
          {currentIndex + 1}/{images.length}
        </div>
        {currentIndex > 0 && (
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer">
            <ChevronLeft onClick={handlePrevImage} className="w-8 h-8 text-white" />
          </div>
        )}
        {currentIndex < images.length - 1 && (
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer">
            <ChevronRight onClick={handleNextImage} className="w-8 h-8 text-white" />
          </div>
        )}
        <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md">
          {hotelTitle}
        </div>
        <div className="absolute top-4 right-4 cursor-pointer" onClick={handleClose}>
          <X className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
  );
};

export default GalleryPopup;