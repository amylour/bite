import React, { useState, useEffect } from 'react';
import './App.css';

const Dashboard = () => {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1500); 
  };

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-10">
        <div className="flex flex-row gap-4">
          <div className={`w-20 h-20 bg-cyan-500 rounded-lg shadow-xl hover:scale-110 transition-transform duration-200 ${animate ? 'wave' : ''}`} style={{ animationDelay: `0s` }}></div>
          <div className={`w-20 h-20 bg-red-500 rounded-lg shadow-xl hover:scale-110 transition-transform duration-200 ${animate ? 'wave' : ''}`} style={{ animationDelay: `0.1s` }}></div>
          <div className={`w-20 h-20 bg-purple-600 rounded-lg shadow-xl hover:scale-110 transition-transform duration-200 ${animate ? 'wave' : ''}`} style={{ animationDelay: `0.2s` }}></div>
          <div className={`w-20 h-20 bg-emerald-500 rounded-lg shadow-xl hover:scale-110 transition-transform duration-200 ${animate ? 'wave' : ''}`} style={{ animationDelay: `0.3s` }}></div>
          <div className={`w-20 h-20 bg-amber-400 rounded-lg shadow-xl hover:scale-110 transition-transform duration-200 ${animate ? 'wave' : ''}`} style={{ animationDelay: `0.4s` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
