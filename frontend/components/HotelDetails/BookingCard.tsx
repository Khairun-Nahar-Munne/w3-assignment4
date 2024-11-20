import { useState } from 'react';
import Link from 'next/link';
import { Calendar, User, Info, CheckCircle  } from 'lucide-react';
interface TravelerCounts {
    adults: number;
    children: number;
}

export default function BookingCard() {
  const [travelerCounts, setTravelerCounts] = useState<TravelerCounts>({
    adults: 2,
    children: 0,
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const totalTravelers = travelerCounts.adults + travelerCounts.children;

  const handleCountChange = (
    type: keyof TravelerCounts,
    increment: boolean
  ) => {
    setTravelerCounts((prev) => ({
      ...prev,
      [type]: increment ? prev[type] + 1 : Math.max(0, prev[type] - 1),
    }));
  };
  return (
    <div>
      {" "}
      {/* Booking Card */}
      <div className=" bottom-0 left-0 right-0 bg-white p-4 lg:p-6 shadow-lg lg:shadow-none">
        <div className="max-w-lg mx-auto">
          <div className="bg-gray-800 flex text-white p-6 rounded-lg mb-6 gap-3">
            <img src="/sin-in-icon.png" alt="" className="h-[100%] w-[40%]" />

            <div>
              {" "}
              <h2 className="text-xl mb-4">
                Members get our best prices when signed in!
              </h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
                Sign In
              </button>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex border-b-2 items-baseline mb-4 pb-3">
              <span className="text-2xl font-bold">$134</span>
              <span className="text-gray-600 ml-2">per night</span>
            </div>

            <div className="mb-2">
              <p className="text-green-600 font-bold flex items-center gap-1">
                Free cancellation <Info className="w-4 h-4" />
              </p>
              <p className="text-sm text-gray-600">Before Mon, Nov 4</p>
            </div>
            <div className="flex items-center mb-5 rounded-md">
              <p className="flex items-center gap-1 text-sm">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Your dates are available
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="border rounded p-3">
                <div className="text-sm text-gray-600">Check-in</div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Nov 18</span>
                </div>
              </div>
              <div className="border rounded p-3">
                <div className="text-sm text-gray-600">Check-out</div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Nov 20</span>
                </div>
              </div>
            </div>

            <div className="relative mb-6">
              <div
              data-testid="travelers-button"
                className="border rounded p-3 cursor-pointer"
                onClick={() => setIsPopupOpen(!isPopupOpen)}
              >
                <div className="text-sm text-gray-600">Travelers</div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>
                    {totalTravelers} traveler
                    {totalTravelers !== 1 ? "s" : ""}
                  </span>
                </div>
              </div>

              {isPopupOpen && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white border rounded-lg shadow-lg p-4 z-50">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Adults</h3>
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          className="w-8 h-8 rounded-full border flex items-center justify-center disabled:opacity-50"
                          onClick={() => handleCountChange("adults", false)}
                          disabled={travelerCounts.adults === 0}
                        >
                          -
                        </button>
                        <span>{travelerCounts.adults}</span>
                        <button
                          className="w-8 h-8 rounded-full border flex items-center justify-center"
                          onClick={() => handleCountChange("adults", true)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Children</h3>
                        <p className="text-sm text-gray-600">Ages 0 to 17</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          className="w-8 h-8 rounded-full border flex items-center justify-center disabled:opacity-50"
                          onClick={() => handleCountChange("children", false)}
                          disabled={travelerCounts.children === 0}
                        >
                          -
                        </button>
                        <span>{travelerCounts.children}</span>
                        <button
                          className="w-8 h-8 rounded-full border flex items-center justify-center"
                          onClick={() => handleCountChange("children", true)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>I am traveling with pets</span>
                    </label>

                    <button
                      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                      onClick={() => setIsPopupOpen(false)}
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between font-bold mb-2">
              <span>Total</span>
              <span>$543</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-6">
              <span>Total includes fees, not tax</span>
              <button className="text-blue-600">Price details</button>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 mb-4">
              Book now
            </button>

            <p className="text-center text-sm text-gray-600">
              You will not be charged yet
            </p>
          </div>

          <Link
            href="#"
            className="block text-center text-blue-600 font-bold my-4 border-b-2 pb-2"
          >
            Contact host
          </Link>

          <div className="text-center text-sm text-gray-600">
            <span className="font-bold">Property # </span>
            9838104ha
          </div>
        </div>
      </div>
    </div>
  );
}
