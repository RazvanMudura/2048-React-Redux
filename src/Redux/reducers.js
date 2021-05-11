import { combineReducers } from "redux";
import {
  MOVE_UP,
  MOVE_DOWN,
  MOVE_LEFT,
  MOVE_RIGHT,
  ADD_NUMBER,
  RANDOM_NUMBER,
  RESTART_GAME,
  INCREMENT_SCORE,
  INCREMENT_BEST,
  START_GAME,
  END_GAME,
} from "./actions";
import { Move } from "../App/Moves";

export const initialState = {
  board: {
    gridSize: 4,
    score: 0,
    best: 0,
    matrix: [
      [3, 4, 7, 11],
      [2, 5, 11, 7],
      [3, 8, 7, 11],
      [4, 5, 11, 7],
    ],
    numberAdded: 2,
    started: false,
    ended: false,
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
    return {
      ...state,
      score: 0,
      matrix: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      started: false,
      ended: false,
    };
  }

  if (action.type == START_GAME) {
    return {
      ...state,
      started: true,
    };
  }

  if (action.type == END_GAME) {
    return {
      ...state,
      ended: true,
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
  const result = m.filter((e) => e == 0);
  const count = result.length;
  const randomN = Math.floor(Math.random() * count + 1);

  var c = 0;
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if (mat[i][j] == 0) {
        if (c == randomN - 1) {
          mat[i][j] = num;
        }
        c++;
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

export const appReducer = combineReducers({ board });
