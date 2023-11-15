import React from 'react';

const CenteredSquares = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="w-20 h-20 bg-blue-500 rounded-lg"></div>
          <div className="w-20 h-20 bg-red-500 rounded-lg"></div>
          <div className="w-20 h-20 bg-green-500 rounded-lg"></div>
          <div className="w-20 h-20 bg-yellow-500 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default CenteredSquares;
