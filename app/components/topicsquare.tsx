// components/TopicSquare.jsx
import React, { useState } from 'react';

const TopicSquare = ({ topic, centerX, centerY }: { topic: any, centerX: any, centerY: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative">
      <div
        className={`bg-gray-300 rounded-md p-4 transition-all duration-300 ${
          isHovered ? 'w-64' : 'w-16'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered && <span className="pl-8">{topic.name}</span>}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-0.5 h-full bg-gray-400"
          style={{
            transform: `translateX(${centerX}px) rotate(${topic.angle}deg)`,
          }}
        />
      </div>
    </div>
  );
};

export default TopicSquare;