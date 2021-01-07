import { combineReducers } from "redux";
import {
  MOVE_UP,
  MOVE_DOWN,
  MOVE_LEFT,
  MOVE_RIGHT,
  ADD_NUMBER,
  RANDOM_NUMBER,
  START_GAME,
  FINISH_GAME,
  RESTART_GAME,
} from "./actions";

export const initialState = {
  board: {
    gridSize: 4,
    score: 0,
    best: 0,
    matrix: [
      [4, 2, 0, 0],
      [4, 2, 4, 0],
      [4, 0, 16, 2],
      [4, 2, 32, 0],
    ],
    numberAdded: 2,
  },
  game: {
    started: false,
    finished: false,
  },
};

export const board = (state = initialState.board, action) => {
  if (action.type == MOVE_UP) {
    return {
      ...state,
      matrix: MUp(state),
    };
  }
  if (action.type == MOVE_DOWN) {
    return {
      ...state,
      matrix: MDown(state),
    };
  }
  if (action.type == MOVE_LEFT) {
    return {
      ...state,
      matrix: MLeft(state),
    };
  }
  if (action.type == MOVE_RIGHT) {
    return {
      ...state,
      matrix: MRight(state),
    };
  }
  if (action.type == RANDOM_NUMBER) {
    var randomN = 2 * (Math.floor(Math.random() * 2) + 1);
    return {
      ...state,
      numberAdded: randomN,
    };
  }
  if (action.type == ADD_NUMBER) {
    return {
      ...state,
      matrix: ANumber(state),
    };
  }
  if (action.type === RESTART_GAME) {
    return (state = initialState.board);
  }
  return state;
};

export const game = (state = initialState.game, action) => {
  if (action.type == START_GAME) {
    return {
      ...state,
      started: true,
    };
  }
  if (action.type == FINISH_GAME) {
    return {
      ...state,
    };
  }

  return state;
};

const ANumber = (state) => {
  var mat = state.matrix;
  const size = state.gridSize;
  const num = state.numberAdded;
  const m = mat.flat();
  const result = m.filter((e) => e == 0);
  const count = result.length;
  const randomN = Math.floor(Math.random() * count + 1);
  var c = 0;
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if (c < randomN && mat[i][j] == 0) {
        c++;
      } else {
        if (c == randomN && mat[i][j] == 0) {
          mat[i][j] = num;
        }
      }
    }
  }
  return mat;
};

const MUp = (state) => {
  let mat = state.matrix;
  const size = state.gridSize;
  var ok;
  for (var j = 0; j < size; j++) {
    ok = 1;
    while (ok) {
      ok = 0;
      for (var i = size - 2; i >= 0; i--) {
        if (mat[i][j] != 0) {
          if (mat[i + 1][j] == mat[i][j]) {
            mat[i][j] = 0;
            mat[i + 1][j] = 2 * mat[i + 1][j];
            ok = 1;
          } else {
            if (mat[i + 1][j] == 0) {
              mat[i + 1][j] = mat[i][j];
              mat[i][j] = 0;
              ok = 1;
            }
          }
        }
      }
    }
  }
  console.log("up");
  return mat;
};

const MDown = (state) => {
  let mat = state.matrix;
  const size = state.gridSize;
  var ok;
  for (var j = 0; j < size; j++) {
    ok = 1;
    while (ok) {
      ok = 0;
      for (var i = size - 2; i >= 0; i--) {
        if (mat[i][j] != 0) {
          if (mat[i + 1][j] == mat[i][j]) {
            mat[i][j] = 0;
            mat[i + 1][j] = 2 * mat[i + 1][j];
            ok = 1;
          } else {
            if (mat[i + 1][j] == 0) {
              mat[i + 1][j] = mat[i][j];
              mat[i][j] = 0;
              ok = 1;
            }
          }
        }
      }
    }
  }
  console.log("down");
  return mat;
};

const MLeft = (state) => {
  let mat = state.matrix;
  const size = state.gridSize;
  var ok;
  for (var j = 0; j < size; j++) {
    ok = 1;
    while (ok) {
      ok = 0;
      for (var i = size - 2; i >= 0; i--) {
        if (mat[i][j] != 0) {
          if (mat[i + 1][j] == mat[i][j]) {
            mat[i][j] = 0;
            mat[i + 1][j] = 2 * mat[i + 1][j];
            ok = 1;
          } else {
            if (mat[i + 1][j] == 0) {
              mat[i + 1][j] = mat[i][j];
              mat[i][j] = 0;
              ok = 1;
            }
          }
        }
      }
    }
  }
  console.log("left");
  return mat;
};

const MRight = (state) => {
  let mat = state.matrix;
  const size = state.gridSize;
  var ok;
  for (var j = 0; j < size; j++) {
    ok = 1;
    while (ok) {
      ok = 0;
      for (var i = size - 2; i >= 0; i--) {
        if (mat[i][j] != 0) {
          if (mat[i + 1][j] == mat[i][j]) {
            mat[i][j] = 0;
            mat[i + 1][j] = 2 * mat[i + 1][j];
            ok = 1;
          } else {
            if (mat[i + 1][j] == 0) {
              mat[i + 1][j] = mat[i][j];
              mat[i][j] = 0;
              ok = 1;
            }
          }
        }
      }
    }
  }
  console.log("rightr");
  return mat;
};

export const appReducer = combineReducers({ board, game });
