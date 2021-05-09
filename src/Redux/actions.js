export const MOVE_UP = "MOVE_UP";
export const MOVE_DOWN = "MOVE_DOWN";
export const MOVE_LEFT = "MOVE_LEFT";
export const MOVE_RIGHT = "MOVE_RIGHT";
export const ADD_NUMBER = "ADD_NUMBER";
export const RANDOM_NUMBER = "RANDOM_NUMBER";
export const RESTART_GAME = "RESTART_GAME";
export const INCREMENT_SCORE = "INCREMENT_SCORE";
export const INCREMENT_BEST = "INCREMENT_BEST";
export const START_GAME = "START_GAME";
export const END_GAME = "END_GAME";

export const moveUp = () => {
  return {
    type: MOVE_UP,
  };
};

export const moveDown = () => {
  return {
    type: MOVE_DOWN,
  };
};

export const moveLeft = () => {
  return {
    type: MOVE_LEFT,
  };
};

export const moveRight = () => {
  return {
    type: MOVE_RIGHT,
  };
};

export const addNumber = () => {
  return {
    type: ADD_NUMBER,
  };
};

export const randomNumber = () => {
  return {
    type: RANDOM_NUMBER,
  };
};

export const restartGame = () => {
  return {
    type: RESTART_GAME,
  };
};

export const incrementScore = (num) => {
  return {
    type: INCREMENT_SCORE,
    num,
  };
};

export const incrementBest = (num) => {
  return {
    type: INCREMENT_BEST,
    num,
  };
};

export const startGame = () => {
  return {
    type: START_GAME,
  };
};

export const endGame = () => {
  return {
    type: END_GAME,
  };
};
