import { useState, useEffect } from 'react';

const TypewriterTitle = () => {
  const colors = [
    'text-red-600',
    'text-blue-600',
    'text-green-600',
    'text-purple-600',
    'text-yellow-600',
    'text-pink-600',
    'text-indigo-600',
  ];

  const titles = [
    { text: "UI/UX designer.", pauseTime: 3000 },
    { text: "3D modeller.", pauseTime: 2000 },
    { text: "web designer.", pauseTime: 2500 },
    { text: "frontend developer.", pauseTime: 2000 },
    { text: "brother.", pauseTime: 2000 },
    { text: "creative developer.", pauseTime: 3000 },
    { text: "piano lover.", pauseTime: 3000 },
    { text: "friend.", pauseTime: 3000 },
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [shinyEffect, setShinyEffect] = useState(false);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const typeSpeed = 150;
    const deleteSpeed = 100;

    const handleTyping = () => {
      const currentTitle = titles[currentTitleIndex].text;
      const currentPauseTime = titles[currentTitleIndex].pauseTime;

      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        setShinyEffect(false);
        return currentPauseTime;
      }

      if (!isDeleting) {
        if (currentText !== currentTitle) {
          const nextChar = currentTitle.slice(0, currentText.length + 1);
          setCurrentText(nextChar);
          return typeSpeed;
        } else {
          setShinyEffect(true);
          setIsPaused(true);
          return currentPauseTime;
        }
      } else {
        if (currentText !== "") {
          const nextChar = currentTitle.slice(0, currentText.length - 1);
          setCurrentText(nextChar);
          return deleteSpeed;
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          setCurrentColorIndex((prev) => (prev + 1) % colors.length);
          return typeSpeed;
        }
      }
    };

    const timeout = setTimeout(() => {
      const nextDelay = handleTyping();
      clearTimeout(timeout);
    }, isDeleting ? deleteSpeed : (isPaused ? titles[currentTitleIndex].pauseTime : typeSpeed));

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTitleIndex, isPaused]);

  return (
    <div className={`${colors[currentColorIndex]} ${shinyEffect ? 'shiny-text' : ''}`}>
      {currentText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default TypewriterTitle;