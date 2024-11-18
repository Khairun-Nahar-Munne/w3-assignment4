import React from 'react';
import Link from 'next/link';
import { BedIcon } from 'lucide-react';

const RoomDetailsAndSpaces = () => {
  return (
    <section className="space-y-8 mt-5">
      {/* Room Details Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Rooms & beds</h2>
        <div className="mb-4">
          <h4 className="text-lg">2 bedrooms (sleeps 4)</h4>
        </div>

        <div className="grid grid-cols-2 gap-1 mb-5 md:grid-cols-3">
          <div className="p-2.5 rounded-lg">
            <div className="text-sm font-medium mb-1">Bedroom 1</div>
            <div className="text-gray-600 text-sm flex flex-col gap-2.5">
              <span className="flex items-center">
                <BedIcon className="mr-2 h-5 w-5" />
                1 Queen Bed
              </span>
            </div>
          </div>
          <div className="p-2.5 rounded-lg">
            <div className="text-sm font-medium mb-1">Bedroom 2</div>
            <div className="text-gray-600 text-sm flex flex-col gap-2.5">
              <span className="flex items-center">
                <BedIcon className="mr-2 h-5 w-5" />
                1 Twin Bed
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <h4 className="text-lg">1 bathroom</h4>
          <p className="text-sm">Full Bathroom</p>
        </div>
      </div>

      {/* Spaces Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Spaces</h2>
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
    </section>
  );
};

export default RoomDetailsAndSpaces;