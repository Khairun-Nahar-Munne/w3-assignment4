import { Hotel } from "@/types/hotel";
import {
  MapPin,
  Bed,
  Bath,
  ChevronRight,
  Users,
  Home,
  Plane,
} from "lucide-react";
import Amenities from "@/components/HotelDetails/Amenites";
import BookingCard from "@/components/HotelDetails/BookingCard";

interface Props {
  hotel: Hotel;
}
interface LocationInfo {
  icon: React.ReactNode;
  name: string;
  duration: string;
}

const HotelInfo: React.FC<Props> = ({ hotel }) => {
  const locations: LocationInfo[] = [
    {
      icon: <MapPin className="h-5 w-5" />,
      name: "Auke Bay",
      duration: "6 min drive",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      name: "University of Alaska-Southeast",
      duration: "10 min drive",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      name: "Mendenhall Golf Course",
      duration: "10 min drive",
    },
    {
      icon: <Plane className="h-5 w-5" />,
      name: "Juneau, AK (JNU-Juneau Intl.)",
      duration: "14 min drive",
    },
  ];
  return (
    <>
      <section className=" mx-auto  pb-8">
        <nav className="border-b border-gray-200 mb-6">
          <div className="flex gap-6">
            <a
              href="#"
              className="px-4 py-2 text-blue-600 border-b-2 border-blue-600"
            >
              Overview
            </a>
            <a href="#" className="px-4 py-2 text-gray-600">
              Amenities
            </a>
            <a href="#" className="px-4 py-2 text-gray-600">
              Policies
            </a>
          </div>
        </nav>

        <div>
          <div className="block md:flex md:justify-between">
            <div className="md:w-8/12">
              <div className="text-gray-600 text-sm mb-2">Entire home</div>
              <h1 className="text-4xl font-bold mb-8">{hotel.title}</h1>
              <p className="text-gray-600 mb-4">{hotel.description}</p>

              <div className="flex items-center gap-4 mb-6">
                <span className="bg-green-500 text-white px-2 py-1 rounded">
                  9.8
                </span>
                <p className="font-bold text-xl">Exceptional</p>
              </div>
              <a
                href="#"
                className="text-blue-600 flex items-center gap-2 mb-6"
              >
                See all 24 reviews
                <ChevronRight className="h-4 w-4" />
              </a>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Bed className="w-5 h-5" />
                  <span>{hotel.bedroomCount} bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="w-5 h-5" />
                  <span>{hotel.bathroomCount} bathroom</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{hotel.guestCount} guests</span>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  <span>1155 sq ft</span>
                </div>
              </div>
              <div className="max-w-full mx-auto space-y-8">
                {/* Amenities Section */}
                <Amenities amenities={hotel.amenities} />

                {/* Map Section */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">Explore the area</h2>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md border border-gray-200">
                      <div className="h-[150px] bg-cover bg-center bg-[url('/img6.png')]" />
                      <div className="p-4">
                      <span>{`${hotel.address.city}, ${hotel.address.country}`}</span> <br />
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

                    <div className="md:w-1/2 pt-5 ">
                      {locations.map((location, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-start mb-5"
                        >
                          <div className="flex items-center gap-2">
                            {location.icon}
                            <span>{location.name}</span>
                          </div>
                          <span className="text-gray-600">
                            {location.duration}
                          </span>
                        </div>
                      ))}
                      <button className="text-blue-600 hover:underline">
                        See more about this area
                      </button>
                    </div>
                  </div>
                </section>
              </div>
          
            </div>
            <BookingCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelInfo;
