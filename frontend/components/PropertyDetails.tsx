import React from 'react';
import {
  Car,
  ChefHat,
  Home,
  MapPin,
  Plane,
  ChevronRight,
  Flame,
  Shirt,
  Container
} from 'lucide-react';

interface LocationInfo {
  icon: React.ReactNode;
  name: string;
  duration: string;
}

const PropertyDetails = () => {
  const amenities = [
    { icon: <Flame className="h-5 w-5" />, name: 'Barbecue grill' },
    { icon: <Shirt className="h-5 w-5" />, name: 'Washer' },
    { icon: <Home className="h-5 w-5" />, name: 'Outdoor Space' },
    { icon: <Car className="h-5 w-5" />, name: 'Parking available' },
    { icon: <ChefHat className="h-5 w-5" />, name: 'Kitchen' },
    { icon: <Container className="h-5 w-5" />, name: 'Dryer' },
  ];

  const locations: LocationInfo[] = [
    { icon: <MapPin className="h-5 w-5" />, name: 'Auke Bay', duration: '6 min drive' },
    { icon: <MapPin className="h-5 w-5" />, name: 'University of Alaska-Southeast', duration: '10 min drive' },
    { icon: <MapPin className="h-5 w-5" />, name: 'Mendenhall Golf Course', duration: '10 min drive' },
    { icon: <Plane className="h-5 w-5" />, name: 'Juneau, AK (JNU-Juneau Intl.)', duration: '14 min drive' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 ">
      {/* Amenities Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Popular amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center gap-3">
              {amenity.icon}
              <span>{amenity.name}</span>
            </div>
          ))}
        </div>
        <button className="flex items-center text-blue-600 hover:underline gap-2">
          <span>See all property amenities</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </section>

      {/* Map Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Explore the area</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md border border-gray-200">
            <div className="h-[150px] bg-cover bg-center bg-[url('/img6.png')]"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Juneau, Alaska</h3>
              <a 
                href="https://maps.app.goo.gl/zWc7TiHSLVhMqcgYA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View in a map
              </a>
            </div>
          </div>

          <div className="md:w-1/2 pt-5 max-w-[350px]">
            {locations.map((location, index) => (
              <div key={index} className="flex justify-between items-start mb-5">
                <div className="flex items-center gap-2">
                  {location.icon}
                  <span>{location.name}</span>
                </div>
                <span className="text-gray-600">{location.duration}</span>
              </div>
            ))}
            <button className="text-blue-600 hover:underline">
              See more about this area
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetails;