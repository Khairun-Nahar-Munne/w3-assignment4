import React, { useState } from 'react';
import { Room } from '@/types/hotel';
import { Bed, ImageOff } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  rooms: Room[];
}

const RoomList: React.FC<Props> = ({ rooms }) => {
  return (
    <>
    <div>
      <h2 className="text-2xl font-semibold mb-4">Rooms & beds</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <Link
            key={room.roomSlug}
            href={`/hotels/${room.hotelSlug}/rooms/${room.roomSlug}`}
            className="block"
          >
            <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-video bg-gray-50">
                <BackendImageWithFallback
                  imagePath={room.roomImage}
                  roomTitle={room.roomTitle}
                />
              </div>
              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-2">{room.roomTitle}</h3>
                <div className="flex items-center gap-2">
                  <Bed className="w-4 h-4 text-gray-500" />
                  <span>{room.bedroomCount} bedroom{room.bedroomCount > 1 ? 's' : ''}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className=" mt-4">
      <h2 className="text-lg font-semibold mb-2">Spaces</h2>
      <ul className="list-none">
        <li className="flex items-center py-0.5">
          <span className="mr-2.5 text-lg">🏡</span>
          <p className="text-sm">Deck or patio</p>
        </li>
        <li className="flex items-center py-0.5">
          <span className="mr-2.5 text-lg">🍳</span>
          <p className="text-sm">Kitchen</p>
        </li>
        <li className="flex items-center py-0.5">
          <span className="mr-2.5 text-lg">☘️</span>
          <p className="text-sm">Balcony</p>
        </li>
        <li className="flex items-center py-0.5">
          <span className="mr-2.5 text-lg">🌳</span>
          <p className="text-sm">Garden</p>
        </li>
      </ul>
      <Link 
        href="#" 
        className="text-blue-600 hover:underline inline-block mt-4 text-sm"
      >
        See all rooms and beds details
      </Link>
    </div>
    </div>
  </>
    
  );
};

const BackendImageWithFallback: React.FC<{
  imagePath: string;
  roomTitle: string;
}> = ({ imagePath, roomTitle }) => {
  const [imageError, setImageError] = useState(false);

  // Function to get the complete image URL from the backend
  const getImageUrl = (path: string) => {
    if (!path) return '';
    
    // Clean the path
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    
    // For local development, always use localhost:5000
    return `http://localhost:5000/${cleanPath}`;
  };

  if (imageError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <ImageOff className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-500">Image unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={getImageUrl(imagePath)}
      alt={roomTitle}
      fill
      className="object-cover"
      onError={() => setImageError(true)}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority={false}
    />
  );
};

export default RoomList;