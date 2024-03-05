// pages/index.js
import React, { useRef, useEffect } from 'react';
import TopicSquare from '../components/TopicSquare';

const topics = [
  { name: 'Topic 1', angle: 45 },
  { name: 'Topic 2', angle: 135 },
  { name: 'Topic 3', angle: 225 },
  { name: 'Topic 4', angle: 315 },
];

const HomePage = () => {
  const centerRef = useRef(null);

  useEffect(() => {
    const centerElement = centerRef.current;
    if (centerElement) {
      const centerX = centerElement.offsetLeft + centerElement.offsetWidth / 2;
      const centerY = centerElement.offsetTop + centerElement.offsetHeight / 2;

      topics.forEach((topic, index) => {
        const square = document.querySelectorAll('.topic-square')[index];
        const squareRect = square.getBoundingClientRect();
        const squareX = squareRect.left + squareRect.width / 2;
        const squareY = squareRect.top + squareRect.height / 2;
        const angle = Math.atan2(squareY - centerY, squareX - centerX) * (180 / Math.PI);
        topic.angle = angle;
      });
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen relative">
      <div className="grid grid-cols-2 gap-4">
        {topics.map((topic, index) => (
          <TopicSquare
            key={index}
            topic={topic}
            centerX={centerRef.current ? centerRef.current.offsetLeft + centerRef.current.offsetWidth / 2 : 0}
            centerY={centerRef.current ? centerRef.current.offsetTop + centerRef.current.offsetHeight / 2 : 0}
          />
        ))}
      </div>
      <div ref={centerRef} className="absolute w-8 h-8 bg-gray-400 rounded-full" />
    </div>
  );
};

export default HomePage;