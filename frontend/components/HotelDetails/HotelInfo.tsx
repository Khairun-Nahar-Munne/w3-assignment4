import { Hotel } from '@/types/hotel';
import { MapPin, User, Bed, Bath } from 'lucide-react';

interface Props {
  hotel: Hotel;
}

const HotelInfo: React.FC<Props> = ({ hotel }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-4">{hotel.title}</h1>
      <p className="text-gray-600 mb-4">{hotel.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-gray-500" />
          <span>{`${hotel.address.city}, ${hotel.address.country}`}</span>
        </div>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-gray-500" />
            <span>{hotel.guestCount} guests</span>
          </div>
          <div className="flex items-center gap-2">
            <Bed className="w-5 h-5 text-gray-500" />
            <span>{hotel.bedroomCount} bedrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-5 h-5 text-gray-500" />
            <span>{hotel.bathroomCount} bathrooms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;