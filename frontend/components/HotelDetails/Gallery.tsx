import React, { useState } from "react";
import Image from "next/image";
import { AlertCircle, ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryProps {
  images: string[];
  title: string;
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, title, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  const isFullUrl = (path: string) => {
    try {
      new URL(path);
      return true;
    } catch {
      return false;
    }
  };

  const getImageUrl = (path: string) => {
    if (!path) return "";
    if (isFullUrl(path)) return path;

    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
    return `${
      process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000"
    }/${cleanPath}`;
  };

  const handleClickImage = (index: number) => {
    setCurrentIndex(index);
    setShowGallery(true);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleCloseGallery = () => {
    setShowGallery(false);
  };

  return (
    <>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}
      >
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square cursor-pointer">
            <ImageWithFallback
              src={getImageUrl(image)}
              index={index}
              alt={`Gallery image ${index + 1}`}
              onClick={() => handleClickImage(index)}
            />
            {index === images.length - 1 && (
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md">
                <AlertCircle className="w-5 h-5 inline-block mr-1" />
                View Gallery
              </div>
            )}
          </div>
        ))}
      </div>

      {showGallery && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#1e253a] flex items-center justify-center">
        <div className="relative w-full h-3/4 max-w-5xl mx-4 md:mx-0">
          <ImageWithFallback
            src={getImageUrl(images[currentIndex])}
            index={currentIndex}
            alt={`Gallery image ${currentIndex + 1}`}
          />
          <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md">
            {title}
          </div>
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md">
            {currentIndex + 1}/{images.length}
          </div>
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer">
            <ChevronLeft
              onClick={handlePrevImage}
              className="w-8 h-8 text-white"
            />
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer">
            <ChevronRight
              onClick={handleNextImage}
              className="w-8 h-8 text-white"
            />
          </div>
          <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={handleCloseGallery}
          >
            <X className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
      )}
    </>
  );
};

interface ImageWithFallbackProps {
  src: string;
  index: number;
  alt: string;
  onClick?: () => void;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  index,
  alt,
  onClick,
}) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="text-center p-4">
          <AlertCircle className="w-8 h-8 mx-auto mb-2 text-gray-400" />
          <p className="text-sm text-gray-500">Image unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-square cursor-pointer" onClick={onClick}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-lg hover:opacity-90 transition-opacity"
        onError={() => setError(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={index < 4}
      />
    </div>
  );
};

export default Gallery;
