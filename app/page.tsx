'use client'

import Image from "next/image";
import Card from "./components/card";
import projects from "./components/projects";
import CardGrid from "./components/cardGrid";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <canvas id="myCanvas" width="1080" height="500"></canvas>
      
    </main>
  );
}






if (typeof window !== 'undefined') {
  const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const length = 150; // Length of the branches
  const branches = 4; // Number of branches
  let angleOffset = 0; // Offset to animate the branches
  const squareSize = 10; // Size of the square
  const squares: { x: number; y: number; }[] = []; // Array to store the squares

  const draw = function() {
    ctx?.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    squares.length = 0; // Clear the squares array

    for (let i = 0; i < branches; i++) {
      const angle = ((i * Math.PI * 2) / branches) + angleOffset;
      const x = centerX + length * Math.cos(angle);
      const y = centerY + length * Math.sin(angle);

      ctx?.beginPath();
      ctx?.moveTo(centerX, centerY);
      ctx?.lineTo(x, y);
      ctx?.stroke();

      // Draw a black square at the end of the branch
      if (ctx) {
      ctx.fillStyle = 'black';
      ctx?.fillRect(x - squareSize / 2, y - squareSize / 2, squareSize, squareSize);
      }

      // Store the square in the squares array
      squares.push({ x, y });
    }

    angleOffset += 0.01; // Increase the offset to animate the branches
    requestAnimationFrame(draw); // Call draw again on the next frame
  }

  draw(); // Start the animation

  // Add a mousemove event listener to the canvas
  canvas.addEventListener('mousemove', function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Check if the mouse is over one of the squares
    for (const square of squares) {
      const dx = mouseX - square.x;
      const dy = mouseY - square.y;

      if (Math.sqrt(dx * dx + dy * dy) < squareSize / 2) {
        // The mouse is over this square, so draw additional branches from it
        for (let i = 0; i < 3; i++) {
          const angle = (i * Math.PI * 2) / 3;
          const x = square.x + length * Math.cos(angle) / 2;
          const y = square.y + length * Math.sin(angle) / 2;

          ctx?.beginPath();
          ctx?.moveTo(square.x, square.y);
          ctx?.lineTo(x, y);
          ctx?.stroke();
        }

        break;
      }
    }
  });
}