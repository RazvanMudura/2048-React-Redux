export const MOVE_UP = "MOVE_UP";
export const MOVE_DOWN = "MOVE_DOWN";
export const MOVE_LEFT = "MOVE_LEFT";
export const MOVE_RIGHT = "MOVE_RIGHT";

export const moveUp = () => {
  console.log("w");
  return {
    type: MOVE_UP,
  };
};

export const moveDown = () => {
  console.log("s");
  return {
    type: MOVE_DOWN,
  };
};

export const moveLeft = () => {
  console.log("a");
  return {
    type: MOVE_LEFT,
  };
};

export const moveRight = () => {
  console.log("d");
  return {
    type: MOVE_RIGHT,
  };
};
