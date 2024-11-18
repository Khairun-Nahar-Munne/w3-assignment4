import React, { useState } from 'react';
import Image from 'next/image';
import { AlertCircle } from 'lucide-react';

interface GalleryProps {
  images: string[];
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, className = '' }) => {
  // Function to determine if the image is a full URL or a local path
  const isFullUrl = (path: string) => {
    try {
      new URL(path);
      return true;
    } catch {
      return false;
    }
  };

  // Function to get the complete image URL
  const getImageUrl = (path: string) => {
    if (!path) return '';
    if (isFullUrl(path)) return path;
    
    // Clean the path and construct backend URL
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000'}/${cleanPath}`;
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {images.map((image, index) => (
        <div key={index} className="relative aspect-square">
          <ImageWithFallback
            src={getImageUrl(image)}
            index={index}
            alt={`Gallery image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

interface ImageWithFallbackProps {
  src: string;
  index: number;
  alt: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, index, alt }) => {
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
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover rounded-lg hover:opacity-90 transition-opacity"
      onError={() => setError(true)}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority={index < 4} // Prioritize loading first 4 images
    />
  );
};

export default Gallery;