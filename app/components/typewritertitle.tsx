import { useState, useEffect } from 'react';

const TypewriterTitle = () => {
  const titles = [
    { text: "UI/UX designer", pauseTime: 3000 },    // 3 seconds pause
    { text: "3D modeller", pauseTime: 2000 },       // 2 seconds pause
    { text: "web designer", pauseTime: 2500 },      // 2.5 seconds pause
    { text: "frontend developer", pauseTime: 2000 }, // 2 seconds pause
    { text: "creative developer", pauseTime: 3000 }  // 3 seconds pause
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    const typeSpeed = 150;    // Speed for typing each character
    const deleteSpeed = 100;  // Speed for deleting each character
    
    const handleTyping = () => {
      const currentTitle = titles[currentTitleIndex].text;
      const currentPauseTime = titles[currentTitleIndex].pauseTime;
      
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return currentPauseTime;
      }
      
      if (!isDeleting) {
        // Typing
        if (currentText !== currentTitle) {
          const nextChar = currentTitle.slice(0, currentText.length + 1);
          setCurrentText(nextChar);
          return typeSpeed;
        } else {
          // Finished typing, start pause
          setIsPaused(true);
          return currentPauseTime;
        }
      } else {
        // Deleting
        if (currentText !== "") {
          const nextChar = currentTitle.slice(0, currentText.length - 1);
          setCurrentText(nextChar);
          return deleteSpeed;
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
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
    <span id="specialText" className="not-italic">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypewriterTitle;