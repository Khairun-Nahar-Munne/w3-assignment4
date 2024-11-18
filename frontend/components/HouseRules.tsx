import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby, faCalendarAlt, faPaw, faSmokingBan, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const HouseRules: FC = () => {
  return (
    <div className="mt-10 mb-10 flex flex-col gap-10">
      {/* House Rules Section */}
      <section className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="text-2xl font-bold">House Rules</h2>
        </div>
        
        <div className="md:col-span-7 pt-2">
          <div className="flex flex-row gap-10 lg:gap-48 md:gap-12 mb-5">
            <div className="flex flex-col gap-5 text-sm text-gray-700">
              <p>Check in after 3:00 PM</p>
              <p>Check out before 11.00 AM</p>
            </div>
            <div className="text-sm text-gray-700">Minimum age to rent: 25</div>
          </div>
          
          <div className="grid grid-cols-2  gap-10">
            {[
              { icon: faBaby, title: 'Children', text: 'Children allowed: ages 0-17' },
              { icon: faCalendarAlt, title: 'Events', text: 'No events allowed' },
              { icon: faPaw, title: 'Pets', text: 'No pets allowed' },
              { icon: faSmokingBan, title: 'Smoking', text: 'Smoking is not permitted' }
            ].map((rule, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-lg font-bold">
                  <span className="w-6 h-6 flex items-center justify-center text-gray-700">
                    <FontAwesomeIcon icon={rule.icon} />
                  </span>
                  {rule.title}
                </div>
                <div className="text-sm text-gray-600">{rule.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Damage and Incidents Section */}
      <section className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="text-2xl font-bold">Damage and Incidents</h2>
        </div>
        <div className="md:col-span-7 pt-2">
          <p className="text-gray-700">
            You will be responsible for any damage to the rental property
            caused by you or your party during your stay
          </p>
        </div>
      </section>

      {/* Cancellation Section */}
      <section className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="text-2xl font-bold">Cancellation</h2>
        </div>
        <div className="md:col-span-7 pt-2">
          <div className="bg-[#e7fafb] rounded-xl p-8 w-full md:w-3/5 mx-auto mb-8">
            <div className="hidden md:block">
              <div className="flex justify-around mb-4">
                <div>Full Refund</div>
                <div>No Refund</div>
              </div>
              <div className="relative h-0.5 bg-gray-300 my-8">
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-3 h-3 bg-black rounded-full" />
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 w-2.5 h-2.5 border-2 border-black bg-white rounded-full" />
                <div className="absolute top-1/2 -translate-y-1/2 right-0 w-2.5 h-2.5 border-2 border-black bg-white rounded-full" />
              </div>
              <div className="flex justify-between text-sm">
                <span>Today</span>
                <span>Nov 4</span>
                <span>Check-in</span>
              </div>
            </div>

            <div className="md:hidden flex items-center justify-center">
              <div className="flex flex-col justify-center items-center gap-12 h-full">
                <div>Full Refund</div>
                <div>No Refund</div>
              </div>
              <div className="relative w-0.5 h-52 bg-gray-800 mx-5">
                <div className="absolute top-0 -translate-x-1/2 w-2.5 h-2.5 bg-black rounded-full" />
                <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 border-2 border-black bg-white rounded-full" />
                <div className="absolute bottom-0 -translate-x-1/2 w-2.5 h-2.5 border-2 border-black bg-white rounded-full" />
              </div>
              <div className="flex flex-col justify-between h-52 text-sm">
                <span>Today</span>
                <span>Nov 4</span>
                <span>Check-in</span>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="py-5 border-b border-gray-200 flex gap-10">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold tracking-wide">Before</span>
                <span className="text-base font-semibold">Nov 4</span>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Full refund</div>
                <div className="text-sm text-gray-600 leading-relaxed">
                  Cancel your reservation before Nov 4 at 11:59 PM, and
                  you'll get a full refund. Times are based on the
                  property's local time.
                </div>
              </div>
            </div>
            <div className="py-5 flex gap-10">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold tracking-wide">After</span>
                <span className="text-base font-semibold">Nov 4</span>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900 mb-2">No refund</div>
                <div className="text-sm text-gray-600 leading-relaxed">
                  After that, you won't get a refund.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information Section */}
      <section className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="text-2xl font-bold">Important Information</h2>
        </div>
        <div className="md:col-span-7 pt-2">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">You need to know</h2>
            <ul className="flex flex-col text-gray-600">
              {[
                'Extra-person charges may apply and vary depending on property policy',
                'Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges',
                'Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed',
                'Onsite parties or group events are strictly prohibited',
                'Host has indicated there is a carbon monoxide detector on the property',
                'Host has indicated there is a smoke detector on the property',
                'Safety features at this property include a fire extinguisher and a first aid kit'
              ].map((item, index) => (
                <li key={index} className="py-1.5">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="md:col-span-7 pt-2">
          <div className="flex flex-col gap-5">
            {[
              'Is Juneau Vacation Home: Stunning View + Beach Access pet-friendly?',
              'What time is check-in at Juneau Vacation Home: Stunning View + Beach Access?',
              'What time is check-out at Juneau Vacation Home: Stunning View + Beach Access?',
              'Where is Juneau Vacation Home: Stunning View + Beach Access located?'
            ].map((question, index) => (
              <div key={index} className="flex gap-2.5 font-bold">
                <FontAwesomeIcon icon={faChevronDown} className="mt-1" />
                <span>{question}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HouseRules;