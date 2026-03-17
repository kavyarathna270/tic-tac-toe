const initialState = {
    currentPlayer: 'Player 1',
    winner: null,
    squares: Array(9).fill(null),
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'RESET_GAME':
        return {
          ...initialState,
        };
      case 'MAKE_MOVE':
        const squares = state.squares.slice();
        if (!squares[action.payload] && !state.winner) {
          squares[action.payload] = state.currentPlayer === 'Player 1' ? 'X' : 'O';
          const winner = calculateWinner(squares);
          return {
            ...state,
            currentPlayer: state.currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1',
            winner,
            squares,
          };
        }
        return state;
      default:
        return state;
    }
  };
  
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };
  
  export default rootReducer;
  