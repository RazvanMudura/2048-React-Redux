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
  INCREMENT_SCORE,
  INCREMENT_BEST,
} from "./actions";

export const initialState = {
  board: {
    gridSize: 4,
    score: 0,
    best: 10,
    matrix: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 2],
      [0, 0, 0, 0],
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
      matrix: Move(state, 8),
    };
  }
  if (action.type == MOVE_DOWN) {
    return {
      ...state,
      matrix: Move(state, 2),
    };
  }
  if (action.type == MOVE_LEFT) {
    return {
      ...state,
      matrix: Move(state, 4),
    };
  }
  if (action.type == MOVE_RIGHT) {
    return {
      ...state,
      matrix: Move(state, 6),
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
  if (action.type == INCREMENT_SCORE) {
    const add = action.num + state.score;
    return {
      ...state,
      score: add,
    };
  }

  if (action.type == INCREMENT_BEST) {
    const add = action.num;
    return {
      ...state,
      best: add,
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
  let arrMat = [];
  var mat = state.matrix;
  const size = state.gridSize;
  const num = state.numberAdded;
  const m = mat.flat();
  const result = m.filter((e) => e == undefined);
  const count = result.length;
  const randomN = Math.floor(Math.random() * count + 1);
  var c = 0;
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if (c == randomN && mat[i][j] == 0) {
        mat[i][j] = num;
      } else {
        if (mat[i][j] == 0) {
          c++;
        }
      }
    }
  }
  for (var i = 0; i < size; i++) {
    let arr = [];
    for (var j = 0; j < size; j++) {
      arr.push(mat[i][j]);
    }
    arrMat.push(arr);
  }
  return arrMat;
};

const Move = (state, direction) => {
  let mat = state.matrix;
  let arrMat = [];
  const size = state.gridSize;
  var ok;
  //up
  if (direction == 8) {
    for (var j = 0; j < size; j++) {
      ok = 1;
      while (ok) {
        ok = 0;
        for (var i = 1; i < size; i++) {
          if (mat[i][j] != 0) {
            if (mat[i - 1][j] == mat[i][j]) {
              mat[i][j] = 0;
              mat[i - 1][j] = 2 * mat[i - 1][j];
              ok = 1;
            } else {
              if (mat[i - 1][j] == 0) {
                mat[i - 1][j] = mat[i][j];
                mat[i][j] = 0;
                ok = 1;
              }
            }
          }
        }
      }
    }
  }
  //down
  if (direction == 2) {
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
  }
  //left
  if (direction == 4) {
    for (var i = 0; i < size; i++) {
      ok = 1;
      while (ok) {
        ok = 0;
        for (var j = 1; j < size; j++) {
          if (mat[i][j] != 0) {
            if (mat[i][j - 1] == mat[i][j]) {
              mat[i][j] = 0;
              mat[i][j - 1] = 2 * mat[i][j - 1];
              ok = 1;
            } else {
              if (mat[i][j - 1] == 0) {
                mat[i][j - 1] = mat[i][j];
                mat[i][j] = 0;
                ok = 1;
              }
            }
          }
        }
      }
    }
  }
  //right
  if (direction == 6) {
    for (var i = 0; i < size; i++) {
      ok = 1;
      while (ok) {
        ok = 0;
        for (var j = size - 2; j >= 0; j--) {
          if (mat[i][j] != 0) {
            if (mat[i][j + 1] == mat[i][j]) {
              mat[i][j] = 0;
              mat[i][j + 1] = 2 * mat[i][j + 1];
              ok = 1;
            } else {
              if (mat[i][j + 1] == 0) {
                mat[i][j + 1] = mat[i][j];
                mat[i][j] = 0;
                ok = 1;
              }
            }
          }
        }
      }
    }
  }
  //array switch
  for (var i = 0; i < size; i++) {
    let arr = [];
    for (var j = 0; j < size; j++) {
      arr.push(mat[i][j]);
    }
    arrMat.push(arr);
  }
  return arrMat;
};

export const appReducer = combineReducers({ board, game });
