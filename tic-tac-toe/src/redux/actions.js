export const resetGame = () => ({
    type: 'RESET_GAME',
  });
  
  export const makeMove = (index) => ({
    type: 'MAKE_MOVE',
    payload: index,
  });
  