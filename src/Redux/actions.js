export const MOVE_UP = "MOVE_UP";
export const MOVE_DOWN = "MOVE_DOWN";
export const MOVE_LEFT = "MOVE_LEFT";
export const MOVE_RIGHT = "MOVE_RIGHT";
export const ADD_NUMBER = "ADD_NUMBER";
export const RANDOM_NUMBER = "RANDOM_NUMBER";
export const START_GAME = "START_GAME";
export const FINISH_GAME = "FINISH GAME";

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

export const startGame = () => {
  return {
    type: START_GAME,
  };
};

export const finishGame = () => {
  return {
    type: FINISH_GAME,
  };
};
