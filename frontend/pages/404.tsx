// pages/404.tsx
import React from 'react';
import { AlertOctagon, Home } from 'lucide-react';

const Custom404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-4">
    <div className="bg-white shadow-2xl rounded-xl p-8 text-center max-w-md w-full transform transition-all hover:scale-105 duration-300">
      <AlertOctagon 
        className="mx-auto mb-6 text-red-500" 
        size={80} 
        strokeWidth={1.5}
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 mb-6">
        Sorry, the hotel you are looking for does not exist.
      </p>
      <button 
        className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors flex items-center mx-auto space-x-2"
        onClick={() => window.location.href = '/'}
      >
        <Home size={20} />
        <a href="http://localhost:3000/">Return to Home</a>
      </button>
    </div>
  </div>
  );
};

export default Custom404;
