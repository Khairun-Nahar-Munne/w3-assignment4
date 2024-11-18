import React, { useState } from 'react';
import { Search } from 'lucide-react';

const QuestionSearch = () => {
  const [searchQuery, setSearchQuery] = useState('Is there free parking?');

  return (
    <section className="mt-10 bg-gray-100 rounded-2xl px-8 py-5 md:px-8">
      <div className="py-5 mb-5">
        <div className="flex items-center justify-between mb-2.5">
          <h2 className="text-2xl font-semibold">
            Have a question?{' '}
            
          </h2>
          <span className="ml-2.5 bg-black text-white text-xs px-2 py-1.5 rounded">
              Beta
            </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">
          Get instant answers with AI powered search of property information
          and reviews.
        </p>
        
        <div className="flex justify-between items-center ">
          <div className="flex rounded-lg border-[3px] border-gray-300  w-[85%] md:w-[96%]">
            <button className="border-none px-5 py-3">
              <Search className="text-gray-400" size={20} />
            </button>
            <div>
              <h5 className="font-medium">Ask a question</h5>
              <input
                type="text"
                className="bg-gray-100 text-gray-600 mt-1 flex-1 border-none outline-none text-sm w-full"
                placeholder="Is there free parking?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <button className="bg-blue-500 text-gray-300 rounded-full p-2.5 cursor-pointer">
            <Search size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuestionSearch;