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
} from "./actions";

export const initialState = {
  board: {
    gridSize: 4,
    score: 0,
    best: 0,
    matrix: [
      [0, 0, 0, 0],
      [0, 2, 4, 0],
      [0, 0, 16, 2],
      [0, 0, 32, 0],
    ],
  },
  game: {
    started: false,
    finished: false,
    numberAdded: 2,
  },
};

export const board = (state = initialState.board, action) => {
  if (action.type == MOVE_UP) {
    return {
      ...state,
    };
  }
  if (action.type == MOVE_DOWN) {
    return {
      ...state,
    };
  }
  if (action.type == MOVE_LEFT) {
    return {
      ...state,
    };
  }
  if (action.type == MOVE_RIGHT) {
    return {
      ...state,
    };
  }
  return state;
};

export const game = (state = initialState.game, action) => {
  if (action.type == ADD_NUMBER) {
    return {
      ...state,
    };
  }
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
  if (action.type == RANDOM_NUMBER) {
    var randomN = 2 * (Math.floor(Math.random() * 2) + 1);
    return {
      ...state,
      numberAdded: randomN,
    };
  }
  return state;
};

export const appReducer = combineReducers({ board, game });

export const AddNumber = () => {
  var c = 0;
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if (mat[i][j] == 0) {
        c++;
      }
    }
  }
  return <div></div>;
};
