import React from 'react';
import '../board.css'; // Import the CSS file

function Square({ value, onClick }) {
  return (
    <button className="btn btn-square" onClick={onClick}>{value}</button>
  );
}

function Board({ squares, onClick }) {
  return (
    <div>
      {squares.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((col, colIndex) => (
            <Square
              key={colIndex}
              value={squares[rowIndex][colIndex]}
              onClick={() => onClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
