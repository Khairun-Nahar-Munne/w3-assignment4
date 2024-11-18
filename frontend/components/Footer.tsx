import React from 'react';

const Footer = () => {
  return (
    <section>
      <section className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-10 items-center gap-5">
        <div className="md:row-start-1 md:col-span-4">
          <h2 className="text-2xl font-bold">About the host</h2>
        </div>
        
        <div className="md:row-start-1 col-span-5 md:col-start-5 mt-5 md:mt-0">
          <h4 className="text-lg font-semibold">Hosted by Evolve</h4>
        </div>
        
        <div className="md:row-start-2 md:col-start-5 md:col-span-5 mt-5 md:mt-0 row-start-2">
          <h4 className="text-lg font-semibold mb-2">Languages:</h4>
          <p>English, French, German, Spanish</p>
        </div>
      </section>

      <section className="grid grid-rows-1 grid-cols-1 md:grid-cols-10 items-center pt-10">
        <div className="md:row-start-1 md:col-span-4">
          <h2 className="text-2xl font-bold">Send a message</h2>
        </div>
        
        <div className="md:col-span-5 md:row-start-1 mt-5 md:mt-0">
          <button className="text-[rgb(57,86,218)] bg-white px-4 py-1 border border-[#7574] rounded-2xl hover:bg-gray-50 transition-colors">
            Contact Host
          </button>
        </div>
      </section>
    </section>
  );
};

export default Footer;