'use client'
import React, { useState, useEffect } from 'react';

const gridHeight = 15;
const gridWidth = 15;
const centerRow = Math.floor(gridHeight / 2);
const centerCol = Math.floor(gridWidth / 2);

const Page = () => {
  const [grid, setGrid] = useState(Array(gridHeight).fill(null).map(() => Array(gridWidth).fill(null)));

  let [displayTopics, setDisplayTopics] = useState(false);

  let [displaySubTopics, setDisplaySubTopics] = useState(false);

  useEffect(() => {
    // Generate grid with center box, boxes, and subboxes
    const newGrid = Array(gridHeight).fill(null).map(() => Array(gridWidth).fill(null));
    newGrid[centerRow][centerCol] = { type: 'center', subboxes: [] };
    for (let i = 0; i < 5; i++) {
      let row, col;
      do {
        row = Math.floor(Math.random() * gridHeight);
        col = Math.floor(Math.random() * gridWidth);
      } while (newGrid[row][col] !== null);
      newGrid[row][col] = { type: 'box', subboxes: [] };
      for (let j = 0; j < 3; j++) {
        let subRow, subCol;
        do {
          subRow = Math.floor(Math.random() * gridHeight);
          subCol = Math.floor(Math.random() * gridWidth);
        } while (newGrid[subRow][subCol] !== null);
        newGrid[subRow][subCol] = { type: 'subbox', parent: { row, col } };
        newGrid[row][col].subboxes.push({ row: subRow, col: subCol });
      }
    }
    setGrid(newGrid);
  }, []);

  return (
    <main className="w-full h-screen relative">
      <svg className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) =>
            cell && cell.type === 'box' ? (
              <>
                <line
                  key={`${rowIndex}-${colIndex}-center-h`}
                  x1={`${(centerCol + 0.5) * 100 / gridWidth}%`}
                  y1={`${(centerRow + 0.5) * 100 / gridHeight}%`}
                  x2={`${(colIndex + 0.5) * 100 / gridWidth}%`}
                  y2={`${(centerRow + 0.5) * 100 / gridHeight}%`}
                  stroke="black"
                />
                <line
                  key={`${rowIndex}-${colIndex}-center-v`}
                  x1={`${(colIndex + 0.5) * 100 / gridWidth}%`}
                  y1={`${(centerRow + 0.5) * 100 / gridHeight}%`}
                  x2={`${(colIndex + 0.5) * 100 / gridWidth}%`}
                  y2={`${(rowIndex + 0.5) * 100 / gridHeight}%`}
                  stroke="black"
                />
                {cell.subboxes.map((subbox: { col: number; row: number; }, i: any) => (
                  <>
                    <line
                      key={`${rowIndex}-${colIndex}-${i}-subbox-h`}
                      x1={`${(colIndex + 0.5) * 100 / gridWidth}%`}
                      y1={`${(rowIndex + 0.5) * 100 / gridHeight}%`}
                      x2={`${(subbox.col + 0.5) * 100 / gridWidth}%`}
                      y2={`${(rowIndex + 0.5) * 100 / gridHeight}%`}
                      stroke="black"
                    />
                    <line
                      key={`${rowIndex}-${colIndex}-${i}-subbox-v`}
                      x1={`${(subbox.col + 0.5) * 100 / gridWidth}%`}
                      y1={`${(rowIndex + 0.5) * 100 / gridHeight}%`}
                      x2={`${(subbox.col + 0.5) * 100 / gridWidth}%`}
                      y2={`${(subbox.row + 0.5) * 100 / gridHeight}%`}
                      stroke="black"
                    />
                  </>
                ))}
              </>
            ) : null
          )
        )}
      </svg>
      <div className="grid grid-cols-15 grid-rows-15 h-screen z-10">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`${
                cell ? "bg-blue-500" : "bg-white"
              } col-span-1 row-span-1 border`}
            >
              {cell && cell.type === 'center' && (
                <button
                  style={{ backgroundColor: 'black', color: 'white' }}
                  className="w-full h-full"
                  onClick={() => {
                    setDisplayTopics(true);
                  }}
                >
                  Center
                </button>
              )}
              {cell && cell.type === 'box' && displayTopics && (
                <button
                  style={{ backgroundColor: 'red', color: 'white' }}
                  className="w-full h-full"
                  onClick={() => {
                    setDisplaySubTopics(true);
                  }}
                >
                  Box
                </button>
              )}
              {cell && cell.type === 'subbox' && displaySubTopics && (
                <button
                  style={{ backgroundColor: 'green', color: 'white' }}
                  className="w-full h-full"
                  onClick={() => console.log('Subbox button clicked!')}
                >
                  Subbox
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default Page;