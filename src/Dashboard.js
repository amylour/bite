import React, { useState } from 'react';
import './App.css';

const Dashboard = () => {
  const [animate, setAnimate] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('right');
  const [colorSet, setColorSet] = useState(0);
  const numSquares = 5;

  const originalColors = ['bg-cyan-500', 'bg-red-500', 'bg-purple-600', 'bg-emerald-500', 'bg-amber-400'];
  const alternateColors = ['bg-pink-500', 'bg-green-500', 'bg-blue-600', 'bg-yellow-500', 'bg-gray-400'];

  const toggleColorSet = () => {
    setColorSet(prevSet => (prevSet === 0 ? 1 : 0));
  };

  const handleSquareClick = (index) => {
    setAnimate(true);
    // Determine the direction of the animation
    setAnimationDirection(index === 0 ? 'right' : index === numSquares - 1 ? 'left' : 'right');
    setTimeout(() => setAnimate(false), 1500);
  };

  const getSquareStyle = (index) => {
    let delay;
    if (animationDirection === 'right') {
      delay = index * 0.1; // Increment delay for rightward animation
    } else {
      delay = (numSquares - 1 - index) * 0.1; // Decrement delay for leftward animation
    }
    return {
      animationDelay: `${delay}s`
    };
  };

  const getColorClassName = (index) => {
    const colorClass = colorSet === 0 ? originalColors[index] : alternateColors[index];
    return `w-20 h-20 rounded-lg shadow-xl hover:scale-110 transition-transform duration-200 ${animate ? 'wave' : ''} ${colorClass}`;
  };

  return (
    <div className="flex justify-center items-center h-screen relative">
      <div className="absolute top-4 right-4">
        <label className="switch">
          <input type="checkbox" onChange={toggleColorSet} />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="bg-white p-10">
        <div className="flex flex-row gap-4">
          {originalColors.map((_, index) => (
            <div key={index} className={getColorClassName(index)} style={getSquareStyle(index)} onClick={() => handleSquareClick(index)}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
