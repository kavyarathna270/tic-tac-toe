import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';
import '../board.css'; // Import the CSS file

function Game() {
  const [squares, setSquares] = useState(Array(3).fill(Array(3).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState('O');
  const [winner, setWinner] = useState(null);

  const handleClick = (row, col) => {
    if (squares[row][col] === null && !winner) {
      const newSquares = squares.map((r, rowIndex) =>
        r.map((c, colIndex) => (rowIndex === row && colIndex === col ? currentPlayer : c))
      );
      setSquares(newSquares);
      const newWinner = calculateWinner(newSquares);
      if (newWinner) {
        setWinner(newWinner);
      } else {
        setCurrentPlayer(currentPlayer === 'O' ? 'X' : 'O');
      }
    }
  };

  const resetGame = () => {
    setSquares(Array(3).fill(Array(3).fill(null)));
    setCurrentPlayer('O');
    setWinner(null);
  };

  return (
    <div>
      <div className="mt-4 mb-3">
        <Board squares={squares} onClick={handleClick} />
      </div>
      <div className="text-center">
        {winner ? (
          <p className="font-weight-bold">Player {winner} wins!</p>
        ) : (
          <p>Current player: {currentPlayer}</p>
        )}
        <button className="btn btn-primary" onClick={resetGame}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Game;
