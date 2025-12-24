
import React, { useEffect, useRef, useState } from 'react';

const LiveView: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-800">Billboard Area Live View</h3>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400">Last Update:</span>
          <div className="flex items-center gap-1">
            <span className="text-xs font-bold text-gray-700">Live</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-900 group">
        <img 
          src="./dooh-animation.gif" 
          alt="Live Feed" 
          className="w-full h-full object-cover opacity-80"
        />

        <div className="absolute top-4 right-4 flex gap-2">
           <button className="bg-white/90 hover:bg-white text-gray-700 text-xs font-bold px-4 py-2 rounded-lg transition-colors">Change Ad</button>
           <button className="bg-white/90 hover:bg-white text-gray-700 text-xs font-bold px-4 py-2 rounded-lg transition-colors">Show Viewers</button>
        </div>

        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-4 text-xs font-bold text-gray-700">
           <div className="flex items-center gap-2 border-r pr-4 border-gray-300">
             <div className="w-2 h-2 bg-green-500 rounded-full" />
             Currently Viewing: <span className="text-gray-900">18</span>
           </div>
           <div>
             Avg. Gaze: <span className="text-gray-900">4.2s</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default LiveView;
